let sec = document.getElementById("timer").innerHTML;

let timerId = setInterval(() => {
    sec--;
    document.getElementById("timer").innerHTML = sec;
    if(sec === 0)
    {
        alert("Вы победили в конкурсе!");
        clearInterval(timerId);
    }
}, 1000);