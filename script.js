const hero = document.querySelector(".hero");
const back1 = document.querySelector(".back")
const second = document.querySelector(".second")
const container2 = document.querySelector(".container2")

 function time(){
    setTimeout(() => {
        hero.classList.add("active")
    }, 100);
   
}
time()

function back(){
    setTimeout(() => {
        back1.classList.add("backactive")
    }, 3000);
}
back()

function back2(){
    setTimeout(() => {
        back1.classList.add("backactive2")
    }, 7000);
}
back2()

function back3(){
    setTimeout(() => {
        back1.classList.add("backactive3")
    }, 11500);
}
back3()

function back4(){
    setTimeout(() => {
        back1.classList.add("backactive4")
    }, 15500);
}
back4()

function back5(){
    setTimeout(() => {
        back1.classList.add("backactive5")
    }, 16000);
}
back5()

function back6(){
    setTimeout(() => {
        back1.classList.add("backactive6")
    }, 17500);
}
back6()

function back7(){
    setTimeout(() => {
       container2.style.display = "block"
       container2.style.bottom = "0%"
       container2.style.opacity = "1"
    }, 17700);
}
back7()

function back8(){
    setTimeout(() => {
        back1.classList.add("backactive8")
    }, 20000);
}
back8()

setTimeout(function(){
    document.getElementById('div1').style.visibility = "visible";
    document.getElementById('div1').style.top = "35%"
    document.getElementById('div1').style.opacity = "1"
    },4000);
    setTimeout(function(){
        document.getElementById('div1').style.visibility = "hidden";
        document.getElementById('div1').style.top = "55%"
        document.getElementById('div1').style.opacity = "0"
        },7000);

        setTimeout(function(){
            document.getElementById('div2').style.visibility = "visible";
            document.getElementById('div2').style.opacity = "1"
            },9000);
            setTimeout(function(){
                document.getElementById('div2').style.visibility = "visible";
                document.getElementById('div2').style.opacity = "0"
                },11000);
                setTimeout(function(){
                    document.getElementById('div4').style.visibility = "visible";
                    document.getElementById('div4').style.opacity = "1"
                    },12500);
                    setTimeout(function(){
                        document.getElementById('div4').style.visibility = "visible";
                        document.getElementById('div4').style.top = "20%"
                        document.getElementById('div4').style.opacity = "0"
                        },15500); 