//Q1:
 let fruits=["apple" , "strawberry","grapes","kiwi","watermelon"];
 let img_array=["apple.jpg","strawberry.jpg","grapes.jpg","kiwi.jpg","watermelon.jpg"]
 const body=document.body;
 const ul=document.createElement("ul");
 body.appendChild(ul)

 for(let i=0 ; i<fruits.length ; i++){
    const li=document.createElement("li");
    const img=document.createElement("img")
    li.textContent=fruits[i]
    img.src=img_array[i];
    img.style.width="100px";
    img.style.height="100px";

    ul.appendChild(li)
    ul.appendChild(img)

 }


 //Q2:
 let arr=[ 1, 5,6,2,7,8,9,6,75,9,2,55,14,85,59,3]
function check(x,y){
    if(arr.includes(y)){
        return arr.indexOf(y);
    }
    else{
        return-1
    }  
  }

 console.log(check(arr,3));
 
 

