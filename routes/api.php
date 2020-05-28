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

Route::get('/activities/{params?}', 'ActivitiesController@getActivities');
// Route::post('/activities', 'ActivitiesController@getActivities');
// Route::get('/activities/{id}', 'ActivitiesController@getActivityById');
// Route::get('/activities/slug/{slug}', 'ActivitiesController@getActivityBySlug');

Route::get('/sponsors/{params?}', 'SponsorsController@getSponsors');
// Route::get('/sponsors', 'SponsorsController@getSponsors');
// Route::get('/sponsors/{id}', 'SponsorsController@getSponsorById');
// Route::get('/sponsors/slug/{slug}', 'SponsorsController@getSponsorBySlug');

Route::get('/pages', 'PagesController@getPages');
Route::get('/pages/{id}', 'PagesController@getPageById');
Route::get('/pages/slug/{slug}', 'PagesController@getPageBySlug');

Route::get('/sections', 'SectionsController@getSections');
Route::get('/sections/{id}', 'SectionsController@getSectionById');
Route::get('/sections/slug/{slugId}', 'SectionsController@getSectionBySlug');
Route::get('/sections/page/{pageId}', 'SectionsController@getSectionsByPageId');

Route::post('/send-contact-form', 'ContactMessageController@send');

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

    // Sections
    Route::post('/sections', 'SectionsController@createSection');
    Route::put('/sections/{id}', 'SectionsController@updateSection');
    Route::delete('/sections/{id}', 'SectionsController@deleteSection');
    Route::post('/sections/upload-image', 'FilesController@uploadImage');
    Route::post('/sections/upload-document', 'FilesController@uploadDocument');

    // Images
    Route::get('/images', 'ImagesController@getImages');
    Route::post('/images', 'ImagesController@uploadImage');
    Route::post('/images/delete', 'ImagesController@deleteImage');
    Route::post('/images/folder', 'ImagesController@createFolder');
    Route::post('/images/folder/images', 'ImagesController@getImagesByFolder');
    Route::post('/images/folder/delete', 'ImagesController@deleteFolder');

    // Documents
    Route::get('/documents', 'DocumentsController@getDocuments');
    Route::post('/documents', 'DocumentsController@uploadDocument');
    Route::post('/documents/delete', 'DocumentsController@deleteDocument');
    Route::post('/documents/folder', 'DocumentsController@createFolder');
    Route::post('/documents/folder/documents', 'DocumentsController@getDocumentsByFolder');
    Route::post('/documents/folder/delete', 'DocumentsController@deleteFolder');
});
