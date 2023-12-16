function fetchData() {
  fetch('https://vps.isi-net.org:3333/get100data')
    .then(response => {
      if (!response.ok) {
        throw new Error('HTTP error! Status: ${response.status}');
      }
      return response.json();
    })
    .then(data => {
      // Pastikan bahwa data.result[0] ada sebelum mengakses propertinya
      if (data.result && data.result.length > 0) {
        const result = data.result[0];

        // Update tampilan dengan data yang diterima dari server
        console.log(result);
        document.getElementById('sensor_ph').innerText = `pH ${result.ph}`;
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
        document.getElementById('sensor_svp').innerText = result.svp;
        document.getElementById('sensor_avp').innerText = result.avp;
        document.getElementById('sensor_vpd').innerText = result.vpd;
      } else {
        console.error('Error: Invalid data structure received from the server.');
      }
    })
    .catch(error => console.error('Error:', error));
}
  // Panggil fetchData untuk pertama kali

// Ambil elemen p dengan id 'phBox'
var phBox = document.getElementById('sensor_ph');
var tdsBox = document.getElementById('tdssensor');
var suhuBox = document.getElementById('suhuair');
var kecepatanBox = document.getElementById('windspeed');
var tekananBox = document.getElementById('tekanan_udara');
var ruangBox = document.getElementById('suhu_ruangan');
var pyranoBox = document.getElementById('pyrano');
var humidityBox = document.getElementById('humidity');
var waterflow1Box = document.getElementById('waterflow1');
var waterflow2Box = document.getElementById('waterflow2');
var waterflow3Box = document.getElementById('waterflow3');
var waterflow4Box = document.getElementById('waterflow4');
var soilmoisture1Box = document.getElementById('soilmoisture1');
var soilmoisture2Box = document.getElementById('soilmoisture2');
var soilmoisture3Box = document.getElementById('soilmoisture3');
var soilmoisture4Box = document.getElementById('soilmoisture4');
var berat1Box = document.getElementById('berat_sensor');
var berat2Box = document.getElementById('sensor_berat2');
var berat3Box = document.getElementById('sensor_berat3');
var berat4Box = document.getElementById('sensor_berat4');
var infrared1Box = document.getElementById('contactless1');
var infrared2Box = document.getElementById('infrared_2');
var infrared3Box = document.getElementById('infrared_3');
var svpBox = document.getElementById('sensor_svp');
var avpBox = document.getElementById('sensor_avp');
var vpdBox = document.getElementById('sensor_vpd');


