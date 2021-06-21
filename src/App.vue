<template>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Área do cliente
      </h1>
      

      
      <p>Selecionar orçamento:</p>
      <div class="select">
        <select v-model="orcamentoSel" @change="mudaOrc">
          <option>123/21</option>
          <option>124/21</option>
        </select>
      </div>
      {{orcamentoSel}}
      <br>
      <br>

      <div v-if="orcamentoSel">

        <h2 class="subtitle is-size-4">Orçamento: {{ orcamentoSel }} (<a class="is-size-6" target="_blank" href="./orcamentacao_comp_email.pdf">download do orçamento</a>)</h2>

        <img v-if="currStep > 0" src="./assets/download.gif">

        <span v-if="currStep == 1">
          <p>
            <strong>Importante: Colar esta etiqueta na embalagem </strong>
          </p>
          <p>
            <label class="checkbox">
              <!-- <input type="checkbox" v-model="etiquetaColada"> -->
              <!-- <span v-bind:class="!etiquetaColada ? 'has-text-danger-dark' : 'has-text-success'">  {{!etiquetaColada ? ' Colar etiqueta' : ' Etiqueta OK'}}</span> -->
              <div class="subtitle is-size-4"><a class="is-size-6" target="_blank" href="etiqueta.png">Clique aqui para baixar a etiqueta</a></div>

            </label>
          </p>
        </span>

        <br>

        <div class="steps" id="stepsDemo">
          <div class="step-item"
            v-bind:class="currStep >= 0 ? 'is-active '+(currStep >= 1 ? 'is-success' : '_is-warning') : ''">

            <div class="step-marker">1</div>
            <div class="step-details">
              <p class="step-title is-size-6">Aprovação</p>
            </div>
          </div>
          <div class="step-item"
            v-bind:class="currStep >= 1 ? 'is-active '+(currStep >= 2 ? 'is-success' : '_is-warning') : ''">

            <div class="step-marker">2</div>
            <div class="step-details">
              <p class="step-title is-size-6">Envio de amostra</p>
            </div>
          </div>
          <div class="step-item"
            v-bind:class="currStep >= 2 ? 'is-active '+(currStep >= 3 ? 'is-success' : '_is-warning') : ''">

            <div class="step-marker">3</div>
            <div class="step-details">
              <p class="step-title is-size-6">Aguardando amostra</p>
            </div>
          </div>
          <div class="step-item"
            v-bind:class="currStep >= 3 ? 'is-active '+(currStep >= 4 ? 'is-success' : '_is-warning') : ''">

            <div class="step-marker">4</div>
            <div class="step-details">
              <p class="step-title is-size-6">Análise iniciada</p>
            </div>
          </div>
          <div class="step-item"
            v-bind:class="currStep >= 4 ? 'is-active is-success' : ''">

            <div class="step-marker">5</div>
            <div class="step-details">
              <p class="step-title is-size-6">Fim</p>
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

                  <label class="checkbox">
                    Aprovar
                    <input type="checkbox" v-model="x.checked">
                  </label>
                  <p class="has-text-success has-text-small">Serviço acreditado</p>

                </div>


                <!-- <p>Descrição do ensaio: <strong>Determinação de área específica (método BET)</strong></p> -->
                <!-- <p>Número de itens: <strong>{{amostras.length}}</strong></p> -->
                <!-- <p>Preço por item: <strong>R$ 2.389,20</strong></p> -->
                <p>Preço total: <strong>R$ {{precoTotal}}</strong></p>
                
                <p>Validade do orçamento: <strong>5 dias úteis (até 08/06/2021)</strong></p>


                <p>Prazo: <strong>até 22 dias úteis após aprovação e recebimento da amostra.</strong></p>

                <!-- <p class="has-text-warning-dark">Esta proposta expirou, mas sem problemas. Você será informado caso ocorra mudanças no preço ou prazo de execução.</p> -->

                <p><strong>Para prosseguir, seu cadastro deve estar atualizado. </strong><a href="./cadastro.png" target="_blank">Clique aqui para atualizar</a></p>

                <label class="checkbox">
                  <input type="checkbox" v-model="concordoOrcamento">
                  <strong> Li e estou de acordo</strong>
                </label>



                <br>
                <br>
                <p class="">Contato: <strong>Renato Gavioli (ipt@ipt.br)</strong> </p>


              </div>

            </div>



            <div class="step-content has-text-centered"
              v-bind:class="currStep === 1 ? 'is-active' : ''">

              <div class="content _has-text-left is-size-5">
                <p><strong>Agora você já pode enviar sua amostra.</strong></p>
                
                <p><strong>Instruções:</strong></p>

                <ul>
                  
                </ul>

                <li>
                  Lembre-se de acondicionar seu material em embalagem limpa, seca e hermeticamente fechada para preservação das condições.                  
                </li>

                <li>
                  Garanta que seu material estará bem embalado e identificado.
                </li>

                <li>
                  Precisaremos de 300 g  de material. Caso seja enviada uma quantidade superior à solicitada, a porção necessária será retirada, sem procedimento de amostragem, e o excedente será descartado.
                </li>
                
                <li>Ele deverá ser encaminhado aos cuidados de IPT</li>
                
                <li>Nosso horário de recebimento é das 8:00 - 17:00</li>
                <li>O material deve vir acompanhado de Nota Fiscal</li>
                

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

              <h4 class="title is-4"><strong>Aguardando o recebimento da amostra.</strong></h4>
              <h4 class="is-size-5"><strong>Você receberá um alerta quanto for recebida.</strong></h4>
            </div>



            <div class="step-content has-text-centered"
              v-bind:class="currStep === 3 ? 'is-active' : ''">

              <h4 class="title is-4"><strong>Amostra recebida e análise iniciada. Você receberá uma notificação quando o serviço for finalizado.</strong></h4>
              <p class="is-size-5"><strong>Prazo máximo para término do trabalho: 05/07/2021.</strong></p>
            </div>



            <div class="step-content has-text-centered"
              v-bind:class="currStep === 4 ? 'is-active' : ''">

              <h1 class="title is-4">Relatório finalizado!</h1>
              


              <p class="is-size-5"><strong>Você pode baixar uma cópia em: <a class="" target="_blank" href="45678-101.pdf">45678-101</a></strong></p>



            </div>
          </div>
          <div class="steps-actions">
            <div class="steps-action">
              <a v-if="currStep !== 0" href="#" data-nav="previous" class="button is-light" @click="currStep = Math.max(currStep - 1, 0)">Voltar</a>
            </div>
            <div class="steps-action">
              <button v-if="currStep !== 4" href="#" data-nav="next" class="button is-light" @click="currStep = Math.min(currStep + 1, 4)" 
                :disabled="(currStep === 0 && !concordoOrcamento) || (currStep === 1 && !etiquetaColada)">{{etapaNext}}
              </button>
            </div>
          </div>

          


        </div>

        
      </div>
      <br>
      <br>
      <br>
      <br>
      <br>
      <div v-if="orcamentoSel" class="mt-4" style="text-align: left;">
        <p class="is-size-5">Caso haja alguma duvida, utilize o campo abaixo para enviar uma mensagem ao laboratório responsável:</p>
        <textarea class="textarea" placeholder="escreva sua mensagem..."></textarea>
        <br>
        <button class="button is-link" @click="enviaMsg">Enviar</button>
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
  watch: {
    currStep () {
      window.scrollTo(0,0)
    }
  },
  data ()  {
    return {
      currStep: 0,
      concordoOrcamento: false,
      etiquetaColada: true,
      orcamentoSel: undefined,
      amostras: [
        {desc: "Determinação de área específica (método BET)", "preco": "2.389,20", "checked": false, "precoVal": 2389.2},
        {desc: "Determinação de área específica (método BET)", "preco": "2.389,20", "checked": false, "precoVal": 2389.2},
      ]
    }
  },
  methods: {
    enviaMsg () {
      window.alert("Mensagem enviada! Entraremos em contato através do seu e-mail.")
    },
    mudaOrc () {
      if (this.orcamentoSel === '123/21') {
        this.currStep = 0
        this.concordoOrcamento = false
        this.amostras = [
          {desc: "Determinação de área específica (método BET)", "preco": "2.389,20", "checked": false, "precoVal": 2389.2},
          {desc: "Determinação de área específica (método BET)", "preco": "2.389,20", "checked": false, "precoVal": 2389.2},
        ]

      }
      if (this.orcamentoSel === '124/21') {
        this.currStep = 4
        this.concordoOrcamento = false
        this.amostras = [
          {desc: "Determinação de área específica (método BET)", "preco": "2.389,20", "checked": false, "precoVal": 2389.2},
          {desc: "Determinação de área específica (método BET)", "preco": "2.389,20", "checked": false, "precoVal": 2389.2},
        ]
      }


    }
  },
  computed: {
    precoTotal () {
      return this.amostras.filter(x => x.checked).map(item => item.precoVal).reduce((a, c) => a+c, 0)
    },
    etapaNext () {
      return ({
        0: "Aprovar",
        1: "Proximo",
        2: "Proximo",
        3: "Proximo",
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
