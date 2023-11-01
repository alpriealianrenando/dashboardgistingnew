function fetchData() {
    fetch('https://vps.isi-net.org:7890/GetDataPertanianNew')
      .then(response => response.json())
      .then(data => {
        // Update tampilan dengan data yang diterima dari server
        console.log(data);
        document.getElementById('sensor_ph').innerText = data.result[0].ph;
        document.getElementById('tdssensor').innerText = data.result[0].tds;
        document.getElementById('rainrouge').innerText = data.result[0].rain;
        document.getElementById('suhuair').innerText = data.result[0].suhu_air;
        document.getElementById('windwave').innerText = data.result[0].winddir;
        document.getElementById('windspeed').innerText = data.result[0].windspeed;
        document.getElementById('waterflow1').innerText = data.result[0].waterflow1;
        document.getElementById('berat_sensor').innerText = data.result[0].berat;
        document.getElementById('suhu_ruangan').innerText = data.result[0].suhu;
        document.getElementById('tekanan_udara').innerText = data.result[0].tekanan_udara;
        document.getElementById('ketinggian').innerText = data.result[0].ketinggian;
        document.getElementById('contactless').innerText = data.result[0].infrared;
        document.getElementById('waterflow2').innerText = data.result[0].waterflow2;
        document.getElementById('waterflow3').innerText = data.result[0].waterflow3;
        document.getElementById('waterflow4').innerText = data.result[0].waterflow4;


      })
      .catch(error => console.error('Error:', error));
  }

setInterval(fetchData, 2000);

fetchData();

function fetchData() {
    fetch(`https://vps.isi-net.org:7890/GetDataPertanianNew`)
        .then(response => response.json())
        .then(data => {
            var lastValue = data.result[0].ph;
            updatePhBox(lastValue);
            var lastValue = data.result[0].tds;
            updatetdsBox(lastValue);
            var lastValue = data.result[0].rain;
            updaterainBox(lastValue);
            var lastValue = data.result[0].suhu_air;
            updatesuhuBox(lastValue);
            var lastValue = data.result[0].winddir;
            updatewindBox(lastValue);
            var lastValue = data.result[0].windspeed;
            updatewindsBox(lastValue);
            var lastValue = data.result[0].waterflow1;
            updateflowBox(lastValue);
            var lastValue = data.result[0].berat;
            updateberatBox(lastValue);
            var lastValue = data.result[0].suhu;
            updateairBox(lastValue);
            var lastValue = data.result[0].infrared;
            updateinfraBox(lastValue);
            var lastValue = data.result[0].tekanan_udara;
            updateudaraBox(lastValue);
            var lastValue = data.result[0].ketinggian;
            updatetinggiBox(lastValue);
            var lastValue = data.result[0].waterflow2;
            updateflow2Box(lastValue);
            var lastValue = data.result[0].waterflow3;
            updateflow3Box(lastValue);
            var lastValue = data.result[0].waterflow4;
            updateflow4Box(lastValue);
          
          
        })
        .catch(error => console.error('Error:', error));
}

