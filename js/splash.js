$(window).on('load',function(){
  $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述

  //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
  $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
  
      $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与

  });
  //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
  
 //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
 $('.splashbg').on('animationend', function () {
  bubbly({
    colorStart: '#fff4e6',
    colorStop: '#ffe9e4',
    blur: 1,
    compose: 'source-over',
    bubbleFunc: () => `hsla(${Math.random() * 50}, 100%, 50%, .3)`
  });
});
//=====ここまで背景が伸びた後に動かしたいJSをまとめる
});
