const custom = {
  loadOverView: {
    songs: function (query, data) {
      $(query).append(`
      <div class="the-song row no-gutters">
      <img src="./wwwroot/images/girl.jpg" alt="" class="the-song-img">
      <div class="the-song-des">
          <div class="the-song-des-name">best girl</div>
          <a href="#" class="the-song-des-author"> internet source</a>
      </div>
      <div class="the-song-time col l-o-4 l-1 m-0 c-0">00:00</div>
      <div class="the-song-option">
          <div>
              <i class="fal fa-microphone"></i>
          </div>
          <div><i class="fal fa-heart"></i></div>
          <div><i class="far fa-ellipsis-h"></i></div>
      </div>
  </div>

      `);
    },
    playList: function (query, data) {
      $(query).append(`
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
    },
    album: function (query, data) {
      $(query).append(`
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
      </div>
  </div>
      `);
    },
    mv: function (query) {
      $(query).append(`
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
            <img src="./wwwroot/images/girl.jpg" alt="">
            <div class="overview__mv-des">
                <div class="slide-show-it-des-name">
                    best girl
                </div>
                <div class="slide-show-it-des-author">
                    mr .siro
                </div>
            </div>
        </div>
    </div>
        `);
    },
    artist: function (query) {
      $(query).append(`
        <div class="slide-show-it">
        <div class="slide-show-it-img"> <img src="./wwwroot/images/girl.jpg" alt=""
                class="">
            <div class="slide-show-it-option">

                <div class="btn-box btn-box-play"> <i class="fal fa-play-circle"></i>
                </div>

            </div>
        </div>
        <div class="slide-show-it-des">
            <div class="slide-show-it-des-name">
                best girl
            </div>
            <div class="des-folow">77k flow</div>
            <div class="des-tick">
                <i class="fal fa-check"></i>
                <span>Đã theo dõi</span>
            </div>
        </div>
    </div>

        `);
    },
  },
  slickSlider: {
    playList: function (query) {
      $(query).slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        draggable: false,
        infinite: false,
        prevArrow:
          "<button type='button' class='slick-prev pull-left'><i class='fal fa-chevron-left'></i></i></button>",
        nextArrow:
          "<button type='button' class='slick-next pull-right'><i class='fal fa-chevron-right'></i></i></button>",

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              // dots: true,
            },
          },
          {
            breakpoint: 740,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ],
      });
    },
    album: function (query) {
      $(query).slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        draggable: false,
        infinite: false,
        prevArrow:
          "<button type='button' class='slick-prev pull-left'><i class='fal fa-chevron-left'></i></i></button>",
        nextArrow:
          "<button type='button' class='slick-next pull-right'><i class='fal fa-chevron-right'></i></i></button>",

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              // dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ],
      });
    },
    mv: function (query) {
      $(query).slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        draggable: false,
        infinite: false,
        prevArrow:
          "<button type='button' class='slick-prev pull-left'><i class='fal fa-chevron-left'></i></i></button>",
        nextArrow:
          "<button type='button' class='slick-next pull-right'><i class='fal fa-chevron-right'></i></i></button>",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              // dots: true,
            },
          },
          {
            breakpoint: 740,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    },
    artist: function (query) {
      $(query).slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        draggable: false,
        infinite: false,
        prevArrow:
          "<button type='button' class='slick-prev pull-left'><i class='fal fa-chevron-left'></i></i></button>",
        nextArrow:
          "<button type='button' class='slick-next pull-right'><i class='fal fa-chevron-right'></i></i></button>",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              // dots: true,
            },
          },
          {
            breakpoint: 740,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ],
      });
    },
  },
};
export { custom };
