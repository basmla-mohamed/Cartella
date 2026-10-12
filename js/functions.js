// Open popup
function openPopup(popupName) {
  if (popupName === "woman") {
    showWomanProducts();
  }

  if (popupName === "men") {
    showMenProducts();
  }

  if (popupName === "beauty") {
    showBeautyProducts();
  }

  if (popupName === "electronics") {
    showElectronicsProducts();
  }

  if (popupName === "accessories") {
    showAccessoriesProducts();
  }

  $(`.popup[data-popup-name="${popupName}"]`).fadeIn(1000);
  $("body").css("overflow", "hidden");
}

// Close popup
function closePopup() {
  $(".popup").fadeOut(1000);
  $("body").css("overflow", "");
}

//show product in women
function showWomanProducts() {
  let productContainer = $("#womanPopup .productContainer");

  productContainer.html("");

  woman.forEach((product) => {
    productContainer.append(`
      <div class="col-12 col-md-4 col-xl-3 mb-3">
        <div class="mb-5 item overflow-hidden h-100">

          <img src="${product.image}" "class="img-fluid"/>

          <div class="row px-3 py-3">
            <div class="col-6">

              <div class="priceText fs-6 fw-bold">Price:</div>
            </div>

            <div class="col-6">
              <div class="price">${Number(product.price).toFixed(2)}$</div>
            </div>
          </div>

          <div class="row px-3 pt-2">
            <div class="col-6">
              <div class="favorite">Favorite:</div>
            </div>

            <div class="col-6">
              <div class="favorite">
                <i class="fa-regular fa-heart"></i>
              </div>
            </div>
          </div>

          <div class="row px-3 pt-2">
            <div class="col-6">
              <div class="cart">Add to cart:</div>
            </div>

            <div class="col-6">
              <div class="cart">
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>

        </div>
      </div>
    `);
  });
}

//show product in women
function showMenProducts() {
  let productContainer = $("#menPopup .productContainer");

  productContainer.html("");

  men.forEach((product) => {
    productContainer.append(`
      <div class="col-12 col-md-4 col-xl-3 mb-3">
        <div class="mb-5 item overflow-hidden h-100">

          <img src="${product.image}" "class="img-fluid"/>

          <div class="row px-3 py-3">
            <div class="col-6">

              <div class="priceText fs-6 fw-bold">Price:</div>
            </div>

            <div class="col-6">
              <div class="price">${Number(product.price).toFixed(2)}$</div>
            </div>
          </div>

          <div class="row px-3 pt-2">
            <div class="col-6">
              <div class="favorite">Favorite:</div>
            </div>

            <div class="col-6">
              <div class="favorite">
                <i class="fa-regular fa-heart"></i>
              </div>
            </div>
          </div>

          <div class="row px-3 pt-2">
            <div class="col-6">
              <div class="cart">Add to cart:</div>
            </div>

            <div class="col-6">
              <div class="cart">
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>

        </div>
      </div>
    `);
  });
}

//show product in beauty
function showBeautyProducts() {
  let productContainer = $("#beautyPopup .productContainer");

  productContainer.html("");

  beauty.forEach((product) => {
    productContainer.append(`
      <div class="col-12 col-md-4 col-xl-3 mb-3">
        <div class="mb-5 item overflow-hidden h-100">

          <img src="${product.image}" "class="img-fluid"/>

          <div class="row px-3 py-3">
            <div class="col-6">

              <div class="priceText fs-6 fw-bold">Price:</div>
            </div>

            <div class="col-6">
              <div class="price">${Number(product.price).toFixed(2)}$</div>
            </div>
          </div>

          <div class="row px-3 pt-2">
            <div class="col-6">
              <div class="favorite">Favorite:</div>
            </div>

            <div class="col-6">
              <div class="favorite">
                <i class="fa-regular fa-heart"></i>
              </div>
            </div>
          </div>

          <div class="row px-3 pt-2">
            <div class="col-6">
              <div class="cart">Add to cart:</div>
            </div>

            <div class="col-6">
              <div class="cart">
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>

        </div>
      </div>
    `);
  });
}

//show product in electronics
function showElectronicsProducts() {
  let productContainer = $("#electronicsPopup .productContainer");

  productContainer.html("");

  electrons.forEach((product) => {
    productContainer.append(`
      <div class="col-12 col-md-4 col-xl-3 mb-3">
        <div class="mb-5 item overflow-hidden h-100">

          <img src="${product.image}" "class="img-fluid"/>

          <div class="row px-3 py-3">
            <div class="col-6">

              <div class="priceText fs-6 fw-bold">Price:</div>
            </div>

            <div class="col-6">
              <div class="price">${Number(product.price).toFixed(2)}$</div>
            </div>
          </div>

          <div class="row px-3 pt-2">
            <div class="col-6">
              <div class="favorite">Favorite:</div>
            </div>

            <div class="col-6">
              <div class="favorite">
                <i class="fa-regular fa-heart"></i>
              </div>
            </div>
          </div>

          <div class="row px-3 pt-2">
            <div class="col-6">
              <div class="cart">Add to cart:</div>
            </div>

            <div class="col-6">
              <div class="cart">
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>

        </div>
      </div>
    `);
  });
}

//show product in accessories
function showAccessoriesProducts() {
  let productContainer = $("#accessoriesPopup .productContainer");

  productContainer.html("");

  accessories.forEach((product) => {
    productContainer.append(`
      <div class="col-12 col-md-4 col-xl-3 mb-3">
        <div class="mb-5 item overflow-hidden h-100">

          <img src="${product.image}" "class="img-fluid"/>

          <div class="row px-3 py-3">
            <div class="col-6">

              <div class="priceText fs-6 fw-bold">Price:</div>
            </div>

            <div class="col-6">
              <div class="price">${Number(product.price).toFixed(2)}$</div>
            </div>
          </div>

          <div class="row px-3 pt-2">
            <div class="col-6">
              <div class="favorite">Favorite:</div>
            </div>

            <div class="col-6">
              <div class="favorite">
                <i class="fa-regular fa-heart"></i>
              </div>
            </div>
          </div>

          <div class="row px-3 pt-2">
            <div class="col-6">
              <div class="cart">Add to cart:</div>
            </div>

            <div class="col-6">
              <div class="cart">
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>

        </div>
      </div>
    `);
  });
}

// Filter products in trending
$(".trend-section").click(function () {
  let category = $(this).data("filter");

  $(".trend-section").removeClass("active");
  $(this).addClass("active");

  $(".trend-item").hide();

  if (category === "All") {
    $(".trend-item").show();
  } else {
    $('.trend-item[data-category="' + category + '"]').show();
  }
});

//love in trending
$(".trend-wishlist").click(function () {
  $(this).toggleClass("active");
  $(this).find("i").toggleClass("fa-regular fa-solid");
});
