let screen = document.getElementById('screen');
button = document.querySelectorAll('button');
for(item of buttons){
    item.addEventListener ('click' , (e) =>{
        buttonText = e.target.innertext;
        console.log ('Button text is ', buttonText)

    })
}