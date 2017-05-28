<template>
  <!-- root node required -->
  <div>
    <div class="video-background">
        <youtube class="fit block video-foreground" player-width='100%' 
        mute
        player-height='100%' 
        :player-vars="{ autoplay: 1, controls: 0, disablekb: 1, enablejsapi: 1, loop: 1, modestbranding: 1, showinfo: 0}" 
        :video-id="videoId"></youtube>
        <h3 class="chamada text-negative light-paragraph">Estamos criando sua nova VA.</h3>
    </div>
    <!-- conteudo -->
     <div class="content">
         <br>
        <br>  
      <div class="row ">
        <div class="text-center full-height full-width">
        <h5 class="light-paragraph text-primary">“A coragem é essencial para o homem, assim como o manche é para uma aeronave!”</h5>
        </div>
        </div>
    <div class="layout-padding">
             
      <div class="row gutter">
            <div class="width-1of-2">
              <div class="card bg-tertiary text-white shadow-2 animate-scale">
          <div class=" text-center layout-padding">
                      <h4 class="light-paragraph ">Seja o primeiro!</h4>
      <h5 class="light-paragraph">Faça seu pré-cadastro e seja o primeiro a ficar sabendo 
        do início das operações
      </h5>
      <br>
      <h5 class="light-paragraph text-white"> <i>check</i> Sistema próprio.</h5>
      <h5 class="light-paragraph text-white"> <i>check</i> Time de Staff capacitado.</h5>
      <h5 class="light-paragraph text-white"> <i>check</i> Aplicativo mobile para D.O.</h5>
      <h5 class="light-paragraph text-white"> <i>check</i> Sistema de Shared Cockpit.</h5>
      <h5 class="light-paragraph text-white"> <i>check</i> Gestão realistica de escala e frota.</h5>
      <h5 class="light-paragraph text-white"> E muito mais..</h5>
      <br>
      <h5 class="thin-paragraph">{{ (53) }} Inscritos</h5>

            </div>

            
          </div>
            </div>
            <div  class="width-1of-2">              
          <div class="card shadow-2 round-borders animate-scale" v-if="!cadastrado">
        <div class="toolbar primary">
                    <q-toolbar-title :padding="1">
                        Pré-Cadastro
                    </q-toolbar-title>
          </div>
          <div class="card-media">
          <img src="http://www.gazetadopovo.com.br/blogs/avioes-em-foco/wp-content/uploads/sites/128/2015/05/airbus-a350-900-tam-montagem-toulouse.jpg">
            <button class="secondary circular animate-bounce" @click='cadastro'><i>send</i></button>
          </div>
          <div class="card-content">
            <span class="label">Email</span>
            <input 
            @input="$v.email_candidato.$touch()"
            class="full-width" 
            :class="{'has-error': $v.email_candidato.$error}"
            type="email" v-model="email_candidato">
            <span class="text-red" v-if='$v.email_candidato.$error'>O email precisa ser valido</span>
          </div>
        </div> 
          <div class="card shadow-2 bg-info text-white round-borders vertical-bottom animate-scale" v-else>
            <div class="vertical-middle">
              <div class="layout-padding">
                <h5 class="light-paragraph text-center"> 
              Obrigado, você receberá no seu email um informativo no ínicio das operações
            </h5>
              </div>
            
            </div>
        </div> 
            </div>
        
      </div>
      <br>
      <div class="card animate-scale shadow-2">  
        <div class="toolbar primary">
                    <q-toolbar-title :padding="1">
                        Acompanhe o progresso
                    </q-toolbar-title>
          </div>
        <div class="card-content">

            <p>Sistemas de escala</p>
      <q-progress :percentage="escala" class="secondary" :buffer="85"></q-progress>


            <p>Controle de frota</p>
      <q-progress :percentage="frota" :buffer="50"></q-progress>

      
      <p>Gerenciamento de voos</p>
      <q-progress :percentage="voos" class="secondary" :buffer="65"></q-progress>
      <p>Sistema de provas</p>
      <q-progress :percentage="provas" :buffer="10"></q-progress>
      <p>Sistema de eventos</p>
      <q-progress :percentage="eventos" class="secondary" :buffer="45"></q-progress>
      <p>Sistema de tours</p>
      <q-progress :percentage="tours" :buffer="100"></q-progress>
      <p>Segurança</p>
      <q-progress :percentage="seguranca" class="secondary" :buffer="30"></q-progress>
      <p>Designer</p>
      <q-progress :percentage="designer" :buffer="15"></q-progress>
      <p>Backend</p>
      <q-progress :percentage="backend" class="secondary" :buffer="2"></q-progress>
        </div>
      </div>
        
     </div>
    </div>
  </div>
</template>

<script>
  import { getIdFromURL } from 'vue-youtube-embed'
  import { LocalStorage } from 'quasar'
  import { required, email } from 'vuelidate/lib/validators'
  import {mapGetters} from 'vuex'
  let videoId = getIdFromURL('https://www.youtube.com/watch?v=XU3B8Qq1niY')
  export default {
    data () {
      return {
        cadastrado: false,
        email_candidato: '',
        videoId: videoId,
        escala: 15,
        frota: 50,
        voos: 35,
        provas: 90,
        eventos: 55,
        tours: 0,
        seguranca: 70,
        designer: 85,
        backend: 98
      }
    },
    validations: {
      email_candidato: {
        required, email
      }
    },
    created () {
      if (LocalStorage.has('cadastrado')) {
        this.cadastrado = true
      }
      else {
        this.cadastrado = false
      }
    },
    methods: {
      ...mapGetters(['user']),
      cadastro () {
        if (this.$v.email_candidato.$error) {
          return
        }
        else {
          this.cadastrado = true
          LocalStorage.set('cadastrado', true)
        }
      }
    }
  }
</script>

<style scoped>
.txt-center {
  display: flex;
justify-content: center; /* align horizontal */
align-items: center; /* align vertical */
}
.video-background {
  background: #000;
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
}
.video-foreground,
.video-background iframe {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
#vidtop-content {
	top: 0;
	color: #fff;
}
.vid-info { position: absolute; top: 0; right: 0; width: 33%; background: rgba(0,0,0,0.3); color: #fff; padding: 1rem; font-family: Avenir, Helvetica, sans-serif; }
.vid-info h1 { font-size: 2rem; font-weight: 700; margin-top: 0; line-height: 1.2; }
.vid-info a { display: block; color: #fff; text-decoration: none; background: rgba(0,0,0,0.5); transition: .6s background; border-bottom: none; margin: 1rem auto; text-align: center; }
@media (min-aspect-ratio: 16/9) {
  .video-foreground { height: 300%; top: -100%; }
}
@media (max-aspect-ratio: 16/9) {
  .video-foreground { width: 300%; left: -100%; }
}
@media all and (max-width: 600px) {
.vid-info { width: 50%; padding: .5rem; }
.vid-info h1 { margin-bottom: .2rem; }
}
@media all and (max-width: 500px) {
.vid-info .acronym { display: none; }
}
.content {
    position:absolute; 
    width:100%; 
    top:100%; 
    height: 100px;
}
.chamada {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 1;
}
</style>
