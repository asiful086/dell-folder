<template>
  <div>
    <!-- top header -->
    <TopHeaderVue />
    <ShoppingCart />
    <div class="px-2 md:px-20">
      <!-- main header -->
      <NavigationHeaderVue />
      <nuxt />
      <Footer />
    </div>
  </div>
</template>
<script>
import TopHeaderVue from "~/components/default_layout/TopHeader.vue";
import ShoppingCart from "~/components/ShoppingCart.vue";
import NavigationHeaderVue from "~/components/default_layout/NavigationHeader.vue";
import Footer from "~/components/default_layout/Footer.vue";
export default {
  components: {
    TopHeaderVue,
    ShoppingCart,
    NavigationHeaderVue,
    Footer,
  },
};
</script>
