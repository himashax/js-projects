let count = 0;

const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(btn){
    console.log(btn)
    btn.addEventListener("click", function(e) {
        console.log(e.currentTarget)
        const classList = e.currentTarget.classList;

        if (classList.contains("decrease")) {
            count--;
        } else if(classList.contains("increase")) {
            count++;
        } else {
            count = 0;
        }

        if (count > 0) {
            value.style.color = 'green';
        } 
        if (count < 0) {
            value.style.color = 'red';
        }
        if (count === 0) {
            value.style.color = 'black';
        }
        value.textContent = count;
    })
})


