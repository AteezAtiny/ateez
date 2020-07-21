var href;

// $(document).ready(function() {
//   $('.loading').hide();
// });

$(".mv-list").click(function() {
  href = $(this).attr("href");
  $("#mv-list").hide();
  $(".mv-button").show();
  $("iframe").attr("src", href);
  var link = href.split("/embed");
  $(".link-button").attr("href","https://youtu.be" + link[1]);
  $("iframe").show();
  $(".link-button").show();
  event.preventDefault();
});

$(".content-list").click(function() {
  href = $(this).attr("href");
  $("#content-list").hide();
  $(".mv-button").show();
  $("iframe").attr("src", href);
  var link = href.split("/embed/videoseries");
  $(".link-button").attr("href","https://youtube.com/playlist" + link[1]);
  $("iframe").show();
  $(".link-button").show();
  event.preventDefault();
});

$(".mv-button").click(function() {
  $(this).hide();
  $(".link-button").hide();
  $("iframe").hide();
  $("iframe").attr("src", " ");
  $("#mv-list").show();
  $("#content-list").show();
});
