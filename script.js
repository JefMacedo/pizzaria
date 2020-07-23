const c = (el) => document.querySelector(el); // retorna apenas o item
const cs = (el) => document.querySelectorAll(el); // retorna um array com os itens



pizzaJson.map((item, index) => {
    let pizzaItem = c('.models .pizza-item').cloneNode(true);
    //preenchendo as informações em pizza-item

    c('.pizza-area').append(pizzaItem);
});