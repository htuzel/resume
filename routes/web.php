<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/{resume}', function () {
    return view('welcome');
});

Route::get('/{services}', function () {
    return view('welcome');
});

Route::get('/{blog}', function () {
    return view('welcome');
});

Route::get('/{contact}', function () {
    return view('welcome');
});

Route::post('contact-form', 'SendMailController@html_email')->name('profile');

