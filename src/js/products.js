// script для секції Products
// функція додавання та видалення класу при кліку на кнопку 
function myFlipCard_1() {
    // пошук   елемента за id
    var elementOne = document.getElementById('product1');
    var elementTwo = document.getElementById('back1');
    //додавання та видалення класу
    elementOne.classList.toggle("front");
    elementTwo.classList.toggle("back--visibility");
    elementTwo.classList.toggle("back--accent");
}
function myFlipCard_2() {
    var elementOne = document.getElementById('product2');
    var elementTwo = document.getElementById('back2');
    elementOne.classList.toggle("front");
    elementTwo.classList.toggle("back--visibility");
    elementTwo.classList.toggle("back--beige");
}
function myFlipCard_3() {
    var elementOne = document.getElementById('product3');
    var elementTwo = document.getElementById('back3');
    elementOne.classList.toggle("front");
    elementTwo.classList.toggle("back--visibility");
    elementTwo.classList.toggle("back--green");
}