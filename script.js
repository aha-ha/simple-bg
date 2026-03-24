const span = document.getElementById('time');
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    span.textContent = `${hours}:${minutes}`;
}
setInterval(updateTime, 1000);
updateTime();