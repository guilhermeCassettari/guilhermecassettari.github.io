const devBtn = document.querySelector("#devBtn")
    // const devBtn = document.querySelector("#devBtn")

const changePages = document.querySelectorAll('.change-page')

// removendo animações iniciais
const hamburguer = document.querySelector('.hamburguer')
const instaram = document.querySelector('.instagram')
const facebook = document.querySelector('.facebook')
const git = document.querySelector('.git')
const linkedin = document.querySelector('.linkedin')

function removeInitialAnimation(item) {
    item.classList.remove('initial')
}

setTimeout(function() { removeInitialAnimation(hamburguer) }, 505)
setTimeout(function() { removeInitialAnimation(instaram) }, 1005)
setTimeout(function() { removeInitialAnimation(facebook) }, 1505)
setTimeout(function() { removeInitialAnimation(git) }, 2005)
setTimeout(function() { removeInitialAnimation(linkedin) }, 2505)



function changePage(linkToOtherPage) {



    changePages.forEach((item, i) => { setTimeout(function() { item.classList.add('active') }, 250 * i) })
    setTimeout(function() { window.location.replace(linkToOtherPage) }, 1300)
}

devBtn.addEventListener('click', () => changePage('/index.html'))
    // devBtn.addEventListener('click', () => changePage('/'))