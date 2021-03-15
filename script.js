/**--------------O CÓDIGO A SEGUIR SEGUE OS PRINCIPIOR DA POG -------------- */
/**--------------------PROGRAMAÇÃO ORIENTADA A GAMBIARRA-------------------- */


// window.scrollTo(0, 0)()
// portifolio.classList.add('black') 

// Areas da pagina
const content = document.querySelector('#content')
const jobs = document.querySelector('#jobs')
const skills = document.querySelector('#skills')
const contact = document.querySelector('#contact')

// SVGS do menu
const fillLinkedin = document.querySelectorAll('.fill-linkedin')
    // const fillHamburguer = document.querySelectorAll('.fill-hamburguer')
const fillGit = document.querySelectorAll('.fill-git')
const fillFacebook = document.querySelectorAll('.fill-facebook')
const fillInstagram = document.querySelectorAll('.fill-instagram')
const portifolio = document.querySelector('#portifolio')

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




// Areas ddos jobs
const jobRightArea = document.querySelector('#jobRight')
const imgCarrega = document.querySelector('#imgCarrega')
const imgBaby = document.querySelector('#imgBaby')
const jobWord = document.querySelector("#jobWord")
const arrowLeft = document.querySelector('#arrowLeft')
const arrowRight = document.querySelector('#arrowRight')
const porOnde = document.querySelector('#porOnde')
const horizontalLineJobs = document.querySelector("#horizontalLineJobs")

// Skills Cards
const skillCards = document.querySelectorAll('#skillCard')

// Portifolio
const menu = document.querySelector('#hamburguer')
const divMenu = document.querySelector('#menu')
const menuUi = document.querySelector('#menuUi')
const menuDev = document.querySelector('#menuDev')
const changePageDev = document.querySelectorAll('#changePageDev')
const changePageUi = document.querySelectorAll('#changePageUi')


// Clicar e aparecer o Menu
let inMenu = false
menu.addEventListener('click', () => {
    if (!inMenu) {
        if (!inMenu && portifolio.classList.contains("black")) {
            portifolio.classList.toggle('black')
        }

        if (inMenu && !portifolio.classList.contains('black')) {
            portifolio.classList.add('black')
        }


        divMenu.classList.toggle('active')
        menuUi.classList.toggle('active')
        menuDev.classList.toggle('active')

        setTimeout(function() { addColorBlackToSvg(fillLinkedin) }, 500)
        setTimeout(function() { addColorBlackToSvg(fillGit) }, 500)
        setTimeout(function() { addColorBlackToSvg(fillFacebook) }, 500)
        setTimeout(function() { addColorBlackToSvg(fillInstagram) }, 500)


        inMenu = !inMenu
    } else {
        divMenu.classList.toggle('active')
        menuUi.classList.toggle('active')
        menuDev.classList.toggle('active')

        removeColorBlackToSvg(fillLinkedin)
        removeColorBlackToSvg(fillGit)
        removeColorBlackToSvg(fillFacebook)
        removeColorBlackToSvg(fillInstagram)

        portifolio.classList.remove('black')



        window.scrollTo(0, 0);

        inMenu = !inMenu
    }
})

// Efeito de hover no meu

menuDev.addEventListener('mouseenter', () => {
    menuDev.classList.add('hover-right')
    menuUi.classList.add('hover-right')
})
menuDev.addEventListener('mouseleave', () => {
    menuDev.classList.remove('hover-right')
    menuUi.classList.remove('hover-right')
})

menuUi.addEventListener('mouseenter', () => {
    menuUi.classList.add('hover-left')
    menuDev.classList.add('hover-left')
})
menuUi.addEventListener('mouseleave', () => {
    menuUi.classList.remove('hover-left')
    menuDev.classList.remove('hover-left')
})


// Trocando o link das paginas
menuDev.addEventListener('click', () => {

    changePageDev.forEach((item, i) => { setTimeout(function() { addClassActive(item) }, 250 * i) })
    setTimeout(function() { window.location.replace('/portifolio/dev/') }, 1300)
})

