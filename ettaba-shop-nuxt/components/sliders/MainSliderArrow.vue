<template>
  <span
    v-if="type === 'prev'"
    class="absolute top-[-11%] ml-10 sm:right-20  bg-green-500 p-[1px]  sm:p-1 rounded-md cursor-pointer"
  >
    <!-- <ChevronLeftIcon class="h-5 text-white" /> -->

    <solid-chevron-left-icon class="w-5 h-5" />
  </span>
  <span
    v-else
    class="absolute top-[-11%] right-10 bg-green-500 p-[1px]  sm:p-1 rounded-md cursor-pointer"
  >
    <solid-chevron-right-icon class="h-5 text-white" />

    <!-- <solid-heart-icon class="w-5 h-5 ml-auto mr-2" /> -->
  </span>
</template>
<script>
export default {
  props: {
    type: {
      type: String
    }
  }
};
</script>
