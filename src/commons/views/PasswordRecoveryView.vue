<template>
  <lx-login>
    <ax-form>
      <ax-row>
        {{ $t('password.recovery.description.new') }}
      </ax-row>
      <ax-row>
        <lock-icon />
        <ax-form-input
          name="userLogin"
          v-model="refProp.userLogin"
          :placeholder="$t('password.recovery.refProp.user')"
        />
      </ax-row>
      <ax-row>
        <lock-icon />
        <ax-form-input
          name="newPassword"
          type="password"
          v-model="refProp.newPassword"
          :placeholder="$t('password.recovery.refProp.password')"
        />
      </ax-row>
      <ax-row>
        <lock-icon />
        <ax-form-input
          name="newPasswordConfirm"
          type="password"
          v-model="refProp.newPasswordConfirm"
          :placeholder="$t('password.recovery.refProp.password.confirm')"
        />
      </ax-row>
      <ax-row>
        <ax-button variant="primary" :disabled="!isFormValidate" @click="sudmit()">
          {{ $t('login.button') }}
        </ax-button>
      </ax-row>
    </ax-form>
  </lx-login>
</template>

<script lang="ts">
import Factory from '@COMMONS/utils/factory/factory';
import { ENUM } from '@COMMONS/constants';
import { defaultProps as ModalDefaultProps } from '@COMMONS/components/atoms/ax-modal.vue';
import { ValidateFields } from '@COMMONS/utils/form/field-validation';
import LockIcon from '@COMMONS/components/icons/24px-AX/Lock.vue';

export default Factory.view({
  name: 'PasswordRecovery',
  autoRouter: {
    name: 'PasswordRecovery',
    path: 'login/recovery',
  },
  components: {
    LockIcon,
  },
  data() {
    return {};
  },

  resources: {
    password: {
      type: ENUM.CommonsResource.PASSWORD,
    },
  },

  refProps: [
    {
      name: 'userLogin',
      value: '',
      validation: [{ rule: ENUM.ValidationRule.NOT_EMPTY }],
    },
    {
      name: 'newPassword',
      value: '',
      validation: [{ rule: ENUM.ValidationRule.NOT_EMPTY }],
    },
    {
      name: 'newPasswordConfirm',
      value: '',
      validation: [
        { rule: ENUM.ValidationRule.NOT_EMPTY },
        {
          rule: ENUM.ValidationRule.IS_EQUAL_THAN_VIEW_PROP,
          params: 'refProp.newPassword',
        },
      ],
    },
    'token',
  ],

  computed: {
    isFormValidate: function() {
      return this.isFormValidated();
    },
  },

  methods: {
    sudmit() {
      if (this.isFormValidated()) {
        this.resources.password
          .createEntity({
            data: {
              userLogin: this.refProp.userLogin.get(),
              newPassword: this.refProp.newPassword.get(),
              temporalAuth: this.refProp.token.get(),
            },
          })
          .then((response: any) => {
            this.showModalError(this.$t('password.recovery.done'));
          })
          .catch((error: any) => {
            this.showModalError(error.error.message);
          });
      }
    },

    isFormValidated() {
      return ValidateFields(this, ['userLogin', 'newPassword', 'newPasswordConfirm']);
    },

    showModalError(message: string) {
      this.$bvModal.msgBoxOk(message, {
        ...ModalDefaultProps,
        size: 'sm',
        centered: true,
        footerClass: 'd-flex justify-content-center',
        okTitle: this.$t('word.accept'),
      });
    },
  },

  //lifeCicle
  mounted: function() {
    if (this.$route.query.temporalAuth) {
      this.refProp.token.set(this.$route.query.temporalAuth);
    }
  },
});
</script>
