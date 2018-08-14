function pageLoader(){
  var bar = new ProgressBar.Line(container, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1000,
    color: '#ee7700',
    trailColor: '#fff',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    from: {color: '#fff'},
    to: {color: '#ee7700'},
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
    }
  });

  bar.animate(1.0);
}

function blogCarousel(){
  if ($('.blg-List_Items .blg-List_Item').length > 1) {
    $('.blg-List_Items').flickity({
      cellAlign: 'left',
      wrapAround: true,
      imagesLoaded: true,
      pageDots: false,
      arrowShape: {
        x0: 30,
        x1: 60, y1: 20,
        x2: 60, y2: 10,
        x3: 60
      }
    });
  };
}

function globals(){
  pageLoader()
  blogCarousel()
}

$(document).ready(function(){
  $('.js-LoadDelay').addClass('js-LoadDelay-loaded');
  $('.js-LoadDelayAfter').addClass('js-LoadDelay-loaded');

  globals()
});
