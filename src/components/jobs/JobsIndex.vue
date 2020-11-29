<template>
  <v-container>
    <v-row
      class="mb-6 mb-md-2"
      style="margin-top: -72px"
    >
      <v-col>
        <slot name="heading" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <slot name="jobs-list" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  components: {},

  data: () => ({
    //
  }),
}
</script>
