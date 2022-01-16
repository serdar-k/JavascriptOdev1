let yourName = prompt("Name: ");
document.getElementById('myName').innerHTML = yourName;
      
function startTime(){
    const today = new Date();
    let h   =     today.getHours();
    let m   =     today.getMinutes();
    let s   =     today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('myClock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}
function checkTime(i){
    if(i < 10){
    i = "0" + i;
    }
    return i;
}
function dayName(){
    const d = new Date();
    let weekday = ["Pazar","Pazartesi","Sali","Carsamba","Persembe","Cuma","Cumartesi"];
    let day = weekday[d.getDay()];
    document.getElementById("day").innerHTML = day;
}