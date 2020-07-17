var playerClass, href;

$(".mv-list").click(function() {
  href = $(this).attr("href");
  console.log(href);
  $("#mv-list").hide();
  $(".mv-button").show();
  $("iframe").attr("src", href);
  $("iframe").show();
  event.preventDefault();
});

$(".mv-button").click(function() {
  $(this).hide();
  $("iframe").hide();
  $("iframe").attr("src", " ");
  $("#mv-list").show();
});
