<template>
  <!-- root node required -->
  <div>
      <img class='blur-3 fit fullscreen responsive' src="https://c2.staticflickr.com/8/7234/7359783606_cb6f4e5871_b.jpg" alt="">

    <!-- your content -->
    <div class="layout-padding block">
      <div class="row">
        <div class="auto"></div>
        <div class="card absolute bg-white centralized shadow-3 auto" style="max-width: 600px">
          <div class="card-title bg-secondary text-white">
            Login
          </div>
          <div class="card-content">
            <div class="row">
              <div class="auto"></div>
              <img class="img-circle shadow-2" style="max-height: 120px" src="https://pbs.twimg.com/profile_images/792080615470432256/htiHtTlg.jpg">
              <div class="auto"></div>
            </div>
            <br>
            <div class="list">
              <div class="item">                
                <div class="item-content text-center">
                  <span class="item-label">Email:</span>
                  <input type="email" style="min-width: 50%" v-model="login_form.email">
                </div>
              </div>
              <div class="item">
                <div class="item-content text-center">
                  <span class="item-label">Password: </span>
                  <input type="password" style="min-width: 50%" v-model="login_form.password">
                </div>
              </div>
              <br>
              <div class="item">
                <div class="item-content text-center">
                  <p class="label thin-paragraph text-blue">Forgot your password ?</p>
                </div>
              </div>
              <br>
            </div>
            <br>
            <div class="row">
              <div class="auto"></div>
              <button @click='fbLogin' class="loginBtn shadow-2 loginBtn--facebook">
      Login with Facebook
    </button>
              <button class="loginBtn shadow-2 loginBtn--google">
      Login with Google
    </button>
              <div class="auto"></div>
            </div>
          </div>
          <div class="card-actions">
            <button class=" primary clear"> <i>flight_takeoff</i>  Register</button>
            <div class="auto"></div>
            <button @click='login' class="positive clear">LOGIN <i class="on-right">send</i></button>
          </div>
        </div>
        <div class="auto"></div>
      </div>
    </div>
        <sweet-modal ref="virtualModal" 
                  hide-close-button blocking
                  icon="warning"
                  modal-theme="dark">
                  <h5 class="light-paragraph">ATENÇÃO!</h5>
                  <p>Este site não possui qualquer vinculo com a LATAM Linhas Aéreas. 
                    Se você está buscando por PASSAGENS AÉREAS ou VAGAS DE EMPREGO, por favor
                    clique no botão abaixo para ser redirecionado para o site correto
                  </p>
                  <a href="https://www.latam.com/pt_br/">
      <button  class="primary big" href='https://www.latam.com/pt_br/'>PROSSEGUIR PARA LATAM</button>
                  </a>
      <button slot="button" class="secondary small" v-on:click="$refs.virtualModal.close()">Estou Ciente</button>
    </sweet-modal>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import {Toast} from 'quasar'
  import { SweetModal } from 'sweet-modal-vue'
  export default {
    data () {
      return {
        login_form: {
          email: '',
          password: ''
        }
      }
    },
    mounted () {
      this.$refs.virtualModal.open()
    },
    methods: {
      redirectDO () {
        this.$router.push({name: 'do'})
      },
      login () {
        firebase.auth().signInWithEmailAndPassword(this.login_form.email, this.login_form.password).then(() => {
          this.redirectDO()
        })
          .catch((error) => {
            Toast.create.negative({
              html: error.message
            })
          })
      },
      fbLogin () {
        firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider().addScope('user_birthday')).then(() => {
          this.redirectDO()
        })
      },
      fbLogin2 () {
        firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider()).catch(error => {
          if (error.code === 'auth/account-exists-with-different-credential') {
            var pendingCred = error.credential
            var email = error.email
            firebase.auth().fetchProvidersForEmail(email).then(providers => {
              if (providers[0] === 'password') {
                var password = '123123'
                firebase.auth.signInWithEmailAndPassword(email, password).then(user => {
                  return user.link(pendingCred)
                }).then(() => {
                  console.log('deu tudo certo')
                })
                return
              }
            }
            )
          }
        }).then(() => {
          this.redirectDO()
        })
      }
    },
    components: {
      SweetModal
    }
  }
</script>

<style scoped>
  /* Shared */
  .loginBtn {
    box-sizing: border-box;
    position: relative;
    /* width: 13em;  - apply for fixed size */
    margin: 0.2em;
    padding: 0 15px 0 46px;
    border: none;
    text-align: left;
    line-height: 34px;
    white-space: nowrap;
    border-radius: 0.2em;
    font-size: 16px;
    color: #FFF;
  }
  .loginBtn:before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 34px;
    height: 100%;
  }
  .loginBtn:focus {
    outline: none;
  }
  .loginBtn:active {
    box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1);
  }
  /* Facebook */
  .loginBtn--facebook {
    background-color: #4C69BA;
    background-image: linear-gradient(#4C69BA, #3B55A0);
    /*font-family: "Helvetica neue", Helvetica Neue, Helvetica, Arial, sans-serif;*/
    text-shadow: 0 -1px 0 #354C8C;
  }
  .loginBtn--facebook:before {
    border-right: #364e92 1px solid;
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;
  }
  .loginBtn--facebook:hover,
  .loginBtn--facebook:focus {
    background-color: #5B7BD5;
    background-image: linear-gradient(#5B7BD5, #4864B1);
  }
  /* Google */
  .loginBtn--google {
    /*font-family: "Roboto", Roboto, arial, sans-serif;*/
    background: #DD4B39;
  }
  .loginBtn--google:before {
    border-right: #BB3F30 1px solid;
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;
  }
  .loginBtn--google:hover,
  .loginBtn--google:focus {
    background: #E74B37;
  }
  .loginBtn--mail {
    /*font-family: "Roboto", Roboto, arial, sans-serif;*/
  }
  .loginBtn--mail:before {
    border-right: #E9EBEE 1px solid;
    background: mail, 6px 6px no-repeat;
  }
</style>
