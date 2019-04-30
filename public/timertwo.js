const seconds = 1000,
      minutes = seconds * 60,
      hours = minutes * 60,
      days = hours * 24;

let cronometro = new Date('May 3, 2019 19:00:00').getTime(),
    y = setInterval(function() {

      let now = new Date().getTime(),
          distance = cronometro - now;

      document.getElementById('dias').innerText = Math.floor(distance / (days)) + ":",
        document.getElementById('horas').innerText = Math.floor((distance % (days)) / (hours)) + ":",
        document.getElementById('minutos').innerText = Math.floor((distance % (hours)) / (minutes)) + ":",
        document.getElementById('segundos').innerText = Math.floor((distance % (minutes)) / seconds);
      
      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

    }, seconds)