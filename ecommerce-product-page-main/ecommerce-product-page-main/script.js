const itemsList = document.querySelectorAll('#loadning-header li')
const menuBackDrop = document.querySelector('#menu-backdrop')

itemsList.forEach(item => {
  item.addEventListener('mouseover', () => {
    const { left, right, width, height, top, bottom} = item.getBoundingClientRect()
    menuBackDrop.style.left = left + 'px'
    menuBackDrop.style.right = right + 'px'
    menuBackDrop.style.width = width + 'px'
    // menuBackDrop.style.height = height + 'px'

    console.log('block ', menuBackDrop.style.left, ' ', menuBackDrop.style.right, ' item ', left, ' ', right)
  })

})
const valueStock = document.querySelector('#stock-product')


let stateStock = +valueStock.textContent

const btnIncrement = document.querySelector('#btn-increment')
const btnDecrement = document.querySelector('#btn-decrement')

const setIncrement = value => {
  if (value < 0) return 0
  return value + 1
}

const setDecrement = value => {
  if (value <=0) return 0
  return value - 1
}

btnDecrement.addEventListener('click', () => {
  valueStock.textContent = setDecrement(stateStock)
  stateStock = +valueStock.textContent
})

btnIncrement.addEventListener('click', () => {
  valueStock.textContent = setIncrement(stateStock)
  stateStock = +valueStock.textContent
})
