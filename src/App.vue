<template>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Área do cliente
      </h1>
      <h2 class="subtitle">Serviço: XXXXX</h2>
      <br>

      <div class="steps" id="stepsDemo">
        <div class="step-item"
          v-bind:class="currStep >= 0 ? 'is-active '+(currStep >= 1 ? 'is-success' : '_is-warning') : ''">

          <div class="step-marker">1</div>
          <div class="step-details">
            <p class="step-title">Entenda seu serviço</p>
          </div>
        </div>
        <div class="step-item"
          v-bind:class="currStep >= 1 ? 'is-active '+(currStep >= 2 ? 'is-success' : '_is-warning') : ''">

          <div class="step-marker">2</div>
          <div class="step-details">
            <p class="step-title">Em execução</p>
          </div>
        </div>
        <div class="step-item"
          v-bind:class="currStep >= 2 ? 'is-active '+(currStep >= 3 ? 'is-success' : '_is-warning') : ''">

          <div class="step-marker">3</div>
          <div class="step-details">
            <p class="step-title">Relatório em elaboração</p>
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
              <p>Preço: <strong>R$ 123,22</strong></p>
              <p>Prazo: <strong>5 dias úteis</strong></p>
              <p>Pagamento: <strong>....</strong></p>
              <label class="checkbox">
                <input type="checkbox">
                <strong> Concordo</strong>
              </label>
            </div>

          </div>



          <div class="step-content has-text-centered"
            v-bind:class="currStep === 1 ? 'is-active' : ''">

            <div class="content _has-text-left is-size-5">
              <p><strong>Agora você já pode enviar sua amostra.</strong></p>
              <p><strong>Instruções:</strong></p>
              
              <label class="checkbox">
                Instrução A 
                <input type="checkbox">
              </label>
              <br>
              <label class="checkbox">
                Instrução B
                <input type="checkbox">
              </label>
              <br>
              ...

              
              <p>Aproveite para atualizar seu cadastro:</p>

              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Nome</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <input class="input" name="firstname" id="firstname" type="text" placeholder="Firstname" autofocus data-validate="require">
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
                      <input class="input" type="text" name="lastname" id="lastname" placeholder="Last name" data-validate="require">
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
              </div>
              ...




            </div>
          </div>



          <div class="step-content has-text-centered"
            v-bind:class="currStep === 2 ? 'is-active' : ''">

            <p><strong>A execução foi finalizada e agora seu relatório está em elaboração.</strong></p>
            <p>Uma minuta já está disponível em no link: <a href="">123456-101</a></p>
            

          </div>



          <div class="step-content has-text-centered"
            v-bind:class="currStep === 3 ? 'is-active' : ''">

            <h1 class="title is-4">Relatório finalizado!</h1>
            <p>Você pode baixar uma cópia em: <a href="">123456-101</a></p>



          </div>
        </div>
        <div class="steps-actions">
          <div class="steps-action">
            <a href="#" data-nav="previous" class="button is-light" @click="currStep = Math.max(currStep - 1, 0)">Previous</a>
          </div>
          <div class="steps-action">
            <a href="#" data-nav="next" class="button is-light" @click="currStep = Math.min(currStep + 1, 4)">Next</a>
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
      currStep: 0
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
