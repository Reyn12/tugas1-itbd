// Array of group members
const kelompok = [
  { nim: "10122051", nama: "Tonni R. M." },
  { nim: "10122058", nama: "Defvin" },
  { nim: "10122049", nama: "Fadel Anugerah Gusti" },
  { nim: "10122060", nama: "Adly Fadhil Mahardika" },
  { nim: "10122071", nama: "Afie" },
];

// Function to display group members in the table
function displayKelompok() {
  const table = document.getElementById("kelompok-table");
  kelompok.forEach((member) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td class="border px-4 py-2">${member.nim}</td><td class="border px-4 py-2">${member.nama}</td>`;
    table.appendChild(row);
  });
}

// Call the function to display members when page loads
document.addEventListener("DOMContentLoaded", displayKelompok);
