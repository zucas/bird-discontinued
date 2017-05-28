import Vue from 'vue'
import VueRouter from 'vue-router'
import Staff from './components/Staff.vue'
// DO
import DO from './components/DO/layout/DO.vue'
import IndexDO from './components/DO/home/Index.vue'
// register
import IncompleteForm from './components/DO/register/IncompleteRegisterForm.vue'
import ExamHomeDO from './components/DO/exams/ExamHome'
import ExamPilotView from './components/DO/exams/ExamView'
// HOME Staff
import HomeStaff from '../src/components/staff/home/index.vue'
// HOME Externo
import Home from '../src/components/externo/Index.vue'
import LayoutExterno from '../src/components/externo/Layout.vue'
import Login from '../src/components/externo/Login.vue'
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
import SchoolHome from './components/staff/awards/view/SchoolHome.vue'
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
// GENERAL OPTIONS
import GeneralOptions from './components/staff/general/Options.vue'
// PILOTS
import Pilots from './components/staff/pilots/view/Pilots.vue'
// FLIGHTS
import Flights from './components/staff/flights/view/Flights.vue'
// HELP
import Help from './components/staff/help/Manual.vue'
import firebase from 'firebase'
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
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
    {path: '/',
      component: Home
    }, // Default
    {
      path: '/externo',
      component: LayoutExterno,
      children: [
        {
          path: 'login',
          component: Login,
          name: 'login'
        }
      ]
    },
    {
      path: '/do-verify',
      component: DO,
      name: 'do',
      beforeEnter (to, from, next) {
        firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            next()
          }
          else {
            next('/externo/login')
          }
        })
      },
      children: [
        { path: '/DO',
          component: IndexDO,
          name: 'do-home'
        },
        { path: '/DO/incomplete-register',
          component: IncompleteForm,
          name: 'incomplete-form'
        },
        { path: '/DO/exams-home',
          component: ExamHomeDO,
          name: 'pilots-exam-center'
        },
        { path: '/DO/exam',
          component: ExamPilotView,
          name: 'pilot-exam'
        }
      ]
    },
    {
      path: '/staff',
      component: Staff,
      beforeEnter (to, from, next) {
        firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            next()
          }
          else {
            next('/externo/login')
          }
        })
      },
      children: [
        {
          path: '/',
          component: HomeStaff,
          name: 'staff-home'
        },
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
        { path: 'pilots', component: Pilots, name: 'pilots' },
        { path: 'flights', component: Flights, name: 'flights' },
        { path: 'help', component: Help, name: 'help' },
        {path: 'exams-and-awards',
          component: AwardsView,
          children: [
            { path: '/',
              component: SchoolHome
            },
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
    {path: '*', component: Home} // Not found
  ]
})
