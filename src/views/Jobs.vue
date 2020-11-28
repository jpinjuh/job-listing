<template>
  <div>
    <jobs-index>
      <template v-slot:filters>
        <filters />
      </template>
      <template v-slot:jobs-list>
        <jobs-list />
      </template>
    </jobs-index>
  </div>
</template>

<script>
import JobsIndex from '@/components/jobs/JobsIndex'
import Filters from '@/components/filters/Filters'
import JobsList from '@/components/jobs/JobsList'

export default {
  components: {
    JobsIndex,
    Filters,
    JobsList
  },

  data: () => ({
    //
  }),
}
</script>
