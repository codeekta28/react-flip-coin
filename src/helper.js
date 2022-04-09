 function choice(arry){
     const random=Math.floor(Math.random()*arry.length);
     return arry[random];
 }
 export{choice}