<template>
  <div>
    <v-main>
      <v-container>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-main>
  </div>
</template>

<script>

export default {
  components: {},

  data: () => ({
    //
  }),
}
</script>
