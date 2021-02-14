$(".smooth-goto").on("click", function () {
  $("html, body").animate(
    {
      scrollTop: $(this.hash).offset().top + 266,
    },
    1000
  );
});

$(".goto-top").on("click", function () {
  $("html, body").animate(
    {
      scrollTop: $(this.hash).offset().top - 30,
    },
    1000
  );
});

$(".goto-about").on("click", function () {
  $("html, body").animate(
    {
      scrollTop: $(this.hash).offset().top + 190,
    },
    1000
  );
});

// $(document).ready(function(){
//     $('.popup__img').css('visibility', 'visible');
// })
