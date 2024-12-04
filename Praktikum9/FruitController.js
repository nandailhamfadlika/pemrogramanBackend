const fruits = require('./fruits');

const FruitController = {
    index: () => {
        console.log("Menampilkan Buah");
        fruits.forEach((fruit, index) => console.log(`${index}: ${fruit}`));
    },

    store: (fruitName) => {
        console.log(`Menambahkan buah ${fruitName}`);
        fruits.push(fruitName);
        FruitController.index(); // Panggil langsung dari objek
    },

    update: (index, newFruitName) => {
        console.log(`Method update - Update data jeruk (data ${index}) menjadi ${newFruitName}`);
        if (fruits[index]) {
            fruits[index] = newFruitName;
            FruitController.index(); // Panggil langsung dari objek
        } else {
            console.log("Index tidak ditemukan!");
        }
    },

    destroy: (index) => {
        console.log(`Method destroy - Menghapus data ${index}`);
        if (fruits[index]) {
            fruits.splice(index, 1);
            FruitController.index();
        } else {
            console.log("Index tidak ditemukan!");
        }
    },
};

module.exports = FruitController;
