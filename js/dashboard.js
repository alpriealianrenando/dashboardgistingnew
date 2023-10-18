function fetchData() {
    fetch('https://vps.isi-net.org:5000/GetDataGistingNew')
      .then(response => response.json())
      .then(data => {
        // Update tampilan dengan data yang diterima dari server
        console.log(data);
        document.getElementById('sensor_ph').innerText = data.result[0].humidity_280;
        document.getElementById('tdssensor').innerText = data.result[0].pressure_280;
        document.getElementById('dssensor').innerText = data.result[0].temperature_280;
        document.getElementById('rainrouge').innerText = data.result[0].temperature_388;
        document.getElementById('Anemometer').innerText = data.result[0].pressure_388;
        document.getElementById('windwave').innerText = data.result[0].phsensor;
        document.getElementById('WaterFlow').innerText = data.result[0].tdssensor;
        document.getElementById('bme_sensor').innerText = data.result[0].moisturesensor;
        document.getElementById('soil_moisture').innerText = data.result[0].anemometer;
        document.getElementById('contactless').innerText = data.result[0].windvane;
        document.getElementById('weighting_sensor').innerText = data.result[0].currentsensor;
        document.getElementById('acs_sensor').innerText = data.result[0].rainintensity; 
      })
      .catch(error => console.error('Error:', error));
  }
// Panggil fungsi fetchData secara berkala setiap 2 detik
setInterval(fetchData, 2000);

// Panggil fetchData untuk pertama kali
fetchData();
// Ambil elemen p dengan id 'phBox'
var phBox = document.getElementById('sensor_ph');
// Fungsi untuk mengubah warna kotak dan teks berdasarkan nilai pH
function updatePhBox(phValue) {
    if (phValue < 5 || phValue > 100) {
        phBox.parentElement.style.backgroundColor = '#FF0303';
        phBox.innerHTML = phValue.toFixed(2);
    } else {
        phBox.parentElement.style.backgroundColor = '#16FF00';
        phBox.innerHTML = phValue.toFixed(2);
    }
}

// Mengambil data dari API setiap menit
fetch(`https://vps.isi-net.org:5000/GetDataGistingNew`)
    .then(response => response.json())
    .then(data => {
        // Ambil nilai pH terakhir dari data
        var lastPhValue = data.result[0].humidity_280;

        // Ubah warna kotak dan teks berdasarkan nilai pH
        updatePhBox(lastPhValue);
        // updatePhBox(lastSuhuPerValue);
    })
    .catch(error => console.error('Error:', error));

    //Warning TDS Sensor
var tdsBox = document.getElementById('tdssensor');
// Fungsi untuk mengubah warna kotak dan teks berdasarkan nilai pH
function updatetdsBox(tdsValue) {
    if (tdsValue < 5 || tdsValue > 100) {
        tdsBox.parentElement.style.backgroundColor = '#FF0303';
        tdsBox.innerHTML = tdsValue.toFixed(2);
    } else {
        tdsBox.parentElement.style.backgroundColor = '#16FF00';
        tdsBox.innerHTML = tdsValue.toFixed(2);
    }
}
// Ds sensor
var dsBox = document.getElementById('dssensor');
// Fungsi untuk mengubah warna kotak dan teks berdasarkan nilai pH
function updatedsBox(dsValue) {
    if (dsValue < 5 || dsValue > 100) {
        dsBox.parentElement.style.backgroundColor = '#FF0303';
        dsBox.innerHTML = dsValue.toFixed(2);
    } else {
        dsBox.parentElement.style.backgroundColor = '#16FF00';
        dsBox.innerHTML = dsValue.toFixed(2);
    }
}
// rain gouge lampu
    // warning DS18B20
    var rainBox = document.getElementById('rainrouge');
