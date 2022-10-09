const slides = document.querySelectorAll('.slide')
slides.forEach((elem) => {
    elem.onclick = () => {
        document.querySelector('.active')?.classList.remove('active')
        elem.classList.add('active')
    }
})