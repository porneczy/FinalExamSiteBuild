const headerComponent = `
    <header class="header">
        <h3>New York Times Best Sellers</h3>
        <span class="material-symbols-outlined">
            menu
        </span>
    </header>
`
const mainComponent = `<div id="main"></div>`

const cardComponent = ({title, sub, text}, index) =>  `
    <div class="card">
        <div class="index">${index +1}</div>
        <p class="sub">${sub}</p>
        <p class="title">${title}</p>
        <p class="text">${text}</p>
        <button class="rmBtn">
            read more<span class="material-symbols-outlined arrow">
            arrow_forward
            </span>
        </button>
    </div>
`

window.addEventListener("load", () =>{
    console.log(books);
    const rootElement = document.getElementById("root")
    rootElement.insertAdjacentHTML("beforeend",headerComponent)
    rootElement.insertAdjacentHTML("beforeend", mainComponent)
    const main = document.getElementById("main")
    const cards = books.cards.map( (card, index) => cardComponent(card, index)).join("")
    console.log(cards)
    main.insertAdjacentHTML("beforeend", cards)
})