var stop;
const stopInterval = () => {
    clearInterval(stop)
}


var countTime = 0;
stop = setInterval(() => {
    if (countTime > 12) {
        stopInterval();
    }
    countTime++;
    fetch('http://localhost:3008/wait/')
        .then((response) => {
            if ('http://localhost:3008/draw' === response.url) {
                window.location.href = response.url;
                stopInterval();
            }

        })
}, 2000);