const initMap = () => {
  return new google.maps.Map(document.getElementById('map'), {
    center: {
        lat: 25.736386, 
        lng: -80.196983
    },
    zoom: 8,
  });
};

const initMarker = (map) => {
  return new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {
      lat: 25.1423779,
      lng: -78.0009266,
    },
  });
};

function showMap() {

  const map = initMap();
  const marker = initMarker(map);
};

const animatedElement = document.querySelector('#logo');
animatedElement.classList.add('animated', 'bounceInDown');

jQuery(function(){
  $('#slider-top').slick({
    vertical: true,
    verticalSwiping: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    speed: 1000
  });
});

jQuery(function(){
  $('.scroll-list').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'ease-out',
    speed: 3000,
    dots: true,
    pauseOnDots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    adaptiveHeight: true,

    responsive: [
      {
        breakpoint: 1330,
        settings: {
          autoplay: true,
          autoplaySpeed: 4000,
          speed: 1000,
          dots: true,
          pauseOnDots: true,
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1170,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 990,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 880,
        settings: {
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 830,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 560,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }
    ] 
  });
});