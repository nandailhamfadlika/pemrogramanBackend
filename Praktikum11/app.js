// app.js
const express = require("express");
const router = require("./routes/api");

const app = express();


app.use(express.json());

// Gunakan rute dari file api.js
app.use(router);

// Jalankan server di port 3000
app.listen(3000, () => {
  console.log("Server berjalan di http://localhost:3000");
});
