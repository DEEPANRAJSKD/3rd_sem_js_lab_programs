let target = Math.floor(Math.random() * 100);
let count=0;
function playgame(){
    let guess = parseInt(document.getElementById("guess").value);
    count++;

    if(guess < target){
        document.getElementById("feedback").innerText="Too Low"
    }

    else if(guess > target){
        document.getElementById("feedback").innerText="Too High"
    }
    else{
        document.getElementById("feedback").innerText="Your guess is correct!"
        document.getElementById("attempts").innerText="Number of attempts:"+count
    }
}