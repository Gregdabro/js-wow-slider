const upBtn = document.querySelector('.up-button')

const downBtn = document.querySelector('.down-button')

const sidebar = document.querySelector('.sidebar')

const container = document.querySelector('.container')

const mainSlide = document.querySelector('.main-slide')

const slidesCount = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    chaingeSlide('up')
})

downBtn.addEventListener('click', () => {
    chaingeSlide('down')
})

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        chaingeSlide('up')
    } else if (event.key === 'ArrowDown') {
        chaingeSlide('down')
    }
})

function chaingeSlide(directon) {
    if (directon === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount)
        {
            activeSlideIndex = 0
        } 

    } else if (directon === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount -1
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}



 
   
         
                
  
    
     
        
    
       
