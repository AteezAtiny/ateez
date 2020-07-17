var playerClass, href;

$(".mv-list").click(function() {
  href = $(this).attr("href");
  console.log(href);
  $("#mv-list").hide();
  $(".mv-button").show();
  $("iframe").attr("src", href);
  var link = href.split("/embed");
  $(".link-button").attr("href","https://youtu.be" + link[1]);
  $("iframe").show();
  event.preventDefault();
});

$(".mv-button").click(function() {
  $(this).hide();
  $("iframe").hide();
  $("iframe").attr("src", " ");
  $("#mv-list").show();
});
