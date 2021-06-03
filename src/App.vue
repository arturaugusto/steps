<template>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Área do cliente
      </h1>
      <h2 class="subtitle">Orçamento: {{ orcamento }} (<a class="is-size-6" href="">download do orçamento</a>)</h2>
      <img v-if="currStep > 0" src="./assets/download.gif">

      <span v-if="currStep == 1">
        <p>
          <strong>Importante: Colar esta etiqueta na embalagem </strong>
        </p>
        <p>
          <label class="checkbox">
            <input type="checkbox" v-model="etiquetaColada">
            <span v-bind:class="!etiquetaColada ? 'has-text-danger-dark' : 'has-text-success'">  {{!etiquetaColada ? ' Colar etiqueta' : ' Etiqueta OK'}}</span>
          </label>
        </p>
      </span>

      <br>

      <div class="steps" id="stepsDemo">
        <div class="step-item"
          v-bind:class="currStep >= 0 ? 'is-active '+(currStep >= 1 ? 'is-success' : '_is-warning') : ''">

          <div class="step-marker">1</div>
          <div class="step-details">
            <p class="step-title">Aprovação</p>
          </div>
        </div>
        <div class="step-item"
          v-bind:class="currStep >= 1 ? 'is-active '+(currStep >= 2 ? 'is-success' : '_is-warning') : ''">

          <div class="step-marker">2</div>
          <div class="step-details">
            <p class="step-title">Envio de amostra</p>
          </div>
        </div>
        <div class="step-item"
          v-bind:class="currStep >= 2 ? 'is-active '+(currStep >= 3 ? 'is-success' : '_is-warning') : ''">

          <div class="step-marker">3</div>
          <div class="step-details">
            <p class="step-title">A análise foi iniciada</p>
          </div>
        </div>
        <div class="step-item"
          v-bind:class="currStep >= 3 ? 'is-active is-success' : ''">

          <div class="step-marker">4</div>
          <div class="step-details">
            <p class="step-title">Fim</p>
          </div>
        </div>
        <div class="steps-content">
          <div class="step-content has-text-centered"
            v-bind:class="currStep === 0 ? 'is-active' : ''">

            <div class="content _has-text-left is-size-5">

              <p>Serviços orçados:</p>
              <div class="box" v-for="(x, i) in amostras" :key="i">
                <p><strong>#{{i + 1}}</strong> {{x.desc}} - R$ 2.389,20</p>
                {{ x.a }}
              </div>


              <!-- <p>Descrição do ensaio: <strong>Determinação de área específica (método BET)</strong></p> -->
              <!-- <p>Número de itens: <strong>{{amostras.length}}</strong></p> -->
              <!-- <p>Preço por item: <strong>R$ 2.389,20</strong></p> -->
              <p>Preço total: <strong>R$ 4.778,4</strong></p>
              
              <p>Validade do orçamento: <strong>5 dias úteis (até 08/06/2021)</strong></p>


              <p>Prazo: <strong>aproximadamente 22 dias úteis após aprovação e recebimento da amostra.</strong></p>

              <p class="has-text-warning-dark">Esta proposta expirou, mas sem problemas. Você será informado caso ocorra mudanças no preço ou prazo de execução.</p>

              <label class="checkbox">
                <input type="checkbox" v-model="concordoOrcamento">
                <strong> Li e estou de acordo</strong>
              </label>



              <br>
              <br>
              <p class="">Contato: <strong>ipt@ipt.br</strong> </p>


            </div>

          </div>



          <div class="step-content has-text-centered"
            v-bind:class="currStep === 1 ? 'is-active' : ''">

            <div class="content _has-text-left is-size-5">
              <p><strong>Agora você já pode enviar sua amostra.</strong></p>
              
              <p><strong>Instruções:</strong></p>
              
              <p>Garanta que seu material estará bem embalado e identificado.</p>


              <p>Ele deverá ser encaminhado aos cuidados de IPT</p>
              
              <p>Nosso horário de recebimento é das 8:00 - 17:00</p>
              

              <!-- <label class="checkbox">
                Instrução A 
                <input type="checkbox">
              </label>
              <br>
              <label class="checkbox">
                Instrução B
                <input type="checkbox">
              </label> -->
              <br>

              
              

              <p><strong>Para prosseguir, seu cadastro deve estar atualizado. </strong><a href="">Clique aqui para atualizar</a></p>

              <!-- <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Nome</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <input class="input" name="firstname" id="firstname" type="text" placeholder="Nome" autofocus data-validate="require">
                    </div>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Endereço</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="control has-icon has-icon-right">
                      <input class="input" type="text" name="lastname" id="lastname" placeholder="Endereço" data-validate="require">
                    </div>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Email</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="control has-icon has-icon-right">
                      <input class="input" type="email" name="email" id="email" placeholder="Email" data-validate="require">
                    </div>
                  </div>
                </div>
              </div> -->


            </div>
          </div>



          <div class="step-content has-text-centered"
            v-bind:class="currStep === 2 ? 'is-active' : ''">

            <h4 class="title is-4"><strong>A análise está em andamento. Você será notificado quando o serviço for finalizado.</strong></h4>
            <p><strong>Prazo máximo para término do trabalho: 12/06/2021.</strong></p>
          </div>



          <div class="step-content has-text-centered"
            v-bind:class="currStep === 3 ? 'is-active' : ''">

            <h1 class="title is-4">Relatório finalizado!</h1>
            <p>Você pode baixar uma cópia em: <a href="">123456-101</a></p>



          </div>
        </div>
        <div class="steps-actions">
          <div class="steps-action">
            <a v-if="currStep !== 0" href="#" data-nav="previous" class="button is-light" @click="currStep = Math.max(currStep - 1, 0)">Voltar</a>
          </div>
          <div class="steps-action">
            <button v-if="currStep !== 3" href="#" data-nav="next" class="button is-light" @click="currStep = Math.min(currStep + 1, 4)" 
              :disabled="(currStep === 0 && !concordoOrcamento) || (currStep === 1 && !etiquetaColada)">{{etapaNext}}
            </button>
          </div>
        </div>
      </div>

    </div>

<!--     <div class="tabs">
      <ul>
        <li class="is-active"><a>Pictures</a></li>
        <li><a>Entenda seu serviço</a></li>
        <li><a>Videos</a></li>
        <li><a>Documents</a></li>
      </ul>
    </div> -->


  </section>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data ()  {
    return {
      currStep: 0,
      orcamento: '123/23',
      concordoOrcamento: false,
      etiquetaColada: false,
      amostras: [
        {desc: "Determinação de área específica (método BET)", "preco": "2.389,20"},
        {desc: "Determinação de área específica (método BET)", "preco": "2.389,20"},
      ]
    }
  },
  computed: {
    etapaNext () {
      return ({
        0: "Aprovar",
        1: "Proximo",
        2: "Proximo"
      })[this.currStep]
    }
  }
  // components: {
  //   HelloWorld
  // }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
