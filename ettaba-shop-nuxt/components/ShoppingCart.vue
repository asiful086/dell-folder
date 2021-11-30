<template>
  <div
    v-if="true"
    class="
      fixed
      right-0
      top-[43%]
      rounded-md
      border
      overflow-hidden
      shadow-md
      text-yellow-400
      cursor-pointer
      z-10
    "
  >
    <div class="bg-transparent">
      <div
        class="bg-gray-500 bg-opacity-70 hover:bg-opacity-100 transition p-2"
      >
        <div>
          <!-- <ShoppingBagIcon class="h-5 m-auto" /> -->
          <solid-shopping-bag-icon class="h-5 m-auto" />
        </div>
        <p class="uppercase text-center">
          <!-- {cartProducts.length} items -->
          2 items
        </p>
      </div>
      <div class="bg-gray-50 bg-opacity-70 hover:bg-opacity-100 transition">
        <p class="uppercase text-center">
          <!-- {cartItemsPrice ? cartItemsPrice : 0} -->
          20
        </p>
      </div>
    </div>
  </div>

  <div v-else>
    <div
      class="
        fixed
        top-0
        right-0
        bottom-0
        h-screen
        mt-14
        w-72
        shadow
        bg-white
        z-20
      "
    >
      <div class="h-[81%] overflow-x-hidden overflow-y-auto">
        <ul>
          <div
            v-for="i in 5"
            :key="i"
            class="h-16 border-b flex items-center px-4"
          >
            <div class="flex flex-col items-center">
              <div>
                <solid-chevron-up-icon
                  class="h-5 text-gray-300 cursor-pointer"
                />
              </div>
              <div>
                <!-- {product.count} -->
                2
              </div>
              <div>
                <!-- <ChevronDownIcon class="h-5 text-gray-300 cursor-pointer" /> -->
                <solid-chevron-down-icon
                  class="h-5 text-gray-300 cursor-pointer"
                />
              </div>
            </div>
            <div class="flex items-center px-5 flex-grow">
              <div>
                <img
                  src="https://grocery-max-web.vercel.app/images/T0UqyjrGZedf.jpeg"
                  alt="product"
                  width="40"
                />
              </div>
              <div class="flex-grow px-3">
                <p class="text-sm">
                  <!-- {product.name} -->
                  product 1
                </p>
                <p class="text-xs text-gray-400">
                  <!-- $ {product.price} / {product.qty} {product.unit} -->
                  12 / 2 kg
                </p>
              </div>
              <div class="text-gray-700 text-sm font-medium">
                <!-- ${product.price * product.count} -->
                20
              </div>
            </div>
            <div>
              <!-- <XIcon class="h-5 text-red-400 cursor-pointer" /> -->
              <solid-x-icon class="h-5 text-red-400 cursor-pointer" />
            </div>
          </div>
        </ul>
      </div>
      <div
        class="
          bg-white
          border-t
          shadow
          rounded
          w-full
          h-[20%]
          font-bold
          absolute
          left-0
          bottom-0
          right-0
          mb-14
          grid
          place-items-center
        "
      >
        <a href="/shipping-info">
          <div
            class="
              flex
              items-center
              justify-center
              rounded
              overflow-hidden
              cursor-pointer
            "
          >
            <div>
              <div class="p-3 bg-yellow-400">Place Order</div>
            </div>
            <div class="p-3 bg-yellow-300">
              <!-- $ {cartItemsPrice} -->
              209
            </div>
          </div>
        </a>
      </div>
    </div>
    <div
      class="
        bg-[rgba(0,0,0,0.5)]
        mt-14
        px-5
        fixed
        h-full
        w-full
        flex
        items-center
        justify-center
        top-0
        right-0
        z-10
      "
    />
  </div>
</template>

<script>
export default {};
</script>
