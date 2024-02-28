// const daysElement= document.querySelector(".days");
// const hoursElement= document.querySelector(".hours");
// const minutesElement= document.querySelector(".minutes");
// const secondsElement= document.querySelector(".seconds");

// // we changed everything into milliseconds
// const second= 1000;
// const minute= 60*second;
// const hour= 60*minute;
// const day= 24*hour;
// let stoptimer= false;
// const timer= ()=>{
  
//     const initial= new Date().getTime();;
//   const interval = setInterval(() => {
   
//     const currT = new Date().getTime();
//     const diff= currT-initial ;

//     const currday= Math.floor(diff/day);
//     const currhour= Math.floor((diff%day)/hour);
//     const currmin= Math.floor((diff%hour) /minute);
//     const currsec= Math.floor((diff%minute) /second);

//  //  console.log(`${currday}:${currhour}:${currmin}:${currsec}`);

//     daysElement.innerText= currday ;
//     hoursElement.innerText= currhour ;
//     minutesElement.innerText= currmin ;
//     secondsElement.innerText= currsec ;

//     if (stoptimer== true) {
//         clearInterval(interval);
//     }

//   }, 0);

//   document.querySelector(".stopbtn").addEventListener("click", function() {
//     stoptimer= true;
//  });

// };

const clock= document.querySelector(".time");

let sec=0, min=0, hr=0, intervalid ;

const starttimer=()=>{
  intervalid= setInterval(()=>{
    if (sec<59) {
      sec++ ;
    }
     else if(min>=59){
      hr++ ;
      min=0 ;
     }
     else{
      min++ ;
      sec=0;
     }
     clock.innerText= `${hr.toString().padStart(2,0)}:${min.toString().padStart(2,0)}:${sec.toString().padStart(2,0)}`
   },1000)
}

const stoptimer=()=>{
  clearInterval(intervalid) ;
}
