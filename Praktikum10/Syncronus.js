const { Persiapan, rebusAir, masak } = require("");

const main = () => {
        setTimeout(() => {
        Persiapan();
        setTimeout(() => {
        rebusAir();
        setTimeout(() => {
        masak();
}, 5000);
}, 7000);
}, 3000); 
};

main();