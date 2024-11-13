<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    // Mendapatkan semua data karyawan
    public function index()
    {
        $employees = Employee::all();
        
        if ($employees->isEmpty()) {
            return response()->json([
                'message' => 'Data is empty',
            ], 200);
        }

        return response()->json([
            'message' => 'Get All Resource',
            'data' => $employees,
        ], 200);
    }

    // Menambahkan data karyawan baru
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'gender' => 'required|in:M,F',
            'phone' => 'required|string',
            'address' => 'required|string',
            'email' => 'required|email|unique:employees,email',
            'status' => 'required|string',
            'hired_on' => 'required|date',
        ]);

        $employee = Employee::create($validatedData);

        return response()->json([
            'message' => 'Resource is added successfully',
            'data' => $employee,
        ], 201);
    }

    // Mendapatkan data karyawan berdasarkan ID
    public function show($id)
    {
        $employee = Employee::find($id);

        if ($employee) {
            return response()->json([
                'message' => 'Get Detail Resource',
                'data' => $employee,
            ], 200);
        } else {
            return response()->json([
                'message' => 'Resource not found',
            ], 404);
        }
    }

    // Mengupdate data karyawan berdasarkan ID
    public function update(Request $request, $id)
    {
        $employee = Employee::find($id);

        if ($employee) {
            $validatedData = $request->validate([
                'name' => 'string',
                'gender' => 'in:M,F',
                'phone' => 'string',
                'address' => 'string',
                'email' => 'email|unique:employees,email,' . $id,
                'status' => 'string',
                'hired_on' => 'date',
            ]);

            $employee->update($validatedData);

            return response()->json([
                'message' => 'Resource is updated successfully',
                'data' => $employee,
            ], 200);
        } else {
            return response()->json([
                'message' => 'Resource not found',
            ], 404);
        }
    }

    // Menghapus data karyawan berdasarkan ID
    public function destroy($id)
    {
        $employee = Employee::find($id);

        if ($employee) {
            $employee->delete();
            return response()->json([
                'message' => 'Resource is deleted successfully',
            ], 200);
        } else {
            return response()->json([
                'message' => 'Resource not found',
            ], 404);
        }
    }

    // Mencari data karyawan berdasarkan nama
    public function search($name)
    {
        $employees = Employee::where('name', 'LIKE', '%' . $name . '%')->get();

        if ($employees->isEmpty()) {
            return response()->json([
                'message' => 'Resource not found',
            ], 404);
        }

        return response()->json([
            'message' => 'Get searched resource',
            'data' => $employees,
        ], 200);
    }

    // Mendapatkan data karyawan yang aktif
    public function active()
    {
        $employees = Employee::where('status', 'active')->get();

        return response()->json([
            'message' => 'Get active resource',
            'total' => $employees->count(),
            'data' => $employees,
        ], 200);
    }

    // Mendapatkan data karyawan yang tidak aktif
    public function inactive()
    {
        $employees = Employee::where('status', 'inactive')->get();

        return response()->json([
            'message' => 'Get inactive resource',
            'total' => $employees->count(),
            'data' => $employees,
        ], 200);
    }

    // Mendapatkan data karyawan yang diterminated
    public function terminated()
    {
        $employees = Employee::where('status', 'terminated')->get();

        return response()->json([
            'message' => 'Get terminated resource',
            'total' => $employees->count(),
            'data' => $employees,
        ], 200);
    }
}
