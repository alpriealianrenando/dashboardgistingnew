function fetchData() {
  fetch('https://vps.isi-net.org:5000/GetDataGistingNew')
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
        document.getElementById('lampu_uv').innerText = result.lampuuv;
        document.getElementById('tdsmeter').innerText = result.tdsmeter;
        document.getElementById('suhuair').innerText = result.suhuair;
        document.getElementById('winddirect').innerText = result.winddirect;
        document.getElementById('waterflow_1').innerText = result.waterflow_1;
        document.getElementById('waterflow_2').innerText = result.waterflow_2;
        document.getElementById('waterflow_3').innerText = result.waterflow_3;
        document.getElementById('waterflow_4').innerText = result.waterflow_4;
        document.getElementById('waterflow_5').innerText = result.waterflow_5;
        document.getElementById('waterflow_6').innerText = result.waterflow_6;
        document.getElementById('waterflow_7').innerText = result.waterflow_7;
        document.getElementById('waterflow_8').innerText = result.waterflow_8;
        document.getElementById('waterflow_9').innerText = result.waterflow_9;
        document.getElementById('waterflow_10').innerText = result.waterflow_10;
        document.getElementById('waterflow_11').innerText = result.waterflow_11;
        document.getElementById('waterflow_12').innerText = result.waterflow_12;
        document.getElementById('soilmoisture_1').innerText = result.soilmoisture_1;
        document.getElementById('soilmoisture_2').innerText = result.soilmoisture_2;
        document.getElementById('soilmoisture_3').innerText = result.soilmoisture_3;
        document.getElementById('weight').innerText = result.weight;
        document.getElementById('infrared_1').innerText = result.infrared_1;
        document.getElementById('infrared_2').innerText = result.infrared_2;
        document.getElementById('anemo').innerText = result.anemo;
        document.getElementById('dht').innerText = result.dht;
        document.getElementById('raingauge').innerText = result.raingauge;

      } else {
        console.error('Error: Invalid data structure received from the server.');
      }
    })
    .catch(error => console.error('Error:', error));
}
  // Panggil fetchData untuk pertama kali

// Ambil elemen p dengan id 'phBox'
var phBox = document.getElementById('sensor_ph');
var tdsBox = document.getElementById('tdsmeter');
var suhuBox = document.getElementById('suhuair');
var arahBox = document.getElementById('winddirect');
var waterflow1Box = document.getElementById('waterflow_1');
var waterflow2Box = document.getElementById('waterflow_2');
var waterflow3Box = document.getElementById('waterflow_3');
var waterflow4Box = document.getElementById('waterflow_4');
var waterflow5Box = document.getElementById('waterflow_5');
var waterflow6Box = document.getElementById('waterflow_6');
var waterflow7Box = document.getElementById('waterflow_7');
var waterflow8Box = document.getElementById('waterflow_8');
var waterflow9Box = document.getElementById('waterflow_9');
var waterflow10Box = document.getElementById('waterflow_10');
var waterflow11Box = document.getElementById('waterflow_11');
var waterflow12Box = document.getElementById('waterflow_12');
var soilmoisture1Box = document.getElementById('soilmoisture_1');
var soilmoisture2Box = document.getElementById('soilmoisture_2');
var soilmoisture3Box = document.getElementById('soilmoisture_3');
var weightBox = document.getElementById('weight');
var infrared1Box = document.getElementById('infrared_1');
var infrared2Box = document.getElementById('infrared_2');
var anemoBox = document.getElementById('anemo');
var dhtBox = document.getElementById('dht');
var raingaugeBox = document.getElementById('raingauge');


