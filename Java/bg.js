delay();

function delay(){
    var leng = document.getElementsByClassName("stripp");
    for (let i = 0; i < leng.length; i++) {
        var rand = Math.floor(Math.random() * 10) + 1;
        leng[i].style.setProperty('--animation-delay', rand+'s');
        var speed = Math.floor(Math.random() * 13) + 5;
        leng[i].style.setProperty('--animation-speed', speed+'s');
      }
}

