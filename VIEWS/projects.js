const modal = document.querySelector('.modal')
const images = document.querySelectorAll('.img-container img')
const singleImage = document.querySelector('.full-img')
const section = document.querySelector('.section-moon')

images.forEach(image => {
    image.addEventListener('click', openModal = () => {
        modal.classList.add('modal-open')
        singleImage.classList.add('modal-open')
        
        const oryginalSrc = image.getAttribute("data-original");
        console.log(image.getAttribute("alt"))
        singleImage.src = `${oryginalSrc}`

    })
});

closeModal = () => { 
    modal.classList.remove('modal-open')
    singleImage.classList.remove('modal-open')
}

modal.addEventListener('click', closeModal)
window.addEventListener('scroll', closeModal)