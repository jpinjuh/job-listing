<template>
  <div>
    <jobs-index>
      <template v-slot:heading>
        <heading />
      </template>
      <template v-slot:jobs-list>
        <jobs-list />
      </template>
    </jobs-index>
  </div>
</template>

<script>
import JobsIndex from '@/components/jobs/JobsIndex'
import Heading from '@/components/heading/Heading'
import JobsList from '@/components/jobs/JobsList'

import { mapActions } from 'vuex'

export default {
  components: {
    JobsIndex,
    Heading,
    JobsList
  },

  data: () => ({
    //
  }),

  created () {
    this.getJobs()
  },

  methods: {
    ...mapActions(['getJobs'])
  }
}
</script>
