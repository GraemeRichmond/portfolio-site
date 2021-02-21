$(".smooth-goto").on("click", function () {
  $("html, body").animate(
    {
      scrollTop: $(this.hash).offset().top + 266,
    },
    1500
  );
});

$(".goto-top").on("click", function () {
  $("html, body").animate(
    {
      scrollTop: $(this.hash).offset().top - 30,
    },
    1500
  );
});

$(".goto-about").on("click", function () {
  $("html, body").animate(
    {
      scrollTop: $(this.hash).offset().top + 190,
    },
    1100
  );
});

// $(document).ready(function(){
//     $('.popup__img').css('visibility', 'visible');
// })
