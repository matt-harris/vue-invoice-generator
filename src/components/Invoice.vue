<template>
  <div class="vue-wrapper">
    <section class="section">
      <div class="container">
        <div class="columns">
          <!-- From -->
          <div class="column">
            <h2 class="title is-3">From</h2>
            <!-- Business Name -->
            <div class="field">
              <label class="label" for="businessName">Business Name</label>
              <div class="control">
                <input id="businesName"
                        name="businesName"
                        class="input"
                        type="text"
                        placeholder="From - Business Name"
                        v-model="businessName"
                        v-validate="'required'"
                        :class="{'input': true, 'is-danger': errors.has('businesName') }">
                <span class="help is-danger"
                      v-show="errors.has('businesName')">
                  {{ errors.first('businesName') }}</span>
              </div>
            </div>

            <!-- Address Line 1 -->
            <div class="field">
              <label class="label" for="from_address1">Address Line 1</label>
              <div class="control">
                <input id="from_address1"
                       name="from_address1"
                       class="input"
                       type="text"
                       placeholder="Address Line 1"
                       v-model="from_address1">
              </div>
            </div>

            <!-- Address Line 2 -->
            <div class="field">
              <label class="label" for="from_address2">Address Line 2</label>
              <div class="control">
                <input id="from_address2"
                       name="from_address2"
                       class="input"
                       type="text"
                       placeholder="Address Line 2"
                       v-model="from_address2">
              </div>
            </div>

            <!-- City -->
            <div class="field">
              <label class="label" for="from_city">City</label>
              <div class="control">
                <input id="from_city"
                       name="from_city"
                       class="input"
                       type="text"
                       placeholder="City"
                       v-model="from_city">
              </div>
            </div>

            <!-- Postcode -->
            <div class="field">
              <label class="label" for="from_postcode">Postcode</label>
              <div class="control">
                <input id="from_postcode"
                       name="from_postcode"
                       class="input"
                       type="text"
                       placeholder="Postcode"
                       v-model="from_postcode">
              </div>
            </div>
          </div>

          <!-- To -->
          <div class="column">
            <h2 class="title is-3">To</h2>
            <!-- Business Name -->
            <div class="field">
              <label class="label" for="clientName">Client Name</label>
              <div class="control">
                <input id="clientName"
                       name="clientName"
                       class="input"
                       type="text"
                       placeholder="To - Client Name"
                       v-model="clientName"
                       v-validate="'required'"
                       :class="{'input': true, 'is-danger': errors.has('clientName') }">
                <span class="help is-danger"
                      v-show="errors.has('clientName')">
                  {{ errors.first('clientName') }}</span>
              </div>
            </div>

            <!-- Address Line 1 -->
            <div class="field">
              <label class="label" for="client_address1">Address Line 1</label>
              <div class="control">
                <input id="client_address1"
                       name="client_address1"
                       class="input"
                       type="text"
                       placeholder="Address Line 1"
                       v-model="client_address1">
              </div>
            </div>

            <!-- Address Line 2 -->
            <div class="field">
              <label class="label" for="client_address2">Address Line 2</label>
              <div class="control">
                <input id="client_address2"
                       name="client_address2"
                       class="input"
                       type="text"
                       placeholder="Address Line 2"
                       v-model="client_address2">
              </div>
            </div>

            <!-- City -->
            <div class="field">
              <label class="label" for="client_city">City</label>
              <div class="control">
                <input id="client_city"
                       name="client_city"
                       class="input"
                       type="text"
                       placeholder="City"
                       v-model="client_city">
              </div>
            </div>

            <!-- Postcode -->
            <div class="field">
              <label class="label" for="client_postcode">Postcode</label>
              <div class="control">
                <input id="client_postcode"
                       name="client_postcode"
                       class="input"
                       type="text"
                       placeholder="Postcode"
                       v-model="client_postcode">
              </div>
            </div>
          </div>

          <!-- Details -->
          <div class="column">
            <h2 class="title is-3">Invoice details</h2>
            <!-- Invoice # -->
            <div class="field">
              <label class="label" for="invoice_id">Invoice # / ref</label>
              <div class="control">
                <input id="invoice_id"
                        name="invoice_id"
                        class="input"
                        type="text"
                        placeholder="0001"
                        v-model="invoice_id"
                        v-validate="'required'"
                        :class="{'input': true, 'is-danger': errors.has('invoice_id') }">
                <span class="help is-danger"
                      v-show="errors.has('invoice_id')">
                  {{ errors.first('invoice_id') }}</span>
              </div>
            </div>

            <div class="field">
              <label class="label" for="invoiceDate">Invoice Date</label>
              <datepicker id="invoiceDate"
                          input-class="input input--datepicker"
                          :format="formatDate"
                          name="invoiceDate"
                          placeholder="01/05/18"
                          v-model="invoice_date"
                          ref="invoiceDate"></datepicker>
            </div>

            <div class="field">
              <label class="label" for="invoiceDue">Invoice Due</label>
              <datepicker id="invoiceDue"
                          input-class="input input--datepicker"
                          :format="formatDate"
                          name="invoiceDue"
                          placeholder="01/06/18"
                          v-model="invoice_due"
                          ref="invoiceDue"></datepicker>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h2 class="title is-3">Items</h2>
            <!-- Invoice Items -->
            <table class="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Description</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Discount %</th>
                  <th>Tax %</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in items" :key="index">
                  <td>
                    {{ index +1 }}
                  </td>
                  <td>
                    <input class="input" v-model="item.description">
                  </td>
                  <td>
                    <input class="input"
                            v-model.number="item.qty"
                            v-on:change="itemTotal(index)"
                            number>
                  </td>
                  <td>
                    <input class="input"
                            v-model.number="item.price"
                            v-on:change="itemTotal(index)"
                            number>
                  </td>
                  <td>
                    <input class="input"
                            v-model.number="item.discount"
                            v-on:change="itemTotal(index)"
                            number>
                  </td>
                  <td>
                    <input class="input"
                            v-model.number="item.tax"
                            v-on:change="itemTotal(index)"
                            number>
                  </td>
                  <td>
                  <input class="input"
                          :value="item.total | money"
                          number readonly>
                  </td>
                  <td>
                    <div class="field is-grouped">
                      <div class="control">
                        <button class="button is-small is-success"
                                @click="addItem(index)">Add</button>
                      </div>
                      <div class="control">
                        <button class="button is-small is-danger"
                                @click="removeItem(index)">Remove</button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="6"
                      class="has-text-right	is-uppercase has-text-weight-semibold">
                    Discount
                  </td>
                  <td colspan="1" class="has-text-right">
                    {{ itemsDiscountTotal | money }}
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td colspan="6"
                      class="has-text-right	is-uppercase has-text-weight-semibold">
                    Tax
                  </td>
                  <td colspan="1" class="has-text-right">{{ itemsTaxTotal | money }}</td>
                  <td></td>
                </tr>
                <tr>
                  <td colspan="6"
                      class="has-text-right	is-uppercase has-text-weight-semibold">
                    Total
                  </td>
                  <td colspan="1" class="has-text-right">{{ itemsTotal | money }}</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <!-- Payment details -->
          <div class="column">
            <h2 class="title is-3">Payment details</h2>
            <!-- Account name -->
            <div class="field">
              <label class="label" for="invoice_id">Account Name</label>
              <div class="control">
                <input id="account_name"
                        name="account_name"
                        class="input"
                        type="text"
                        placeholder="Mr Matt Harris"
                        v-model="account_name"
                        v-validate="'required'"
                        :class="{'input': true, 'is-danger': errors.has('account_name') }">
                <span class="help is-danger"
                      v-show="errors.has('account_name')">
                  {{ errors.first('account_name') }}</span>
              </div>
            </div>

            <!-- Account sortcode -->
            <div class="field">
              <label class="label" for="account_sortcode">Account sortcode</label>
              <div class="control">
                <input id="account_sortcode"
                        name="account_sortcode"
                        class="input"
                        type="text"
                        placeholder="010203"
                        v-model="account_sortcode"
                        v-validate="'required'"
                        :class="{'input': true, 'is-danger': errors.has('account_sortcode') }">
                <span class="help is-danger"
                      v-show="errors.has('account_sortcode')">
                  {{ errors.first('account_sortcode') }}</span>
              </div>
            </div>

            <!-- Account number -->
            <div class="field">
              <label class="label" for="account_sortcode">Account number</label>
              <div class="control">
                <input id="account_number"
                        name="account_number"
                        class="input"
                        type="text"
                        placeholder="12345678"
                        v-model="account_number"
                        v-validate="'required'"
                        :class="{'input': true, 'is-danger': errors.has('account_number') }">
                <span class="help is-danger"
                      v-show="errors.has('account_number')">
                  {{ errors.first('account_number') }}</span>
              </div>
            </div>
          </div>

          <!-- Notes -->
          <div class="column">
            <h2 class="title is-3">Invoice notes</h2>
            <!-- Invoice notes -->
            <div class="field">
              <label class="label" for="invoice_notes">Notes</label>
              <div class="control">
                <textarea id="invoice_notes"
                          name="invoice_notes"
                          class="textarea"
                          placeholder="Invoice notes..."
                          v-model="invoice_notes"></textarea>
              </div>
            </div>
          </div>
        </div>

        <button class="button is-medium is-info"
                @click="generateInvoice = true">Generate Invoice</button>
      </div>
    </section>

    <transition name="fade" mode="out-in">
      <section class="section" v-if="generateInvoice" key="generateInvoice">
        <div class="container">
          <!-- Generate the Invoice -->
          <div id="invoice" class="invoice">
            <div class="columns">
              <div class="column is-4">
                <h1 class="title is-1 is-uppercase">Invoice</h1>
              </div>
              <div class="column is-3 is-offset-5">
                <address>
                  <p>{{ businessName }}</p>
                  <p>{{ from_address1 }}</p>
                  <p>{{ from_address2 }}</p>
                  <p>{{ from_city }}</p>
                  <p>{{ from_postcode }}</p>
                </address>
              </div>
            </div>

            <div class="columns">
              <div class="column is-4">
                <address>
                  <p><strong>Invoice to:</strong></p>
                  <p>{{ clientName }}</p>
                  <p>{{ client_address1 }}</p>
                  <p>{{ client_address2 }}</p>
                  <p>{{ client_city }}</p>
                  <p>{{ client_postcode }}</p>
                </address>
              </div>
              <div class="column is-3 is-offset-5">
                <p><strong>Invoice:</strong> {{ invoice_id }}</p>
                <p v-if="invoice_date"><strong>Invoice Date:</strong>
                  {{ formatDate(invoice_date) }}
                </p>
                <p v-if="invoice_due"><strong>Due Date:</strong>
                  {{ formatDate(invoice_due) }}
                </p>
                <p><strong>Amount Due:</strong> {{ itemsTotal | money }}</p>
              </div>
            </div>

            <div class="columns">
              <div class="column">
                <table class="invoice__table table is-striped is-fullwidth">
                  <thead class="has-background-primary">
                    <tr>
                      <th class="has-text-white-bis has-text-left">No.</th>
                      <th class="has-text-white-bis has-text-left">Description</th>
                      <th class="has-text-white-bis has-text-right">Qty</th>
                      <th class="has-text-white-bis has-text-right">Price</th>
                      <th class="has-text-white-bis has-text-right">Discount</th>
                      <th class="has-text-white-bis has-text-right">Tax</th>
                      <th class="has-text-white-bis has-text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in items" :key="index">
                      <td>
                        {{ index +1 }}
                      </td>
                      <td>
                        {{ item.description }}
                      </td>
                      <td class="has-text-right">
                        {{ item.qty }}
                      </td>
                      <td class="has-text-right">
                        {{ item.price }}
                      </td>
                      <td class="has-text-right">
                        {{ item.discount }}
                      </td>
                      <td class="has-text-right">
                        {{ item.tax }}
                      </td>
                      <td class="has-text-right">
                        {{ item.total | money }}
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="6"
                          class="has-text-right is-uppercase has-text-weight-bold">
                        Discount
                      </td>
                      <td colspan="1" class="has-text-right">
                        {{ itemsDiscountTotal | money }}
                      </td>
                    </tr>
                    <tr>
                      <td colspan="6"
                          class="has-text-right	is-uppercase has-text-weight-bold">
                        Tax
                      </td>
                      <td colspan="1" class="has-text-right">
                        {{ itemsTaxTotal | money }}
                      </td>
                    </tr>
                    <tr>
                      <td colspan="6"
                          class="has-text-right	is-uppercase has-text-weight-bold">Total</td>
                      <td colspan="1" class="has-text-right">
                        {{ itemsTotal | money }}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            <div class="columns">
              <div class="column">
                <article class="message is-primary">
                  <div class="message-header">
                    <p>Payment details</p>
                  </div>
                  <div class="message-body">
                    <p>Account Name: <strong>{{ account_name }}</strong></p>
                    <p>Sort code: <strong>{{ account_sortcode }}</strong></p>
                    <p>Account number: <strong>{{ account_number }}</strong></p>
                  </div>
                </article>
              </div>

              <div class="column">
                <article class="message">
                  <div class="message-body">
                    <h3 class="title is-5">Thankyou for your prompt payment</h3>

                    <p>{{ invoice_notes }}</p>
                  </div>
                </article>
              </div>
            </div>
          </div>

          <button class="button is-info is-medium"
                  style="margin-top: 24px;"
                  @click="exportPDF">Download Invoice</button>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import * as html2pdf from 'html2pdf.js';

