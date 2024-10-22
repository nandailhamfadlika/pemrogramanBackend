<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    private $animals;

    public function __construct()
    {
        // Predefined animals list
        $this->animals = ['kucing', 'anjing', 'tikus', 'hamster'];
    }

    // Index method to display animals
    public function index()
    {
        return response()->json($this->animals);
    }

    // Store method to add a new animal
    public function store(Request $request)
    {
        $animal = $request->input('animal');
        $this->animals[] = $animal;

        return response()->json([
            'message' => "$animal berhasil ditambahkan.",
            'data' => $this->animals
        ]);
    }

    // Update method to modify an existing animal
    public function update(Request $request, $index)
    {
        if (isset($this->animals[$index])) {
            $oldAnimal = $this->animals[$index];
            $this->animals[$index] = $request->input('animal');

            return response()->json([
                'message' => "$oldAnimal berhasil diperbarui menjadi " . $this->animals[$index],
                'data' => $this->animals
            ]);
        } else {
            return response()->json(['message' => "Data tidak ditemukan pada index $index."], 404);
        }
    }

    // Destroy method to delete an animal
    public function destroy($index)
    {
        if (isset($this->animals[$index])) {
            $deletedAnimal = $this->animals[$index];
            unset($this->animals[$index]);

            return response()->json([
                'message' => "$deletedAnimal berhasil dihapus.",
                'data' => array_values($this->animals) // re-index the array
            ]);
        } else {
            return response()->json(['message' => "Data tidak ditemukan pada index $index."], 404);
        }
    }
}
