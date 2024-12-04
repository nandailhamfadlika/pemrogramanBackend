// Import semua method FruitController dan variable fruits
const FruitController = require('./FruitController');
const fruits = require('./fruits');

const { index, store, update, destroy } = FruitController;

function main() {
    // create atau store data buah
    store("Jeruk");
    store("Apel");
    store("Durian");

    // Update data dari jeruk ke kelapa
    update(0, "Kelapa");

    // Hapus data kelapa
    destroy(0);
}

main();
