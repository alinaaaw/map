let circ5 = document.getElementById("m5");
let point5 = document.getElementsByClassName("m5");
let circ10 = document.getElementById("m10");
let point10 = document.getElementsByClassName("m10");
let circ15 = document.getElementById("m15");
let point15 = document.getElementsByClassName("m15");
let drink = document.getElementById("drink");
let health = document.getElementById("health");
let point_drink = document.getElementsByClassName("drink");
let point_health = document.getElementsByClassName("health");
circ5.addEventListener("click",show_5,false);
circ10.addEventListener("click",show_10,false);
circ15.addEventListener("click",show_15,false);
drink.addEventListener("click",show_d,false);
health.addEventListener("click",show_h,false);
let show = [];
let num = 15;

function show_5(){
    num = 5;
    for (let i of show){
        if (i=="drink"){
            show_d();
        }
        else if (i=="health"){
            show_h();
        }
    }
    if (show.length == 0){
        show_d();
        show_h();
    }
    for (let i of point10){
        i.style.setProperty("visibility","hidden");
    }
    for (let i of point15){
        i.style.setProperty("visibility","hidden");
    }
    circ5.style.setProperty("background-color","rgb(243,243,243)");
    circ10.style.setProperty("background-color","white");
    circ15.style.setProperty("background-color","white");
    circ10.removeEventListener("click",hide_10,false);
    circ15.removeEventListener("click",hide_15,false);
    circ5.removeEventListener("click",show_5,false);
    circ5.addEventListener("click",hide_5,false);
    circ10.addEventListener("click",show_10,false);
    circ15.addEventListener("click",show_15,false);
}

function hide_5(){
    num = 15;
    if (show.length==0){
        for (let i of point5){
            i.style.setProperty("visibility","hidden");
        }
    }
    else{
        for (let i of show){
            if (i=="drink"){
                show_d();
            }
            else if (i=="health"){
                show_h();
            }
        }
    }
    circ5.style.setProperty("background-color","white");
    circ5.removeEventListener("click",hide_5,false);
    circ5.addEventListener("click",show_5,false);
    circ10.addEventListener("click",show_10,false);
    circ15.addEventListener("click",show_15,false);
}

function show_10(){
    num = 10;
    for (let i of show){
        if (i=="drink"){
            show_d();
        }
        else if (i=="health"){
            show_h();
        }
    }
    if (show.length == 0){
        show_d();
        show_h();
    }
    for (let i of point15){
        i.style.setProperty("visibility","hidden");
    }
    circ10.style.setProperty("background-color","rgb(243,243,243)");
    circ5.style.setProperty("background-color","white");
    circ15.style.setProperty("background-color","white");
    circ5.removeEventListener("click",hide_5,false);
    circ15.removeEventListener("click",hide_15,false);
    circ10.removeEventListener("click",show_10,false);
    circ10.addEventListener("click",hide_10,false);
    circ5.addEventListener("click",show_5,false);
    circ15.addEventListener("click",show_15,false);
}

function hide_10(){
    num = 15;
    if (show.length==0){
        for (let i of point10){
            i.style.setProperty("visibility","hidden");
        }
        for (let i of point5){
            i.style.setProperty("visibility","hidden");
        }
    }
    else{
        for (let i of show){
            if (i=="drink"){
                show_d();
            }
            else if (i=="health"){
                show_h();
            }
        }
    }
    circ10.style.setProperty("background-color","white");
    circ10.removeEventListener("click",hide_10,false);
    circ10.addEventListener("click",show_10,false);
    circ5.addEventListener("click",show_5,false);
    circ15.addEventListener("click",show_15,false);
}

function show_15(){
    num = 15;
    for (let i of show){
        if (i=="drink"){
            show_d();
        }
        else if (i=="health"){
            show_h();
        }
    }
    if (show.length == 0){
        show_d();
        show_h();
    }
    circ15.style.setProperty("background-color","rgb(243,243,243)");
    circ5.style.setProperty("background-color","white");
    circ10.style.setProperty("background-color","white");
    circ5.removeEventListener("click",hide_5,false);
    circ10.removeEventListener("click",hide_10,false);
    circ15.removeEventListener("click",show_15,false);
    circ15.addEventListener("click",hide_15,false);
    circ5.addEventListener("click",show_5,false);
    circ10.addEventListener("click",show_10,false);
}

function hide_15(){
    if (show.length==0){
        for (let i of point15){
            i.style.setProperty("visibility","hidden");
        }
        for (let i of point10){
            i.style.setProperty("visibility","hidden");
        }
        for (let i of point5){
            i.style.setProperty("visibility","hidden");
        }
    }
    else{
        for (let i of show){
            if (i=="drink"){
                show_d();
            }
            else if (i=="health"){
                show_h();
            }
        }
    }
    circ15.style.setProperty("background-color","white");
    circ15.removeEventListener("click",hide_15,false);
    circ15.addEventListener("click",show_15,false);
    circ5.addEventListener("click",show_5,false);
    circ10.addEventListener("click",show_10,false);
}

function show_d(){
    for (let i of point_drink){
        i.style.setProperty("visibility","visible");
    }
    if (num<10){
        for (let i of point10){
            i.style.setProperty("visibility","hidden");
        }
    }
    if (num<15){
        for (let i of point15){
            i.style.setProperty("visibility","hidden");
        }
    }
    drink.style.setProperty("background-color","rgb(190,190,190)")
    drink.removeEventListener("click",show_d,false);
    drink.addEventListener("click",hide_d,false);
    if (show.indexOf("drink")==-1){
        show.push("drink");
    }
}

function hide_d(){
    for (let i of point_drink){
        i.style.setProperty("visibility","hidden");
    }
    drink.style.setProperty("background-color","rgb(209,209,209)")
    drink.removeEventListener("click",hide_d,false);
    drink.addEventListener("click",show_d,false);
    show.splice(show.indexOf("drink"),1)
}

function show_h(){
    for (let i of point_health){
        i.style.setProperty("visibility","visible");
    }
    if (num<10){
        for (let i of point10){
            i.style.setProperty("visibility","hidden");
        }
    }
    if (num<15){
        for (let i of point15){
            i.style.setProperty("visibility","hidden");
        }
    }
    health.style.setProperty("background-color","rgb(190,190,190)")
    health.removeEventListener("click",show_h,false);
    health.addEventListener("click",hide_h,false);
    if (show.indexOf("health")==-1){
        show.push("health");
    }
}

function hide_h(){
    for (let i of point_health){
        i.style.setProperty("visibility","hidden");
    }
    health.style.setProperty("background-color","rgb(209,209,209)")
    health.removeEventListener("click",hide_h,false);
    health.addEventListener("click",show_h,false);
    show.splice(show.indexOf("health"),1)
}