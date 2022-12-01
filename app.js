// let i=1;
// let width=0;
// let opoup=document.querySelector(".popup");
// document.getElementById("order").addEventListener("click",()=>{
//     setInterval(()=>{

//         if(i<100){
//             i++;
//             width+=2;
//             var circle=document.getElementById("maincir");
//             document.getElementById("demo").innerHTML=i+"%";
//             document.querySelector(".l").style.width=width+"px";
//             circle.style.background = `conic-gradient(rgb(16, 230, 158) ${i * 3.7}deg,rgb(240, 236, 239) 10deg)`;
//             if(i>=100){
//                 setTimeout(()=>{
//                     document.querySelector(".popup").style.display="flex";
//                 },50)
//     }
//     }
//     },37);
// }
// )

// document.querySelector("#ok").addEventListener("click",()=>{
//     document.querySelector(".popup").style.display="none";
//     // clearInterval(prog)
//     i=0;
//     width=0;
// // })




// // function cont(){


// // }


let i=1;
let width=0;
let opoup=document.querySelector(".popup");
document.getElementById("order").addEventListener("click",()=>{
    let progress=setInterval(()=>{

       if(i<100){
            i++;
            width+=2;
            var circle=document.getElementById("maincir");
            document.getElementById("demo").innerHTML=i+"%";
            document.querySelector(".l").style.width=width+"px";
            circle.style.background = `conic-gradient(rgb(16, 230, 158) ${i * 3.7}deg,rgb(240, 236, 239) 0deg)`;
            if(i>= 100){
                setTimeout(()=>{
                    document.querySelector(".popup").style.display="flex";
                    // clearInterval(progress);
                },1)
                document.querySelector("#ok").addEventListener("click",()=>{
                    document.querySelector(".popup").style.display="none";
                    clearInterval(progress)
                    i=0;
                    width=0;
                    document.getElementById("demo").innerHTML=i+"%";
                    document.querySelector(".l").style.width=width+"px";
                    circle.style.background = `conic-gradient(rgb(16, 230, 158) ${i * 3.7}deg,rgb(240, 236, 239) 10deg)`;
                })
    }
    }
    },37);
}
)

