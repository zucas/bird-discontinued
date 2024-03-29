// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
// require(`quasar/dist/quasar.${__THEME}.css`)
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
import VueYouTubeEmbed from 'vue-youtube-embed'
import VueAnalytics from 'vue-analytics'
import { sync } from 'vuex-router-sync'
import firebase from './modules/firebase'

moment.locale('pt-br')
Vue.use(VueYouTubeEmbed)
Vue.use(Quasar) // Install Quasar Framework
Vue.use(VueResource)

Vue.use(Vuelidate)
Vue.use(VueAnalytics, {
  id: 'UA-99458387-1',
  router
})
sync(store, router)
Vue.http.options.emulateJSON = true

Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
firebase.initFirebase()

Quasar.start(() => {
  /* eslint-disable no-new */
  const app = new Vue({
    el: '#q-app',
    router,
    store,
    render: h => h(require('./App'))
  })
  global._App = app
})
