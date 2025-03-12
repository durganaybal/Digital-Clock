function clock(){
    var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var dayNames = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];

    var today = new Date();

    document.getElementById('Date').innerHTML = (dayNames[today.getDay()] + " " + today.getDate() + ' '+ monthNames[today.getMonth()] + ' '+today.getFullYear());
    
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day = h<11 ? 'AM': 'PM';

    h = h<10? '0'+h: h;
    m = h<10? '0'+m: m;
    s = h<10? '0'+s: s;

    document.getElementById('hours').innerHTML = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;
}var inter = setInterval(clock,400);