<template>
  <div>
    <div class="grid grid-cols-1 sm:grid-cols-2 px-4 sm:px-20">
      <div>
        <div>
          <h1
            class="
              text-xl text-gray-600
              font-medium
              py-2
              text-center
              sm:text-left
            "
          >
            Shipping
          </h1>
          <p
            class="
              pt-2
              text-gray-400 text-xs
              font-medium
              text-center
              sm:text-left
            "
          >
            Address: {shippingAddress.address}
          </p>
          <p
            class="
              py-2
              text-gray-400 text-xs
              font-medium
              text-center
              sm:text-left
            "
          >
            Phone: {shippingAddress.phone}
          </p>
        </div>
        <hr class="mt-5" />
        <div>
          <h1
            class="
              text-xl text-gray-600
              font-medium
              py-2
              text-center
              sm:text-left
            "
          >
            Payment Method
          </h1>
          <p
            class="
              pt-2
              text-gray-400 text-xs
              font-medium
              text-center
              sm:text-left
            "
          >
            Method: {paymentMethod.paymentMethod}
          </p>
        </div>
        <hr class="mt-5" />
        <div class="mt-10">
          <h1
            class="
              text-xl text-gray-600
              font-medium
              py-2
              text-center
              sm:text-left
            "
          >
            Order Items
          </h1>
          <div>
            <div
              v-for="i in 5"
              :key="i"
              class="border-b flex items-center justify-between"
            >
              <div class="flex flex-col items-center">
                <div>
                  <solid-chevron-up-icon
                    class="h-5 text-gray-300 cursor-pointer"
                  />
                </div>
                <div>3</div>
                <div>
                  <solid-chevron-down-icon
                    class="h-5 text-gray-300 cursor-pointer"
                  />
                </div>
              </div>
              <div>
                <img
                  src="https://grocery-max-web.vercel.app/images/T0UqyjrGZedf.jpeg"
                  alt="product"
                  width="40"
                />
              </div>
              <div class="px-3">
                <p class="text-sm">product {{ i }}</p>
                <p class="text-xs text-gray-400">$ 20 / 3 kg</p>
              </div>
              <div class="text-gray-700 text-sm font-medium">$ 200</div>
              <div>
                <solid-x-icon class="h-5 text-red-400 cursor-pointer" />
              </div>
            </div>

            <div class="flex items-center justify-center">
              <button
                class="px-3 py-1 my-4 rounded text-white font-medium bg-red-500"
              >
                clear the cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="sm:pl-20">
        <div class="my-5">
          <h1 class="text-xl text-gray-600 font-medium py-2 text-center">
            Order Summary
          </h1>
          <div
            class="
              grid grid-cols-2
              w-full
              sm:5/6
              md:w-3/5
              sm:h-full
              mx-auto
              text-gray-600
              font-medium
              text-center
            "
          >
            <div class="border py-1 sm:py-2">items</div>
            <div class="border py-1 sm:py-2">
              <span>2000</span>
            </div>
            <div class="border py-1 sm:py-2">shipping</div>
            <div class="border py-1 sm:py-2">
              <span>100</span>
            </div>
            <div class="border py-1 sm:py-2">tax</div>
            <div class="border py-1 sm:py-2">
              <span>29</span>
            </div>
            <div class="border py-1 sm:py-2">total</div>
            <div class="border py-1 sm:py-2">
              <span>2049</span>
            </div>
          </div>
          <div class="flex items-center justify-center">
            <button
              class="
                px-3
                py-1
                my-4
                rounded
                text-white
                font-medium
                bg-green-500
                flex
                items-center
              "
            >
              <div class="flex items-center">
                <p>place order</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
