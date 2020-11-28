<template>
  <v-container>
    <v-row>
      <v-col class="py-6" style="margin-top: -48px; background-color: lightgray">
        <slot name="filters" />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="px-0">
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
