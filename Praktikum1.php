<?php
# class Animal
class Animal {
    # property animals
    public $animal = ['kucing','anjing','tikus','hamster'];
    public function __construct($data) {
       $this->animal = $data;
    }

    # method index - menampilkan data animals
    public function index() {
        foreach ($this->animal as $animals) {
            echo $animals . "<br>";
        }
    }

    # method store - menambahkan hewan baru
    # parameter: hewan baru
    public function store($data) {
        $this->animal[] = $data;
        echo "$data berhasil ditambahkan.<br>";
    }

    # method update - memperbarui data
    # parameter: index dan hewan baru
    public function update($index, $data) {
        if (isset($this->animal[$index])) {
            $dataLama = $this->animal[$index];
            $this->animal[$index] = $data;
            echo "$dataLama berhasil diperbarui menjadi $data.<br>";
        } else {
            echo "Data tidak ditemukan pada index $index.<br>";
        }
    }

    # method destroy - menghapus hewan
    # parameter: index
    public function destroy($index) {
        if (isset($this->animal[$index])) {
            $deletedAnimal = $this->animal[$index];
            unset($this->animal[$index]);
            echo "$deletedAnimal berhasil dihapus.<br>";
        } else {
            echo "Data tidak ditemukan pada index $index.<br>";
        }
    }
}

# Inisialisasi objek Animal
$animal = new Animal(['kucing', 'anjing', 'tikus', 'hamster']);

# Memanggil fungsi index untuk menampilkan seluruh hewan
echo 'Index – Menampilkan seluruh hewan:<br>';
$animal->index();
echo '<br>';

# Menambahkan Hewan baru menggunakan fungsi store
$animal->store('kelinci'); 
$animal->index();
echo '<br>';

# Update Hewan (contoh mengubah kucing menjadi buaya)
$animal->update(0, 'buaya'); 
$animal->index();
echo '<br>';

# Menghapus Hewan (contoh menghapus hewan Hamster) 
$animal->destroy(2);
$animal->index();
echo '<br>';

?>
