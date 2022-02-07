// slider in to cards

const imageSlider = () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseover', (e) => {
            let target = e.target;
            let slide = target.closest('.card');
            let images = slide.querySelectorAll('.card-content-slider__img');
            let dots = slide.querySelectorAll('.card-content-slider__dot');
            dots.forEach((dot, index) => {
                dot.addEventListener('click', (e) => { //if use mouseover - hover effect
                    dots.forEach(dot => {
                        dot.classList.remove('card-content-slider__dot_active');
                    })
                    images.forEach(image => {
                        image.style.display = 'none';
                    })
                    images[index].style.display = 'block';
                    dot.classList.add('card-content-slider__dot_active');
                })
            })
        })
    })

}

export default imageSlider;