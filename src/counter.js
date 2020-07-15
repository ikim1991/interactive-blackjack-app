export const countDown = (i) => {
    let int = setInterval(function () {
        console.log(i)
        i-- || clearInterval(int);
    }, 1000);
}