menuUi.addEventListener('click', () => {
    changePageUi.forEach((item, i) => { setTimeout(function() { addClassActive(item) }, 250 * i) })
    setTimeout(function() { window.location.replace('https://guilhermecassettari.github.io/portifotio/ui.html' }, 1300)
})


// Controlando os itens que entram na tela
window.addEventListener('scroll', enterContentOnScreen)

// retorna um array com o o Top e o Bottom do item


function getTopAndBottomFromIdScreen(screen) {
    return [
        screen.getBoundingClientRect().top,
        screen.getBoundingClientRect().bottom

    ]
}

// Funções para n precisar escrever tanto 
function addClassActive(doc) {
    doc.classList.add('active')
}

function removeActive(doc) {
    doc.classList.remove('active')
}

function addColorBlackToSvg(svg) {
    svg.forEach(item => item.classList.add('black'))
}

function removeColorBlackToSvg(svg) {
    svg.forEach(item => item.classList.remove('black'))
}


// Função que vai coordenar os itens que aparecem e desaparecem da tela
function enterContentOnScreen() {


    // pegando o tamanho da tela
    const screenHeightSize = window.innerHeight / 5 * 4
        // para falar a verdade este / 5 * 4 não entendi ao certo a conta mas deu meio que certo

    // console.log(screenHeightSize)
    // Para a entrada de um item
    // if (getTopAndBottomFromIdScreen(jobs)[1] < screenHeightSize - 700) {
    //     // Bloco vazio para n ficar chamando sempre o da entrada, segundo as normas do POG
    // } else if (getTopAndBottomFromIdScreen(jobs)[1] < screenHeightSize + 350) {
    //     //Aqui vai o codigo
    // }

    // MAIN AREA ----------------------------------------------------------
    if (getTopAndBottomFromIdScreen(content)[1] < screenHeightSize - 700) {

    } else if (getTopAndBottomFromIdScreen(content)[1] < screenHeightSize + 350) {
        // removeColorBlackToSvg(fillHamburguer)
        // removeColorBlackToSvg(fillLinkedin)
        // removeColorBlackToSvg(fillGit)
        // removeColorBlackToSvg(fillFacebook)
        // removeColorBlackToSvg(fillInstagram)
        portifolio.classList.remove('black')


        //Areas Pagina Jobs para sumir

        removeActive(jobRightArea)
        removeActive(imgCarrega)
        removeActive(imgBaby)
        removeActive(jobWord)
        removeActive(horizontalLineJobs)
        removeActive(porOnde)


    }

    // JOBS AREA--------------------------------------------------------
    if (getTopAndBottomFromIdScreen(jobs)[1] < screenHeightSize - 700) {

    } else if (getTopAndBottomFromIdScreen(jobs)[1] < screenHeightSize + 350) {

        // SVG
        // addColorBlackToSvg(fillHamburguer)
        portifolio.classList.add('black')

        removeColorBlackToSvg(fillLinkedin)
        removeColorBlackToSvg(fillGit)
        removeColorBlackToSvg(fillFacebook)
        removeColorBlackToSvg(fillInstagram)

        // Areas da página
        addClassActive(jobRightArea)
        addClassActive(imgCarrega)
        addClassActive(imgBaby)
        addClassActive(jobWord)
        addClassActive(porOnde)
        addClassActive(horizontalLineJobs)

        // Remover Skills
        skillCards.forEach((item, i) => { setTimeout(function() { removeActive(item) }, 100 * i) })

    }

    // SKILLS AREA -------------------------------------------------------
    if (getTopAndBottomFromIdScreen(skills)[1] < screenHeightSize - 700) {

    } else if (getTopAndBottomFromIdScreen(skills)[1] < screenHeightSize + 350) {

        //Areas Pagina Jobs para sumir
        portifolio.classList.remove('black')
        removeActive(jobRightArea)
        removeActive(imgCarrega)
        removeActive(imgBaby)
        removeActive(jobWord)
        removeActive(porOnde)
        removeActive(horizontalLineJobs)

        // SVG
        // removeColorBlackToSvg(fillHamburguer)
        removeColorBlackToSvg(fillLinkedin)
        removeColorBlackToSvg(fillGit)
        removeColorBlackToSvg(fillFacebook)
        removeColorBlackToSvg(fillInstagram)

        // Areas da Página
        skillCards.forEach((item, i) => { setTimeout(function() { addClassActive(item) }, 100 * i) })



    }

    if (getTopAndBottomFromIdScreen(contact)[1] < screenHeightSize - 700) {

    } else if (getTopAndBottomFromIdScreen(contact)[1] < screenHeightSize + 350) {
        portifolio.classList.add('black')
        addColorBlackToSvg(fillLinkedin)
        addColorBlackToSvg(fillGit)
        addColorBlackToSvg(fillFacebook)
        addColorBlackToSvg(fillInstagram)

        // Remover Skills
        skillCards.forEach((item, i) => { setTimeout(function() { removeActive(item) }, 100 * i) })

    }
}