// Fungsi untuk mengubah warna kotak dan teks berdasarkan nilai pH
function updaterainBox(rainValue) {
    if (rainValue < 5 || rainValue > 100) {
        rainBox.parentElement.style.backgroundColor = '#FF0303';
        rainBox.innerHTML = rainValue.toFixed(2);
    } else {
        rainBox.parentElement.style.backgroundColor = '#16FF00';
        rainBox.innerHTML = rainValue.toFixed(2);
    }
}
// anemometer
var anemoBox = document.getElementById('Anemometer');
// Fungsi untuk mengubah warna kotak dan teks berdasarkan nilai pH
function updateanemoBox(anemoValue) {
    if (anemoValue < 5 || anemoValue > 100) {
        anemoBox.parentElement.style.backgroundColor = '#FF0303';
        anemoBox.innerHTML = anemoValue.toFixed(2);
    } else {
        anemoBox.parentElement.style.backgroundColor = '#16FF00';
        anemoBox.innerHTML = anemoValue.toFixed(2);
    }
}
// Warning Wind Wave Direction
var waveBox = document.getElementById('windwave');
// Fungsi untuk mengubah warna kotak dan teks berdasarkan nilai pH
function updatewaveBox(waveValue) {
    if (waveValue < 5 || waveValue > 100) {
        waveBox.parentElement.style.backgroundColor = '#FF0303';
        waveBox.innerHTML = waveValue.toFixed(2);
    } else {
        waveBox.parentElement.style.backgroundColor = '#16FF00';
        waveBox.innerHTML = waveValue.toFixed(2);
    }
}
// Warning Waterflow
var waterBox = document.getElementById('WaterFlow');
// Fungsi untuk mengubah warna kotak dan teks berdasarkan nilai pH
function updatewaterBox(waterValue) {
    if (waterValue < 5 || waterValue > 100) {
        waterBox.parentElement.style.backgroundColor = '#FF0303';
        waterBox.innerHTML = waterValue.toFixed(2);
    } else {
        waterBox.parentElement.style.backgroundColor = '#16FF00';
        waterBox.innerHTML = waterValue.toFixed(2);
    }
}
// Warning Bme Sensor
var bmeBox = document.getElementById('bme_sensor');
// Fungsi untuk mengubah warna kotak dan teks berdasarkan nilai pH
function updatebmeBox(bmeValue) {
    if (bmeValue < 5 || bmeValue > 100) {
        bmeBox.parentElement.style.backgroundColor = '#FF0303';
        bmeBox.innerHTML = bmeValue.toFixed(2);
    } else {
        bmeBox.parentElement.style.backgroundColor = '#16FF00';
        bmeBox.innerHTML = bmeValue.toFixed(2);
    }
}
// Warning Soil Moisture
var soilBox = document.getElementById('soil_moisture');
// Fungsi untuk mengubah warna kotak dan teks berdasarkan nilai pH
function updatesoilBox(soilValue) {
    if (soilValue < 5 || soilValue > 1000) {
        soilBox.parentElement.style.backgroundColor = '#FF0303';
        soilBox.innerHTML = soilValue.toFixed(2);
    } else {
        soilBox.parentElement.style.backgroundColor = '#16FF00';
        soilBox.innerHTML = soilValue.toFixed(2);
    }
}
// Warning Contactless
var lessBox = document.getElementById('contactless');
// Fungsi untuk mengubah warna kotak dan teks berdasarkan nilai pH
function updatelessBox(lessValue) {
    if (lessValue < 5 || lessValue > 1000) {
        lessBox.parentElement.style.backgroundColor = '#FF0303';
        lessBox.innerHTML = lessValue.toFixed(2);
    } else {
        lessBox.parentElement.style.backgroundColor = '#16FF00';
        lessBox.innerHTML = lessValue.toFixed(2);
    }
}
// Warning wighting sensor
var weigtBox = document.getElementById('weighting_sensor');
// Fungsi untuk mengubah warna kotak dan teks berdasarkan nilai pH
function updateweigtBox(weigtValue) {
    if (weigtValue < 5 || weigtValue > 1000) {
        weigtBox.parentElement.style.backgroundColor = '#FF0303';
        weigtBox.innerHTML = weigtValue.toFixed(2);
    } else {
        weigtBox.parentElement.style.backgroundColor = '#16FF00';
        weigtBox.innerHTML = weigtValue.toFixed(2);
    }
}
// Warning acs sensor
var acsBox = document.getElementById('acs_sensor');
// Fungsi untuk mengubah warna kotak dan teks berdasarkan nilai pH
function updateacsBox(acsValue) {
    if (acsValue < 5 || acsValue > 1000) {
        acsBox.parentElement.style.backgroundColor = '#FF0303';
        acsBox.innerHTML = acsValue.toFixed(2);
    } else {
        acsBox.parentElement.style.backgroundColor = '#16FF00';
        acsBox.innerHTML = acsValue.toFixed(2);
    }
}


