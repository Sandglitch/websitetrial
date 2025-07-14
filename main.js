function checkq1() {
    let answer=document.querySelector('input[name="question1"]:checked');
    let reply=document.getElementById("resultant");
    if(!answer){
        reply.innerText="Choose an option"
    }
    if(answer.value==="21"){
        reply.innerText="You got the reference, not the correct answer though"
    }
    else if(answer.value==="19"){
        reply.innerText="Correct!"
    }
    else if(answer.value==="10011"){
        reply.innerText="WRANG!";
    }

}