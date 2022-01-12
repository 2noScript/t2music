const personal = {
  eventHandle: function () {
    $.getJSON("./wwwroot/data/data.json", function (data) {
      var promise = new Promise(function (resole, reject) {
        for (var i = 0; i < 10; i++) {
          $(".overview__playlist .slide-show").append(`
            <div class="slide-show-it">
            <div class="slide-show-it-img"> <img src="./wwwroot/images/girl.jpg" alt=""
                    class="">
                <div class="slide-show-it-option">
                    <div class="btn-box">
                        <i class="fal fa-heart"></i>
                    </div>
                    <div class="btn-box btn-box-play"> <i class="fal fa-play-circle"></i>
                    </div>
                    <div class="btn-box"><i class="far fa-ellipsis-h"></i></div>
                </div>
            </div>
            <div class="slide-show-it-des">
                <div class="slide-show-it-des-name">
                    best girl
                </div>
                <div class="slide-show-it-des-author">
                    internet source
                </div>
            </div>
        </div>
            `);
        }

        resole();
      });
      promise.then(function () {
        $(".overview__playlist .slide-show").slick({
          slidesToShow: 5,
          slidesToScroll: 5,
          draggable: false,
          infinite: false,
          prevArrow:
            "<button type='button' class='slick-prev pull-left'><i class='fal fa-chevron-left'></i></i></button>",
          nextArrow:
            "<button type='button' class='slick-next pull-right'><i class='fal fa-chevron-right'></i></i></button>",
        });
      });
      // resole();
    });

    $(document).ready(
      // overview playlist

      // overview album
      $(".overview__album .slide-show").slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        draggable: false,
        infinite: false,
        prevArrow:
          "<button type='button' class='slick-prev pull-left'><i class='fal fa-chevron-left'></i></i></button>",
        nextArrow:
          "<button type='button' class='slick-next pull-right'><i class='fal fa-chevron-right'></i></i></button>",
      }),
      // overview mv
      $(".overview__mv .slide-show").slick({
        slidesToShow: 3,
        slidesToScroll: 5,
        draggable: false,
        infinite: false,
        prevArrow:
          "<button type='button' class='slick-prev pull-left'><i class='fal fa-chevron-left'></i></i></button>",
        nextArrow:
          "<button type='button' class='slick-next pull-right'><i class='fal fa-chevron-right'></i></i></button>",
      }),
      $(".overview__artist .slide-show").slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        draggable: false,
        infinite: false,
        prevArrow:
          "<button type='button' class='slick-prev pull-left'><i class='fal fa-chevron-left'></i></i></button>",
        nextArrow:
          "<button type='button' class='slick-next pull-right'><i class='fal fa-chevron-right'></i></i></button>",
      })
    );
  },
  start: function () {
    this.eventHandle();
  },
};
export { personal };
