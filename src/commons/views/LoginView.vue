<template>
  <lx-empty>
    <lx-login
      :title="$t('login.title')"
      :subtitle="$t('login.title.descrition')"
      :headerTitle="$t('login.header.title')"
      :headerSubtitle="$t('login.header.title.description')"
      :showMsg="this.loginFailedMsg !== undefined"
      :msgText="this.loginFailedMsg"
      :msgColor="'#F43157'"
    >
      <div class="d-flex flex-column align-items-stretch justify-content-around h-100">
        <div>
          <label for="inputEmail">{{ $t('login.form.email.label') }}</label>
          <ax-form-input id="inputEmail" type="email" required> </ax-form-input>
        </div>
        <div>
          <div class="d-flex justify-content-between">
            <label for="inputPassword">
              <p class="m-0">{{ $t('login.form.password.label') }}</p>
            </label>
            <a class="forgot-pass" @click="$bvModal.show('modalPasswordRecoveryForm')">{{
              $t('login.password.recovery.button')
            }}</a>
          </div>
          <div class="position-relative">
            <div @click="showPassText = !showPassText">
              <eye-icon :fillColor="showPassText === true ? 'gray' : '#C5C5C5'" :size="20" />
            </div>
            <ax-form-input
              id="inputPassword"
              :type="showPassText === true ? 'text' : 'password'"
              required
            ></ax-form-input>
          </div>
        </div>
        <ax-form-checkbox id="rememberMeCheckBox" class="rememberMeCheckBox" value="" unchecked-value="">{{
          $t('login.form.rememberme')
        }}</ax-form-checkbox>
        <ax-button id="doLoginButton" variant="primary" v-on:click="doLogin" class="d-flex align-items-center w-100">
          <ax-spinner v-if="resources.login.isWaitingResponse()" small class="mr-1"></ax-spinner>
          {{ $t('login.button') }}
        </ax-button>
      </div>
    </lx-login>
    <ax-modal
      :id="'modalPasswordRecoveryForm'"
      size="md"
      :ok-title="$t('word.accept')"
      :cancel-title="$t('word.cancel')"
      :ok-disabled="!refProp.isPasswordRecoveryFormValidated.get()"
      @ok="submitPasswordRecoveryForm()"
      :hide-header="true"
    >
      <password-recovery-form ref="passwordRecoveryForm" @data-updated="checkValitationPasswordRecoveryForm()" />
    </ax-modal>
  </lx-empty>
</template>

<script lang="ts">
import Factory, { VueView } from '@COMMONS/utils/factory/factory';
import router from '@COMMONS/utils/main/router';
import { ENUM, ACT } from '@COMMONS/constants';
import { defaultProps as ModalDefaultProps } from '@COMMONS/components/atoms/ax-modal.vue';
import { ValidateFields } from '@COMMONS/utils/form/field-validation';
import AccountIcon from '@COMMONS/components/icons/24px-AX/Account.vue';
import EyeIcon from '@COMMONS/components/icons/16px-AX/Eye.vue';
import PasswordRecoveryForm from '@COMMONS/views/PasswordRecoveryFormView.vue';
import Vue from 'vue';

export default Factory.view({
  name: 'Login',
  autoRouter: {
    name: 'Login',
    path: 'login',
  },
  components: {
    AccountIcon,
    EyeIcon,
    PasswordRecoveryForm,
  },
  data() {
    return {
      showPassText: false,
      loginFailedMsg: undefined,
    };
  },

  resources: {
    login: { type: ENUM.CommonsResource.SESSION },
    password: {
      type: ENUM.CommonsResource.PASSWORD,
    },
  },

  refProps: [
    {
      name: 'userLogin',
      value: undefined,
      validation: [{ rule: ENUM.ValidationRule.NOT_EMPTY }],
    },
    {
      name: 'password',
      value: undefined,
      validation: [{ rule: ENUM.ValidationRule.NOT_EMPTY }],
    },
    { name: 'isPasswordRecoveryFormValidated', value: false },
  ],
  computed: {
    enableLogin: function() {
      return ValidateFields(this, ['userLogin', 'password']);
    },
  },

  methods: {
    doLogin: function(e: Event) {
      this.loginFailedMsg = undefined;
      this.resource.login
        .post({
          data: {
            userLogin: this.refProp.userLogin.get(),
            password: this.refProp.password.get(),
          },
        })
        .then((response: any) => {
          localStorage.userLogin = this.refProp.userLogin.get();
          return this.$store.dispatch(ACT.Session.SaveLogInInfo, response);
        })
        .then(() => router.push(this.$store.getters.getPostLoginPath()))
        .catch(this.failToLogin);
    },
    failToLogin: function(error: any) {
      if (error.type === ENUM.ServerError.COMMONS_LOGIN_SERVICE_REFERENCE_ERROR) {
        this.loginFailedMsg = error.error.message;
      }
    },
    recoveryOnClick: function() {
      this.$bvModal.show('modalPasswordRecoveryForm');
    },
    checkValitationPasswordRecoveryForm: function() {
      this.refProp.isPasswordRecoveryFormValidated.set(
        this.$refs.passwordRecoveryForm && this.$refs.passwordRecoveryForm.isValidated(),
      );
    },
    submitPasswordRecoveryForm: function() {
      this.$refs.passwordRecoveryForm
        .submit()
        .then((response: any) => {
          if (!response.SendRecoveryPasswordResult) {
            this.showModalError(this.$t('password.recovery.error'));
          }
        })
        .catch((error: Error) => {
          this.showModalError(this.$t('password.recovery.error'));
        });
    },
    showModalError(this: VueView, message: string) {
      this.$bvModal.msgBoxOk(message, {
        ...ModalDefaultProps,
        size: 'sm',
        centered: true,
        footerClass: 'd-flex justify-content-center',
        okTitle: this.$t('word.accept'),
      });
    },
  },
});
//
</script>
