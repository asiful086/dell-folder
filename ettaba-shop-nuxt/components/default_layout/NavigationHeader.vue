<template>
  <!-- <header class="flex items-center justify-between"> -->
  <header class="grid grid-cols-2 md:grid-cols-3 items-center my-4">
    <!-- logo -->
    <div>
      <img
        src="https://technext.github.io/ogani/img/logo.png"
        alt="logo"
        width="119"
        height="50"
      />
    </div>
    <!-- menu icon -->
    <div class="md:hidden ml-auto">
      <outline-menu-icon class="w-8 h-8" />
    </div>
    <!-- navigation menu  -->
    <div class="hidden md:flex items-center justify-between">
      <li class="uppercase list-none font-bold text-xs">
        <a href="" class="text-green-500">home</a>
      </li>

      <li class="uppercase list-none font-bold text-xs">
        <a href="">shop</a>
      </li>

      <li class="uppercase list-none font-bold text-xs">
        <a href="">Blog</a>
      </li>

      <li class="uppercase list-none font-bold text-xs">
        <a href="">Contact</a>
      </li>
    </div>
    <!-- cart -->
    <div
      class="
        w-auto
        md:w-full
        col-span-2
        md:col-auto
        flex
        items-center
        mx-auto
        my-10
        md:my-auto
      "
    >
      <solid-heart-icon class="w-5 h-5 ml-auto mr-2" />
      <solid-shopping-cart-icon class="w-5 h-5 mr-2" />
      <span class="whitespace-nowrap text-sm text-gray-400"
        >item: <span class="text-black font-bold">$150.00</span></span
      >
    </div>
  </header>
</template>
