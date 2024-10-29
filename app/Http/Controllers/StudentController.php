<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    //
    public function index(){
        //melihat data
        //query builder
        $student = Student::all();
        $data = [
            'message' => 'berhasil akses data',
            'data' => $student
        ];
        return response()->json($data, 200);
    }

    public function store(Request $request){
        $input = [
            'nama'=> $request->nama,
            'nim'=> $request->nim,
            'email'=> $request->email,
            'jurusan'=> $request->jurusan
        ];
        $student = Student::create($input);
        $data = [
            'message' => 'Data Berhasil Ditambah',
            'data' => $student
        ];
        return response()->json($data,200);
    }
    public function update(Request $request, $id) {
        $student = Student::find($id);
    
        if (!$student) {
            return response()->json([
                'message' => 'Data tidak ditemukan',
            ], 404);
        }
    
        $student->update([
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan,
        ]);
    
        return response()->json([
            'message' => 'Data Berhasil Diupdate',
            'data' => $student
        ], 200);
    }
    
    public function destroy($id) {
        $student = Student::find($id);
        if (!$student) {
            return response()->json([
                'message' => 'Data tidak ditemukan',
            ], 404);
        }
        $student->delete();
    
        return response()->json([
            'message' => 'Data Berhasil Dihapus'
        ], 200);
    }
    
}