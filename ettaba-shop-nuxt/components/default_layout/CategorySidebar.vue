<template>
  <div
    class="sidebar w-auto md:w-64 overflow-hidden transition-all duration-1000"
  >
    <h3
      @click="collapseSidebar"
      class="capitalize font-bold text-center text-xl bg-green-500 text-white p-3"
    >
      all departments
    </h3>
    <div class="w-full">
      <ul
        class="transition-all duration-1000 overflow-hidden w-full pl-9"
        :class="[isSidebar ? 'h-[52.5vh] border' : 'h-0']"
      >
        <li class="list-none py-2">
          <a class="capitalize" href="">fresh meat</a>
        </li>

        <li class="list-none py-2">
          <a class="capitalize" href="">Vegetables</a>
        </li>

        <li class="list-none py-2">
          <a class="capitalize" href="">Fruit & Nut Gifts</a>
        </li>

        <li class="list-none py-2">
          <a class="capitalize" href="">Papayaya & Crisps</a>
        </li>

        <li class="list-none py-2">
          <a class="capitalize" href="">fresh meat</a>
        </li>

        <li class="list-none py-2">
          <a class="capitalize" href="">Vegetables</a>
        </li>

        <li class="list-none py-2">
          <a class="capitalize" href="">Fruit & Nut Gifts</a>
        </li>

        <li class="list-none py-2">
          <a class="capitalize" href="">Papayaya & Crisps</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebar: true
    };
  },
  methods: {
    collapseSidebar() {
      this.isSidebar = !this.isSidebar;
    }
  }
};
</script>
