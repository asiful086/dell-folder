<template>
  <div class="header d-flex align-items-center bg-warning fw-bold">
    <!-- icon -->
    <div class="header-icon px-2">
      <b-icon icon="justify"></b-icon>
    </div>
    <!-- logo -->
    <div class="d-none d-md-block">
      <img
        src="https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web1/1.5.0+DataCenter-Release-2522/Default/components/header/Header/images/logo-small.png?q=low&webp=1&alpha=1"
        height="40"
        alt=""
      />
    </div>
    <!-- search box -->
    <div class="flex-grow-1 px-2">
      <input type="text" class="border-0 rounded w-100 py-2" />
    </div>
    <!-- help  -->
    <div class="help d-none d-md-flex align-items-center px-2">
      <b-icon icon="question"></b-icon>
      <span>Help</span>
    </div>
    <!-- language switcher -->
    <div class="language d-none d-md-flex align-items-center px-2 border-start">
      <span>EN</span>
      <span class="pb-1 px-1">|</span>
      <span>বাং</span>
    </div>
    <!-- sign in  button -->
    <b-button
      variant="danger"
      class="signin-btn rounded-0 d-none d-md-inline-block"
      >Sign in</b-button
    >
    <b-button variant="link" class="text-secondary d-inline-block d-md-none">
      <b-icon icon="three-dots-vertical"></b-icon>
    </b-button>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  font-size: 13px;
  font-weight: bold;
  color: #615e58;
}
.header .header-icon svg {
  color: black;
}
svg {
  width: 1.5em;
  height: 1.5em;
}

.signin-btn {
  font-size: 16px;
  font-weight: bold;
  padding: 15px 30px;
}
</style>
