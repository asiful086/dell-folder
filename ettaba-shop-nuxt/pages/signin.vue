<template>
  <div class="grid place-items-center h-screen w-full">
    <div
      class="
        flex
        rounded-md
        shadow-md
        border
        overflow-hidden
        h-5/6
        w-5/6
        md:w-2/3
      "
    >
      <div
        class="w-[40%] hidden sm:grid place-items-center h-full"
        :style="{
          backgroundImage: `linear-gradient(to bottom,rgba(0,0,0, .7),
                rgba(0,0,0, .7)), url(${'/https://grocery-max-web.vercel.app/loginPhoto.jpg'})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }"
      >
        <div>
          <h1 class="text-center font-bold text-3xl text-yellow-500">
            Ograni <span class="text-green-500">Shop</span>
          </h1>
          <p class="text-gray-100 font-medium text-center px-10">
            Sign in to continue to your account
          </p>
        </div>
      </div>
      <div class="w-[100%] sm:w-[60%] p-3">
        <!-- <div>
                {state.serverMessage && (
                  <div class="bg-green-500 p-2 text-white font-semibold my-3">
                    {state.serverMessage}
                  </div>
                )}
                {state.error && (
                  <div class="bg-red-500 p-2 text-white font-semibold my-3">
                    {state.error}
                  </div>
                )}
              </div> -->

        <h1 class="text-center font-bold text-2xl">Sign In</h1>
        <div class="my-5">
          <TextField
            name="email"
            type="email"
            placeholder="Email"
            label="Email"
          />
        </div>
        <div class="my-5">
          <TextField
            name="password"
            type="password"
            placeholder="Password"
            label="Password"
          />
        </div>

        <div class="my-5">
          <button
            disabled="{isSubmitting}"
            class="
              w-full
              shadow
              bg-green-400
              hover:bg-green-400
              focus:shadow-outline focus:outline-none
              text-white
              font-bold
              py-2
              px-4
              rounded
              uppercase
            "
            type="submit"
          >
            <div class="flex">
              <!-- {isSubmitting && (
              <div
                class="
                  h-5
                  w-5
                  rounded-full
                  border-dotted border-2 border-white
                  animate-spin
                  ease-linear
                  mr-3
                "
              ></div>
              )} -->
              <p>Login</p>
            </div>
          </button>
        </div>
        <div class="my-8">
          <p class="text-center text-gray-600">
            Don't have an account?
            <a href="/register">
              <span
                class="
                  uppercase
                  font-semibold
                  ml-3
                  text-green-500 text-xs
                  cursor-pointer
                "
              >
                sign up
              </span>
            </a>
          </p>
          <p
            class="
              font-semibold
              ml-3
              text-green-500 text-xs text-center
              uppercase
              mt-2
            "
          >
            <Link href="/forgot-password">forgot your password?</Link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
