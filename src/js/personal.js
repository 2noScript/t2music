import { loadView } from "./loadView";
import { data } from "./data";
import { playList } from "./jsdata/playlist";
import { mvList } from "./jsdata/mvList";
import { albumList } from "./jsdata/albums";
import { artistList } from "./jsdata/artistList";
import { overviewSongs } from "./jsdata/overviewSongs";
import { controlmusic } from "./controlmusic";
function getDataSong(songs, subPthAudio, subPthImg) {
  var _songs = {};
  songs.forEach(function (item, index) {
    var s = {};
    s.id = "id" + index;
    s.name = item.slice(0, item.search("-"));
    s.author = item.slice(item.search("-") + 1, item.length);
    s.audio = subPthAudio + item + ".mp3";
    s.img = subPthImg + item + ".jpg";
    _songs["s" + index] = s;
  });
  return _songs;
}

function renderViewSongs() {
  var songs = getDataSong(
    overviewSongs,
    "./data/personal/songs/",
    "./data/personal/songs/img/"
  );
  for (var k in songs) {
    loadView.overView.songs(".overview__songs .overview-songs__list", songs[k]);
  }
}

function renderOverViewBody() {
  playList.forEach(function (item) {
    loadView.overView.playList(".overview__playlist .slide-show", item);
  });
  mvList.forEach(function (item) {
    loadView.overView.mv(".overview__mv .slide-show", item);
  });
  albumList.forEach(function (item) {
    loadView.overView.album(".overview__album .slide-show", item);
  });
  artistList.forEach(function (item) {
    loadView.overView.artist(".overview__artist .slide-show", item);
  });
}

function useSlideshow() {
  loadView.slickSlider.playList(".overview__playlist .slide-show");
  loadView.slickSlider.album(".overview__album .slide-show");
  loadView.slickSlider.mv(".overview__mv .slide-show");
  loadView.slickSlider.artist(".overview__artist .slide-show");
}

function narbarHandle() {
  var currentNarbartab;
  $(".personal__head-narbar-menu .btn-text").click(function () {
    $(".personal__head-narbar-menu .btn-text").removeClass("btn-text-active");
    $(this).addClass("btn-text-active");
  });
}

function OverviewSongSelected() {
  $(document).ready(function () {
    var currentId;
    var mute = false;
    var audio = new Audio();
    var songs = getDataSong(
      overviewSongs,
      "./data/personal/songs/",
      "./data/personal/songs/img/"
    );
    $(".overview__songs .overview-songs__list .the-song").click(function () {
      $(
        ".overview__songs .overview-songs__list .the-song.the-song--active"
      ).removeClass("the-song--active");
      $(this).addClass("the-song--active");

      //xử lý khi nghe nhạc
      var id = $(this)[0].id;
      for (var k in songs) {
        if (id == songs[k].id && songs[k].id != currentId) {
          currentId = id;
          audio.pause();
          // console.log("ok");
          audio.src = songs[k].audio;
          audio.play();
          controlmusic.musicPlay(audio);
        }
      }
    });
  });
}

const personal = {
  eventHandle: function () {
    narbarHandle();
    OverviewSongSelected();
  },
  start: function () {
    renderViewSongs();
    renderOverViewBody();
    useSlideshow();
    this.eventHandle();
  },
};
export { personal };
