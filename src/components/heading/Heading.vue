<template>
  <v-container
    class="heading px-6 px-sm-10 py-1"
  >
    <v-row>
      <v-col class="grow py-2">
        <v-chip
          v-for="n in 3"
          :key="n"
          class="tag mr-4 my-2 px-0"
          label
        >
          <span class="px-2">
            Frontend
          </span>
          <span class="close-btn d-flex justify-center align-center">
            <img src="/images/icon-remove.svg">
          </span>
        </v-chip>
      </v-col>
      <v-col class="shrink d-flex align-center">
        <span class="clear-btn">
          Clear
        </span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  components: {},

  data: () => ({
    //
  })
};
</script>
