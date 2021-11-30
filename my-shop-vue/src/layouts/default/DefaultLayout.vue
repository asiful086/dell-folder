<template>
  <div class="default-layout">
    <Header />
    <Sidebar />
    <div class="content">
      <slot />
    </div>
    this is goig to be the footer
  </div>
</template>
<script>
import Header from "./Header.vue";
import Sidebar from "./Sidebar.vue";
export default {
  components: {
    Header,
    Sidebar,
  },
};
</script>
<style scoped>
.content {
  margin-left: 240px;
}
@media screen and (max-width: 768px) {
  .content {
    margin-left: 0px;
  }
}
</style>
