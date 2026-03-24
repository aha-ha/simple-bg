const span = document.getElementById('time');
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const date = now.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    if (urlParameter('date') != false) {
    document.getElementById('date').textContent = date;
    } else {
        document.getElementById('date').style.display = 'none';
    }
    if (urlParameter('seconds') == true) {
        span.textContent = `${hours}:${minutes}:${seconds}`;
    } else {
        span.textContent = `${hours}:${minutes}`;
    }
}
function urlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}
setInterval(updateTime, 1000);
updateTime();