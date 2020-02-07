<template>
  <div id="app">
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">Invoice Generator</h1>
          <h2 class="subtitle is-3">Easily create an invoice and save as a PDF</h2>
        </div>
      </div>
    </section>

    <Invoice></Invoice>

    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            A project by <a href="https://matt-harris.net">Matt Harris</a>.
            Built with <a href="https://vuejs.org/">Vue.js</a> &amp; <a href="https://bulma.io/">Bulma</a>.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// Vee Validate custom error names.
import { Validator } from 'vee-validate';
import Invoice from './components/Invoice';

// Vee Validate custom error names.
const dictionary = {
  en: {
    attributes: {
      businesName: 'Your business name',
      clientName: 'Client name',
      invoice_id: 'Invoice ID',
      account_name: 'Account name',
      account_sortcode: 'Account sortcode',
      account_number: 'Account number',
    },
  },
};

Validator.localize(dictionary);

export default {
  name: 'App',
  components: {
    Invoice,
  },
};
</script>

<style>
#app {
  font-family: 'Fira Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
