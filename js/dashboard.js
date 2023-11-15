function fetchData() {
    // Fetch data from GetDataTopic1
    fetch('https://vps.isi-net.org:3333/GetDataTopic1')
      .then(response => response.json())
      .then(data => {
        // Update tampilan dengan data yang diterima dari server
        console.log(data);
        document.getElementById('sensor_ph').innerText = data.result[0].ph;
        document.getElementById('tdssensor').innerText = data.result[0].tds;
        document.getElementById('rainrouge').innerText = data.result[0].rain;
        document.getElementById('suhuair').innerText = data.result[0].suhu_air;
        document.getElementById('windwave').innerText = data.result[0].winddirection;
        document.getElementById('windspeed').innerText = data.result[0].kecepatan_angin;
        document.getElementById('sensor_berat1').innerText = data.result[0].berat1;
        document.getElementById('infrared_1').innerText = data.result[0].infrared1;
      })
      .catch(error => console.error('Error GetDataTopic1:', error));
  
    // Fetch data from GetDataTopic2
    fetch('https://vps.isi-net.org:3333/GetDataTopic2')
      .then(response => response.json())
      .then(data => {
        // Update tampilan dengan data yang diterima dari server
        console.log(data);
        document.getElementById('waterflow1').innerText = data.result[0].waterflow1;
        document.getElementById('waterflow2').innerText = data.result[0].waterflow2;
        document.getElementById('waterflow3').innerText = data.result[0].waterflow3;
        document.getElementById('waterflow4').innerText = data.result[0].waterflow4;
        document.getElementById('soilmoisture1').innerText = data.result[0].soilmoisture1;
        document.getElementById('soilmoisture2').innerText = data.result[0].soilmoisture2;
        document.getElementById('soilmoisture3').innerText = data.result[0].soilmoisture3;
        document.getElementById('soilmoisture4').innerText = data.result[0].soilmoisture4;
      })
      .catch(error => console.error('Error GetDataTopic2:', error));
  
    // Fetch data from GetDataTopic3
    fetch('https://vps.isi-net.org:3333/GetDataTopic3')
      .then(response => response.json())
      .then(data => {
        // Update tampilan dengan data yang diterima dari server
        console.log(data);
        document.getElementById('sensor_berat2').innerText = data.result[0].berat2;
        document.getElementById('sensor_berat3').innerText = data.result[0].berat3;
        document.getElementById('sensor_berat4').innerText = data.result[0].berat4;
        document.getElementById('tekanan_udara').innerText = data.result[0].tekanan_udara;
        document.getElementById('suhu_ruangan').innerText = data.result[0].suhu;
        document.getElementById('pompa_nutrisi').innerText = data.result[0].pompanutrisi;
        document.getElementById('pompa_air').innerText = data.result[0].pompaair;
        document.getElementById('lampu_uv').innerText = data.result[0].lampuuv;
      })
      .catch(error => console.error('Error GetDataTopic3:', error));
  }
  setInterval(fetchData, 300000);
  


  fetchData();

function fetchData() {
    Promise.all([
        fetch('https://vps.isi-net.org:3333/GetDataTopic1').then(response => response.json()),
        fetch('https://vps.isi-net.org:3333/GetDataTopic2').then(response => response.json()),
        fetch('https://vps.isi-net.org:3333/GetDataTopic3').then(response => response.json())
    ])
        .then(dataArray => {
            const data1 = dataArray[0];
            const data2 = dataArray[1];
            const data3 = dataArray[2];

            updateBox('sensor_ph', data1.result[0].ph, { min: 0, max: 100 });
            updateBox('tdssensor', data1.result[0].tds, { min: 0.01, max: 100 });
            updateBox('rainrouge', data1.result[0].rain, { min: 3, max: 14 });
            updateBox('suhuair', data1.result[0].suhu_air, { min: 4, max: 100 });
            updateBox('windwave', data1.result[0].winddirection, { min: 4, max: 1000 });
            updateBox('windspeed', data1.result[0].kecepatan_angin, { min: 4, max: 1000 });
            updateBox('berat_sensor', data1.result[0].berat1, { min: 4, max: 10000 });
            updateBox('contactless1', data1.result[0].infrared1, { min: 4, max: 100 });
            updateBox('infrared_2', data1.result[0].infrared2, { min: 4, max: 100 });
            updateBox('infrared_3', data1.result[0].infrared3, { min: 4, max: 100 });

            updateBox('waterflow1', data2.result[0].waterflow1, { min: 0.01, max: 100 });
            updateBox('waterflow2', data2.result[0].waterflow2, { min: 0.01, max: 100 });
            updateBox('waterflow3', data2.result[0].waterflow3, { min: 0.01, max: 100 });
            updateBox('waterflow4', data2.result[0].waterflow4, { min: 0.01, max: 100 });
            updateBox('soilmoisture1', data2.result[0].soilmoisture1, { min: 2, max: 100 });
            updateBox('soilmoisture2', data2.result[0].soilmoisture2, { min: 2, max: 100 });
            updateBox('soilmoisture3', data2.result[0].soilmoisture3, { min: 2, max: 100 });
            updateBox('soilmoisture4', data2.result[0].soilmoisture4, { min: 2, max: 100 });
            updateLampUVBox('lampu_uv', data3.result[0].lampuuv, { min: 0, max: 1 });
            updatePompaAirBox('pompa_air', data3.result[0].pompaair, { min: 0, max: 1 });
            updatePompaNutrisiBox('pompa_nutrisi', data3.result[0].pompanutrisi, { min: 0, max: 1 });
            updateBox('sensor_berat2', data3.result[0].berat2, { min: 0, max: 10000 });
            updateBox('sensor_berat3', data3.result[0].berat3, { min: 0, max: 10000 });
            updateBox('sensor_berat4', data3.result[0].berat4, { min: 0, max: 10000 });
            updateBox('suhu_ruangan', data3.result[0].suhu, { min: 32, max: 200 });
            updateBox('tekanan_udara', data3.result[0].tekanan_udara, { min: 0, max: 1000000 });
        })
        .catch(error => console.error('Error:', error));
}

