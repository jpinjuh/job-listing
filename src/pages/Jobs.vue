<template>
  <div>
    <main-layout>
      <template 
        v-if="filters.length > 0"
        slot="heading"
      >
        <heading :filters="filters" />
      </template>
      <template slot="list">
        <jobs-list />
      </template>
    </main-layout>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout';
import Heading from '@/components/heading/Heading';
import JobsList from '@/components/jobs/JobsList';

import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    MainLayout,
    Heading,
    JobsList
  },

  data: () => ({
    //
  }),

  created () {
    this.getJobs();
  },

  computed: {
    ...mapGetters(['filters'])
  },

  methods: {
    ...mapActions(['getJobs'])
  }
};
</script>