fetchData();
// Fungsi untuk mengubah warna kotak dan teks berdasarkan nilai pH
fetch(`https://vps.isi-net.org:3333/get100data`)
    .then(response => response.json())
    .then(data => {
        // Ambil nilai pH terakhir dari data
        var lastPhValue = data.result[0].ph;
        var lasttdsValue = data.result[0].tds;
        var lastsuhuValue = data.result[0].suhu_air;
        var lastkecepatanValue = data.result[0].kecepatan_angin;
        var lasttekananValue = data.result[0].tekanan_udara;
        var lastruangValue = data.result[0].suhu;
        var lastpyranoValue = data.result[0].pyrano;
        var lasthumidityValue = data.result[0].humidity;
        var lastwaterflow1Value = data.result[0].waterflow1;
        var lastwaterflow2Value = data.result[0].waterflow2;
        var lastwaterflow3Value = data.result[0].waterflow3;
        var lastwaterflow4Value = data.result[0].waterflow4;
        var lastsoilmoisture1Value = data.result[0].soilmoisture1;
        var lastsoilmoisture2Value = data.result[0].soilmoisture2;
        var lastsoilmoisture3Value = data.result[0].soilmoisture3;
        var lastsoilmoisture4Value = data.result[0].soilmoisture4;
        var lastberat1Value = data.result[0].berat1;
        var lastberat2Value = data.result[0].berat2;
        var lastberat3Value = data.result[0].berat3;
        var lastberat4Value = data.result[0].berat4;
        var lastinfrared1Value = data.result[0].infrared1;
        var lastinfrared2Value = data.result[0].infrared2;
        var lastinfrared3Value = data.result[0].infrared3;
        var lastsvpValue = data.result[0].svp;
        var lastavpValue = data.result[0].avp;
        var lastvpdValue = data.result[0].vpd;
        updatePhBox(lastPhValue, phBox);
        updateTdsBox(lasttdsValue, tdsBox);
        updatesuhuBox(lastsuhuValue, suhuBox);
        updatekecepatanBox(lastkecepatanValue, kecepatanBox);
        updatetekananBox(lasttekananValue, tekananBox);
        updateruangBox(lastruangValue, ruangBox);
        updatepyranoBox(lastpyranoValue, pyranoBox);
        updatehumidityBox(lasthumidityValue, humidityBox);
        updatewaterflow1Box(lastwaterflow1Value, waterflow1Box);
        updatewaterflow2Box(lastwaterflow2Value, waterflow2Box);
        updatewaterflow3Box(lastwaterflow3Value, waterflow3Box);
        updatewaterflow4Box(lastwaterflow4Value, waterflow4Box);
        updatesoilmoisture1Box(lastsoilmoisture1Value, soilmoisture1Box);
        updatesoilmoisture2Box(lastsoilmoisture2Value, soilmoisture2Box);
        updatesoilmoisture3Box(lastsoilmoisture3Value, soilmoisture3Box);
        updatesoilmoisture4Box(lastsoilmoisture4Value, soilmoisture4Box);
        updateberat1Box(lastberat1Value, berat1Box);
        updateberat2Box(lastberat2Value, berat2Box);
        updateberat3Box(lastberat3Value, berat3Box);
        updateberat4Box(lastberat4Value, berat4Box);
        updateinfrared1Box(lastinfrared1Value, infrared1Box);
        updateinfrared2Box(lastinfrared2Value, infrared2Box);
        updateinfrared2Box(lastinfrared3Value, infrared3Box);
        updatesvpBox(lastsvpValue, svpBox);
        updateavpBox(lastavpValue, avpBox);
        updatevpdBox(lastvpdValue, vpdBox);
    })
    .catch(error => console.error('Error:', error));

    function updatePhBox(phValue, box) {
      if (phValue < 0 || phValue > 100) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = phValue.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#16FF00';
        box.innerHTML = phValue.toFixed(2);
      }
    }
    
    function updateTdsBox(tdsValue, box) {
      if (tdsValue < 0 || tdsValue > 100) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = tdsValue.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#16FF00';
        box.innerHTML = tdsValue.toFixed(2);
      }
    }
    function updatesuhuBox(suhuValue, box) {
      if (suhuValue < 0 || suhuValue > 100) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = suhuValue.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#16FF00';
        box.innerHTML = suhuValue.toFixed(2);
      }
    }
    function updatekecepatanBox(kecepatanValue, box) {
      if (kecepatanValue < 0 || kecepatanValue > 100) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = kecepatanValue.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#16FF00';
        box.innerHTML = kecepatanValue.toFixed(2);
      }
    }
    function updatetekananBox(tekananValue, box) {
      if (tekananValue < 0 || tekananValue > 1000000) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = tekananValue.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#16FF00';
        box.innerHTML = tekananValue.toFixed(2);
      }
    }
    function updateruangBox(ruangValue, box) {
      if (ruangValue < 0 || ruangValue > 100) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = ruangValue.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#16FF00';
        box.innerHTML = ruangValue.toFixed(2);
      }
    }
    function updatepyranoBox(pyranoValue, box) {
      if (pyranoValue < 0 || pyranoValue > 100) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = pyranoValue.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#16FF00';
        box.innerHTML = pyranoValue.toFixed(2);
      }
    }
    function updatehumidityBox(humidityValue, box) {
      if (humidityValue < 0 || humidityValue > 100) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = humidityValue.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#16FF00';
        box.innerHTML = humidityValue.toFixed(2);
      }
    }
    function updatewaterflow1Box(waterflow1Value, box) {
      if (waterflow1Value < 0 || waterflow1Value > 100) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = waterflow1Value.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#16FF00';
        box.innerHTML = waterflow1Value.toFixed(2);
      }
    }
    function updatewaterflow2Box(waterflow2Value, box) {
      if (waterflow2Value < 0 || waterflow2Value > 100) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = waterflow2Value.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#16FF00';
        box.innerHTML = waterflow2Value.toFixed(2);
      }
    }
    function updatewaterflow3Box(waterflow3Value, box) {
      if (waterflow3Value < 0 || waterflow3Value > 100) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = waterflow3Value.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#16FF00';
        box.innerHTML = waterflow3Value.toFixed(2);
      }
    }
    function updatewaterflow4Box(waterflow4Value, box) {
      if (waterflow4Value < 0 || waterflow4Value > 100) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = waterflow4BoxValue.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#16FF00';
        box.innerHTML = waterflow4Value.toFixed(2);
      }
    }
    function updatesoilmoisture1Box(soilmoisture1Value, box) {
      if (soilmoisture1Value < 0 || soilmoisture1Value > 100) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = soilmoisture1BoxValue.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#16FF00';
        box.innerHTML = soilmoisture1Value.toFixed(2);
      }
    }
    function updatesoilmoisture2Box(soilmoisture2Value, box) {
      if (soilmoisture2Value < 0 || soilmoisture2Value > 100) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = soilmoisture2BoxValue.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#16FF00';
        box.innerHTML = soilmoisture2Value.toFixed(2);
      }
    }
    function updatesoilmoisture3Box(soilmoisture3Value, box) {
      if (soilmoisture3Value < 0 || soilmoisture3Value > 100) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = soilmoisture3BoxValue.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#16FF00';
        box.innerHTML = soilmoisture3Value.toFixed(2);
      }
    }
    function updatesoilmoisture4Box(soilmoisture4Value, box) {
      if (soilmoisture4Value < 0 || soilmoisture4Value > 100) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = soilmoisture4BoxValue.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#16FF00';
        box.innerHTML = soilmoisture4Value.toFixed(2);
      }
    }
    function updateberat1Box(berat1Value, box) {
      if (berat1Value < 0 || berat1Value > 10000) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = berat1Value.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#16FF00';
        box.innerHTML = berat1Value.toFixed(2);
      }
    }
    function updateberat2Box(berat2Value, box) {
      if (berat2Value < 0 || berat2Value > 10000) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = berat2Value.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#16FF00';
        box.innerHTML = berat2Value.toFixed(2);
      }
    }
    function updateberat3Box(berat3Value, box) {
      if (berat3Value < 0 || berat3Value > 10000) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = berat3Value.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#16FF00';
        box.innerHTML = berat3Value.toFixed(2);
      }
    }
    function updateberat4Box(berat4Value, box) {
      if (berat4Value < 0 || berat4Value > 10000) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = berat4Value.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#16FF00';
        box.innerHTML = berat4Value.toFixed(2);
      }
    }
    function updateinfrared1Box(infrared1Value, box) {
      if (infrared1Value < 0 || infrared1Value > 10000) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = infrared1Value.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#16FF00';
        box.innerHTML = infrared1Value.toFixed(2);
      }
    }
    function updateinfrared2Box(infrared2Value, box) {
      if (infrared2Value < 0 || infrared2Value > 10000) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = infrared2Value.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#16FF00';
        box.innerHTML = infrared2Value.toFixed(2);
      }
    }
    function updateinfrared3Box(infrared3Value, box) {
      if (infrared3Value < 0 || infrared3Value > 10000) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = infrared3Value.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#16FF00';
        box.innerHTML = infrared3Value.toFixed(2);
      }
    }

    function updatesvpBox(svpValue, box) {
      if (svpValue < 0 || svpValue > 10000) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = svpValue.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#16FF00';
        box.innerHTML = svpValue.toFixed(2);
      }
    }
    function updateavpBox(avpValue, box) {
      if (avpValue < 0 || avpValue > 10000) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = avpValue.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#16FF00';
        box.innerHTML = avpValue.toFixed(2);
      }
    }
    function updatevpdBox(vpdValue, box) {
      if (vpdValue < 0 || vpdValue > 10000) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = vpdValue.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#16FF00';
        box.innerHTML = vpdValue.toFixed(2);
      }
    }

  function updatePompaBox(elementId, value) {
    var box = document.getElementById(elementId);
    var status = (value === 1) ? 'Aktif' : 'Tidak Aktif';
    var backgroundColor = (value === 1) ? '#007acc' : '#ffffff';
    box.parentElement.style.backgroundColor = backgroundColor;
    box.innerHTML = status;
  }
  function updatenutrisiBox(elementId, value) {
    var box = document.getElementById(elementId);
    var status = (value === 1) ? 'Aktif' : 'Tidak Aktif';
    var backgroundColor = (value === 1) ? '#007acc' : '#ffffff';
    box.parentElement.style.backgroundColor = backgroundColor;
    box.innerHTML = status;
  }
  function updatelampuuvBox(elementId, value) {
    var box = document.getElementById(elementId);
    var status = (value === 1) ? 'Aktif' : 'Tidak Aktif';
    var backgroundColor = (value === 1) ? '#007acc' : '#ffffff';
    box.parentElement.style.backgroundColor = backgroundColor;
    box.innerHTML = status;
  }

    fetch('https://vps.isi-net.org:3333/get100data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Ambil nilai pompa air terakhir dari data
    var lastPompaValue = data.result[0].pompaair;
    updatePompaBox('pompa_air', lastPompaValue);
  })
  .catch(error => console.error('Error:', error));
