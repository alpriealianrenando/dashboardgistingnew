function fetchData() {
    fetch('https://vps.isi-net.org:3333/get100data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Pastikan bahwa data.result[0] ada sebelum mengakses propertinya
        if (data.result && data.result.length > 0) {
          const result = data.result[0];
  
          // Update tampilan dengan data yang diterima dari server
          console.log(result);
          document.getElementById('sensor_ph').innerText = result.ph;
          document.getElementById('pompa_air').innerText = result.pompaair;
          document.getElementById('pompa_nutrisi').innerText = result.pompanutrisi;
          document.getElementById('lampu_uv').innerText = result.lampuuv;
          document.getElementById('tdssensor').innerText = result.tds;
          document.getElementById('suhuair').innerText = result.suhu_air;
          document.getElementById('windwave').innerText = result.winddirection;
          document.getElementById('windspeed').innerText = result.kecepatan_angin;
          document.getElementById('tekanan_udara').innerText = result.tekanan_udara;
          document.getElementById('suhu_ruangan').innerText = result.suhu;
          document.getElementById('pyrano').innerText = result.pyrano;
          document.getElementById('humidity').innerText = result.humidity;
          document.getElementById('waterflow1').innerText = result.waterflow1;
          document.getElementById('soilmoisture1').innerText = result.soilmoisture1;
          document.getElementById('berat_sensor').innerText = result.berat1;
          document.getElementById('contactless1').innerText = result.infrared1;
          document.getElementById('waterflow2').innerText = result.waterflow2;
          document.getElementById('soilmoisture2').innerText = result.soilmoisture2;
          document.getElementById('sensor_berat2').innerText = result.berat2;
          document.getElementById('infrared_2').innerText = result.infrared2;
          document.getElementById('waterflow3').innerText = result.waterflow3;
          document.getElementById('soilmoisture3').innerText = result.soilmoisture3;
          document.getElementById('sensor_berat3').innerText = result.berat3;
          document.getElementById('infrared_3').innerText = result.infrared3;
          document.getElementById('waterflow4').innerText = result.waterflow4;
          document.getElementById('soilmoisture4').innerText = result.soilmoisture4;
          document.getElementById('sensor_berat4').innerText = result.berat4;
        } else {
          console.error('Error: Invalid data structure received from the server.');
        }
      })
      .catch(error => console.error('Error:', error));
  }




















//     var box = document.getElementById(elementId);

//     if (value < 18 || value > 36) {
//         box.parentElement.style.backgroundColor = '#FF0000'; // Merah
//     } else if (value >= 18 && value < 25) {
//         box.parentElement.style.backgroundColor = '#FFFF00'; // Kuning
//     } else if (value >= 25 && value < 32) {
//         box.parentElement.style.backgroundColor = '#00FF00'; // Hijau
//     } else if (value >= 32 && value <= 36) {
//         box.parentElement.style.backgroundColor = '#FFFF00'; // Kuning
//     } else {
//         // Warna default jika tidak ada kriteria yang cocok
//         box.parentElement.style.backgroundColor = '#FFFFFF'; // Putih
//     }

//     // Menetapkan nilai di dalam elemen
//     box.innerHTML = value.toFixed(2);
// }
// function updateBox(elementId, value, range) {
//     var box = document.getElementById(elementId);

//     if (value < range.min || value > range.max) {
//         box.parentElement.style.backgroundColor = '#16FF00';
//         box.innerHTML = value.toFixed(2);
//     } else {
//         box.parentElement.style.backgroundColor = '#16FF00';
//         box.innerHTML = value.toFixed(2);
//     }
// }
// // LAMPU UV WARNA
function updateLampUVBox(elementId, value) {
    var box = document.getElementById(elementId);

    var status = (value === 1) ? 'Aktif' : 'Tidak Aktif';
    var backgroundColor = (value === 1) ? '#007acc' : '#ffffff';

    box.parentElement.style.backgroundColor = backgroundColor;
    box.innerHTML = status;
}

// POMPA AIR
// function updatePompaAirBox(elementId, value) {
//     var box = document.getElementById(elementId);

//     var status = (value === 1) ? 'Aktif' : 'Tidak Aktif';
//     var backgroundColor = (value === 1) ? '#007acc' : '#ffffff';

//     box.parentElement.style.backgroundColor = backgroundColor;
//     box.innerHTML = status;
// }
// // POMPA NUTRISI
// function updatePompaNutrisiBox(elementId, value) {
//     var box = document.getElementById(elementId);

//     var status = (value === 1) ? 'Aktif' : 'Tidak Aktif';
//     var backgroundColor = (value === 1) ? '#007acc' : '#ffffff';

//     box.parentElement.style.backgroundColor = backgroundColor;
//     box.innerHTML = status;
// }

// ARaH Mata angin
// Fungsi untuk mengubah nilai arah angin menjadi nama arah mata angin dan angka
function angkaKeArahMataAngin(angka) {
    let namaArah = "";
    
    if ((angka >= 348.75 && angka <= 11.25) || (angka >= 337.5 && angka <= 360)) {
        namaArah = "N";
    } else if (angka >= 11.25 && angka < 33.75) {
        namaArah = "NNE";
    } else if (angka >= 33.75 && angka < 56.25) {
        namaArah = "NE";
    } else if (angka >= 56.25 && angka < 78.75) {
        namaArah = "ENE";
    } else if (angka >= 78.75 && angka < 101.25) {
        namaArah = "E";
    } else if (angka >= 101.25 && angka < 123.75) {
        namaArah = "ESE";
    } else if (angka >= 123.75 && angka < 146.25) {
        namaArah = "SE";
    } else if (angka >= 146.25 && angka < 168.75) {
        namaArah = "SSE";
    } else if (angka >= 168.75 && angka < 191.25) {
        namaArah = "S";
    } else if (angka >= 191.25 && angka < 213.75) {
        namaArah = "SSW";
    } else if (angka >= 213.75 && angka < 236.25) {
        namaArah = "SW";
    } else if (angka >= 236.25 && angka < 258.75) {
        namaArah = "WSW";
    } else if (angka >= 258.75 && angka < 281.25) {
        namaArah = "W";
    } else if (angka >= 281.25 && angka < 303.75) {
        namaArah = "WNW";
    } else if (angka >= 303.75 && angka < 326.25) {
        namaArah = "NW";
    } else if (angka >= 326.25 && angka < 348.75) {
        namaArah = "NNW";
    } else {
        namaArah = "Invalid";
    }

    return { angka: angka.toFixed(2), nama: namaArah };
}

// Fungsi untuk mendapatkan data arah angin secara acak (contoh sederhana)
function getDataRealtime() {
    // Ganti ini dengan logika atau panggilan API sesuai kebutuhan
    return Math.random() * 360; // Menghasilkan angka acak antara 0 dan 360
}

// Fungsi untuk memperbarui nilai arah angin dan menampilkan hasilnya
function updateWindDirection() {
    var nilaiArahAngin = getDataRealtime(); // Dapatkan data arah angin dari sumber data waktu nyata
    var hasilKonversi = angkaKeArahMataAngin(nilaiArahAngin);
    document.getElementById('windwave').innerText = ` ${hasilKonversi.angka}°, ${hasilKonversi.nama}`;
}

// Panggil updateWindDirection setiap 1 detik (1000 milidetik)
setInterval(updateWindDirection, 30000);