fetchData();
// Fungsi untuk mengubah warna kotak dan teks berdasarkan nilai pH
fetch(`https://vps.isi-net.org:5000/GetDataGistingNew`)
    .then(response => response.json())
    .then(data => {
        // Ambil nilai pH terakhir dari data
        var lastPhValue = data.result[0].ph;
        var lasttdsValue = data.result[0].tdsmeter;
        var lastsuhuValue = data.result[0].suhuair;
        var lastarahValue = data.result[0].winddirect;
        var lastwaterflow1Value = data.result[0].waterflow_1;
        var lastwaterflow2Value = data.result[0].waterflow_2;
        var lastwaterflow3Value = data.result[0].waterflow_3;
        var lastwaterflow4Value = data.result[0].waterflow_4;
        var lastwaterflow5Value = data.result[0].waterflow_5;
        var lastwaterflow6Value = data.result[0].waterflow_6;
        var lastwaterflow7Value = data.result[0].waterflow_7;
        var lastwaterflow8Value = data.result[0].waterflow_8;
        var lastwaterflow9Value = data.result[0].waterflow_9;
        var lastwaterflow10Value = data.result[0].waterflow_10;
        var lastwaterflow11Value = data.result[0].waterflow_11;
        var lastwaterflow12Value = data.result[0].waterflow_12;
        var lastsoilmoisture1Value = data.result[0].soilmoisture_1;
        var lastsoilmoisture2Value = data.result[0].soilmoisture_2;
        var lastsoilmoisture3Value = data.result[0].soilmoisture_3;
        var lastweightValue = data.result[0].weight;
        var lastinfrared1Value = data.result[0].infrared_1;
        var lastinfrared2Value = data.result[0].infrared_2;
        var lastanemoValue = data.result[0].anemo;
        var lastdhtValue = data.result[0].dht;
        var lastraingaugeValue = data.result[0].raingauge;
        updatePhBox(lastPhValue, phBox);
        updateTdsBox(lasttdsValue, tdsBox);
        updatesuhuBox(lastsuhuValue, suhuBox);
        updatekecepatanBox(lastarahValue, arahBox);
        updatewaterflow1Box(lastwaterflow1Value, waterflow1Box);
        updatewaterflow2Box(lastwaterflow2Value, waterflow2Box);
        updatewaterflow3Box(lastwaterflow3Value, waterflow3Box);
        updatewaterflow4Box(lastwaterflow4Value, waterflow4Box);
        updatewaterflow5Box(lastwaterflow5Value, waterflow5Box);
        updatewaterflow6Box(lastwaterflow6Value, waterflow6Box);
        updatewaterflow7Box(lastwaterflow7Value, waterflow7Box);
        updatewaterflow8Box(lastwaterflow8Value, waterflow8Box);
        updatewaterflow9Box(lastwaterflow9Value, waterflow9Box);
        updatewaterflow10Box(lastwaterflow10Value, waterflow10Box);
        updatewaterflow11Box(lastwaterflow11Value, waterflow11Box);
        updatewaterflow12Box(lastwaterflow12Value, waterflow12Box);
        updatesoilmoisture1Box(lastsoilmoisture1Value, soilmoisture1Box);
        updatesoilmoisture2Box(lastsoilmoisture2Value, soilmoisture2Box);
        updatesoilmoisture3Box(lastsoilmoisture3Value, soilmoisture3Box);
        updateweightBox(lastweightValue, weightBox);
        updateinfrared1Box(lastinfrared1Value, infrared1Box);
        updateinfrared2Box(lastinfrared2Value, infrared2Box);
        updateanemoBox(lastanemoValue, anemoBox);
        updatedhtBox(lastdhtValue, dhtBox);
        updateraingaugeBox(lastraingaugeValue, raingagueBox);
    })
    .catch(error => console.error('Error:', error));

    function updatePhBox(phValue, box) {
      if (phValue < 0 || phValue > 100) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = phValue.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#C1F2B0';
        box.innerHTML = phValue.toFixed(2);
      }
    }
    
    function updateTdsBox(tdsValue, box) {
      if (tdsValue < 0 || tdsValue > 100) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = tdsValue.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#C1F2B0';
        box.innerHTML = tdsValue.toFixed(2);
      }
    }
    function updatesuhuBox(suhuValue, box) {
      if (suhuValue < 0 || suhuValue > 100) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = suhuValue.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#C1F2B0';
        box.innerHTML = suhuValue.toFixed(2);
      }
    }
    function updatewaterflow1Box(waterflow1Value, box) {
      if (waterflow1Value < 0 || waterflow1Value > 100) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = waterflow1Value.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#C1F2B0';
        box.innerHTML = waterflow1Value.toFixed(2);
      }
    }
    function updatewaterflow2Box(waterflow2Value, box) {
      if (waterflow2Value < 0 || waterflow2Value > 100) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = waterflow2Value.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#C1F2B0';
        box.innerHTML = waterflow2Value.toFixed(2);
      }
    }
    function updatewaterflow3Box(waterflow3Value, box) {
      if (waterflow3Value < 0 || waterflow3Value > 100) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = waterflow3Value.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#C1F2B0';
        box.innerHTML = waterflow3Value.toFixed(2);
      }
    }
    function updatewaterflow4Box(waterflow4Value, box) {
      if (waterflow4Value < 0 || waterflow4Value > 100) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = waterflow4BoxValue.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#C1F2B0';
        box.innerHTML = waterflow4Value.toFixed(2);
      }
    }
    function updatewaterflow5Box(waterflow5Value, box) {
      if (waterflow5Value < 0 || waterflow5Value > 100) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = waterflow5Value.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#C1F2B0';
        box.innerHTML = waterflow5Value.toFixed(2);
      }
    }
    function updatewaterflow6Box(waterflow6Value, box) {
      if (waterflow6Value < 0 || waterflow6Value > 100) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = waterflow6Value.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#C1F2B0';
        box.innerHTML = waterflow6Value.toFixed(2);
      }
    }
    function updatewaterflow7Box(waterflow7Value, box) {
      if (waterflow7Value < 0 || waterflow7Value > 100) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = waterflow7Value.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#C1F2B0';
        box.innerHTML = waterflow7Value.toFixed(2);
      }
    }
    function updatewaterflow8Box(waterflow8Value, box) {
      if (waterflow8Value < 0 || waterflow8Value > 100) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = waterflow8BoxValue.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#C1F2B0';
        box.innerHTML = waterflow8Value.toFixed(2);
      }
    }
    function updatewaterflow9Box(waterflow9Value, box) {
      if (waterflow5Value < 0 || waterflow9Value > 100) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = waterflow9Value.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#C1F2B0';
        box.innerHTML = waterflow9Value.toFixed(2);
      }
    }
    function updatewaterflow10Box(waterflow10Value, box) {
      if (waterflow10Value < 0 || waterflow10Value > 100) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = waterflow10Value.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#C1F2B0';
        box.innerHTML = waterflow10Value.toFixed(2);
      }
    }
    function updatewaterflow11Box(waterflow11Value, box) {
      if (waterflow11Value < 0 || waterflow11Value > 100) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = waterflow11Value.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#C1F2B0';
        box.innerHTML = waterflow11Value.toFixed(2);
      }
    }
    function updatewaterflow12Box(waterflow12Value, box) {
      if (waterflow12Value < 0 || waterflow12Value > 100) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = waterflow12BoxValue.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#C1F2B0';
        box.innerHTML = waterflow12Value.toFixed(2);
      }
    }
    function updatesoilmoisture1Box(soilmoisture1Value, box) {
      if (soilmoisture1Value < 0 || soilmoisture1Value > 100) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = soilmoisture1BoxValue.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#C1F2B0';
        box.innerHTML = soilmoisture1Value.toFixed(2);
      }
    }
    function updatesoilmoisture2Box(soilmoisture2Value, box) {
      if (soilmoisture2Value < 0 || soilmoisture2Value > 100) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = soilmoisture2BoxValue.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#C1F2B0';
        box.innerHTML = soilmoisture2Value.toFixed(2);
      }
    }
    function updateweightBox(weightValue, box) {
      if (weightValue < 0 || weightValue > 10000) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = weightValue.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#C1F2B0';
        box.innerHTML = weightValue.toFixed(2);
      }
    }
    function updateinfrared1Box(infrared1Value, box) {
      if (infrared1Value < 0 || infrared1Value > 10000) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = infrared1Value.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#C1F2B0';
        box.innerHTML = infrared1Value.toFixed(2);
      }
    }
    function updateinfrared2Box(infrared2Value, box) {
      if (infrared2Value < 0 || infrared2Value > 10000) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = infrared2Value.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#C1F2B0';
        box.innerHTML = infrared2Value.toFixed(2);
      }
    }
    function updateanemoBox(anemoValue, box) {
      if (anemoValue < 0 || anemoValue > 10000) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = anemoValue.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#C1F2B0';
        box.innerHTML = anemoValue.toFixed(2);
      }
    }
    function updatdhtBox(dhtValue, box) {
      if (dhtValue < 0 || dhtValue > 10000) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = dhtValue.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#C1F2B0';
        box.innerHTML = dhtValue.toFixed(2);
      }
    }
    function updaraingaugeBox(raingaugeValue, box) {
      if (raingaugeValue < 0 || raingaugeValue > 10000) {
        box.parentElement.style.backgroundColor = '#FF0303';
        box.innerHTML = raingaugeValue.toFixed(2);
      } else {
        box.parentElement.style.backgroundColor = '#C1F2B0';
        box.innerHTML = raingaugeValue.toFixed(2);
      }
    }

  function updatePompaBox(elementId, value) {
    var box = document.getElementById(elementId);
    var status = (value === 1) ? 'Aktif' : 'Tidak Aktif';
    var backgroundColor = (value === 1) ? '#61A3BA' : '#ffffff';
    box.parentElement.style.backgroundColor = backgroundColor;
    box.innerHTML = status;
  }
  function updatelampuuvBox(elementId, value) {
    var box = document.getElementById(elementId);
    var status = (value === 1) ? 'Aktif' : 'Tidak Aktif';
    var backgroundColor = (value === 1) ? '#61A3BA' : '#ffffff';
    box.parentElement.style.backgroundColor = backgroundColor;
    box.innerHTML = status;
  }

    fetch('https://vps.isi-net.org:5000/GetDataGistingNew')
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
  fetch('https://vps.isi-net.org:5000/GetDataGistingNew')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      var lastPompaValue = data.result[0].pompaair;
      var lastlampuuvValue = data.result[0].lampuuv;
      updatePompaBox('pompa_air', lastPompaValue);
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
      fetch('https://vps.isi-net.org:5000/GetDataGistingNew')
          .then(response => response.json())
          .then(dataTopic1 => {
              const dataBody = document.getElementById('data-body');
              dataBody.innerHTML = ''; // Bersihkan tbody sebelum menambahkan data baru
  
              dataTopic1.result.slice(0, 10).forEach((item, index) => {
                  const row = document.createElement('tr');
                  row.innerHTML = `
                      <td>${index + 1}</td>
                      <td>${item.datetime}</td>
                      <td>${item.ph}</td>
                      <td>${item.tdsmeter}</td>
                      <td>${item.suhuair}</td>
                      <td>${item.winddirect}</td>
                      <td>${item.anemo}</td>
                      <td>${item.infrared_1}</td>
                      <td>${item.infrared_2}</td>
                      <td>${item.weight}</td>
                      <td>${item.waterflow_1}</td>
                      <td>${item.waterflow_2}</td>
                      <td>${item.waterflow_3}</td>
                      <td>${item.waterflow_4}</td>
                      <td>${item.waterflow_5}</td>
                      <td>${item.waterflow_6}</td>
                      <td>${item.waterflow_7}</td>
                      <td>${item.waterflow_8}</td>
                      <td>${item.waterflow_9}</td>
                      <td>${item.waterflow_10}</td>
                      <td>${item.waterflow_11}</td>
                      <td>${item.waterflow_12}</td>
                      <td>${item.soilmoisture_1}</td>
                      <td>${item.soilmoisture_2}</td>
                      <td>${item.soilmoisture_3}</td>
                      <td>${item.dht}</td>
                      <td>${item.raingauge}</td>
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
fetch('https://vps.isi-net.org:5000/GetDataGistingNew')
  .then(response => response.json())
  .then(data => {
      const result = data.result;
      const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru
      const ph = latestData.map(item => item.ph).reverse();
      const labels = latestData.map(item => item.datetime).reverse(); // Definisikan labels
      const ctx = document.getElementById('myChart').getContext('2d');
      new Chart(ctx, {
          type: 'line',
          data: {
              labels: labels, // Gunakan labels yang telah didefinisikan
              datasets: [
                {
                  label: 'PH (pH)',
                  data: ph,
                  borderColor: '#00FF00',
                  tension: 0.1
                }
              ]
          }
      });
  })
  .catch(error => console.error('Error:', error));


// // // Grafik TDS
fetch('https://vps.isi-net.org:5000/GetDataGistingNew')
  .then(response => response.json())
  .then(data => {
      const result = data.result;
      const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

      const labels = latestData.map(item => item.datetime).reverse();
      const tdsmeter = latestData.map(item => item.tdsmeter).reverse();

      const ctx = document.getElementById('ChartSuhuDasar').getContext('2d');
      new Chart(ctx, {
          type: 'line',
          data: {
              labels: labels,
              datasets: [{
                  label: 'TDS (mg/L)',
                  data: tdsmeter,
                  borderColor: '#D2DE32',
                  tension: 0.1
              }]
          }
      });
  })
  .catch(error => console.error('Error:', error));

// //   GRAFIK SUHU AIR
  fetch('https://vps.isi-net.org:5000/GetDataGistingNew')
  .then(response => response.json())
  .then(data => {
      const result = data.result;
      const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

      const labels = latestData.map(item => item.datetime).reverse();
      const suhuair = latestData.map(item => item.suhuair).reverse();

      const ctx = document.getElementById('Chartsuhuair').getContext('2d');
      new Chart(ctx, {
          type: 'line',
          data: {
              labels: labels,
              datasets: [{
                  label: 'Suhu Air (°C)',
                  data: suhuair,
                  borderColor: '#FF0000',
                  tension: 0.1
              }]
          }
      });
  })
  .catch(error => console.error('Error:', error));

// //   GRAFIK RAIN GAUGE
fetch('https://vps.isi-net.org:5000/GetDataGistingNew')
.then(response => response.json())
.then(data => {
    const result = data.result;
    const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

    const labels = latestData.map(item => item.datetime).reverse();
    const raingauge = latestData.map(item => item.raingauge).reverse();

    const ctx = document.getElementById('Chartraingauge').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Curah Hujan',
                data: raingauge,
                borderColor: '#765827',
                tension: 0.1
            }]
        }
    });
})
.catch(error => console.error('Error:', error));

// // // Grafik Wind direction
fetch('https://vps.isi-net.org:5000/GetDataGistingNew')
.then(response => response.json())
.then(data => {
    const result = data.result;
    const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

    const labels = latestData.map(item => item.datetime).reverse();
    const winddirect= latestData.map(item => item.winddirect).reverse();

    const ctx = document.getElementById('Chartwinddirect').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: ' Wind Direction  (°)',
                data: winddirect,
                borderColor: '#0000FF',
                tension: 0.1
            }]
        }
    });
})
.catch(error => console.error('Error:', error));

// // GRAFIK WIND SPEED
fetch('https://vps.isi-net.org:5000/GetDataGistingNew')
.then(response => response.json())
.then(data => {
    const result = data.result;
    const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

    const labels = latestData.map(item => item.datetime).reverse();
    const anemo = latestData.map(item => item.anemo).reverse();

    const ctx = document.getElementById('Chartanemo').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: ' Kecepatan Angin (m/s)',
                data: anemo,
                borderColor: '#FFFF00',
                tension: 0.1
            }]
        }
    });
})
.catch(error => console.error('Error:', error));

// // GRAFIK BERAT
fetch('https://vps.isi-net.org:5000/GetDataGistingNew')
.then(response => response.json())
.then(data => {
    const result = data.result;
    const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

    const labels = latestData.map(item => item.datetime).reverse();
    const weight = latestData.map(item => item.weight).reverse();

    const ctx = document.getElementById('Chartberat').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Sensor Berat (gr)',
                data: weight,
                borderColor: '#FFB534',
                tension: 0.1
            }]
        }
    });
})
.catch(error => console.error('Error:', error));

//GRAFIK WaterFlow
fetch('https://vps.isi-net.org:5000/GetDataGistingNew')
.then(response => response.json())
.then(data => {
    const result = data.result;
    const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

    const labels = latestData.map(item => item.datetime).reverse();
    const waterflow_1 = latestData.map(item => item.waterflow_1).reverse();
    const waterflow_2 = latestData.map(item => item.waterflow_2).reverse();
    const waterflow_3 = latestData.map(item => item.waterflow_3).reverse();
    const waterflow_4 = latestData.map(item => item.waterflow_4).reverse();
    const waterflow_5 = latestData.map(item => item.waterflow_5).reverse();
    const waterflow_6 = latestData.map(item => item.waterflow_6).reverse();
    const waterflow_7 = latestData.map(item => item.waterflow_7).reverse();
    const waterflow_8 = latestData.map(item => item.waterflow_8).reverse();
    const waterflow_9 = latestData.map(item => item.waterflow_9).reverse();
    const waterflow_10 = latestData.map(item => item.waterflow_10).reverse();
    const waterflow_11 = latestData.map(item => item.waterflow_11).reverse();
    const waterflow_12 = latestData.map(item => item.waterflow_12).reverse();

    const ctx = document.getElementById('Chartwaterflow').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
          labels: labels, // Gunakan labels yang telah didefinisikan
          datasets: [
              {
                  label: 'Waterflow Table 1  (L/H)',
                  data: waterflow_1,
                  borderColor: '#C21010',
                  tension: 0.1
              },
              {
                  label: 'Waterflow Table 2  (L/H)',
                  data: waterflow_2,
                  borderColor: '#00CED1',
                  tension: 0.1
              },
              {
                  label: 'Waterflow Table 3  (L/H)',
                  data: waterflow_3,
                  borderColor: '#800080',
                  tension: 0.1
              },
              {
                  label: 'Waterflow Table 4  (L/H)',
                  data: waterflow_4,
                  borderColor: '#FFFF00',
                  tension: 0.1
              },
              {
                label: 'Waterflow Table 5  (L/H)',
                data: waterflow_5,
                borderColor: '#003865',
                tension: 0.1
              },
              {
                label: 'Waterflow Table 6  (L/H)',
                data: waterflow_6,
                borderColor: '#3CCF4E',
                tension: 0.1
              },
            {
                label: 'Waterflow Table 7  (L/H)',
                data: waterflow_7,
                borderColor: '#EF5B0C',
                tension: 0.1
            },
            {
                label: 'Waterflow Table 8  (L/H)',
                data: waterflow_8,
                borderColor: '#BE0000',
                tension: 0.1
            },
            {
              label: 'Waterflow Table 9  (L/H)',
              data: waterflow_9,
              borderColor: '#B5FFD9',
              tension: 0.1
            },
            {
              label: 'Waterflow Table 10  (L/H)',
              data: waterflow_10,
              borderColor: '#3E00FF',
              tension: 0.1
            },
          {
              label: 'Waterflow Table 11  (L/H)',
              data: waterflow_11,
              borderColor: '#AE00FB',
              tension: 0.1
          },
          {
              label: 'Waterflow Table 12 (L/H)',
              data: waterflow_12,
              borderColor: '#F8BDEB',
              tension: 0.1
          }

          ]
      }
  });
  })
  .catch(error => console.error('Error:', error));

// // Grafik Suhu Ruangan
fetch('https://vps.isi-net.org:5000/GetDataGistingNew')
.then(response => response.json())
.then(data => {
    const result = data.result;
    const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

    const labels = latestData.map(item => item.datetime).reverse();
    const dht = latestData.map(item => item.dht).reverse();

    const ctx = document.getElementById('Chartsuhuruangan').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Suhu Ruangan (°C)',
                data: dht,
                borderColor: '#800080',
                tension: 0.1
            }]
        }
    });
})
.catch(error => console.error('Error:', error));

// // GRAFIK SOIL MOISTURE
fetch('https://vps.isi-net.org:5000/GetDataGistingNew')
.then(response => response.json())
.then(data => {
    const result = data.result;
    const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

    const labels = latestData.map(item => item.datetime).reverse();
    const soilmoisture_1 = latestData.map(item => item.soilmoisture_1).reverse();
    const soilmoisture_2 = latestData.map(item => item.soilmoisture_2).reverse();
    const soilmoisture_3 = latestData.map(item => item.soilmoisture_3).reverse();

    const ctx = document.getElementById('Chartsoil').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
          labels: labels, // Gunakan labels yang telah didefinisikan
          datasets: [
              {
                  label: 'SoilMoisture 1 (%)',
                  data: soilmoisture_1,
                  borderColor: '#C21010',
                  tension: 0.1
              },
              {
                  label: 'SoilMoisture 2 (%)',
                  data: soilmoisture_2,
                  borderColor: '#00CED1',
                  tension: 0.1
              },
              {
                  label: 'SoilMoisture 3 (%)',
                  data: soilmoisture_3,
                  borderColor: '#800080',
                  tension: 0.1
              },
          ]
      }
  });
  })
  .catch(error => console.error('Error:', error));

  // Grafik INFRARED
  fetch('https://vps.isi-net.org:5000/GetDataGistingNew')
.then(response => response.json())
.then(data => {
    const result = data.result;
    const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

    const labels = latestData.map(item => item.datetime).reverse();
    const infrared_1 = latestData.map(item => item.infrared_1).reverse();
    const infrared_2 = latestData.map(item => item.infrared_2).reverse();

    const ctx = document.getElementById('Chartinfrared').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
          labels: labels, // Gunakan labels yang telah didefinisikan
          datasets: [
              {
                  label: 'Infrared 1 (°C)',
                  data: infrared_1,
                  borderColor: '#C21010',
                  tension: 0.1
              },
              {
                  label: 'Infrared 2 (°C)',
                  data: infrared_2,
                  borderColor: '#00CED1',
                  tension: 0.1
              },
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

