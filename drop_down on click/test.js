
function start(){

    document.body.style.margin = 0;

    //drop down

    for(var count = 0;count < 10;count++){

        var the_drop = document.createElement("div");

        document.body.appendChild(the_drop);

        the_drop.classList.add("drop_down");
        the_drop.setAttribute("id", "drop");

    }


    // zesht tarin khat haye in barname...
    document.getElementsByClassName("drop_down")[0].setAttribute("onclick", "drop_down(0)");
    document.getElementsByClassName("drop_down")[1].setAttribute("onclick", "drop_down(1)");
    document.getElementsByClassName("drop_down")[2].setAttribute("onclick", "drop_down(2)");
    document.getElementsByClassName("drop_down")[3].setAttribute("onclick", "drop_down(3)");
    document.getElementsByClassName("drop_down")[4].setAttribute("onclick", "drop_down(4)");
    document.getElementsByClassName("drop_down")[5].setAttribute("onclick", "drop_down(5)");
    document.getElementsByClassName("drop_down")[6].setAttribute("onclick", "drop_down(6)");
    document.getElementsByClassName("drop_down")[7].setAttribute("onclick", "drop_down(7)");
    document.getElementsByClassName("drop_down")[8].setAttribute("onclick", "drop_down(8)");
    document.getElementsByClassName("drop_down")[9].setAttribute("onclick", "drop_down(9)");


    count = 0

    while(document.getElementsByClassName("drop_down")[count]){

        var main_drop = document.getElementsByClassName("drop_down")[count];
        main_drop.style.width = "90%";
        main_drop.style.height = "fitcontent";
        main_drop.style.padding = "25px 2.5%";
        main_drop.style.margin = "100px 2.5%";
        main_drop.style.background = "gray";
        main_drop.style.fontSize = "20px";
        main_drop.style.border = "solid 3px 0 black";

        count++

    }

    //span

    count = 0

    while(document.getElementsByClassName("drop_down")[count]){

        var sp = document.createElement("span");

        document.getElementsByClassName("drop_down")[count].appendChild(sp);

        sp.innerHTML = "click to drop!"

        sp.classList.add("sp")

        count++

    }

    count = 0

    while(document.getElementsByClassName("sp")[count]){

        var sp2 = document.getElementsByClassName("sp")[count];
        sp2.style.display = "flex";
        sp2.style.width = "100%";
        sp2.style.padding = "0 10px";
        sp2.style.color = "white";
        sp2.style.overflow = "hidden";

        count++

    }

    //drop down content
    
    count = 0

    while(document.getElementsByClassName("drop_down")[count]){

        var Q = document.createElement("div");

        // makane in khat khaaaayyyliiiiiiiiiiii mohemmm booooddddddd!!!!!!!!!!!
        document.getElementsByClassName("drop_down")[count].appendChild(Q);
        // khate mohemmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm***********************************************
        
        Q.innerHTML = "the content!";

        Q.classList.add("dd_content");
        Q.setAttribute("id", "ddc");

        count++

    }

    count = 0

    while(document.getElementsByClassName("dd_content")[count]){

        var Q2 = document.getElementsByClassName("dd_content")[count];

        Q2.style.width = "100%";
        Q2.style.height = "0px";
        Q2.style.margin = "0";
        Q2.style.padding = "0 10px";
        Q2.style.backgroundColor = "blue";
        Q2.style.opacity = "0.9";
        Q2.style.overflow = "hidden";

        count++

    }

}

function drop_down(x){

    // var drop_down  = document.getElementsByClassName("drop_down")[x]
    var dd_content = document.getElementsByClassName("dd_content")[x]

    if(dd_content.style.height == "undefined") console.log(1)

    if(dd_content.style.height == "auto") {
        dd_content.style.height = "0px"
        dd_content.style.margin = "0px"
    }
    else {
        dd_content.style.height = "auto"
        dd_content.style.margin = "30px 0 0"
    }

}
