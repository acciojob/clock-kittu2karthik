document.addEventListener('DOMContentLoaded', () => {
    const time = document.createElement('p');
    time.innerText = new Date().toLocaleString();
    time.id = 'timer';
    document.body.appendChild(time);
    setTimeout(() => {
        time.innerText = new Date().toLocaleString();
    }, 100);
});