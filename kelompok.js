// Array of group members
const kelompok = [
  { nim: "10122002", nama: "Muhammad Renaldi M" },
  { nim: "10122007", nama: "Mochammad Rizky F" },
  { nim: "10122028", nama: "Muhammad Hilmi F" },
  { nim: "10122020", nama: "Krisna A" },
  { nim: "10122038", nama: "Hamid Abdul Aziz" },
];

// Title for the page
const title =
  "Tugas Infrastruktur Teknologi Big Data <br> DATA PRODUKSI BAN PT GAJAH TUNGGAL Tbk Tahun 2024";

// Function to display group members in the table
function displayKelompok() {
  const table = document.getElementById("kelompok-table");
  kelompok.forEach((member) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td class="border px-4 py-2">${member.nim}</td><td class="border px-4 py-2">${member.nama}</td>`;
    table.appendChild(row);
  });
}

// Function to display title
function displayTitle() {
  const titleElement = document.getElementById("title");
  titleElement.innerHTML = title;
}

// Call the functions to display title and members when page loads
document.addEventListener("DOMContentLoaded", () => {
  displayTitle();
  displayKelompok();
});