// POPMA AIR


function fetchDataAndProcess() {
  fetch('https://vps.isi-net.org:3333/get100data')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      var lastPompaValue = data.result[0].pompaair;
      var lastnutrisiValue = data.result[0].pompanutrisi;
      var lastlampuuvValue = data.result[0].lampuuv;
      updatePompaBox('pompa_air', lastPompaValue);
      updatenutrisiBox('pompa_nutrisi', lastnutrisiValue);
      updatelampuuvBox('lampu_uv', lastlampuuvValue);
    })
    .catch(error => console.error('Error:', error));
}


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
// Panggil fetchDataAndProcess untuk pertama kali
fetchDataAndProcess();
// Panggil fetchDataAndProcess secara berkala setiap 1 menit
setInterval(fetchDataAndProcess, 60000);
// Panggil updateWindDirection setiap 1 detik (1000 milidetik)
setInterval(updateWindDirection, 60000);






// table realtime


//

    // Gunakan Promise.all untuk melakukan fetch request secara bersamaan
    function fetchTableData() {
      fetch('https://vps.isi-net.org:3333/get100data')
          .then(response => response.json())
          .then(dataTopic1 => {
              const dataBody = document.getElementById('data-body');
              dataBody.innerHTML = ''; // Bersihkan tbody sebelum menambahkan data baru
  
              dataTopic1.result.slice(0, 10).forEach((item, index) => {
                  const row = document.createElement('tr');
                  row.innerHTML = `
                      <td>${index + 1}</td>
                      <td>${item.timestamp}</td>
                      <td>${item.ph}</td>
                      <td>${item.tds}</td>
                      <td>${item.suhu_air}</td>
                      <td>${item.winddirection}</td>
                      <td>${item.kecepatan_angin}</td>
                      <td>${item.infrared1}</td>
                      <td>${item.infrared2}</td>
                      <td>${item.infrared3}</td>
                      <td>${item.berat1}</td>
                      <td>${item.berat2}</td>
                      <td>${item.berat3}</td>
                      <td>${item.berat4}</td>
                      <td>${item.waterflow1}</td>
                      <td>${item.waterflow2}</td>
                      <td>${item.waterflow3}</td>
                      <td>${item.waterflow4}</td>
                      <td>${item.soilmoisture1}</td>
                      <td>${item.soilmoisture2}</td>
                      <td>${item.soilmoisture3}</td>
                      <td>${item.soilmoisture4}</td>
                      <td>${item.suhu}</td>
                      <td>${item.tekanan_udara}</td>
                      <td>${item.pyrano}</td>
                      <td>${item.humidity}</td>
                      <td>${item.svp}</td>
                      <td>${item.avp}</td>
                      <td>${item.vpd}</td>
                  `;
  
                  dataBody.appendChild(row);
              });
          })
          .catch(error => console.error('Error:', error));
  }
  
  // Panggil fetchTableData untuk pertama kali
  fetchTableData();
  // Panggil fetchTableData secara berkala setiap 30 detik
  setInterval(fetchTableData, 60000);

