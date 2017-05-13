import Vue from 'vue'
import VueRouter from 'vue-router'
import Staff from './components/Staff.vue'
// HOME
import Home from '../src/components/staff/home/index.vue'
// CATEGORY FLEET
import FleetStaff from './components/staff/fleet/views/StaffFleet.vue'
import FleetHome from './components/staff/fleet/component/FleetHome.vue'
// Aircrafts
import AircraftGeneral from './components/staff/fleet/component/AircraftGeneral.vue'
import AircraftsView from './components/staff/fleet/views/Aircrafts.vue'
// Equipments
import EquipmenstsView from './components/staff/fleet/views/Equipments.vue'
import EquipamentosTable from './components/staff/fleet/component/EquipamentosTable.vue'
import AircraftsTable from './components/staff/fleet/component/AircrafsTable.vue'
// Categories
import FleetCategoriesTable from './components/staff/fleet/component/FleetCategoriesTable.vue'
import CategoriesView from './components/staff/fleet/views/Categories.vue'
// Maintenance
import MaintenceView from './components/staff/fleet/views/Maintence.vue'
// AWARDS & EXAMS
import AwardsView from './components/staff/awards/view/School.vue'
// Awards
import Awards from './components/staff/awards/view/Awads.vue'
import AwardHome from './components/staff/awards/components/AwardHome.vue'
// Exams
import Exams from './components/staff/awards/view/Exams.vue'
import ExamHome from './components/staff/awards/components/ExamHome.vue'
// Questions
import Questions from './components/staff/awards/view/Questions.vue'
import QuestionHome from './components/staff/awards/components/QuestionHome.vue'
// Themes
import Themes from './components/staff/awards/view/Themes.vue'
import ThemeHome from './components/staff/awards/components/SubjectHome.vue'
// General Options
import GeneralOptions from './components/staff/general/Options.vue'

Vue.use(VueRouter)

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config.js/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  routes: [
    {path: '/', component: Staff}, // Default
    {
      path: '/staff',
      component: Staff,

      children: [
        { path: '/', component: Home },
        {
          path: 'fleet',
          component: FleetStaff,
          children: [
            {path: '', component: FleetHome},
            {path: 'equipments',
              component: EquipmenstsView,
              children: [
                { path: 'table', component: EquipamentosTable }
              ]
            },
            {path: 'aircrafts',
              component: AircraftsView,
              children: [
                { path: '/', component: AircraftGeneral, name: 'aircrafts-general' },
                { path: 'table', component: AircraftsTable, name: 'aircrafts-table' }
              ]
            },
            {path: 'categories',
              component: CategoriesView,
              children: [
                { path: 'table', component: FleetCategoriesTable }
              ]
            },
            {path: 'maintence',
              component: MaintenceView,
              children: [
                { path: '/', component: MaintenceView }
              ]
            }
          ]
        },
        { path: 'options', component: GeneralOptions, name: 'general-options' },
        {path: 'exams-and-awards',
          component: AwardsView,
          children: [
            { path: 'awards',
              component: Awards,
              children: [
                { path: '/', component: AwardHome, name: 'awards-home' }
              ]
            },
            { path: 'exams',
              component: Exams,
              children: [
                { path: '/', component: ExamHome, name: 'exams-home' }
              ]
            },
            { path: 'questions',
              component: Questions,
              children: [
                { path: '/', component: QuestionHome, name: 'questions-home' }
              ]
            },
            { path: 'themes',
              component: Themes,
              children: [
                { path: '/', component: ThemeHome, name: 'subject-home' }
              ]
            }
          ]
        }
      ]
    },
    {path: '*', component: Staff} // Not found
  ]
})
