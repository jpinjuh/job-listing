<template>
  <div>
    <v-main>
      <Header />
      <v-container fluid>
        <v-container>
          <v-row class="heading-wrapper-parent">
            <v-col class="heading-wrapper-child mb-6 mb-sm-2">
              <slot name="heading" />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <slot name="list" />
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import Header from './sections/Header';

export default {
  components: {
    Header
  },

  data: () => ({
    //
  }),
};
</script>
