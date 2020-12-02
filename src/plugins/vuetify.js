import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#5BA4A4',
        secondary:  '#7B8E8E',
        background1: '#EFFAFA',
        background2: '#EEF6F6',
        tertiary: '#2C3A3A'
      }
    }
  }
});
