
    
document.getElementByClassName('product-btn').onclick = function ()
{
  var elementOne = document.getElementByClassName('product-description');
  var elementTwo = document.getElementByClassName('back');
  //перевірка, чи  є  данний класс у елемента 
    if (elementOne.classList.contains("front")) {
      //якщо true то видаляє класс у елемента 
      elementOne.classList.remove("front");
      elementTwo.classList.remove("back-visibility");
    
    } else {
        //якщо false то додає класс до елемента
    elementOne.classList.add("front");
    elementTwo.classList.remove("back-visibility");
  }
}
