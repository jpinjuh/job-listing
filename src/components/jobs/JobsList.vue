<template>
  <div style="background-color: lightcyan">
    <v-list three-line>
      <v-list-item
        v-for="job in jobs"
        :key="job.id"
        class="mb-10 mb-md-6 px-6 px-sm-10 pt-8 pb-4 pb-sm-8"
        :class="{'featured': job.featured}"
        style="box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.16); border-radius: 4px"
      >
        <v-list-item-avatar
          class="ma-0 mr-6 avatar-mobile"
          :class="{'d-none':  $vuetify.breakpoint.mdAndUp}" 
          size="50" 
          color="grey lighten-1"
        >
          <v-img :src="job.logo" />
        </v-list-item-avatar>
        <v-list-item-avatar 
          class="ma-0 mr-6"
          :class="{'d-none':  $vuetify.breakpoint.smAndDown}" 
          size="88" 
          color="grey lighten-1"
        >
          <v-img :src="job.logo" />
        </v-list-item-avatar>
        <v-container class="pa-0">
          <v-row>
            <v-col cols="12" sm="6" class="pa-0 pl-3">
              <v-list-item-content
                class="pa-0 d-flex"
                style="min-height: 88px"
              >
                <v-list-item-subtitle class="align-center align-self-baseline">
                  <span class="mr-4 font-weight-bold">
                    {{ job.company }}
                  </span>
                  <v-chip
                    v-if="job['new']"
                    class="text-uppercase font-weight-bold mr-2"
                    small
                  >
                    New!
                  </v-chip>
                  <v-chip
                    v-if="job['featured']"
                    class="text-uppercase font-weight-bold white--text secondary"
                    small
                  >
                    Featured
                  </v-chip>
                </v-list-item-subtitle>
                <v-list-item-title
                  class="font-weight-bold align-self-center"
                  style="font-size: 18px;"
                >
                  {{ job.position }}
                </v-list-item-title>
                <v-list-item-subtitle class="align-self-end">
                  <v-breadcrumbs
                    :items="[{text: job.postedAt}, {text: job.contract}, {text: job.location}]"
                    class="pa-0"
                    :class="{'breadcrumbs':  $vuetify.breakpoint.smAndDown}"
                  >
                    <template v-slot:divider>
                      <v-icon>mdi-circle-medium</v-icon>
                    </template>
                  </v-breadcrumbs>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-col>

            <v-col
              cols="12"
              class="pt-4 pb-2"
              :class="{'d-none':  $vuetify.breakpoint.smAndUp}"
            >
              <v-divider />
            </v-col>
    
            <v-col cols="12" sm="6" class="py-0 d-flex align-center">
              <v-chip-group column>
                <v-chip
                  v-for="(tool, index) in [ job.role, job.level, ...job.languages, ...job.tools ]"
                  :key="index"
                  class="mr-4 my-2"
                  label
                >
                  {{ tool }}
                </v-chip>
              </v-chip-group>
            </v-col>
          </v-row>
        </v-container>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  components: {},

  data: () => ({
    //
  }),

  computed: {
    ...mapGetters(['jobs'])
  }
}
</script>

<style lang="sass">
  .avatar-mobile
    position: absolute !important
    top: -25px

  .featured
    border-left: 5px solid grey
  
  .breadcrumbs li:nth-child(even)
    padding: 0 4px !important
</style>
