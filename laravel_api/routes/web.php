<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SpotifyController;

Route::get('/spotify/login', [SpotifyController::class, 'login'])->name('spotify.login');
Route::get('/spotify/callback', [SpotifyController::class, 'callback'])->name('spotify.callback');
Route::get('/spotify/favorites', [SpotifyController::class, 'getFavorites'])->name('spotify.favorites');

// Route::get('/', function () {
//     return view('welcome');
// });
