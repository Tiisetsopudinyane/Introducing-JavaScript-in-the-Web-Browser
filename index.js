const myMessage=document.querySelector(".myMessage");


setTimeout(function(){
myMessage.innerText="This is a message in the dom";
},3000);

const theButton=document.querySelector(".showMessage");
/*theButton.addEventListener("click",function(){
    myMessage.innerText="button pressed";
})*/
const theInputValue=document.querySelector(".theInputValue");
const clearButton=document.querySelector(".clear");
clearButton.addEventListener("click",function(){
    setTimeout(function(){
        myMessage.innerText="";
    },3000);
    theInputValue.value="";
});

theButton.addEventListener("click", function(){
    if(theInputValue.value.trim().length>0){
        myMessage.innerText=theInputValue.value;
    }
});

myMessage.addEventListener("click",function(){
    myMessage.classList.toggle('darkmode');
});

const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];
const fruitsList=document.querySelector(".fruits");

for(let i=0;i<fruits.length;i++){
    let fruit=fruits[i];
    const li=document.createElement('li');
    li.innerText=fruit;
    fruitsList.appendChild(li);
}

const theMessageButton = document.querySelector('.theMessageButton');
theMessageButton.addEventListener('click', function() {
    alert("button clicked!")
});


