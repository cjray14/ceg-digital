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

function loadDelays() {
  $('.js-LoadDelay').addClass('js-LoadDelay-loaded');
  $('.js-LoadDelayAfter').addClass('js-LoadDelay-loaded');
}

function imageParallax() {
  // https://codepen.io/hendrysadrak/pen/ctgaz

  var $fwindow = $(window);
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  var $contents = [];
  var $backgrounds = [];

  $('[data-type="content"]').each(function(index, e) {
    var $contentObj = $(this);

    $contentObj.__speed = ($contentObj.data('speed') || 1);
    $contentObj.__fgOffset = $contentObj.offset().top;
    $contents.push($contentObj);
  });

  $('[data-type="background"]').each(function() {
    var $backgroundObj = $(this);

    $backgroundObj.__speed = ($backgroundObj.data('speed') || 1);
    $backgroundObj.__fgOffset = $backgroundObj.offset().top;
    $backgrounds.push($backgroundObj);
  });

  $fwindow.on('scroll resize', function() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    $contents.forEach(function($contentObj) {
      var yPos = $contentObj.__fgOffset - scrollTop / $contentObj.__speed;

      $contentObj.css('top', yPos);
    })

    $backgrounds.forEach(function($backgroundObj) {
      var yPos = -((scrollTop - $backgroundObj.__fgOffset) / $backgroundObj.__speed);

      $backgroundObj.css({
        backgroundPosition: '50% ' + yPos + 'px'
      });
    });
  });

  $fwindow.trigger('scroll');
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
  loadDelays()
  imageParallax()
  blogCarousel()
}

$(document).ready(function(){
  globals()

  setTimeout(function(){
    setInterval(function() {
      $($('.js-Fadein:in-viewport').not('.js-Fadedin')[0]).addClass('js-Fadedin');
    }, 100);
  }, 1000);
});
