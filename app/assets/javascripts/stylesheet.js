(window.onload = function() {

})();

//マイページのガイドとゲストの切り替えタブの処理
(function($) {

	var tabs =  $(".tabs li a");

	tabs.click(function() {
		var content = this.hash.replace('/','');
		tabs.removeClass("active");
		$(this).addClass("active");
    $("#content").find('section').hide();
    $(content).fadeIn(200);
	}).filter('.active').trigger('click'); // add


})(jQuery);

//ファイルのアップロードとプレビューの処理　同じ処理を4回書いているのでまとめたい（＞もっちー）
$(function(){
  $('#img1').change(function(e){
    //ファイルオブジェクトを取得する
    var file = e.target.files[0];
    var reader = new FileReader();

    //画像でない場合は処理終了
    if(file.type.indexOf("image") < 0){
      alert("画像ファイルを指定してください。");
      return false;
    }

    //アップロードした画像を設定する
    reader.onload = (function(file){
      return function(e){
        $("#mypageface-icon").attr("src", e.target.result);
        $("#mypageface-icon").attr("title", file.name);
      };
    })(file);
    reader.readAsDataURL(file);

  });
});

$(function(){
  $('#img2').change(function(e){
    //ファイルオブジェクトを取得する
    var file = e.target.files[0];
    var reader = new FileReader();

    //画像でない場合は処理終了
    if(file.type.indexOf("image") < 0){
      alert("画像ファイルを指定してください。");
      return false;
    }

    //アップロードした画像を設定する
    reader.onload = (function(file){
      return function(e){
        $("#preview2").attr("src", e.target.result);
        $("#preview2").attr("title", file.name);
      };
    })(file);
    reader.readAsDataURL(file);

  });
});

$(function(){
  $('#img3').change(function(e){
    //ファイルオブジェクトを取得する
    var file = e.target.files[0];
    var reader = new FileReader();

    //画像でない場合は処理終了
    if(file.type.indexOf("image") < 0){
      alert("画像ファイルを指定してください。");
      return false;
    }

    //アップロードした画像を設定する
    reader.onload = (function(file){
      return function(e){
        $("#preview3").attr("src", e.target.result);
        $("#preview3").attr("title", file.name);
      };
    })(file);
    reader.readAsDataURL(file);

  });
});

$(function(){
  $('#img4').change(function(e){
    //ファイルオブジェクトを取得する
    var file = e.target.files[0];
    var reader = new FileReader();

    //画像でない場合は処理終了
    if(file.type.indexOf("image") < 0){
      alert("画像ファイルを指定してください。");
      return false;
    }

    //アップロードした画像を設定する
    reader.onload = (function(file){
      return function(e){
        $("#preview4").attr("src", e.target.result);
        $("#preview4").attr("title", file.name);
      };
    })(file);
    reader.readAsDataURL(file);

  });
});


$('#treat').circleType();
