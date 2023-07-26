 
    function showTime() {
        var options = {
          timeZone: 'Asia/Kolkata',
          hour12: true, // Set this to true for 12-hour format
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric'
        };
        var currentTime = new Date().toLocaleString('en-IN', options);
        document.getElementById('currentTime').innerHTML = currentTime;
      }
  
      showTime();
      setInterval(function () {
        showTime();
      }, 1000);
    
    