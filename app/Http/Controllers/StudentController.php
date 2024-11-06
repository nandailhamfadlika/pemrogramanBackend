<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{
    public function index()
    {
        $students = Student::all();
        if ($students->isEmpty()) {
            return response()->json([
                'message' => 'Data mahasiswa tidak tersedia',
                'data' => []
            ], 200);
        }

        return response()->json([
            'message' => 'Berhasil akses data',
            'data' => $students
        ], 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nama' => 'required|string',
            'nim' => 'required|numeric|unique:students',
            'email' => 'required|email|unique:students',
            'jurusan' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Data tidak valid',
                'errors' => $validator->errors()
            ], 400);
        }

        $student = Student::create($request->all());

        return response()->json([
            'message' => 'Data berhasil ditambah',
            'data' => $student
        ], 201);
    }

    public function update(Request $request, $id)
    {
        $student = Student::find($id);
        if (!$student) {
            return response()->json([
                'message' => 'Data tidak ditemukan'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'nama' => 'sometimes|required|string',
            'nim' => 'sometimes|required|numeric|unique:students,nim,' . $id,
            'email' => 'sometimes|required|email|unique:students,email,' . $id,
            'jurusan' => 'sometimes|required|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Data tidak valid',
                'errors' => $validator->errors()
            ], 400);
        }

        $student->update($request->only(['nama', 'nim', 'email', 'jurusan']));

        return response()->json([
            'message' => 'Data berhasil diupdate',
            'data' => $student
        ], 200);
    }

    public function destroy($id)
    {
        $student = Student::find($id);
        if (!$student) {
            return response()->json([
                'message' => 'Data tidak ditemukan'
            ], 404);
        }

        $student->delete();

        return response()->json([
            'message' => 'Data berhasil dihapus'
        ], 200);
    }
}
