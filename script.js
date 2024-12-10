function costInput() {
    const inputElement = document.querySelector(".js-cost-input");
    let cost = inputElement.value
    if (cost < 40) {
        cost = cost + 10
    }
    console.log(cost);
    
}


//6:21:00