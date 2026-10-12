//select elements
let startY = 0;
let isPulled = false;
let distance = 0;

//scrolled navBar
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 30) {
    $("nav").addClass("scrolled");
  } else {
    $("nav").removeClass("scrolled");
  }
});

//boxes stop propagation
$(".popup .box").click(function (e) {
  e.stopPropagation();
});

// initialize WOW animations
new WOW({}).init();

//live chat
$("#chatToggle").on("click", function () {
  $(".live-chat").toggleClass("is-open");
});

//search
$("#search").submit(function (e) {
  e.preventDefault();

  let searchText = $(this).find("input").val().toLowerCase().trim();
  let product = $(".trend-card, .product-card, .product-item")
    .filter(function () {
      return $(this).text().toLowerCase().includes(searchText);
    })
    .first();

  if (!product.length) {
    Swal.fire({
      icon: "warning",
      title: "No Products Found",
      text: "We couldn't find a match. Try a different keyword.",
      confirmButtonText: "Try Again",
      confirmButtonColor: "#705541",
      background: "#dbcece",
      color: "#352820",
      backdrop: "rgba(35, 26, 20, 0.78)",
      iconColor: "#B99A72",
      customClass: {
        popup: "cartelle-alert",
        title: "cartelle-title",
        confirmButton: "cartelle-button",
        htmlContainer: "cartelle-msg",
      },
    });

    return;
  }

  setTimeout(function () {
    $(".search-highlight").removeClass("search-highlight");
    product.addClass("search-highlight");

    $("html, body").animate(
      {
        scrollTop: product.offset().top - 120,
      },
      500,
    );
  });
});

// Pull the tassel
$(".lamp-tassel").on("pointerdown", function (e) {
  startY = e.originalEvent.clientY;
  isPulled = true;
  $(this).addClass("pulling");
});

// Move the tassel
$(document).on("pointermove", function (e) {
  if (!isPulled) return;
  distance = e.originalEvent.clientY - startY;
  if (distance < 0) distance = 0;
  if (distance > 80) distance = 80;
  $(".lamp-tassel.pulling").css("transform", "translateY(" + distance + "px)");
});

//pointer up and pointer cancel
$(document).on("pointerup pointercancel", function () {
  if (!isPulled) return;
  isPulled = false;
  $(".lamp-tassel").removeClass("pulling").css("transform", "translateY(0)");
  if (distance >= 40) {
    $("#Contact").addClass("is-open");
  }
});

//NOTES:
// pointerdown:معناها لما اضفط على الفتلة
// pointerUp : لما اسيب الفتلة
//e.originalEvent.clientY: الحركة على محور ص

//footer input
$(".footer-form").on("submit", function (e) {
  e.preventDefault();

  let email = $("#Email").val();
  if (email) {
    Swal.fire({
      icon: "success",
      title: "Welcome to Cartelle!",
      text: "Thank you for joining our community.",
      confirmButtonColor: "#E3C678",
      background: "#681d35",
      color: "#fff",
    });

    this.reset(); /*empty the input */
  }
});
