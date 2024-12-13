function costInput() {
    const inputElement = document.querySelector(".js-cost-input");
    
    let cost = inputElement.value
    
    cost = Number(cost)    
    if (cost < 40) {
        cost = cost + 10
    }
    
    document.querySelector('.js-total-cost').innerHTML = '$' + cost
    console.log(cost);
    
}


function keyDownCalculate (event) {
    if (event.key === 'Enter') {
        costInput()
    }
}


//6:29:00