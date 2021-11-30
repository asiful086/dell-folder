<template>
  <div>
    <!-- hero section -->
    <div class="flex h-full flex-col md:flex-row">
      <!-- sidebar -->
      <div>
        <CategorySidebarVue />
      </div>
      <div
        class="
          pl-0
          md:pl-5
          pt-5
          md:pt-0
          ml-0
          md:ml-2
          h-[60vh]
          w-full
          bg-yellow-800
        "
        :style="{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"
      >
        <!--  this is going to be the backgrond images -->
        <!-- <img
          src="	https://technext.github.io/ogani/img/hero/banner.jpg"
          alt=""
          class="w-full"
        /> -->
      </div>
    </div>

    <!--  feature products-->
    <h1 class="font-bold text-center text-2xl my-5">Feature product</h1>
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

    <!-- 210/376 -->
    <!--  most products-->
    <h1 class="font-bold text-center text-2xl my-5">Most Diccount</h1>
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

    <!-- shop part -->

    <h1 class="font-bold text-center text-2xl my-5">All Shop</h1>
    <div class="mt-5">
      <VueSlickCarousel v-bind="settings">
        <div class="px-3 py-2" v-for="(num, i) in 7" :key="num">
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
                  shop {{ i + 1 }}
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
                go to shop
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
