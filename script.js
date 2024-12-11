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


//6:21:00