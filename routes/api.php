<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'auth:api'], function () {
    Route::post('logout', 'Auth\LoginController@logout');

    // Route::get('/user', function (Request $request) {
    //     return $request->user();
    // });
    Route::get('/user', 'Settings\ProfileController@getAuthUser');

    Route::patch('settings/profile', 'Settings\ProfileController@update');
    Route::patch('settings/password', 'Settings\PasswordController@update');
});

Route::group(['middleware' => 'guest:api'], function () {
    Route::post('login', 'Auth\LoginController@login');
    Route::post('register', 'Auth\RegisterController@register');

    Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
    Route::post('password/reset', 'Auth\ResetPasswordController@reset');

    Route::post('email/verify/{user}', 'Auth\VerificationController@verify')->name('verification.verify');
    Route::post('email/resend', 'Auth\VerificationController@resend');

    Route::post('oauth/{driver}', 'Auth\OAuthController@redirectToProvider');
    Route::get('oauth/{driver}/callback', 'Auth\OAuthController@handleProviderCallback')->name('oauth.callback');
});

// Tables Routes
Route::get('/tables', 'TablesController@getTables')->middleware('role:admin');
Route::get('/tables/{id}', 'TablesController@getTableById');


// Tables Plan Routes
// Route::get('/plan-tables', 'TablePlanController@index');
Route::get('/plan-tables', 'TablePlanController@getPlanTables');
Route::get('/plan-tables/{svgId}', 'TablePlanController@getTableBySvgId');
Route::put('/plan-tables', 'TablePlanController@update');
Route::delete('/plan-tables/{svgId}', 'TablePlanController@delete');

// Route::post('/tables', 'TablePlanController@addTable');
// Route::post('/update-table-plan2', 'TablePlanController@update2');

// Seats Plan Routes
Route::get('plan-seats', 'SeatPlanController@getSeats');
Route::get('plan-seats/{userId}', 'SeatPlanController@getUserSeats');
// Route::get('plan-seats-by-table/{userId}', 'SeatPlanController@getUserSeats');

// Seat Reservation Routes
Route::post('/reserve-a-seat', 'SeatReservationController@reserveOneSeat');

Route::get('/activities', 'ActivitiesController@getActivities');
Route::post('/activities', 'ActivitiesController@addActivity');