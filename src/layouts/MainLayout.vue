<template>
  <div>
    <v-main>
      <heading />
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
    </v-main>
  </div>
</template>

<script>
import Heading from '@/components/heading/Heading'

export default {
  components: {
    Heading
  },

  data: () => ({
    //
  }),
}
</script>
