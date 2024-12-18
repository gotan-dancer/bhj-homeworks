let click_count = document.getElementById("clicker__counter").innerHTML;

document.getElementById("cookie").onclick = () => {
    click_count++;
    document.getElementById("clicker__counter").innerHTML = click_count;

    var cookie = document.getElementById('cookie');
    if(cookie && cookie.style && (click_count % 2 === 1)) {
        cookie.style.width = '150px';
    }else{
        cookie.style.width = '200px';
    }
}