function updateBox(elementId, value, range) {
    var box = document.getElementById(elementId);

    if (value < range.min || value > range.max) {
        box.parentElement.style.backgroundColor = '#ffff00';
        box.innerHTML = value.toFixed(2);
    } else {
        box.parentElement.style.backgroundColor = '#16FF00';
        box.innerHTML = value.toFixed(2);
    }
}
// LAMPU UV WARNA
function updateLampUVBox(elementId, value) {
    var box = document.getElementById(elementId);

    var status = (value === 1) ? 'Aktif' : 'Tidak Aktif';
    var backgroundColor = (value === 1) ? '#007acc' : '#ffffff';

    box.parentElement.style.backgroundColor = backgroundColor;
    box.innerHTML = status;
}

// POMPA AIR
function updatePompaAirBox(elementId, value) {
    var box = document.getElementById(elementId);

    var status = (value === 1) ? 'Aktif' : 'Tidak Aktif';
    var backgroundColor = (value === 1) ? '#007acc' : '#ffffff';

    box.parentElement.style.backgroundColor = backgroundColor;
    box.innerHTML = status;
}
// POMPA NUTRISI
function updatePompaNutrisiBox(elementId, value) {
    var box = document.getElementById(elementId);

    var status = (value === 1) ? 'Aktif' : 'Tidak Aktif';
    var backgroundColor = (value === 1) ? '#007acc' : '#ffffff';

    box.parentElement.style.backgroundColor = backgroundColor;
    box.innerHTML = status;
}


  
  


// // TABLEEEEEE REALTIME


// function fetchData(url) {
//     return fetch(url).then(response => response.json());
//   }
  
//   function updateTableData() {
//     const dataBody = document.getElementById('data-body');
  
//     // Fetch data from the API
//     Promise.all([
//       fetchData('https://vps.isi-net.org:3333/GetDataTopic1'),
//       fetchData('https://vps.isi-net.org:3333/GetDataTopic2'),
//     ])
//       .then(responses => {
//         // Clear the tbody before adding new data
//         dataBody.innerHTML = '';
  
//         // Process each response
//         responses.forEach(response => {
//           if (response && response.result) {
//             const data = response.result;
  
//             // Take the latest 10 items
//             const slicedData = data.slice(0, 5);
  
//             // Add data to the table
//             slicedData.forEach((item, index) => {
//               console.log('Timestamp:', item.timestamp); // Tambahkan ini untuk debug
  
//               const row = document.createElement('tr');
//               row.innerHTML = `
//                 <td>${index + 1}</td>
//                 <td>${item.timestamp !== undefined ? item.timestamp : 'N/A'}</td>
//                 <td>${item.ph !== undefined ? item.ph : 'N/A'}</td>
//                 <td>${item.tds !== undefined ? item.tds : 'N/A'}</td>
//                 <td>${item.rain !== undefined ? item.rain : 'N/A'}</td>
//                 <td>${item.suhu_air !== undefined ? item.suhu_air : 'N/A'}</td>
//               `;
  
//               dataBody.appendChild(row);
//             });
//           } else {
//             console.error('Invalid response format:', response);
//           }
//         });
//       })
//       .catch(error => console.error('Error:', error));
//   }
  
//   // Update the table every 5 seconds (adjust the interval as needed)
//   setInterval(updateTableData, 5000);
  
//   // Initial table update
//   updateTableData();
  
  
  

// // Grafik Suhu PH
fetch('https://vps.isi-net.org:3333/GetDataTopic1')
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


// // Grafik TDS
fetch('https://vps.isi-net.org:3333/GetDataTopic1')
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
                  label: 'SensorTDS',
                  data: sensorTDS,
                  borderColor: '#FF0000',
                  tension: 0.1
              }]
          }
      });
  })
  .catch(error => console.error('Error:', error));

// //   GRAFIK SUHU AIR
  fetch('https://vps.isi-net.org:3333/GetDataTopic1')
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
                  label: ' SUHU AIR',
                  data: sensorsuhuair,
                  borderColor: '#FF0000',
                  tension: 0.1
              }]
          }
      });
  })
  .catch(error => console.error('Error:', error));

