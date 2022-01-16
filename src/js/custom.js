import { playList } from "./jsdata/playlist";

const custom = {
  convertTime: function (time) {
    var p = Math.floor(time / 60);
    var s = Math.floor(time % 60);
    if (p > 9) return p + ":" + s;
    else return "0" + p + ":" + s;
  },
  loadOverView: {
    songs: function (query, song) {
      var audio = new Audio();
      audio.src = song.audio;
      $(query).append(`
          <div class="the-song" id="${song.id}">
          <img src="${song.img}" alt="" class="the-song-img">
          <img src="./wwwroot/images/songActiveAnimation/icon-playing.gif" alt=""
          class="the-song-animate">
          <div class="the-song-des">
              <div class="the-song-des-name">${song.name}</div>
              <a href="#" class="the-song-des-author">${song.author}</a>
          </div>
          <div class="the-song-time"></div>
          <div class="the-song-option">
              <div>
                  <i class="fal fa-microphone"></i>
              </div>
              <div><i class="fal fa-heart"></i></div>
              <div><i class="far fa-ellipsis-h"></i></div>
          </div>
      </div>
          `);
      audio.onloadeddata = function () {
        $(`#${song.id} .the-song-time`).text(
          `${custom.convertTime(audio.duration)}`
        );
      };
    },
    playList: function (query, playlistItem) {
      $(query).append(`
          <div class="slide-show-it">
          <div class="slide-show-it-img"> <img src="${playlistItem.img}" alt=""
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
                 ${playlistItem.name}
              </div>
              <div class="slide-show-it-des-author">
                  ${playlistItem.creator}
              </div>
          </div>
      </div> 
          `);
    },
    album: function (query, albumList) {
      $(query).append(`
      <div class="slide-show-it">
      <div class="slide-show-it-img"> <img src="${albumList.img}" alt=""
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
              ${albumList.name}
          </div>
      </div>
  </div>
      `);
    },
    mv: function (query, mvs) {
      $(query).append(`
      <div class="slide-show-it">
      <div class="slide-show-it-img"> <img src="${mvs.img}" alt=""
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
          <img src="${mvs.authorAvatar}" alt="">
          <div class="overview__mv-des">
              <div class="slide-show-it-des-name">
                  ${mvs.name}
              </div>
              <div class="slide-show-it-des-author">
                 ${mvs.author}
              </div>
          </div>
      </div>
  </div>
        `);
    },
    artist: function (query, artistList) {
      $(query).append(`
        <div class="slide-show-it">
        <div class="slide-show-it-img"> <img src="${artistList.img}" alt=""
                class="">
            <div class="slide-show-it-option">

                <div class="btn-box btn-box-play"> <i class="fal fa-play-circle"></i>
                </div>

            </div>
        </div>
        <div class="slide-show-it-des">
            <div class="slide-show-it-des-name">
                ${artistList.name}
            </div>
            <div class="des-folow">${artistList.followers} flow</div>
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
