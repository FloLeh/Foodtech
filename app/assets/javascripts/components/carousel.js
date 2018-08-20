class Carousel {

  constructor (element, options = {}){

    this.element = element;
    this.options = Object.assign({},{
      slidesToScroll: 1,
      slideVisible: 1
    },options)

  }

}

document.addEventListener('DOMContentLoaded', function(){
  new Carousel($('.carousel'), {
    slidesToScroll: 2,
    slideVisible: 3
  })
})
