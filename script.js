//your JS code here. If required.
document.addEventListener('load', () => {
    const time = document.createElement('p');
    time.id = 'timer';
    document.body.appendChild(time);
    
    setInterval(() => {
        time.innerText = new Date().toLocaleString();
    }, 1000);
});