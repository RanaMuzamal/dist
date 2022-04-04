function displayCard(event) {
    var cards = document.querySelector('#cards')
    console.log(event.innerHTML);
    Array.prototype.forEach.call(cards.getElementsByClassName("card-body"), function (element) {
        console.log(element.id)
        if (element.id == event.id) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
}