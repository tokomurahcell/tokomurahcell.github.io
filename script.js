let keranjang = [];
const keranjangLink = document.getElementById('keranjang-link');
const keranjangList = document.getElementById('keranjang-list');
const totalHarga = document.getElementById('total-harga');

function tambahKeKeranjang(produk) {
  // Menambahkan produk ke keranjang
  if (produk === 'produk1') {
    keranjang.push({ nama: 'Produk 1', harga: 100000 });
  } else if (produk === 'produk2') {
    keranjang.push({ nama: 'Produk 2', harga: 150000 });
  }

  // Update tampilan keranjang
  updateKeranjang();
}

function updateKeranjang() {
  // Menampilkan produk dalam keranjang
  keranjangList.innerHTML = '';
  let total = 0;
  keranjang.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nama} - Rp ${item.harga}`;
    keranjangList.appendChild(li);
    total += item.harga;
  });

  // Update total harga
  totalHarga.textContent = `Rp ${total}`;
  keranjangLink.textContent = `Keranjang (${keranjang.length})`;
}
