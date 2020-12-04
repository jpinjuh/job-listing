<template>
  <v-container class="heading white px-6 px-sm-10 py-1">
    <v-row>
      <v-col class="grow py-2">
        <v-chip
          v-for="(filter, index) in filters"
          :key="`filter_${index}`"
          class="background2 primary--text font-weight-bold mr-4 my-2 px-0"
          label
        >
          <span class="px-2 pt-1">
            {{ filter }}
          </span>
          <span
            class="close-btn d-flex justify-center align-center"
            @click="removeFilter(index)"
          >
            <img src="/images/icon-remove.svg" />
          </span>
        </v-chip>
      </v-col>
      <v-col class="shrink pl-0 d-flex align-center">
        <span 
          class="clear-btn primary--text font-weight-bold"
          @click="clearFilters"
        >
          Clear
        </span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  components: {},

  props: {
    filters: {
      type: Array,
      required: true
    }
  },

  data: () => ({
    //
  }),

  methods: {
    ...mapActions([
      'clearFilters',
      'removeFilter'
    ])
  }
};
</script>