// Mengambil data dari API setiap menit
fetch(`https://vps.isi-net.org:5000/GetDataGistingNew`)
    .then(response => response.json())
    .then(data => {
        // Ambil nilai pH terakhir dari data
        var lasttdsValue = data.result[0].pressure_280;

        // Ubah warna kotak dan teks berdasarkan nilai pH
        updatetdsBox(lasttdsValue);
        // updatePhBox(lastSuhuPerValue);
        var lastdsValue = data.result[0].temperature_280;
        updatedsBox(lastdsValue);
        // rain rouge
        var lastrainValue = data.result[0].temperature_388;
        updaterainBox(lastrainValue);
        // anemo 
        var lastanemoValue = data.result[0].pressure_388;
        updateanemoBox(lastanemoValue);
        // wind wave direction
        var lastwaveValue = data.result[0].phsensor;
        updatewaveBox(lastwaveValue);
        // waterfloww
        var lastwaterValue = data.result[0].tdssensor;
        updatewaterBox(lastwaterValue);
        // BME Sensor
        var lastbmeValue = data.result[0].moisturesensor;
        updatebmeBox(lastbmeValue);
        // soil mouisture
        var lastsoilValue = data.result[0].anemometer;
        updatesoilBox(lastsoilValue);
        // contractless
        var lastlessValue = data.result[0].windvane;
        updatelessBox(lastlessValue);
        // weightenning sensor
        var lastweigtValue = data.result[0].currentsensor;
        updateweigtBox(lastweigtValue);
        // ACS712
        var lastacsValue = data.result[0].rainintensity;
        updateacsBox(lastacsValue);


    })
    .catch(error => console.error('Error:', error));



