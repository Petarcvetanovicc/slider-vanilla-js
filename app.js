import people from './data.js'

const slideContainer = document.querySelector('.slide-container')
const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')

slideContainer.innerHTML = people
  .map(function (person, indexElement) {
    const { img, name, text, job } = person

    let position = 'next'

    if (indexElement === 0) {
      position = 'last'
    }
    if (indexElement === 1) {
      position = 'active'
    }

    return `<article class="slide ${position}">
    <img src="${img}" alt="${name}">
    <p class="title">${name}</p>
    <p class="job">${job}</p>
    <p class="desc">${text}</p>
</article>`
  })
  .join('')

prevBtn.addEventListener('click', function () {
  let active = document.querySelector('.active')
  let last = document.querySelector('.last')
  let next = last.previousElementSibling

  if (!next) {
    next = slideContainer.lastElementChild
  }

  next.classList.remove(['next'])
  active.classList.remove(['active'])
  last.classList.remove(['last'])

  active.classList.add('next')
  last.classList.add('active')
  next.classList.add('last')
})

nextBtn.addEventListener('click', function () {
  let active = document.querySelector('.active')
  let next = active.nextElementSibling
  let last = document.querySelector('.last')

  if (slideContainer.lastChild === active) {
    next = slideContainer.firstChild
  }

  next.classList.remove(['next'])
  active.classList.remove(['active'])
  last.classList.remove(['last'])

  active.classList.add('last')
  next.classList.add('active')
  last.classList.add('next')
})
