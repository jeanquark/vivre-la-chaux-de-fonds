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


Route::get('/activities', 'ActivitiesController@getActivities');
Route::get('/activities/{id}', 'ActivitiesController@getActivityById');
Route::get('/activities/slug/{slug}', 'ActivitiesController@getActivityBySlug');

Route::get('/sponsors', 'SponsorsController@getSponsors');
Route::get('/sponsors/{id}', 'SponsorsController@getSponsorById');
Route::get('/sponsors/slug/{slug}', 'SponsorsController@getSponsorBySlug');

Route::get('/pages', 'PagesController@getPages');
Route::get('/pages/{id}', 'PagesController@getPageById');
Route::get('/pages/slug/{slug}', 'PagesController@getPageBySlug');

Route::get('/sections', 'SectionsController@getSections');
Route::get('/sections/{id}', 'SectionsController@getSectionById');
Route::get('/sections/page/{pageId}', 'SectionsController@getSectionsByPageId');

Route::post('/send-contact-form', 'ContactMessageController@send');
Route::get('/list-all-images', 'FilesController@getImages');
Route::get('/list-all-documents', 'FilesController@getDocuments');




Route::group(['middleware' => 'role:admin'], function () {
    // Users
    Route::get('/users', 'UsersController@getUsers');
    Route::post('/users', 'UsersController@createUser');
    Route::get('/users/{id}', 'UsersController@getUser');
    Route::put('/users/{id}', 'UsersController@updateUser');
    Route::delete('/users/{id}', 'UsersController@deleteUser');

    // Activities
    Route::post('/activities', 'ActivitiesController@createActivity');
    Route::put('/activities/{id}', 'ActivitiesController@updateActivity');
    Route::delete('/activities/{id}', 'ActivitiesController@deleteActivity');

    // Sponsors
    Route::post('/sponsors', 'SponsorsController@createSponsor');
    Route::put('/sponsors/{id}', 'SponsorsController@updateSponsor');
    Route::delete('/sponsors/{id}', 'SponsorsController@deleteSponsor');

    // Pages
    
    Route::post('/pages', 'PagesController@createPage');
    
    Route::put('/pages/{id}', 'PagesController@updatePage');
    Route::delete('/pages/{id}', 'PagesController@deletePage');
    Route::post('/pages/upload-image', 'FilesController@uploadImage');
    Route::post('/pages/upload-document', 'FilesController@uploadDocument');
});