function updatePhBox(phValue) {
    var phBox = document.getElementById('sensor_ph');
    if (phValue < 0 || phValue > 14) { // Sesuaikan dengan rentang nilai pH yang sesuai
        phBox.parentElement.style.backgroundColor = '#FF0303';
        phBox.innerHTML = phValue.toFixed(2);
    } else {
        phBox.parentElement.style.backgroundColor = '#16FF00';
        phBox.innerHTML = phValue.toFixed(2);
    }
}
// WArna TDS SENSORR
function updatetdsBox(tdsValue) {
    var tdsBox = document.getElementById('tdssensor');
    if (tdsValue < 0 || tdsValue > 14) { // Sesuaikan dengan rentang nilai pH yang sesuai
        tdsBox.parentElement.style.backgroundColor = '#FF0303';
        tdsBox.innerHTML = tdsValue.toFixed(2);
    } else {
        tdsBox.parentElement.style.backgroundColor = '#16FF00';
        tdsBox.innerHTML = tdsValue.toFixed(2);
    }
}
// Warna Sensor Rain
function updaterainBox(rainValue) {
    var rainBox = document.getElementById('rainrouge');
    if (rainValue < 0 || rainValue > 14) { // Sesuaikan dengan rentang nilai pH yang sesuai
        rainBox.parentElement.style.backgroundColor = '#FF0303';
        rainBox.innerHTML = rainValue.toFixed(2);
    } else {
        rainBox.parentElement.style.backgroundColor = '#16FF00';
        rainBox.innerHTML = rainValue.toFixed(2);
    }
}
// Suhu Air
function updatesuhuBox(suhuValue) {
    var suhuBox = document.getElementById('suhuair');
    if (suhuValue < 0 || suhuValue > 14) { // Sesuaikan dengan rentang nilai pH yang sesuai
        suhuBox.parentElement.style.backgroundColor = '#FF0303';
        suhuBox.innerHTML = suhuValue.toFixed(2);
    } else {
        suhuBox.parentElement.style.backgroundColor = '#16FF00';
        suhuBox.innerHTML = suhuValue.toFixed(2);
    }
}
// Wind direction
function updatewindBox(windValue) {
    var windBox = document.getElementById('windwave');
    if (windValue < 0 || windValue > 14) { // Sesuaikan dengan rentang nilai pH yang sesuai
        windBox.parentElement.style.backgroundColor = '#FF0303';
        windBox.innerHTML = windValue.toFixed(2);
    } else {
        windBox.parentElement.style.backgroundColor = '#16FF00';
        windBox.innerHTML = windValue.toFixed(2);
    }
}
// windspeed
function updatewindsBox(windsValue) {
    var windsBox = document.getElementById('windspeed');
    if (windsValue < 0 || windsValue > 14) { // Sesuaikan dengan rentang nilai pH yang sesuai
        windsBox.parentElement.style.backgroundColor = '#FF0303';
        windsBox.innerHTML = windsValue.toFixed(2);
    } else {
        windsBox.parentElement.style.backgroundColor = '#16FF00';
        windsBox.innerHTML = windsValue.toFixed(2);
    }
}
// Sensor WaterFlow
function updateflowBox(flowValue) {
    var flowBox = document.getElementById('waterflow1');
    if (flowValue < 0 || flowValue > 14) { // Sesuaikan dengan rentang nilai pH yang sesuai
        flowBox.parentElement.style.backgroundColor = '#FF0303';
        flowBox.innerHTML =   flowValue.toFixed(2);
    } else {
        flowBox.parentElement.style.backgroundColor = '#16FF00';
        flowBox.innerHTML = flowValue.toFixed(2);
    }
}
// Sensor Berat
function updateberatBox(beratValue) {
    var beratBox = document.getElementById('berat_sensor');
    if (beratValue < 0 || beratValue > 14) { // Sesuaikan dengan rentang nilai pH yang sesuai
        beratBox.parentElement.style.backgroundColor = '#FF0303';
        beratBox.innerHTML =   beratValue.toFixed(2);
    } else {
        beratBox.parentElement.style.backgroundColor = '#16FF00';
        beratBox.innerHTML = beratValue.toFixed(2);
    }
}
// sensor Suhu
function updateairBox(airValue) {
    var airBox = document.getElementById('suhu_ruangan');
    if (airValue < 0 || airValue > 14) { // Sesuaikan dengan rentang nilai pH yang sesuai
        airBox.parentElement.style.backgroundColor = '#FF0303';
        airBox.innerHTML =   airValue.toFixed(2);
    } else {
        airBox.parentElement.style.backgroundColor = '#16FF00';
        airBox.innerHTML =   airValue.toFixed(2);
    }
}
// sensor WarnaInrared
function updateinfraBox(infraValue) {
    var infraBox = document.getElementById('contactless');
    if (infraValue < 0 || infraValue > 14) { // Sesuaikan dengan rentang nilai pH yang sesuai
        infraBox.parentElement.style.backgroundColor = '#FF0303';
        infraBox.innerHTML =   infraValue.toFixed(2);
    } else {
        infraBox.parentElement.style.backgroundColor = '#16FF00';
        infraBox.innerHTML =   infraValue.toFixed(2);
    }
}
// Udara
function updateudaraBox(udaraValue) {
    var udaraBox = document.getElementById('tekanan_udara');
    if (udaraValue < 0 || udaraValue > 14) { // Sesuaikan dengan rentang nilai pH yang sesuai
        udaraBox.parentElement.style.backgroundColor = '#FF0303';
        udaraBox.innerHTML =   udaraValue.toFixed(2);
    } else {
        udaraBox.parentElement.style.backgroundColor = '#16FF00';
        udaraBox.innerHTML =   udaraValue.toFixed(2);
    }
}
// Sensor Ketinggian
function updatetinggiBox(tinggiValue) {
    var tinggiBox = document.getElementById('ketinggian');
    if (tinggiValue < 0 || tinggiValue > 14) { // Sesuaikan dengan rentang nilai pH yang sesuai
        tinggiBox.parentElement.style.backgroundColor = '#FF0303';
        tinggiBox.innerHTML =   tinggiValue.toFixed(2);
    } else {
        tinggiBox.parentElement.style.backgroundColor = '#16FF00';
        tinggiBox.innerHTML =   tinggiValue.toFixed(2);
    }
}
// Waterflow 2
function updateflow2Box(flow2Value) {
    var flow2Box = document.getElementById('waterflow2');
    if (flow2Value < 0 || flow2Value > 14) { // Sesuaikan dengan rentang nilai pH yang sesuai
        flow2Box.parentElement.style.backgroundColor = '#FF0303';
        flow2Box.innerHTML =   flow2Value.toFixed(2);
    } else {
        flow2Box.parentElement.style.backgroundColor = '#16FF00';
        flow2Box.innerHTML =   flow2Value.toFixed(2);
    }
}
// Waterflow 3
function updateflow3Box(flow3Value) {
    var flow3Box = document.getElementById('waterflow3');
    if (flow3Value < 0 || flow3Value > 14) { // Sesuaikan dengan rentang nilai pH yang sesuai
        flow3Box.parentElement.style.backgroundColor = '#FF0303';
        flow3Box.innerHTML =   flow3Value.toFixed(2);
    } else {
        flow3Box.parentElement.style.backgroundColor = '#16FF00';
        flow3Box.innerHTML =   flow3Value.toFixed(2);
    }
}
// Water flow 4
function updateflow4Box(flow4Value) {
    var flow4Box = document.getElementById('waterflow4');
    if (flow4Value < 0 || flow4Value > 14) { // Sesuaikan dengan rentang nilai pH yang sesuai
        flow4Box.parentElement.style.backgroundColor = '#FF0303';
        flow4Box.innerHTML =   flow4Value.toFixed(2);
    } else {
        flow4Box.parentElement.style.backgroundColor = '#16FF00';
        flow4Box.innerHTML =   flow4Value.toFixed(2);
    }
}
// TABLEEEEEE


