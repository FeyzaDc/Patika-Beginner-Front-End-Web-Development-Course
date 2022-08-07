let isim = prompt("Adınızı Giriniz...");

if (isim) {
    document.querySelector("#myName").innerHTML = isim;
} else {
    alert("Geçerli bir değer giriniz !");
    location.reload();
}

function showTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s); 

    var days = ['Pazar','Pzartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'];

    document.getElementById('myClock').innerHTML = h + ":" + m + ":" + s + " " + days[today.getDay()];
    setTimeout(showTime, 1000);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
}

showTime();