// //GRAFIK  RAIN ROUGE

  fetch('https://vps.isi-net.org:3333/GetDataTopic1')
  .then(response => response.json())
  .then(data => {
      const result = data.result;
      const latestData = result.slice(Math.max(result.length - 60, 0)); // Ambil 60 data terbaru

      const labels = latestData.map(item => item.timestamp).reverse();
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

// // Grafik Wind direction

fetch('https://vps.isi-net.org:3333/GetDataTopic1')
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
                label: ' SENSOR WIND DIRECTION',
                data: sensorwinddir,
                borderColor: '#0000FF',
                tension: 0.1
            }]
        }
    });
})
.catch(error => console.error('Error:', error));

// // GRAFIK WIND SPEED
fetch('https://vps.isi-net.org:3333/GetDataTopic1')
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
                label: ' SENSOR WIND SPEED',
                data: sensorwindspeed,
                borderColor: '#FFFF00',
                tension: 0.1
            }]
        }
    });
})
.catch(error => console.error('Error:', error));

// GRAFIK BERAT
Promise.all([
  fetch('https://vps.isi-net.org:3333/GetDataTopic1').then(response => response.json()),
  fetch('https://vps.isi-net.org:3333/GetDataTopic3').then(response => response.json())
])
  .then(([data1, data3]) => {
      const result1 = data1.result;
      const result3 = data3.result;

      const latestData1 = result1.slice(Math.max(result1.length - 60, 0)); // Ambil 60 data terbaru
      const latestData3 = result3.slice(Math.max(result3.length - 60, 0)); // Ambil 60 data terbaru

      const sensorberat1 = latestData1.map(item => item.berat1).reverse();
      const sensorberat2 = latestData3.map(item => item.berat2).reverse();
      const sensorberat3 = latestData3.map(item => item.berat3).reverse();
      const sensorberat4 = latestData3.map(item => item.berat4).reverse();
      const labels = latestData3.map(item => item.timestamp).reverse(); // Definisikan labels

      const ctx = document.getElementById('ChartBerat').getContext('2d');
      new Chart(ctx, {
          type: 'line',
          data: {
              labels: labels, // Gunakan labels yang telah didefinisikan
              datasets: [
                  {
                      label: 'berat',
                      data: sensorberat1,
                      borderColor: '#C21010',
                      tension: 0.1
                  },
                  {
                      label: 'berat2',
                      data: sensorberat2,
                      borderColor: '#00CED1',
                      tension: 0.1
                  },
                  {
                      label: 'berat3',
                      data: sensorberat3,
                      borderColor: '#800080',
                      tension: 0.1
                  },
                  {
                      label: 'berat 4',
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
fetch('https://vps.isi-net.org:3333/GetDataTopic2')
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
                  label: 'Waterflow Meja 1',
                  data: sensorflow1,
                  borderColor: '#C21010',
                  tension: 0.1
              },
              {
                  label: 'Waterflow Meja 2',
                  data: sensorflow2,
                  borderColor: '#00CED1',
                  tension: 0.1
              },
              {
                  label: 'Waterflow Meja 3',
                  data: sensorflow3,
                  borderColor: '#800080',
                  tension: 0.1
              },
              {
                  label: 'Waterflow Meja 4',
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
fetch('https://vps.isi-net.org:3333/GetDataTopic3')
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
                label: ' SENSOR SUHU RUANGAN',
                data: sensorruangan,
                borderColor: '#800080',
                tension: 0.1
            }]
        }
    });
})
.catch(error => console.error('Error:', error));
// // GRAFIK INFRARED
fetch('https://vps.isi-net.org:3333/GetDataTopic2')
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
                  label: 'Soil Mouisture 1',
                  data: sensorsoil1,
                  borderColor: '#C21010',
                  tension: 0.1
              },
              {
                  label: 'Soil Mouisture 2',
                  data: sensorsoil2,
                  borderColor: '#00CED1',
                  tension: 0.1
              },
              {
                  label: 'Soil Mouisture 3',
                  data: sensorsoil3,
                  borderColor: '#800080',
                  tension: 0.1
              },
              {
                label: 'Soil Mouisture 4',
                data: sensorsoil4,
                borderColor: '#FFFF00',
                tension: 0.1
            }
          ]
      }
  });
  })
  .catch(error => console.error('Error:', error));

  // Grafik Soil
  fetch('https://vps.isi-net.org:3333/GetDataTopic1')
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
                  label: 'Infrared 1',
                  data: sensorinfra1,
                  borderColor: '#C21010',
                  tension: 0.1
              },
              {
                  label: 'Infrared 2',
                  data: sensorinfra2,
                  borderColor: '#00CED1',
                  tension: 0.1
              },
              {
                  label: 'Infrared 3',
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
fetch('https://vps.isi-net.org:3333/GetDataTopic3')
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
                label: ' SENSOR TEKANAN UDARA',
                data: sensortekanan,
                borderColor: '#2E8B57',
                tension: 0.1
            }]
        }
    });
})
.catch(error => console.error('Error:', error));


