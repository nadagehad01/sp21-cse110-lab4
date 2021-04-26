function x(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
  }
  
  var inter = window.setInterval(x, 1000);