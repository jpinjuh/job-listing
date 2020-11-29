<template>
  <div
    style="background-color: white; box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.16); border-radius: 4px"
  >
    <v-container class="px-6 px-sm-10 py-0">
      <v-row>
        <v-col class="grow py-2">
          <v-chip
            v-for="n in 3"
            :key="n"
            class="mr-4 my-2 px-0"
            label
          >
            <span class="px-2">
              Frontend
            </span>
            <span
              class="secondary d-flex justify-center align-center"
              style="height: 100%; width: 32px; cursor: pointer"
            >
              <v-icon
                size="18"
                color="white"
              >
                mdi-close
              </v-icon>
            </span>
          </v-chip>
        </v-col>
        <v-col class="shrink d-flex align-center">
          <span
            class="primary--text"
            style="cursor: pointer"
          >
            Clear
          </span>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  components: {},

  data: () => ({
    //
  })
}
</script>
