tzOffset = 0;

function startTime() {
    var today = new Date();
    var h = (today.getHours() + tzOffset) % 24;
    var m = today.getMinutes();
    h = checkTime(h);   
    m = checkTime(m);
    document.getElementById('hour').innerHTML =
    h;
    document.getElementById('colon').innerHTML =
    ":";
    document.getElementById('minute').innerHTML =
    m;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function changeTZ(off) {
	tzOffset = off;
}