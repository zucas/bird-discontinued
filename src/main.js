// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

import Raphael from 'raphael/raphael'
global.Raphael = Raphael

import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'
import moment from 'moment'
import VueResource from 'vue-resource'
import { store } from './modules/store'
import Vuelidate from 'vuelidate'
import Vuefire from 'vuefire'

moment.locale('pt-br')

Vue.use(Quasar) // Install Quasar Framework
Vue.use(VueResource)
Vue.use(Vuelidate)
Vue.http.options.root = 'https://bird-ff640.firebaseio.com'
Vue.use(Vuefire)

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    store,
    render: h => h(require('./App'))
  })
})
