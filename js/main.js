$(function () {
// bubbly({
//   colorStart: '#fff4e6',
//   colorStop: '#ffe9e4',
//   blur: 1,
//   compose: 'source-over',
//   bubbleFunc:() => `hsla(${Math.random() * 50}, 100%, 50%, .3)`
// });


$(".toggle_btn").on("click", function () {
  // toggleClassを使用することで、hamburgerクラスにactiveクラスが存在する場合は削除、
  // 存在しない場合を追加する処理を自動で行ってくれる
  $("header").toggleClass("open");
});
// メニューのリンクをクリックした時
$(".header-nav a,.mask").on("click", function () {
  $("header").toggleClass("open");
});

});