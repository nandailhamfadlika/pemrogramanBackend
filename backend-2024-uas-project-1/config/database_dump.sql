-- Create database
CREATE DATABASE IF NOT EXISTS alumni_db;

-- Use DB
USE alumni_db;

-- Create table alumni
CREATE TABLE IF NOT EXISTS alumni (
    id INT AUTO_INCREMENT PRIMARY KEY,          
    name VARCHAR(255) NOT NULL,                 -- name Alumni
    phone VARCHAR(20) NOT NULL,                 -- no telp Alumni
    address TEXT NOT NULL,                      -- Alamat Alumni
    graduationYear INT NOT NULL,                -- tahun kelulusan
    status ENUM('fresh-graduate', 'employed', 'unemployed') NOT NULL, -- Alumni employment status
    companyName VARCHAR(255),                   -- Nama perusahaan (if employed)
    position VARCHAR(255)                       -- Posisi di perusahaa (if employed)
);

-- Sample data
INSERT INTO alumni (name, phone, address, graduationYear, status, companyName, position)
VALUES
('nanda Ilham', '08123456789', 'bogor', 2024, 'fresh-graduate', NULL, NULL),
('Mikail Musa', '08987654321', 'Depok baru', 2023, 'employed', 'Tech Corp', 'Software Engineer'),
('Iriani', '08211223344', 'cilandak', 2023, 'unemployed', NULL, NULL);