// Grafik Suhu PH
fetch('https://vps.isi-net.org:3333/get100data')
  .then(response => response.json())
  .then(data => {
      const result = data.result;
      const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru
      const suhuPH = latestData.map(item => item.ph).reverse();
      const labels = latestData.map(item => item.timestamp).reverse(); // Definisikan labels
      const ctx = document.getElementById('myChart').getContext('2d');
      new Chart(ctx, {
          type: 'line',
          data: {
              labels: labels, // Gunakan labels yang telah didefinisikan
              datasets: [
                {
                  label: 'PH (pH)',
                  data: suhuPH,
                  borderColor: '#00FF00',
                  tension: 0.1
                }
              ]
          }
      });
  })
  .catch(error => console.error('Error:', error));


// // // Grafik TDS
fetch('https://vps.isi-net.org:3333/get100data')
  .then(response => response.json())
  .then(data => {
      const result = data.result;
      const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

      const labels = latestData.map(item => item.timestamp).reverse();
      const sensorTDS = latestData.map(item => item.tds).reverse();

      const ctx = document.getElementById('ChartSuhuDasar').getContext('2d');
      new Chart(ctx, {
          type: 'line',
          data: {
              labels: labels,
              datasets: [{
                  label: 'TDS (mg/L)',
                  data: sensorTDS,
                  borderColor: '#FF0000',
                  tension: 0.1
              }]
          }
      });
  })
  .catch(error => console.error('Error:', error));

