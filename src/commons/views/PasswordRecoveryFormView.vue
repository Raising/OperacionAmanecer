<template>
  <ax-container>
    <ax-row class="mb-2">
      <h5>{{ $t('login.password.recovery.button') }}</h5>
    </ax-row>
    <ax-row class="mb-2">
      {{ $t('password.recovery.description') }}
    </ax-row>
    <ax-row>
      <ax-form id="passwordRecoveryForm" class="w-100">
        <lx-form-field :name="$t('password.recovery.refProp.user')">
          <ax-col class="d-flex align-items-center">
            <account-icon />
            <ax-form-input
              name="userName"
              class="col ml-2"
              v-model="refProp.username"
              @keyup.native="$emit('data-updated')"
            />
          </ax-col>
        </lx-form-field>
        <lx-form-field :name="$t('password.recovery.refProp.email')">
          <ax-col class="d-flex align-items-center">
            <mail-icon />
            <ax-form-input
              name="email"
              class="col ml-2"
              v-model="refProp.email"
              @keyup.native="$emit('data-updated')"
            />
          </ax-col>
        </lx-form-field>
      </ax-form>
    </ax-row>
  </ax-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Factory from '@COMMONS/utils/factory/factory';
import { ENUM } from '@COMMONS/constants';
import { ValidateFields } from '@COMMONS/utils/form/field-validation';
import AccountIcon from '@COMMONS/components/icons/24px-AX/Account.vue';
import MailIcon from '@COMMONS/components/icons/24px-AX/Mail.vue';

export default Factory.view({
  name: 'PasswordRecoveryForm',
  autoRouter: {
    name: 'PasswordRecoveryForm',
    path: 'login',
  },

  components: {
    AccountIcon,
    MailIcon,
  },

  resources: {
    password: {
      type: ENUM.CommonsResource.PASSWORD,
    },
  },

  refProps: [
    {
      name: 'username',
      validation: [{ rule: ENUM.ValidationRule.NOT_EMPTY }],
    },
    {
      name: 'email',
      validation: [{ rule: ENUM.ValidationRule.IS_EMAIL }, { rule: ENUM.ValidationRule.NOT_EMPTY }],
    },
  ],

  computed: {},

  methods: {
    submit() {
      return this.resources.password.post({
        data: {
          userName: this.refProp.username.get(),
          email: this.refProp.email.get(),
        },
      });
    },
    isValidated() {
      return ValidateFields(this, ['username', 'email']);
    },
  },
});
</script>
