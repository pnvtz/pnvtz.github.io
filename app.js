window.addEventListener("load", () => {
    clock();
    function clock() {
      const today = new Date();

      // get date components
      const month = today.getMonth();
      const year = today.getFullYear();
      const day = today.getDate();
  
      // //declaring a list of all months in  a year
      // const monthList = [
      //   "January",
      //   "February",
      //   "March",
      //   "April",
      //   "May",
      //   "June",
      //   "July",
      //   "August",
      //   "September",
      //   "October",
      //   "November",
      //   "December"
      // ];
  
      const monthList = [
        "01", 
        "02", 
        "03", 
        "04", 
        "05", 
        "06", 
        "07", 
        "08", 
        "09", 
        "10", 
        "11", 
        "12", 
      ];

      //get current date and time
      const date = day + "-" + monthList[month] + "-" + year;  

      //print current date and time to the DOM
      document.getElementById("date").innerHTML = date; 

      const DateTime = luxon.DateTime;
      const hanoiTime = DateTime.now().setZone("Asia/Bangkok");
      const timeFormatted = hanoiTime.toFormat("HH'h - 'mm'p - 'ss's'");
      document.getElementById("clocks").innerText = timeFormatted;//hanoiTime.toFormat("HH:mm:ss");
      setTimeout(clock, 1000);
    }
  });


