
let weather = {
    apiKey: 'c4b9325197af37f29efbe8e401ab6039',
    fetchWeather: function (city) {
      fetch(
        //    " https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=c4b9325197af37f29efbe8e401ab6039"
        'https://api.openweathermap.org/data/2.5/weather?q=' +
          city +
          '&units=imperial&appid=' +
          this.apiKey
      )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
  
    displayWeather: function (data) {
      const { name } = data
      const { description, icon } = data.weather[0]
      const { temp, humidity } = data.main
  
      console.log(name, icon, description, temp, humidity)

      document.querySelector('.temperatura').innerText = Math.floor(temp) + '°F'

      document.querySelector('label').innerText =
        'Humidity: ' + humidity + '%'
  
      document.querySelector('.icon').src =
      'https://openweathermap.org/img/wn/' + icon + '.png'

      const imagen =document.querySelector('.icon-ceu')
      imagen.style.background = "url('https://source.unsplash.com/550x350/?" + name + "')"
     

      document.querySelector('.weather').classList.remove('loading')
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')"

        
        function gerarMes (){
        const datas = new Date;
        const dia  = datas.getDay()
            const meses = [jan, fev, mar, april, may, jun, jul, ago, sep, opt, nov, dez] 
            const mes = meses[datas.getMonth()]
            document.querySelector('.data').innerText = "mes"
        }

      
    },
    search: function () {
      this.fetchWeather(document.querySelector('#citys').value)
    },
  }

  // weather.displayWeather('London')
  