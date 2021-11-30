<template>
  <div>
    <div class="flex">
      <!--left  -->
      <div class="w-64 h-screen bg-gray-100 rounded-md relative pt-20 px-3">
        <!-- profile part -->
        <div
          class="
            absolute
            bottom-full
            left-[50%]
            transform
            -translate-x-1/2
            translate-y-1/2
            rounded-full
            w-[80px]
            h-[80px]
            bg-green-500
            overflow-hidden
          "
        >
          <img
            src="https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg"
            alt="profile"
            class="w-full"
          />
        </div>
        <!-- nav part -->
        <li
          class="
            list-none
            text-xs
            p-3
            border-b
            bg-gray-50
            hover:bg-green-600 hover:text-white hover:font-medium
            rounded-md
            my-2
          "
        >
          <NuxtLink to="/">My Order</NuxtLink>
        </li>

        <li
          class="
            list-none
            text-xs
            p-3
            border-b
            bg-gray-50
            hover:bg-green-600 hover:text-white hover:font-medium
            rounded-md
            my-2
          "
        >
          <NuxtLink to="/">My Favorites</NuxtLink>
        </li>

        <li
          class="
            list-none
            text-xs
            p-3
            border-b
            bg-gray-50
            hover:bg-green-600 hover:text-white hover:font-medium
            rounded-md
            my-2
          "
        >
          <NuxtLink to="/">Credits & Coupons</NuxtLink>
        </li>

        <li
          class="
            list-none
            text-xs
            p-3
            border-b
            bg-gray-50
            hover:bg-green-600 hover:text-white hover:font-medium
            rounded-md
            my-2
          "
        >
          <NuxtLink to="/">Invite Friends</NuxtLink>
        </li>

        <li
          class="
            list-none
            text-xs
            p-3
            border-b
            bg-gray-50
            hover:bg-green-600 hover:text-white hover:font-medium
            rounded-md
            my-2
          "
        >
          <NuxtLink to="/">Shipping Address</NuxtLink>
        </li>

        <li
          class="
            list-none
            text-xs
            p-3
            border-b
            bg-gray-50
            hover:bg-green-600 hover:text-white hover:font-medium
            rounded-md
            my-2
          "
        >
          <NuxtLink to="/">Account Settings</NuxtLink>
        </li>

        <li
          class="
            list-none
            text-xs
            p-3
            border-b
            bg-gray-50
            hover:bg-green-600 hover:text-white hover:font-medium
            rounded-md
            my-2
          "
        >
          <NuxtLink to="/">Log Out</NuxtLink>
        </li>
      </div>

      <!-- right -->
      <div class="flex-grow pl-5">
        <!-- component -->
        <table class="min-w-full block md:table">
          <thead class="block md:table-header-group">
            <tr
              class="
                bg-[#F3F2F7]
                block
                md:table-row
                absolute
                -top-full
                md:top-auto
                -left-full
                md:left-auto md:relative
                text-[#6E6B7B] text-xs
                uppercase
              "
            >
              <th class="p-4 font-bold text-left block md:table-cell">Name</th>
              <th class="p-2 font-bold text-left block md:table-cell">
                User Name
              </th>
              <th class="p-2 font-bold text-left block md:table-cell">
                Email Address
              </th>
              <th class="p-2 font-bold text-left block md:table-cell">
                Mobile
              </th>
              <th class="p-2 font-bold text-left block md:table-cell">
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="block md:table-row-group">
            <tr
              class="
                bg-white
                border-b
                block
                md:table-row
              "
            >
              <td
                class="
                  p-2
                  text-left
                  block
                  md:table-cell
                "
              >
                <span class="inline-block w-1/3 md:hidden font-bold">Name</span
                >Jamal Rios
              </td>
              <td
                class="
                  p-2
                  text-left
                  block
                  md:table-cell
                "
              >
                <span class="inline-block w-1/3 md:hidden font-bold"
                  >User Name</span
                >jrios1
              </td>
              <td
                class="
                  p-2
                  text-left
                  block
                  md:table-cell
                "
              >
                <span class="inline-block w-1/3 md:hidden font-bold"
                  >Email Address</span
                >jrios@icloud.com
              </td>
              <td
                class="
                  p-2
                  text-left
                  block
                  md:table-cell
                "
              >
                <span class="inline-block w-1/3 md:hidden font-bold"
                  >Mobile</span
                >582-3X2-6233
              </td>
              <td
                class="
                  p-2
                  text-left
                  block
                  md:table-cell
                "
              >
                <span class="inline-block w-1/3 md:hidden font-bold"
                  >Actions</span
                >
                <button
                  class="
                    bg-blue-500
                    hover:bg-blue-700
                    text-white
                    font-bold
                    py-1
                    px-2
                    rounded
                  "
                >
                  Edit
                </button>
                <button
                  class="
                    bg-red-500
                    hover:bg-red-700
                    text-white
                    font-bold
                    py-1
                    px-2
                    rounded
                  "
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr
              class="
                bg-white
                md:border-none
                block
                md:table-row
              "
            >
              <td
                class="
                  p-2
                  text-left
                  block
                  md:table-cell
                "
              >
                <span class="inline-block w-1/3 md:hidden font-bold">Name</span
                >Erwin Campbell
              </td>
              <td
                class="
                  p-2
                  text-left
                  block
                  md:table-cell
                "
              >
                <span class="inline-block w-1/3 md:hidden font-bold"
                  >User Name</span
                >ecampbell088
              </td>
              <td
                class="
                  p-2
                  text-left
                  block
                  md:table-cell
                "
              >
                <span class="inline-block w-1/3 md:hidden font-bold"
                  >Email Address</span
                >ecampbell088@hotmail.com
              </td>
              <td
                class="
                  p-2
                  text-left
                  block
                  md:table-cell
                "
              >
                <span class="inline-block w-1/3 md:hidden font-bold"
                  >Mobile</span
                >318-685-X414
              </td>
              <td
                class="
                  p-2
                  text-left
                  block
                  md:table-cell
                "
              >
                <span class="inline-block w-1/3 md:hidden font-bold"
                  >Actions</span
                >
                <button
                  class="
                    bg-blue-500
                    hover:bg-blue-700
                    text-white
                    font-bold
                    py-1
                    px-2
                    rounded
                  "
                >
                  Edit
                </button>
                <button
                  class="
                    bg-red-500
                    hover:bg-red-700
                    text-white
                    font-bold
                    py-1
                    px-2
                    rounded
                  "
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr
              class="
                md:border-none
                block
                md:table-row
              "
            >
              <td
                class="
                  p-2
                  text-left
                  block
                  md:table-cell
                "
              >
                <span class="inline-block w-1/3 md:hidden font-bold">Name</span
                >Lillie Clark
              </td>
              <td
                class="
                  p-2
                  text-left
                  block
                  md:table-cell
                "
              >
                <span class="inline-block w-1/3 md:hidden font-bold"
                  >User Name</span
                >lillie
              </td>
              <td
                class="
                  p-2
                  text-left
                  block
                  md:table-cell
                "
              >
                <span class="inline-block w-1/3 md:hidden font-bold"
                  >Email Address</span
                >lillie.clark@gmail.com
              </td>
              <td
                class="
                  p-2
                  text-left
                  block
                  md:table-cell
                "
              >
                <span class="inline-block w-1/3 md:hidden font-bold"
                  >Mobile</span
                >505-644-84X4
              </td>
              <td
                class="
                  p-2
                  text-left
                  block
                  md:table-cell
                "
              >
                <span class="inline-block w-1/3 md:hidden font-bold"
                  >Actions</span
                >
                <button
                  class="
                    bg-blue-500
                    hover:bg-blue-700
                    text-white
                    font-bold
                    py-1
                    px-2
                    rounded
                  "
                >
                  Edit
                </button>
                <button
                  class="
                    bg-red-500
                    hover:bg-red-700
                    text-white
                    font-bold
                    py-1
                    px-2
                    rounded
                  "
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr
              class="
                bg-white
                block
                md:table-row
              "
            >
              <td
                class="
                  p-2
                  text-left
                  block
                  md:table-cell
                "
              >
                <span class="inline-block w-1/3 md:hidden font-bold">Name</span
                >Maribel Koch
              </td>
              <td
                class="
                  p-2
                  text-left
                  block
                  md:table-cell
                "
              >
                <span class="inline-block w-1/3 md:hidden font-bold"
                  >User Name</span
                >maribelkoch
              </td>
              <td
                class="
                  p-2
                  text-left
                  block
                  md:table-cell
                "
              >
                <span class="inline-block w-1/3 md:hidden font-bold"
                  >Email Address</span
                >mkoch@yahoo.com
              </td>
              <td
                class="
                  p-2
                  text-left
                  block
                  md:table-cell
                "
              >
                <span class="inline-block w-1/3 md:hidden font-bold"
                  >Mobile</span
                >582-400-3X36
              </td>
              <td
                class="
                  p-2
                  text-left
                  block
                  md:table-cell
                "
              >
                <span class="inline-block w-1/3 md:hidden font-bold"
                  >Actions</span
                >
                <button
                  class="
                    bg-blue-500
                    hover:bg-blue-700
                    text-white
                    font-bold
                    py-1
                    px-2
                    rounded
                  "
                >
                  Edit
                </button>
                <button
                  class="
                    bg-red-500
                    hover:bg-red-700
                    text-white
                    font-bold
                    py-1
                    px-2
                    rounded
                  "
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