// Mengambil data dari API setiap menit
function fetchTableData() {
    fetch('https://vps.isi-net.org:5000/GetDataGistingNew')
        .then(response => response.json())
        .then(data => {
            const dataBody = document.getElementById('data-body');
            dataBody.innerHTML = ''; // Bersihkan isi tbody sebelum menambahkan data baru

            data.result.slice(0, 10).forEach((item, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                  <td>${index + 1}</td>
                  <td>${item.datetime}</td>
                  <td>${item.humidity_280}</td>
                  <td>${item.pressure_280}</td>
                  <td>${item.temperature_280}</td>
                  <td>${item.temperature_388}</td>
                  <td>${item.pressure_388}</td>
                  <td>${item.phsensor}</td>
                  <td>${item.tdssensor}</td>
                  <td>${item.moisturesensor}</td>
                  <td>${item.anemometer}</td>
                  <td>${item.windvane}</td>
                  <td>${item.currentsensor}</td>
                  <td>${item.rainintensity}</td>
                `;

                dataBody.appendChild(row);
            });
        })
        .catch(error => console.error('Ada error:', error));
}

// Panggil fetchTableData untuk pertama kali
fetchTableData();
// Panggil fetchTableData secara berkala setiap 10 menit
setInterval(fetchTableData, 2000);

// Grafik Suhu Air Permukaan
fetch('https://vps.isi-net.org:5000/GetDataGistingNew')
  .then(response => response.json())
  .then(data => {
      const result = data.result;
      const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

      const labels = latestData.map(item => item.datetime).reverse();
      const suhuPH = latestData.map(item => item.pressure_280).reverse();

      const ctx = document.getElementById('myChart').getContext('2d');
      new Chart(ctx, {
          type: 'line',
          data: {
              labels: labels,
              datasets: [{
                  label: 'Sensor PH',
                  data: suhuPH,
                  borderColor: '#C21010',
                  tension: 0.1
              }]
          }
      });
  })
  .catch(error => console.error('Error:', error));

// Grafik Suhu Air Dasar
fetch('https://vps.isi-net.org:5000/GetDataGistingNew')
  .then(response => response.json())
  .then(data => {
      const result = data.result;
      const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

      const labels = latestData.map(item => item.datetime).reverse();
      const sensorTDS = latestData.map(item => item.temperature_280).reverse();

      const ctx = document.getElementById('ChartSuhuDasar').getContext('2d');
      new Chart(ctx, {
          type: 'line',
          data: {
              labels: labels,
              datasets: [{
                  label: 'SensorTDS',
                  data: sensorTDS,
                  borderColor: '#FFA500',
                  tension: 0.1
              }]
          }
      });
  })
  .catch(error => console.error('Error:', error));

//   Grafik DS18B20

fetch('https://vps.isi-net.org:5000/GetDataGistingNew')
  .then(response => response.json())
  .then(data => {
      const result = data.result;
      const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

      const labels = latestData.map(item => item.datetime).reverse();
      const sensorDS18B20 = latestData.map(item => item.temperature_388).reverse();

      const ctx = document.getElementById('ChartDS18B20').getContext('2d');
      new Chart(ctx, {
          type: 'line',
          data: {
              labels: labels,
              datasets: [{
                  label: 'SensorDS18B20',
                  data: sensorDS18B20,
                  borderColor: '#35A29F',
                  tension: 0.1
              }]
          }
      });
  })
  .catch(error => console.error('Error:', error));

//   grafik Rain rouge

fetch('https://vps.isi-net.org:5000/GetDataGistingNew')
  .then(response => response.json())
  .then(data => {
      const result = data.result;
      const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

      const labels = latestData.map(item => item.datetime).reverse();
      const sensorRainRouge = latestData.map(item => item.pressure_388).reverse();

      const ctx = document.getElementById('ChartRainRouge').getContext('2d');
      new Chart(ctx, {
          type: 'line',
          data: {
              labels: labels,
              datasets: [{
                  label: 'SensorRainRouge',
                  data: sensorRainRouge,
                  borderColor: '#800080',
                  tension: 0.1
              }]
          }
      });
  })
  .catch(error => console.error('Error:', error));

//   grafik Anemometer

fetch('https://vps.isi-net.org:5000/GetDataGistingNew')
  .then(response => response.json())
  .then(data => {
      const result = data.result;
      const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

      const labels = latestData.map(item => item.datetime).reverse();
      const sensorAnemometer = latestData.map(item => item.phsensor).reverse();

      const ctx = document.getElementById('ChartAnemometer').getContext('2d');
      new Chart(ctx, {
          type: 'line',
          data: {
              labels: labels,
              datasets: [{
                  label: 'SensorAnemometer',
                  data: sensorAnemometer,
                  borderColor: '#35A29F',
                  tension: 0.1
              }]
          }
      });
  })
  .catch(error => console.error('Error:', error));

// grafik Wind Wave direction


fetch('https://vps.isi-net.org:5000/GetDataGistingNew')
  .then(response => response.json())
  .then(data => {
      const result = data.result;
      const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

      const labels = latestData.map(item => item.datetime).reverse();
      const sensorwindwave = latestData.map(item => item.tdssensor).reverse();

      const ctx = document.getElementById('Chartwindwave').getContext('2d');
      new Chart(ctx, {
          type: 'line',
          data: {
              labels: labels,
              datasets: [{
                  label: 'Sensorwindwave',
                  data: sensorwindwave,
                  borderColor: '#00FF00',
                  tension: 0.1
              }]
          }
      });
  })
  .catch(error => console.error('Error:', error));

//   grafik Water Flow


fetch('https://vps.isi-net.org:5000/GetDataGistingNew')
  .then(response => response.json())
  .then(data => {
      const result = data.result;
      const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

      const labels = latestData.map(item => item.datetime).reverse();
      const sensorwaterflow = latestData.map(item => item.moisturesensor).reverse();

      const ctx = document.getElementById('Chartwaterflow').getContext('2d');
      new Chart(ctx, {
          type: 'line',
          data: {
              labels: labels,
              datasets: [{
                  label: 'Sensorwaterflow',
                  data: sensorwaterflow,
                  borderColor: '#FFFF00',
                  tension: 0.1
              }]
          }
      });
  })
  .catch(error => console.error('Error:', error));

//   grafik BME Sensor

fetch('https://vps.isi-net.org:5000/GetDataGistingNew')
  .then(response => response.json())
  .then(data => {
      const result = data.result;
      const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

      const labels = latestData.map(item => item.datetime).reverse();
      const sensorBME = latestData.map(item => item.anemometer).reverse();

      const ctx = document.getElementById('ChartBME').getContext('2d');
      new Chart(ctx, {
          type: 'line',
          data: {
              labels: labels,
              datasets: [{
                  label: 'SensorBME',
                  data: sensorBME,
                  borderColor: '#FF00FF',
                  tension: 0.1
              }]
          }
      });
  })
  .catch(error => console.error('Error:', error));

//   Grafik Soil
fetch('https://vps.isi-net.org:5000/GetDataGistingNew')
  .then(response => response.json())
  .then(data => {
      const result = data.result;
      const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

      const labels = latestData.map(item => item.datetime).reverse();
      const sensorsoil = latestData.map(item => item.humidity_280).reverse();

      const ctx = document.getElementById('Chartsoil').getContext('2d');
      new Chart(ctx, {
          type: 'line',
          data: {
              labels: labels,
              datasets: [{
                  label: 'Sensorsoil',
                  data: sensorsoil,
                  borderColor: '#000000',
                  tension: 0.1
              }]
          }
      });
  })
  .catch(error => console.error('Error:', error));

//   grafik contractless

fetch('https://vps.isi-net.org:5000/GetDataGistingNew')
  .then(response => response.json())
  .then(data => {
      const result = data.result;
      const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

      const labels = latestData.map(item => item.datetime).reverse();
      const sensorless = latestData.map(item => item.currentsensor).reverse();

      const ctx = document.getElementById('Chartless').getContext('2d');
      new Chart(ctx, {
          type: 'line',
          data: {
              labels: labels,
              datasets: [{
                  label: 'Sensorless',
                  data: sensorless,
                  borderColor: '#35A29F',
                  tension: 0.1
              }]
          }
      });
  })
  .catch(error => console.error('Error:', error));

//   Grafik Weighting Sensor

fetch('https://vps.isi-net.org:5000/GetDataGistingNew')
  .then(response => response.json())
  .then(data => {
      const result = data.result;
      const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

      const labels = latestData.map(item => item.datetime).reverse();
      const sensorweighting = latestData.map(item => item.rainintensity).reverse();

      const ctx = document.getElementById('Chartweighting').getContext('2d');
      new Chart(ctx, {
          type: 'line',
          data: {
              labels: labels,
              datasets: [{
                  label: 'Sensorweighting',
                  data: sensorweighting,
                  borderColor: '#FF000080',
                  tension: 0.1
              }]
          }
      });
  })
  .catch(error => console.error('Error:', error));

  fetch('https://vps.isi-net.org:5000/GetDataGistingNew')
  .then(response => response.json())
  .then(data => {
      const result = data.result;
      const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

      const labels = latestData.map(item => item.datetime).reverse();
      const sensorACS = latestData.map(item => item.rainstatus).reverse();

      const ctx = document.getElementById('ChartACS').getContext('2d');
      new Chart(ctx, {
          type: 'line',
          data: {
              labels: labels,
              datasets: [{
                  label: 'SensorACS',
                  data: sensorACS,
                  borderColor: '#0000FF40',
                  tension: 0.1
              }]
          }
      });
  })
  .catch(error => console.error('Error:', error));