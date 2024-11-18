$(()=>{
    const nextBtn = $('.next-button')
    const prevBtn = $('.prev-button')

    nextBtn.on('click', (e:JQuery.ClickEvent)=>{
        const target = $(e.currentTarget);
        const parentElement = target.closest('.carousel')
        const slides = parentElement.find('.slide-container')
        const activeSlide = slides.find('[data-active]')
        const nextSlide = activeSlide.next('.slide')

        if(nextSlide.length){
            activeSlide.removeAttr('data-active')
            nextSlide.attr('data-active','')
        } else {
            activeSlide.removeAttr('data-active')
            slides.find('.slide').first().attr('data-active', '')
        }

    })
    prevBtn.on('click', (e:JQuery.ClickEvent)=>{
        const target = $(e.currentTarget);
        const parentElement = target.closest('.carousel')
        const slides = parentElement.find('.slide-container')
        const activeSlide = slides.find('[data-active]')
        const prevSlide = activeSlide.prev('.slide')

        if(prevSlide.length){
            activeSlide.removeAttr('data-active')
            prevSlide.attr('data-active','')
        } else {
            activeSlide.removeAttr('data-active')
            slides.find('.slide').last().attr('data-active', '')
        }

    })

})