// //   GRAFIK SUHU AIR
  fetch('https://vps.isi-net.org:3333/get100data')
  .then(response => response.json())
  .then(data => {
      const result = data.result;
      const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

      const labels = latestData.map(item => item.timestamp).reverse();
      const sensorsuhuair = latestData.map(item => item.suhu_air).reverse();

      const ctx = document.getElementById('Chartsuhuair').getContext('2d');
      new Chart(ctx, {
          type: 'line',
          data: {
              labels: labels,
              datasets: [{
                  label: ' Water Temperature (°C)',
                  data: sensorsuhuair,
                  borderColor: '#FF0000',
                  tension: 0.1
              }]
          }
      });
  })
  .catch(error => console.error('Error:', error));

// // //GRAFIK PYRANO

  fetch('https://vps.isi-net.org:3333/Get100data')
  .then(response => response.json())
  .then(data => {
      const result = data.result;
      const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

      const labels = latestData.map(item => item.timestamp).reverse();
      const sensorrain = latestData.map(item => item.pyrano).reverse();

      const ctx = document.getElementById('ChartRainRouge').getContext('2d');
      new Chart(ctx, {
          type: 'line',
          data: {
              labels: labels,
              datasets: [{
                  label: 'Solar Intencity (mW/m2)',
                  data: sensorrain,
                  borderColor: '#00FF00',
                  tension: 0.1
              }]
          }
      });
  })
  .catch(error => console.error('Error:', error));

