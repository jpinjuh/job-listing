<template>
  <div>
    <main-layout>
      <template slot="heading">
        <heading />
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

import { mapActions } from 'vuex';

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

  methods: {
    ...mapActions(['getJobs'])
  }
};
</script>
