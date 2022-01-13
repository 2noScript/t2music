const custom = {
  loadOverView: {
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
      });
    },
  },
};
export { custom };
