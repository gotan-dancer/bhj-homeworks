function getHole(index){
    return document.getElementById(`hole${index}`);
}

let dead_count = document.getElementById("dead").innerHTML;
let lost_count = document.getElementById("lost").innerHTML;

for(let index=1; index<10; index++){
    getHole(index).onclick = () => {
        if(getHole(index).classList.contains('hole_has-mole')){
            dead_count++;
            document.getElementById("dead").innerHTML = dead_count;

            if(dead_count === 10){
                alert("Победа!");

                document.getElementById("dead").innerHTML = 0;
                document.getElementById("lost").innerHTML = 0;

                dead_count = 0;
                lost_count = 0;
            }
        }else{
            lost_count++;
            document.getElementById("lost").innerHTML = lost_count;

            if(lost_count === 5){
                alert("Вы проиграли");

                document.getElementById("dead").innerHTML = 0;
                document.getElementById("lost").innerHTML = 0;

                dead_count = 0;
                lost_count = 0;
            }
        }
    }
}