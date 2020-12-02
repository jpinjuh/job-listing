<template>
  <v-list
    class="background1"
    three-line
  >
    <v-list-item
      v-for="job in allJobs"
      :key="job.id"
      class="list-item mb-10 mb-md-6 px-6 px-md-10 pt-8 pb-4 pb-md-8"
      :class="{ 'featured': job.featured }"
    >
      <v-list-item-avatar
        class="avatar-mobile ma-0 mr-6 d-flex d-sm-none"
        size="48"
      >
        <v-img :src="job.logo" />
      </v-list-item-avatar>
      <v-list-item-avatar 
        class="ma-0 mr-6 d-none d-sm-flex"
        size="88" 
      >
        <v-img :src="job.logo" />
      </v-list-item-avatar>
      <v-container class="pa-0">
        <v-row>
          <v-col
            cols="12"
            md="6"
            class="pa-0 pl-3"
          >
            <v-list-item-content class="pa-0 d-flex">
              <v-list-item-subtitle class="mb-3 align-center align-self-baseline">
                <span class="list-item--company mr-4 font-weight-bold">
                  {{ job.company }}
                </span>
                <v-chip
                  v-if="job['new']"
                  class="status-tag mr-2 primary white--text text-uppercase font-weight-bold"
                  small
                >
                  New!
                </v-chip>
                <v-chip
                  v-if="job['featured']"
                  class="status-tag tertiary white--text text-uppercase font-weight-bold"
                  small
                >
                  Featured
                </v-chip>
              </v-list-item-subtitle>
              <v-list-item-title class="mb-4 mb-sm-3 font-weight-bold align-self-center">
                <span class="list-item--title">
                  {{ job.position }}
                </span>
              </v-list-item-title>
              <v-list-item-subtitle class="align-self-end">
                <v-breadcrumbs
                  :items="job.breadcrumbs"
                  class="breadcrumbs secondary--text pa-0"
                >
                  <template slot="divider">
                    <v-icon color="secondary">
                      mdi-circle-medium
                    </v-icon>
                  </template>
                </v-breadcrumbs>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-col>

          <v-col
            cols="12"
            class="d-flex d-md-none pt-5 pb-2"
          >
            <v-divider
              class="secondary"
              style="opacity: 0.5"
            />
          </v-col>
  
          <v-col
            cols="12"
            md="6"
            class="d-flex align-center py-0"
          >
            <v-row>
              <v-col
                cols="12"
                class="d-flex justify-start justify-md-end flex-wrap py-0 "
              >
                <v-chip
                  v-for="(tag, index) in job.allTags"
                  :key="index"
                  class="list-item--tag ml-0 mr-4 ml-md-4 mr-md-0 my-2 font-weight-bold"
                  @click="addFilter(tag)"
                  label
                >
                  {{ tag }}
                </v-chip>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-list-item>
  </v-list>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {},

  data: () => ({
    //
  }),

  computed: {
    ...mapGetters(['allJobs'])
  },

  methods: {
    ...mapActions(['addFilter'])
  }
};
</script>