// // // Grafik Wind direction

fetch('https://vps.isi-net.org:3333/Get100data')
.then(response => response.json())
.then(data => {
    const result = data.result;
    const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

    const labels = latestData.map(item => item.timestamp).reverse();
    const sensorwinddir = latestData.map(item => item.winddirection).reverse();

    const ctx = document.getElementById('Chartwinddir').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: ' Wind Direction  (°)',
                data: sensorwinddir,
                borderColor: '#0000FF',
                tension: 0.1
            }]
        }
    });
})
.catch(error => console.error('Error:', error));

// // GRAFIK WIND SPEED
fetch('https://vps.isi-net.org:3333/Get100data')
.then(response => response.json())
.then(data => {
    const result = data.result;
    const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

    const labels = latestData.map(item => item.timestamp).reverse();
    const sensorwindspeed = latestData.map(item => item.kecepatan_angin).reverse();

    const ctx = document.getElementById('Chartwindspeed').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: ' Wind Speed  ( m/s )',
                data: sensorwindspeed,
                borderColor: '#FFFF00',
                tension: 0.1
            }]
        }
    });
})
.catch(error => console.error('Error:', error));

// GRAFIK BERAT
fetch('https://vps.isi-net.org:3333/Get100data')
  .then(response => response.json())
  .then(data => {
    const result1 = data.result;

    const latestData1 = result1.slice(Math.max(result1.length - 60, 0)); // Ambil 60 data terbaru

    const sensorberat1 = latestData1.map(item => item.berat1).reverse();
    const sensorberat2 = latestData1.map(item => item.berat2).reverse();
    const sensorberat3 = latestData1.map(item => item.berat3).reverse();
    const sensorberat4 = latestData1.map(item => item.berat4).reverse();
    const labels = latestData1.map(item => item.timestamp).reverse(); // Definisikan labels

    const ctx = document.getElementById('ChartBerat').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels, // Gunakan labels yang telah didefinisikan
        datasets: [
          {
            label: 'Weight Table  1 (Gram)',
            data: sensorberat1,
            borderColor: '#C21010',
            tension: 0.1
          },
          {
            label: 'Weight Table  2 (Gram)',
            data: sensorberat2,
            borderColor: '#00CED1',
            tension: 0.1
          },
          {
            label: 'Weight Table  3 (Gram)',
            data: sensorberat3,
            borderColor: '#800080',
            tension: 0.1
          },
          {
            label: 'Weight Table  4 (Gram)',
            data: sensorberat4,
            borderColor: '#FFFF00',
            tension: 0.1
          }
        ]
      }
    });
  })
  .catch(error => console.error('Error:', error));
//GRAFIK WaterFlow
fetch('https://vps.isi-net.org:3333/Get100data')
.then(response => response.json())
.then(data => {
    const result = data.result;
    const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

    const labels = latestData.map(item => item.timestamp).reverse();
    const sensorflow1 = latestData.map(item => item.waterflow1).reverse();
    const sensorflow2 = latestData.map(item => item.waterflow2).reverse();
    const sensorflow3 = latestData.map(item => item.waterflow3).reverse();
    const sensorflow4 = latestData.map(item => item.waterflow4).reverse();

    const ctx = document.getElementById('Chartwaterflow').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
          labels: labels, // Gunakan labels yang telah didefinisikan
          datasets: [
              {
                  label: 'Waterflow Table 1  (L/H)',
                  data: sensorflow1,
                  borderColor: '#C21010',
                  tension: 0.1
              },
              {
                  label: 'Waterflow Table 2  (L/H)',
                  data: sensorflow2,
                  borderColor: '#00CED1',
                  tension: 0.1
              },
              {
                  label: 'Waterflow Table 3  (L/H)',
                  data: sensorflow3,
                  borderColor: '#800080',
                  tension: 0.1
              },
              {
                  label: 'Waterflow Table 4  (L/H)',
                  data: sensorflow4,
                  borderColor: '#FFFF00',
                  tension: 0.1
              }
          ]
      }
  });
  })
  .catch(error => console.error('Error:', error));

