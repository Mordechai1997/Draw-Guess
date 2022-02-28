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
    fetch('http://localhost:3008/wait/checkImg')
        .then((response) => {
            console.log(response.url)
            if ('http://localhost:3008/draw/img' === response.url) {
                window.location.href = response.url;
                stopInterval();
            }

        }).catch((err) => console.log(err))
}, 2000);