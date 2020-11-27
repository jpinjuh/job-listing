<template>
  <v-app>
    <AdminLayout />
  </v-app>
</template>

<script>
import AdminLayout from "./layouts/AdminLayout";

export default {
  name: 'App',

  components: {
    AdminLayout
  },

  data: () => ({
    //
  }),
};
</script>
