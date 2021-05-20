import { mount, shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import LoginView from '@COMMONS/views/LoginView.vue';
import { ACT } from '@COMMONS/constants';

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);
const router = new VueRouter();

describe('LoginView.vue', () => {
  let actions: any;
  let store: any;

  beforeEach(() => {
    actions = {
      [ACT.Resource.PostServerAction]: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
    });
  });

  it('Do login', () => {
    let el1 = LoginView;

    // const testView = shallowMount(LoginView, {
    //   localVue,
    //   router,
    //   store
    // })

    // const inputEmail = testView.find('#inputEmail');
    // const inputPassword = testView.find('#inputPassword');
    // const buttonDoLogin = testView.find('#doLoginButton');

    // (<HTMLInputElement>inputEmail.element).value = 'testMail@gmail.com';
    // (<HTMLInputElement>inputPassword.element).value = 'passwordTest';

    // buttonDoLogin.trigger('click');

    // expect(actions[ACT.Resource.PostServerAction]).toHaveBeenCalled();
  });
});
