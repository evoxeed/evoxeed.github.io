<template>
  <section class="feedback text-center">
    <b-container class="container-max-width">
      <b-row>
        <b-col cols="12">
          <h2 class="heading-page text-uppercase">give us a good news</h2>
          <validation-observer ref="observer" v-slot="{ handleSubmit }">
            <b-form class="feedback__form d-flex flex-column align-items-center"
                    @submit.stop.prevent="handleSubmit(onSubmit)">
              <validation-provider
                  class="w-100"
                  name="Name"
                  :rules="{ required: true, min: 4 }"
                  v-slot="validationContext">
                <b-form-group id="input-group-name" label-for="input-name" class="feedback__form--margin">
                  <b-form-input id="input-name"
                                name="input-name"
                                v-model="form.name"
                                :state="getValidationState(validationContext)"
                                aria-describedby="input-name-live-feedback"
                                class="input"
                                type="text"
                                placeholder="Name"/>
                  <b-form-invalid-feedback id="input-name-live-feedback">{{
                      validationContext.errors[0]
                    }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
              <validation-provider
                  class="w-100"
                  name="Email"
                  :rules="{ required: true, email: true }"
                  v-slot="validationContext">
                <b-form-group id="input-group-email" label-for="input-email" class="feedback__form--margin">
                  <b-form-input id="input-email"
                                name="input-email"
                                v-model="form.email"
                                :state="getValidationState(validationContext)"
                                aria-describedby="input-email-live-feedback"
                                class="input"
                                type="email"
                                placeholder="Email"/>
                  <b-form-invalid-feedback id="input-email-live-feedback">{{
                      validationContext.errors[0]
                    }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
              <validation-provider
                  class="w-100"
                  name="Subject"
                  :rules="{ required: true }"
                  v-slot="validationContext">
                <b-form-group id="input-group-subject" label-for="input-subject" class="feedback__form--margin">
                  <b-form-input id="input-subject"
                                name="input-subject"
                                v-model="form.subject"
                                :state="getValidationState(validationContext)"
                                aria-describedby="input-subject-live-feedback"
                                class="input"
                                type="text"
                                placeholder="Subject"/>
                  <b-form-invalid-feedback id="input-subject-live-feedback">{{
                      validationContext.errors[0]
                    }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>

              <validation-provider
                  class="w-100"
                  name="Your Message"
                  :rules="{ required: true, min: 10 }"
                  v-slot="validationContext">
                <b-form-group id="input-group-textarea" label-for="input-textarea" class="feedback__form--margin">
                  <b-form-textarea id="input-textarea"
                                   name="input-textarea"
                                   v-model="form.textarea"
                                   :state="getValidationState(validationContext)"
                                   aria-describedby="input-textarea-live-feedback"
                                   class="input input--textarea"
                                   type="text"
                                   placeholder="Your Message"/>
                  <b-form-invalid-feedback id="input-textarea-live-feedback">{{
                      validationContext.errors[0]
                    }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
              <button class="button button--active text-uppercase" type="submit">submit</button>
            </b-form>
          </validation-observer>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import {extend, localize, ValidationObserver, ValidationProvider} from 'vee-validate';
import en from "vee-validate/dist/locale/en.json";
import * as rules from "vee-validate/dist/rules";

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

localize("en", en);

export default {
  name: "Feedback",
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: function () {
    return {
      form: {
        name: null,
        email: null,
        subject: null,
        textarea: null
      }
    };
  },
  methods: {
    getValidationState({dirty, validated, valid = null}) {
      return dirty || validated ? valid : null;
    },

    resetForm() {
      this.form = {
        name: null,
        email: null,
        subject: null,
        textarea: null
      };

      this.$nextTick(() => {
        this.$refs.observer.reset()
      });
    },

    onSubmit() {
      this.resetForm()
      alert("Form submitted!")
    }
  }
}
</script>