function fetchTableData() {
    fetch('https://vps.isi-net.org:7890/GetDataPertanianNew')
        .then(response => response.json())
        .then(data => {
            const dataBody = document.getElementById('data-body');
            dataBody.innerHTML = ''; // Bersihkan isi tbody sebelum menambahkan data baru

            data.result.slice(0, 10).forEach((item, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                  <td>${index + 1}</td>
                  <td>${item.datetime}</td>
                  <td>${item.ph}</td>
                  <td>${item.tds}</td>
                  <td>${item.rain}</td>
                  <td>${item.suhu_air}</td>
                  <td>${item.winddir}</td>
                  <td>${item.windspeed}</td>
                  <td>${item.waterflow1}</td>
                  <td>${item.waterflow2}</td>
                  <td>${item.waterflow3}</td>
                  <td>${item.waterflow4}</td>
                  <td>${item.berat}</td>
                  <td>${item.suhu}</td>
                  <td>${item.tekanan_udara}</td>
                  <td>${item.ketinggian}</td>
                  <td>${item.infrared}</td>
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

// Grafik Suhu PH
fetch('https://vps.isi-net.org:7890/GetDataPertanianNew')
  .then(response => response.json())
  .then(data => {
      const result = data.result;
      const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru
      const suhuPH = latestData.map(item => item.ph).reverse();
      const labels = latestData.map(item => item.datetime).reverse(); // Definisikan labels
      const ctx = document.getElementById('myChart').getContext('2d');
      new Chart(ctx, {
          type: 'line',
          data: {
              labels: labels, // Gunakan labels yang telah didefinisikan
              datasets: [
                {
                  label: 'Sensor PH',
                  data: suhuPH,
                  borderColor: '#00FF00',
                  tension: 0.1
                }
              ]
          }
      });
  })
  .catch(error => console.error('Error:', error));


// Grafik TDS
fetch('https://vps.isi-net.org:7890/GetDataPertanianNew')
  .then(response => response.json())
  .then(data => {
      const result = data.result;
      const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

      const labels = latestData.map(item => item.datetime).reverse();
      const sensorTDS = latestData.map(item => item.tds).reverse();

      const ctx = document.getElementById('ChartSuhuDasar').getContext('2d');
      new Chart(ctx, {
          type: 'line',
          data: {
              labels: labels,
              datasets: [{
                  label: 'SensorTDS',
                  data: sensorTDS,
                  borderColor: '#FFFFFF',
                  tension: 0.1
              }]
          }
      });
  })
  .catch(error => console.error('Error:', error));

//   GRAFIK SUHU AIR
  fetch('https://vps.isi-net.org:7890/GetDataPertanianNew')
  .then(response => response.json())
  .then(data => {
      const result = data.result;
      const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

      const labels = latestData.map(item => item.datetime).reverse();
      const sensorsuhuair = latestData.map(item => item.suhu_air).reverse();

      const ctx = document.getElementById('Chartsuhuair').getContext('2d');
      new Chart(ctx, {
          type: 'line',
          data: {
              labels: labels,
              datasets: [{
                  label: ' SUHU AIR',
                  data: sensorsuhuair,
                  borderColor: '#FF0000',
                  tension: 0.1
              }]
          }
      });
  })
  .catch(error => console.error('Error:', error));

//GRAFIK  RAIN ROUGE

  fetch('https://vps.isi-net.org:7890/GetDataPertanianNew')
  .then(response => response.json())
  .then(data => {
      const result = data.result;
      const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

      const labels = latestData.map(item => item.datetime).reverse();
      const sensorrain = latestData.map(item => item.rain).reverse();

      const ctx = document.getElementById('ChartRainRouge').getContext('2d');
      new Chart(ctx, {
          type: 'line',
          data: {
              labels: labels,
              datasets: [{
                  label: ' SENSOR RAIN ROUGE',
                  data: sensorrain,
                  borderColor: '#00FF00',
                  tension: 0.1
              }]
          }
      });
  })
  .catch(error => console.error('Error:', error));

// Grafik Wind direction

fetch('https://vps.isi-net.org:7890/GetDataPertanianNew')
.then(response => response.json())
.then(data => {
    const result = data.result;
    const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

    const labels = latestData.map(item => item.datetime).reverse();
    const sensorwinddir = latestData.map(item => item.winddir).reverse();

    const ctx = document.getElementById('Chartwinddir').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: ' SENSOR WIND DIRECTION',
                data: sensorwinddir,
                borderColor: '#0000FF',
                tension: 0.1
            }]
        }
    });
})
.catch(error => console.error('Error:', error));

