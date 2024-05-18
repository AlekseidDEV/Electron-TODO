<template>
  <div class="main_page">
    <div class="wrapper_form">
      <h1>Login to your account</h1>
      <form @submit.prevent="authorized">
        <div class="wrapper_input">
          <input
            ref="inputLogin"
            v-model="v$.login.$model"
            class="input"
            type="text"
            placeholder="your email"
            @input="errorLogin"
          />
          <div class="wrapper_password">
            <input
              v-model="v$.password.$model"
              class="input"
              :type="eyeClick ? 'text' : 'password'"
              placeholder="password"
              @input="errorPass"
            />
            <div class="icon_eye" @click="eyeClick = !eyeClick">
              <v-icon v-if="eyeClick" class="eye" name="io-eye-sharp" fill="#0d9fee" />
              <v-icon v-else class="eye" name="io-eye-off" fill="#0d9fee" />
            </div>
          </div>
        </div>
        <span
          class="error_send"
          v-show="formInvalid"
          v-for="error of v$.$errors"
          :key="error.$uid"
        >
          {{error.$message}}
        </span>
        <button>log in</button>
      </form>

      <img class="position_img_left" src="../public/Group%2043.png" alt="img" />
      <img class="position_img_rigth" src="../public/Group%2046.png" alt="img" />
    </div>

    <p class="register_link">or register</p>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'
import { isLogin } from '../validators/isLogin'
import router from '../router'

export default {
  setup() {
    return {
      v$: useVuelidate()
    }
  },

  data() {
    return {
      eyeClick: false,
      login: '',
      password: '',
      formInvalid: false,
    }
  },

  validations() {
    return {
      login: { required, isLogin: helpers.withMessage('sending is not possible, please correct errors', isLogin) },
      password: { required }
    }
  },

  methods: {
    async authorized(e) {
      const isFormCorrect = await this.v$.$validate()

      if(!isFormCorrect){
        this.formInvalid = true
      }else {
        e.target.reset()
        router.push('/main-page')
      }

    },

    errorLogin(e) {
      if (this.v$.login.$error) {
        e.target.classList.add('error_input')
      } else {
        e.target.classList.remove('error_input')
      }
    },

    errorPass(e) {
      if (this.v$.password.$error) {
        e.target.classList.add('error_input')
      } else {
        e.target.classList.remove('error_input')
      }
    }
  }
}
</script>

<style scoped>
.icon_eye {
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translate(0%, -50%);
  cursor: pointer;
}

.error_send{
  color: red;
  margin-bottom: 15px;
}

.error_input {
  border: 2px solid #d52424;
}

.wrapper_password {
  position: relative;
}

.wrapper_form {
  max-width: 900px;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}

.register_link {
  font-family: Poppins;
  font-weight: 400;
  text-decoration: underline;
  font-size: 14px;
  margin-top: 10px;
  color: black;
}
</style>
