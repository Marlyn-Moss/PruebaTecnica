<?php

use App\Http\Controllers\Api\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SpotifyController;

// Open Routes
Route::post("register", [ApiController::class, "register"]);
Route::post("login", [ApiController::class, "login"]);

// Protected Routes
Route::group([
    "middleware" => ["auth:api"]
], function(){

    Route::get("profile", [ApiController::class, "profile"]);
    Route::get("refresh-token", [ApiController::class, "refreshToken"]);
    Route::get("logout", [ApiController::class, "logout"]);
});

//API SPOTIFY


Route::get('/app/spotify', [SpotifyController::class, 'login']);
Route::get('/app/spotify', [SpotifyController::class, 'callback']);

