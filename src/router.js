import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
Vue.use(VueRouter)
function load (component) {
  return () => System.import(`components/${component}.vue`)
}

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
      component: load('externo/Index')
    }, // Default
    {
      path: '/externo',
      component: load('externo/Layout'),
      children: [
        {
          path: 'login',
          component: load('externo/Login'),
          name: 'login'
        }
      ]
    },
    {
      path: '/do-verify',
      component: load('DO/layout/DO'),
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
          component: load('DO/home/Index'),
          name: 'do-home'
        },
        { path: '/DO/incomplete-register',
          component: load('DO/register/IncompleteRegisterForm'),
          name: 'incomplete-form'
        },
        { path: '/DO/exams-home',
          component: load('DO/exams/ExamHome'),
          name: 'pilots-exam-center'
        },
        { path: '/DO/exam',
          component: load('DO/exams/ExamView'),
          name: 'pilot-exam'
        }
      ]
    },
    {
      path: '/staff',
      component: load('Staff'),
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
          component: load('staff/home/index'),
          name: 'staff-home'
        },
        { path: 'fleet',
          component: load('staff/fleet/FleetHome'),
          name: 'fleet-home',
          children: [
            {
              path: 'equipments',
              component: load('staff/fleet/EquipmentsTable'),
              name: 'equipments'
            },
            {
              path: 'aircrafts',
              component: load('staff/fleet/AircraftsTable'),
              name: 'aircrafts'
            },
            {
              path: 'maintenance',
              component: load('staff/fleet/MaintenanceCenter'),
              name: 'maintenance'
            }
          ]
        },
        { path: 'options', component: load('staff/general/Options'), name: 'general-options' },
        { path: 'pilots', component: load('staff/pilots/view/Pilots'), name: 'pilots' },
        { path: 'flights', component: load('staff/flights/view/Flights'), name: 'flights' },
        { path: 'help', component: load('staff/help/Manual'), name: 'help' },
        {path: 'exams-and-awards',
          component: load('staff/awards/view/School'),
          children: [
            { path: '/',
              component: load('staff/awards/view/SchoolHome')
            },
            { path: 'awards',
              component: load('staff/awards/view/Awads'),
              children: [
                { path: '/', component: load('staff/awards/components/AwardHome'), name: 'awards-home' }
              ]
            },
            { path: 'exams',
              component: load('staff/awards/view/Exams'),
              children: [
                { path: '/', component: load('staff/awards/components/ExamHome'), name: 'exams-home' }
              ]
            },
            { path: 'questions',
              component: load('staff/awards/view/Questions'),
              children: [
                { path: '/', component: load('staff/awards/components/QuestionHome'), name: 'questions-home' }
              ]
            },
            { path: 'themes',
              component: load('staff/awards/view/Themes'),
              children: [
                { path: '/', component: load('staff/awards/components/SubjectHome'), name: 'subject-home' }
              ]
            }
          ]
        }
      ]
    },
    {path: '*', component: load('externo/Index')} // Not found
  ]
})