// // Grafik Suhu Ruangan
fetch('https://vps.isi-net.org:3333/Get100data')
.then(response => response.json())
.then(data => {
    const result = data.result;
    const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

    const labels = latestData.map(item => item.timestamp).reverse();
    const sensorruangan = latestData.map(item => item.suhu).reverse();

    const ctx = document.getElementById('Chartsuhuruangan').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: ' Room Temperature(°C)',
                data: sensorruangan,
                borderColor: '#800080',
                tension: 0.1
            }]
        }
    });
})
.catch(error => console.error('Error:', error));
// // GRAFIK INFRARED
fetch('https://vps.isi-net.org:3333/Get100data')
.then(response => response.json())
.then(data => {
    const result = data.result;
    const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

    const labels = latestData.map(item => item.timestamp).reverse();
    const sensorsoil1 = latestData.map(item => item.soilmoisture1).reverse();
    const sensorsoil2 = latestData.map(item => item.soilmoisture2).reverse();
    const sensorsoil3 = latestData.map(item => item.soilmoisture3).reverse();
    const sensorsoil4 = latestData.map(item => item.soilmoisture3).reverse();

    const ctx = document.getElementById('Chartsoil').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
          labels: labels, // Gunakan labels yang telah didefinisikan
          datasets: [
              {
                  label: 'SoilMoisture 1 (%)',
                  data: sensorsoil1,
                  borderColor: '#C21010',
                  tension: 0.1
              },
              {
                  label: 'SoilMoisture 2 (%)',
                  data: sensorsoil2,
                  borderColor: '#00CED1',
                  tension: 0.1
              },
              {
                  label: 'SoilMoisture 3 (%)',
                  data: sensorsoil3,
                  borderColor: '#800080',
                  tension: 0.1
              },
              {
                label: 'SoilMoisture 4 (%)',
                data: sensorsoil4,
                borderColor: '#FFFF00',
                tension: 0.1
            }
          ]
      }
  });
  })
  .catch(error => console.error('Error:', error));
// 
  // Grafik Soil
  fetch('https://vps.isi-net.org:3333/Get100data')
.then(response => response.json())
.then(data => {
    const result = data.result;
    const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

    const labels = latestData.map(item => item.timestamp).reverse();
    const sensorinfra1 = latestData.map(item => item.infrared1).reverse();
    const sensorinfra2 = latestData.map(item => item.infrared2).reverse();
    const sensorinfra3 = latestData.map(item => item.infrared3).reverse();

    const ctx = document.getElementById('Chartinfrared').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
          labels: labels, // Gunakan labels yang telah didefinisikan
          datasets: [
              {
                  label: 'leaf Infrared 1 (°C)',
                  data: sensorinfra1,
                  borderColor: '#C21010',
                  tension: 0.1
              },
              {
                  label: 'leaf Infrared 2 (°C)',
                  data: sensorinfra2,
                  borderColor: '#00CED1',
                  tension: 0.1
              },
              {
                  label: 'leaf Infrared 3 (°C)',
                  data: sensorinfra3,
                  borderColor: '#800080',
                  tension: 0.1
              }
          ]
      }
  });
  })
  .catch(error => console.error('Error:', error));

