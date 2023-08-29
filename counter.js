const counterElement = document.querySelector('[data-find="counterValue"]')
const addButtonCounter = document.getElementById('addButtonCounter')
const addButtonReset = document.getElementById('addButtonReset')

const COUNTER_INITITAL_VALUE = 0
let counter = COUNTER_INITITAL_VALUE
counterElement.innerText = counter

addButtonCounter.addEventListener('click', function () {
	counter += 1

	counterElement.innerText = counter
})

addButtonReset.addEventListener('click', function () {
	counter = COUNTER_INITITAL_VALUE
	counterElement.innerText = counter
})

// const htmlElement = document.documentElement
// const headElement = document.head
// const bodyElement = document.body

// console.log(htmlElement)
// console.log(headElement)
// console.log(bodyElement)

// const firstChildElement = bodyElement.firstChild
// const lastChildElement = bodyElement.lastChild

// console.log(firstChildElement)
// console.log(lastChildElement)

// const childNodes = bodyElement.childNodes

// console.log(childNodes)

// console.log(bodyElement.hasChildNodes())

// for (let node of childNodes) {
// 	console.log(node)
// }

// const elems = document.querySelectorAll('li')

// console.log(elems[2])

// for (const item of elems) {
// 	console.log(item)
// }

// elems.forEach(item => {
// 	console.log(item)
// })
