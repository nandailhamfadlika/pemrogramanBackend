/**
 * Fungsi untuk download file dengan Promise
 * @returns {Promise<string>} - Mengembalikan nama file yang didownload
 */
function download() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = "windows-10.exe";
        resolve(result);
      }, 3000);
    });
  }
  
  /**
   * Fungsi untuk menampilkan hasil download
   * @param {string} result - Nama file yang didownload
   */
  function showDownload(result) {
    console.log("Download selesai");
    console.log("Hasil Download: " + result);
  }
  
  // Menggunakan async/await
  async function main() {
    const result = await download();
    showDownload(result);
  }
  
  main();
  