// GRAFIK WIND SPEED
fetch('https://vps.isi-net.org:7890/GetDataPertanianNew')
.then(response => response.json())
.then(data => {
    const result = data.result;
    const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

    const labels = latestData.map(item => item.datetime).reverse();
    const sensorwindspeed = latestData.map(item => item.windspeed).reverse();

    const ctx = document.getElementById('Chartwindspeed').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: ' SENSOR WIND SPEED',
                data: sensorwindspeed,
                borderColor: '#FFFF00',
                tension: 0.1
            }]
        }
    });
})
.catch(error => console.error('Error:', error));

// GRAFIK WATER FLOW 1 2 3 4
fetch('https://vps.isi-net.org:7890/GetDataPertanianNew')
  .then(response => response.json())
  .then(data => {
      const result = data.result;
      const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru
      const sensorflow1 = latestData.map(item => item.waterflow1).reverse();
      const sensorflow2 = latestData.map(item => item.waterflow2).reverse();
      const sensorflow3 = latestData.map(item => item.waterflow3).reverse();
      const sensorflow4 = latestData.map(item => item.waterflow4).reverse();
      const labels = latestData.map(item => item.datetime).reverse(); // Definisikan labels
      const ctx = document.getElementById('Chartwaterflow').getContext('2d');
      new Chart(ctx, {
          type: 'line',
          data: {
              labels: labels, // Gunakan labels yang telah didefinisikan
              datasets: [
                {
                  label: 'Water flow 1',
                  data: sensorflow1,
                  borderColor: '#C21010',
                  tension: 0.1
                },
                {
                  label: 'waterflow2',
                  data: sensorflow2,
                  borderColor: '#00CED1', // Warna garis yang berbeda untuk Sensor TDS
                  tension: 0.1
                },
                {
                    label: 'waterflow3',
                    data: sensorflow3,
                    borderColor: '#800080', // Warna garis yang berbeda untuk Sensor TDS
                    tension: 0.1
                  },
                  {
                    label: 'waterflow4',
                    data: sensorflow4,
                    borderColor: '#FFFF00', // Warna garis yang berbeda untuk Sensor TDS
                    tension: 0.1
                  }
              ]
          }
      });
  })
  .catch(error => console.error('Error:', error));

