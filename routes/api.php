<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeeController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Mendapatkan semua data karyawan
Route::get('employees', [EmployeeController::class, 'index']);                  

// Menambahkan data karyawan baru
Route::post('employees', [EmployeeController::class, 'store']);                 

// Mendapatkan data detail karyawan berdasarkan ID
Route::get('employees/{id}', [EmployeeController::class, 'show']);              

// Mengupdate data karyawan berdasarkan ID
Route::put('employees/{id}', [EmployeeController::class, 'update']);            

// Menghapus data karyawan berdasarkan ID
Route::delete('employees/{id}', [EmployeeController::class, 'destroy']);        

// Mencari data karyawan berdasarkan nama
Route::get('employees/search/{name}', [EmployeeController::class, 'search']);   

// Mendapatkan data karyawan yang berstatus aktif
Route::get('employees/status/active', [EmployeeController::class, 'active']);   

// Mendapatkan data karyawan yang berstatus tidak aktif
Route::get('employees/status/inactive', [EmployeeController::class, 'inactive']); 

// Mendapatkan data karyawan yang berstatus dipecat
Route::get('employees/status/terminated', [EmployeeController::class, 'terminated']); 

