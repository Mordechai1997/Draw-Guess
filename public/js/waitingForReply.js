var stop;
const stopInterval = () => {
    clearInterval(stop)
}

var countTime = 0;
stop = setInterval(() => {

    countTime++;
    fetch('http://localhost:3008/wait/checkanswer')
        .then((response) => {
            console.log(response.url)
            if (response.url === 'http://localhost:3008/answer/theAnswer') {
                window.location.href = response.url;
                stopInterval();

            }

        }).catch((err) => console.log(err))

    if (countTime > 20) {
        stopInterval();
    }
}, 1000);