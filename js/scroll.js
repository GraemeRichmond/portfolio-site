$(".smooth-goto").on("click", function () {
  $("html, body").animate(
    {
      scrollTop: $(this.hash).offset().top + 250,
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

// $(document).ready(function(){
//     $('.popup__img').css('visibility', 'visible');
// })
