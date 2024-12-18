// const Persiapan = () => {
//     // setTimeout(function () {
//         console.log("Mempersiapkan Bahan ...");
//     // }, 3000);
// };

// const rebusAir = () => {
//     // setTimeout(function () {
//         console.log("Merebus Air ...");
//     // }, 7000);
// };

// const masak = () => {
//     // setTimeout(function () {
//         console.log("Memasak Mie ...");
//         console.log("Selesai");
//     // }, 5000);
// };

// module.exports = {Persiapan,rebusAir,masak};




const persiapan = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Menyiapkan Bahan ...");
      }, 3000);
    });
  };
  
  const rebusAir = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Merebus Air ...");
      }, 7000);
    });
  };
  
  const masak = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Masak Mie ...");
      }, 5000);
    });
  };
  

  const main = () => {
    persiapan()
      .then((res) => {
        console.log(res);
        return rebusAir();
      })
      .then((res) => {
        console.log(res);
        return masak();
      })
      .then((res) => {
        console.log(res);
      });
  };
  
  main();
  