// // TEKANAN UDARA
// // GRAFIK KETINGGIAN
fetch('https://vps.isi-net.org:3333/Get100data')
.then(response => response.json())
.then(data => {
    const result = data.result;
    const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

    const labels = latestData.map(item => item.timestamp).reverse();
    const sensortekanan = latestData.map(item => item.tekanan_udara).reverse();

    const ctx = document.getElementById('Chartekanan').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Baromatic pressure (hPa)',
                data: sensortekanan,
                borderColor: '#2E8B57',
                tension: 0.1
            }]
        }
    });
})
.catch(error => console.error('Error:', error));
// Grafik Humidity
fetch('https://vps.isi-net.org:3333/Get100data')
.then(response => response.json())
.then(data => {
    const result = data.result;
    const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

    const labels = latestData.map(item => item.timestamp).reverse();
    const sensorhumidity = latestData.map(item => item.humidity).reverse();

    const ctx = document.getElementById('Charthumidity').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Humidity(hPa)',
                data: sensorhumidity,
                borderColor: '#2E8B57',
                tension: 0.1
            }]
        }
    });
})
.catch(error => console.error('Error:', error));

fetch('https://vps.isi-net.org:3333/Get100data')
  .then(response => response.json())
  .then(data => {
    const result1 = data.result;

    const latestData1 = result1.slice(Math.max(result1.length - 60, 0)); // Ambil 60 data terbaru

    const sensorsvp = latestData1.map(item => item.svp).reverse();
    const sensoravp = latestData1.map(item => item.avp).reverse();
    const sensorvpd = latestData1.map(item => item.vpd).reverse();
    const labels = latestData1.map(item => item.timestamp).reverse(); // Definisikan labels

    const ctx = document.getElementById('Chartsvp').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels, // Gunakan labels yang telah didefinisikan
        datasets: [
          {
            label: 'SVP (kPa)',
            data: sensorsvp,
            borderColor: '#C21010',
            tension: 0.1
          },
          {
            label: 'AVP (kPa))',
            data: sensoravp,
            borderColor: '#00CED1',
            tension: 0.1
          },
          {
            label: 'VPD(kPa)',
            data: sensorvpd,
            borderColor: '#800080',
            tension: 0.1
          }
        ]
      }
    });
  })
  .catch(error => console.error('Error:', error));
// // DATA DOWNLOAD
// function downloadData() {
//     // Fungsi untuk memvalidasi kata sandi
//     function validatePassword(password) {
//         // Ganti dengan logika validasi sesuai kebutuhan Anda
//         return password === 'datapertanian';
//     }

//     // Meminta pengguna memasukkan kata sandi
//     const userPassword = prompt('Masukkan kata sandi:');

//     // Memvalidasi kata sandi
//     if (validatePassword(userPassword)) {
//         const baseEndpoint = 'https://vps.isi-net.org:3333/';

//         const endpoints = [
//             'getDataForOneDayTopic1',
//             'getDataForOneDayTopic2',
//             'getDataForOneDayTopic3',
//             'getDataForSevenDaysTopic2',
//             'getDataForonemonthTopic2',
//             'getDataForOneDayTopic3',
//             'getDataForSevenDaysTopic3',
//             'getDataForonemonthTopic3'
//         ];

//         Promise.all(endpoints.map(endpoint => fetch(baseEndpoint + endpoint)))
//             .then(responses => Promise.all(responses.map(response => response.json())))
//             .then(dataArray => {
//                 const mergedData = Object.assign({}, ...dataArray);
//                 const formattedData = JSON.stringify(mergedData);

//                 const blob = new Blob([formattedData], { type: 'application/json' });

//                 const link = document.createElement('a');
//                 link.href = window.URL.createObjectURL(blob);
//                 link.download = 'data.json';

//                 document.body.appendChild(link);

//                 link.click();

//                 document.body.removeChild(link);
//             })
//             .catch(error => console.error('Error:', error));
//     } else {
//         alert('Kata sandi tidak valid. Unduhan dibatalkan.');
//     }
// }

