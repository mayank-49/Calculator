let input = document.getElementById("inputBox");
let numberOfButtons = document.querySelectorAll(".button").length;


let string = "";
for(var i=0; i<numberOfButtons; i++){
    document.querySelectorAll(".button")[i].addEventListener('click', (e) => {
        e.target.classList.add("click");
        setTimeout(()=>{
            e.target.classList.remove("click");
        },100)
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }

        
    })
}