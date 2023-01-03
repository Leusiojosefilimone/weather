const cityContainer = document.querySelector('#citys');
const country = ["Maputo", "Xai-xai", "Inhambane", "Chimoio", "Beira", "Tete", "Quelimane", "Nampula", "Pemba", "Lichinga" ];
const loading = document.querySelector('.loading');

country.map((city) => {
    cityContainer.innerHTML += ` <option value=${city}>${city}</option> `
})

let weather = {
    apiKey: 'c4b9325197af37f29efbe8e401ab6039',
    fetchWeather: async function (city) {
      loading.style.display = 'block';
      const Promisededados = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city +'&units=imperial&appid=' +this.apiKey)
      const json =  await  Promisededados.json();
      setTimeout(() => {
        loading.style.display = 'none';
      }, 2000);
        return this.displayWeather(json)
    },
  
    displayWeather: function (json) {
      const { name } = json
      const { description, icon } = json.weather[0]
      const { temp, humidity } = json.main
  
      console.log(name, icon, description, temp, humidity)

      document.querySelector('.temperatura').innerText = Math.floor((temp - 32 ) / 1.8) + '°C'

      document.querySelector('label').innerText =
        'Humidity: ' + humidity + '%'
  
      document.querySelector('.icon').src =
      'https://openweathermap.org/img/wn/' + icon + '.png'

      const imagen =document.querySelector('.icon-ceu')
      imagen.style.background = "url('https://source.unsplash.com/750x500/?" + name + "')"
    },

    search: function () {
      this.fetchWeather(document.querySelector('#citys').value)
    },
  }

 const datas = new Date;
        const dia  = datas.getDate()
        const meses = ['jan', 'fev', 'mar', 'april', 'may', 'jun', 'jul', 'ago', 'sep', 'nov', 'dez'] 
        let mes = meses[datas.getMonth()]
        document.querySelector('#data').innerText = dia +" "+ mes
      console.log(dia)
  // weather.displayWeather('London')
  