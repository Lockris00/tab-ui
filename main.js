// const $ = document.querySelector.bind(document)
// const $$ = document.querySelectorAll.bind(document)

// const tabs = $$('.tab-item')
// const panes = $$('.tab-pane')

// const tabActive = $('.tab-item.active')

// const line = $('.line')
// line.style.left = tabActive.offsetLeft + 'px'
// line.style.width = tabActive.offsetWidth + 'px'

// tabs.forEach((tab, index) => {
//   const pane = panes[index]
//   tab.onclick = function() {
//     $('.tab-item.active').classList.remove('active')
//     $('.tab-pane.active').classList.remove('active')

//     line.style.left = this.offsetLeft + 'px'
//     line.style.width = this.offsetWidth + 'px'

//     this.classList.add('active')
//     pane.classList.add('active')
//   }
// })


const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item')
const panes = $$('.tab-pane')
const line = $('.line')

tabs.forEach((tab, index) => {
  const pane = panes[index]
  tab.onclick = function(e) {
    $('.tab-item.active').classList.remove('active')
    $('.tab-pane.active').classList.remove('active')
    tab.classList.add('active')
    pane.classList.add('active')
    line.style.left = $('.tab-item.active').offsetLeft + 'px'
    line.style.width = $('.tab-item.active').offsetWidth + 'px'
  }

}) 