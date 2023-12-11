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
// item  507.15625  right  554.171875