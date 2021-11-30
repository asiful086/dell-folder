<template>
  <b-sidebar class="d-none d-md-block" v-model="isSidebar">
    <div class="px-3 py-2">
      hello
      <b-form-group label="Backdrop variant" label-for="backdrop-variant">
        <b-form-select id="backdrop-variant" v-model="variant"></b-form-select>
      </b-form-group>
    </div>

    <div class="px-3 py-2">
      hello
      <b-form-group label="Backdrop variant" label-for="backdrop-variant">
        <b-form-select
          id="backdrop-variant"
          v-model="variant"
          :options="variants"
        ></b-form-select>
      </b-form-group>
    </div>

    <div class="px-3 py-2">
      hello
      <b-form-group label="Backdrop variant" label-for="backdrop-variant">
        <b-form-select
          id="backdrop-variant"
          v-model="variant"
          :options="variants"
        ></b-form-select>
      </b-form-group>
    </div>

    <div class="px-3 py-2">
      hello
      <b-form-group label="Backdrop variant" label-for="backdrop-variant">
        <b-form-select
          id="backdrop-variant"
          v-model="variant"
          :options="variants"
        ></b-form-select>
      </b-form-group>
    </div>

    <div class="px-3 py-2">
      hello
      <b-form-group label="Backdrop variant" label-for="backdrop-variant">
        <b-form-select
          id="backdrop-variant"
          v-model="variant"
          :options="variants"
        ></b-form-select>
      </b-form-group>
    </div>

    <div class="px-3 py-2">
      hello
      <b-form-group label="Backdrop variant" label-for="backdrop-variant">
        <b-form-select
          id="backdrop-variant"
          v-model="variant"
          :options="variants"
        ></b-form-select>
      </b-form-group>
    </div>

    <div class="px-3 py-2">
      hello
      <b-form-group label="Backdrop variant" label-for="backdrop-variant">
        <b-form-select
          id="backdrop-variant"
          v-model="variant"
          :options="variants"
        ></b-form-select>
      </b-form-group>
    </div>

    <div class="px-3 py-2">
      hello
      <b-form-group label="Backdrop variant" label-for="backdrop-variant">
        <b-form-select
          id="backdrop-variant"
          v-model="variant"
          :options="variants"
        ></b-form-select>
      </b-form-group>
    </div>
  </b-sidebar>
</template>
<script>
export default {
  data() {
    return {
      isSidebar: true,
      variant: "dark",
    };
  },
};
</script>
<style scoped>
.b-sidebar-outer {
  z-index: 0;
}
::v-deep .b-sidebar {
  width: 240px;
}
</style>
