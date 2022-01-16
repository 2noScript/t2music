import { custom } from "./custom";
import { data } from "./data";
import { playList } from "./jsdata/playlist";
import { mvList } from "./jsdata/mvList";
import { albumList } from "./jsdata/albums";
import { artistList } from "./jsdata/artistList";

const personal = {
  getDataSong: function (songs, subPthAudio, subPthImg) {
    var _songs = {};

    for (var k in songs) {
      var s = songs[k];
      var s1 = {};
      s1.name = s.slice(0, s.search("-"));
      s1.author = s.slice(s.search("-") + 1, s.length);
      s1.img = subPthImg + s + ".jpg";
      s1.audio = subPthAudio + s + ".mp3";
      s1.id = k;
      _songs[k] = s1;
    }
    return _songs;
  },
  loadOverviewSongs: function () {
    var songs = this.getDataSong(
      data.personal.songs,
      "./data/personal/songs/",
      "./data/personal/songs/img/"
    );
    console.log(songs);

    for (var k in songs) {
      custom.loadOverView.songs(
        ".overview__songs .overview-songs__list",
        songs[k]
      );
      // console.log(songs[k]);
    }
  },
  eventHandle: function () {
    this.loadOverviewSongs();

    playList.forEach(function (item) {
      custom.loadOverView.playList(".overview__playlist .slide-show", item);
    });

    mvList.forEach(function (item) {
      custom.loadOverView.mv(".overview__mv .slide-show", item);
    });
    albumList.forEach(function (item) {
      custom.loadOverView.album(".overview__album .slide-show", item);
    });
    artistList.forEach(function (item) {
      custom.loadOverView.artist(".overview__artist .slide-show", item);
    });

    custom.slickSlider.playList(".overview__playlist .slide-show");
    custom.slickSlider.album(".overview__album .slide-show");
    custom.slickSlider.mv(".overview__mv .slide-show");
    custom.slickSlider.artist(".overview__artist .slide-show");
    //narbar
    var currentNarbartab;
    $(".personal__head-narbar-menu .btn-text").click(function () {
      $(".personal__head-narbar-menu .btn-text").removeClass("btn-text-active");
      $(this).addClass("btn-text-active");
    });
  },
  start: function () {
    this.eventHandle();
  },
};
export { personal };