const moment = require('moment');

export default {
  name: 'Invoice',
  components: {
    Datepicker,
  },
  data() {
    return {
      businessName: '',
      from_address1: '',
      from_address2: '',
      from_city: '',
      from_postcode: '',
      clientName: '',
      client_address1: '',
      client_address2: '',
      client_city: '',
      client_postcode: '',
      invoice_id: '',
      invoice_date: '',
      invoice_due: '',
      items: [
        {
          description: '',
          qty: '',
          price: '',
          discount: '',
          tax: '',
          discount_amount: '',
          tax_amount: '',
          total: '',
        },
      ],
      taxtotal: 0,
      total: 0,
      account_name: '',
      account_sortcode: '',
      account_number: '',
      invoice_notes: '',
      generateInvoice: false,
    };
  },
  methods: {
    /**
      * Adds a invoice row.
      * @param {number} index - The row index.
      * @returns {array} - returns items array.
     */
    addItem(index) {
      this.items.splice(index + 1, 0,
        {
          description: '',
          qty: '',
          price: '',
          discount: '',
          tax: '',
          discount_amount: '',
          tax_amount: '',
          total: '',
        });
    },
    /**
      * Removes a invoice row.
      * @param {number} index - The row index.
      * @returns {array} - returns items array.
     */
    removeItem(index) {
      this.items.splice(index, 1);
    },
    /**
      * Calculates invoice totals.
      * @param {number} index - The row index.
      * @returns {number} - returns invoice totals.
     */
    itemTotal(index) {
      let discountTotal;
      let taxTotal;
      let taxDisTotal;

      // Basic item total.
      const calculatedTotal = this.items[index].qty * this.items[index].price;
      this.items[index].total = calculatedTotal;

      // If discount applied.
      if (this.items[index].discount) {
        discountTotal = calculatedTotal * (this.items[index].discount / 100);
        this.items[index].discount_amount = discountTotal;
        this.items[index].total = calculatedTotal - discountTotal;
      } else if (this.items[index].discount === 0 || this.items[index].discount === '') {
        this.items[index].discount_amount = 0;
      }

      // If tax applied.
      if (this.items[index].tax) {
        taxTotal = calculatedTotal * (this.items[index].tax / 100);
        this.items[index].tax_amount = taxTotal;
        this.items[index].total = calculatedTotal + taxTotal;
      } else if (this.items[index].tax === 0 || this.items[index].tax === '') {
        this.items[index].tax_amount = 0;
      }

      // If tax & discount applied.
      if (this.items[index].tax && this.items[index].discount) {
        taxDisTotal = (calculatedTotal - discountTotal) * (this.items[index].tax / 100);
        this.items[index].discount_amount = discountTotal;
        this.items[index].tax_amount = taxDisTotal;
        this.items[index].total = (calculatedTotal - discountTotal) + taxDisTotal;
      }
    },
    /**
      * Formats date using moment.js
      * @param {object} date - The date object.
      * @returns {array} - returns formatted date.
     */
    formatDate(date) {
      return moment(date).format('DD/MM/YYYY');
    },
    /**
      * Exports and saves PDF.
     */
    exportPDF() {
      const element = document.querySelector('#invoice');
      const opt = {
        margin: 8,
        filename: 'invoice.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2 },
      };

      html2pdf().from(element).set(opt).save();
    },
    imFocused() {
      // eslint-disable-next-line
      console.log('Im in focus');
    },
  },
  computed: {
    // Update running totals
    itemsTotal() {
      return this.items.reduce((acc, item) => acc + item.total, 0);
    },
    itemsDiscountTotal() {
      return this.items.reduce((acc, item) => acc + item.discount_amount, 0);
    },
    itemsTaxTotal() {
      return this.items.reduce((acc, item) => acc + item.tax_amount, 0);
    },
  },
  mounted() {
    const datepickers = [...document.querySelectorAll('.input--datepicker')];

    datepickers.forEach((element) => {
      element.addEventListener('focus', () => {
        setTimeout(() => {
          if (!this.$refs[element.id].isOpen) {
            this.$refs[element.id].showCalendar();
          }
        }, 200);
      });
    });
  },
};
</script>

<style lang="scss">
  .invoice__table {
    th {
      border: 0;
    }

    tfoot {
      td {
        border-width: 1px 0 0;
      }
    }
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s;
  }

  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }
</style>