//GRAFIK BERAT
fetch('https://vps.isi-net.org:7890/GetDataPertanianNew')
.then(response => response.json())
.then(data => {
    const result = data.result;
    const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

    const labels = latestData.map(item => item.datetime).reverse();
    const sensorberat = latestData.map(item => item.berat).reverse();

    const ctx = document.getElementById('ChartBerat').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: ' SENSOR BERAT',
                data: sensorberat,
                borderColor: '#FFA500',
                tension: 0.1
            }]
        }
    });
})
.catch(error => console.error('Error:', error));

// Grafik Suhu Ruangan
fetch('https://vps.isi-net.org:7890/GetDataPertanianNew')
.then(response => response.json())
.then(data => {
    const result = data.result;
    const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

    const labels = latestData.map(item => item.datetime).reverse();
    const sensorruangan = latestData.map(item => item.suhu).reverse();

    const ctx = document.getElementById('Chartsuhuruangan').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: ' SENSOR SUHU RUANGAN',
                data: sensorruangan,
                borderColor: '#800080',
                tension: 0.1
            }]
        }
    });
})
.catch(error => console.error('Error:', error));
// GRAFIK INFRARED
fetch('https://vps.isi-net.org:7890/GetDataPertanianNew')
.then(response => response.json())
.then(data => {
    const result = data.result;
    const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

    const labels = latestData.map(item => item.datetime).reverse();
    const sensorinfra = latestData.map(item => item.infrared).reverse();

    const ctx = document.getElementById('Chartinfrared').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: ' SENSOR INFRARED',
                data: sensorinfra,
                borderColor: '#A52A2A',
                tension: 0.1
            }]
        }
    });
})
.catch(error => console.error('Error:', error));
// GRAFIK KETINGGIAN
fetch('https://vps.isi-net.org:7890/GetDataPertanianNew')
.then(response => response.json())
.then(data => {
    const result = data.result;
    const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

    const labels = latestData.map(item => item.datetime).reverse();
    const sensortinggi = latestData.map(item => item.ketinggian).reverse();

    const ctx = document.getElementById('Chartketinggian').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: ' SENSOR KETINGGIAN',
                data: sensortinggi,
                borderColor: '#FFA500',
                tension: 0.1
            }]
        }
    });
})
.catch(error => console.error('Error:', error));
// TEKANAN UDARA
// GRAFIK KETINGGIAN
fetch('https://vps.isi-net.org:7890/GetDataPertanianNew')
.then(response => response.json())
.then(data => {
    const result = data.result;
    const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

    const labels = latestData.map(item => item.datetime).reverse();
    const sensortekanan = latestData.map(item => item.tekanan_udara).reverse();

    const ctx = document.getElementById('Chartekanan').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: ' SENSOR TEKANAN UDARA',
                data: sensortekanan,
                borderColor: '#2E8B57',
                tension: 0.1
            }]
        }
    });
})
.catch(error => console.error('Error:', error));


