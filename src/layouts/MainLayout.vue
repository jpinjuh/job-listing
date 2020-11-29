<template>
  <div>
    <v-main>
      <Header />
      <v-container>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import Header from './sections/Header'

export default {
  components: {
    Header
  },

  data: () => ({
    //
  }),
}
</script>
