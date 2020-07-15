var playerClass, href;

$(".mv-list").click(function() {
  href = $(this).attr("href");
  console.log(href);
  $("#mv-list").hide();
  $(".mv-button").show();
  $("h1").after('<iframe width="560" height="315" src=' + href + ' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
  event.preventDefault();
});

$(".mv-button").click(function() {
  $(this).hide();
  $("iframe").remove();
  $("#mv-list").show();
});
