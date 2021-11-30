<template>
  <div>
    <!-- main product -->
    <div class="grid gap-0 md:gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      <!-- left -->
      <div>
        <!-- feature image -->
        <div>
          <img
            class=""
            src="https://catseye.com.bd/pub/media/catalog/product/cache/a5266052acf5d5e76815a4918ecebc7f/c/e/ce_pant_1_1_6885_1_tk_2150_vat_2_.jpg"
            alt=""
          />
        </div>
        <!-- sample iamges -->
        <div class="overflow-x-auto max-w-full">
          <div class="flex">
            <img
              v-for="i in 10"
              :key="i"
              class="w-14 border mx-2"
              src="https://catseye.com.bd/pub/media/catalog/product/cache/a5266052acf5d5e76815a4918ecebc7f/c/e/ce_pant_1_1_6885_1_tk_2150_vat_2_.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <!-- center -->
      <div class="col-span-2">
        <!-- title -->
        <p class="font-bold my-3">Solid Colour Formal Pant</p>
        <!-- price -->
        <h3 class="text-2xl font-semibold my-3">
          <span class="line-through">৳2,150.00</span>৳1,720.00
        </h3>
        <!-- short description -->
        <p class="font-medium my-3">
          Formal Pant for Men. Depending on your computer or mobile screen
          resolution, product color may vary slightly.
        </p>
        <!-- cart part -->
        <div class="flex bg-red-5000 my-5">
          <!-- qty -->
          <div
            class="
              flex
              items-center
              justify-around
              border-2 border-black
              rounded-xl
              py-1
            "
          >
            <button class="mx-2 px-2">-</button>
            <button class="mx-2 px-2">1</button>
            <button class="mx-2 px-2">+</button>
          </div>
          <!--  add to cart button -->
          <button
            class="
              whitespace-nowrap
              mx-2
              py-1
              bg-black
              px-4
              rounded-xl
              uppercase
              font-medium
              text-sm text-white
            "
          >
            add to cart
          </button>
        </div>
        <!-- short additional information -->
        <p class="font-bold capitalize my-3">
          <span>size chart</span> <span class="ml-5">delivery & return</span>
        </p>
        <p class="capitalize my-3">
          Availability: <span class="text-green-300">in stock</span>
        </p>
        <p class="my-3">
          <span class="uppercase">code: </span><span>1_1_6885_1</span>
        </p>
      </div>

      <!-- right -->
      <div class="bg-gray-200 md:col-span-3 lg:col-span-1 p-3">
        <!-- delivery option -->
        <div class="flex items-center">
          <p class="text-xs font-medium">Delivery Options</p>
        </div>
        <div class="flex items-center py-2 border-b border-gray-300">
          <div class="w-[40px]">
            <outline-location-marker-icon class="w-5 mr-2" />
          </div>
          <p class="text-sm">Dhaka, Dhaka North, Banani Road No. 12 - 19</p>
          <span class="text-green-300 uppercase ml-auto">Change</span>
        </div>

        <div class="flex items-center py-2 border-b border-gray-300">
          <div class="w-[40px]">
            <outline-location-marker-icon class="w-5 mr-2" />
          </div>
          <p class="text-sm">Home Delivery</p>
          <span class="uppercase ml-auto">৳35 </span>
        </div>

        <div class="flex items-center py-2 border-b border-gray-300">
          <div class="w-[40px]">
            <outline-location-marker-icon class="w-5 mr-2" />
          </div>
          <p class="text-sm">Cash on Delivery Available</p>
          <span class="uppercase ml-auto">৳35 </span>
        </div>
        <!-- return and warranty -->

        <div class="flex items-center mt-2">
          <p class="text-xs font-medium">Delivery Options</p>
        </div>
        <div class="flex items-center py-2 border-b border-gray-300">
          <div class="w-[40px]">
            <outline-location-marker-icon class="w-5 mr-2" />
          </div>
          <p class="text-sm">Dhaka, Dhaka North, Banani Road No. 12 - 19</p>
          <span class="text-green-300 uppercase ml-auto">Change</span>
        </div>

        <div class="flex items-center py-2 border-b border-gray-300">
          <div class="w-[40px]">
            <outline-location-marker-icon class="w-5 mr-2" />
          </div>
          <p class="text-sm">Home Delivery</p>
          <span class="uppercase ml-auto">৳35 </span>
        </div>

        <div class="flex items-center py-2 border-b border-gray-300">
          <div class="w-[40px]">
            <outline-location-marker-icon class="w-5 mr-2" />
          </div>
          <p class="text-sm">Cash on Delivery Available</p>
          <span class="uppercase ml-auto">৳35 </span>
        </div>
      </div>
    </div>

    <!--  related product -->
    <h1 class="font-bold text-center text-2xl my-5">Related Product</h1>
    <div class="mt-5">
      <VueSlickCarousel v-bind="settings">
        <div class="px-3 py-2" v-for="num in 7" :key="num">
          <div class="shadow-md">
            <div
              class="
                rounded-tl rounded-tr
                shadow
                bg-gray-50n
                mb-1
                relative
                cursor-pointer
              "
            >
              <span
                class="
                  inline-block
                  rounded-full
                  text-white
                  bg-green-500
                  px-2
                  py-1
                  text-xs
                  font-bold
                  mr-3
                  absolute
                  top-3
                  left-2
                "
              >
                no sell
              </span>
              <div class="">
                <img
                  :src="`https://technext.github.io/ogani/img/featured/feature-${
                    num + 1
                  }.jpg`"
                  width="1920"
                  height="1080"
                  alt="products"
                />
              </div>
              <div class="py-2">
                <p class="text-center capitalize text-gray-500 text-xs py-3">
                  product 1
                </p>
                <p
                  class="
                    text-center
                    capitalize
                    text-xs
                    font-medium
                    text-gray-700
                  "
                >
                  5 Kg
                </p>
                <p class="text-center py-2">
                  <span class="font-bold text-green-500 text-xl"> $20 </span>
                  <span class="text-gray-300 font-medium pl-3">
                    <span class="line-through"> $200 </span>
                    <span class="text-gray-400 text-xs"> 9.52% </span>
                  </span>
                </p>
              </div>
            </div>
            <div
              class="
                rounded-bl rounded-br
                shadow
                text-center
                border-t
                overflow-hidden
              "
            >
              <button
                class="capitalize text-sm text-green-500 font-medium py-2"
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
        <template #prevArrow>
          <div class="custom-arrow">
            <solid-chevron-left-icon class="w-5 h-5 text-green-600" />
          </div>
        </template>
        <template #nextArrow>
          <div class="custom-arrro">
            <solid-chevron-right-icon class="w-5 h-5 text-green-600" />
          </div>
        </template>
      </VueSlickCarousel>
    </div>

  </div>
</template>

<script>
import CategorySidebarVue from "~/components/default_layout/CategorySidebar.vue";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import MainSliderArrowVue from "~/components/sliders/MainSliderArrow.vue";
export default {
  components: {
    CategorySidebarVue,
    VueSlickCarousel,
    MainSliderArrowVue,
  },
  data() {
    return {
      settings: {
        // arrows: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2500,
        cssEase: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
        pauseOnHover: true,
        draggable: true,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
              arrows: false,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              arrows: false,
            },
          },
        ],
      },
    };
  },
};
</script>

