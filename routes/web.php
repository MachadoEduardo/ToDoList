<?php

use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('app', [TaskController::class, 'index'])->name('dashboard');
    Route::post('tasks', [TaskController::class, 'store'])->name('tasks.store');
});

require __DIR__.'/settings.php';
