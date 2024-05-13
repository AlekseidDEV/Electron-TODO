<template>
  <div class="main_page">
    <div class="wrapper_form">
      <h1>Login to your account</h1>
      <form @submit.prevent="authorized">
        <div class="wrapper_input">
          <input class="input"
                 type="email"
                 placeholder="your email"
                 v-model.lazy="formLogin.login"
                 required>
          <div class="wrapper_password">
            <input
                class="input"
                :type="eyeClick ? 'text' : 'password'"
                placeholder="password"
                v-model="formLogin.password"
                >
            <div class="icon_eye" @click="eyeClick = !eyeClick">
              <v-icon class="eye" name="io-eye-sharp" fill="#0d9fee" v-if="eyeClick"/>
              <v-icon v-else class="eye" name="io-eye-off" fill="#0d9fee"/>
            </div>
          </div>
        </div>
        <button>
            log in
        </button>
      </form>

      <img class="position_img_left" src="../public/Group%2043.png" alt="img">
      <img class="position_img_rigth" src="../public/Group%2046.png" alt="img">
    </div>

    <p class="register_link">or register</p>

  </div>
</template>

<script>
import router from "../router";

  export default {
    data(){
      let eyeClick = false

      let formLogin = {
        login: '',
        password: ''
      }

      return{
        eyeClick,
        formLogin
      }
    },

    methods: {
      authorized(){
        if(this.formLogin.login === '' && this.formLogin.password === ''){
          console.log('no')
        }else {
          router.push('/ManePage')
        }
      }
    },
  }
</script>

<style scoped>

.icon_eye{
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translate(0%, -50%);
  cursor: pointer;
}

.wrapper_password{
  position: relative;
}
  .wrapper_form{
    max-width: 900px;
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-direction: column;
    position: relative;
  }

  .register_link{
    font-family: Poppins;
    font-weight: 400;
    text-decoration: underline;
    font-size: 14px;
    margin-top: 10px;
    color: black;
  }

  .input{
    max-width: 400px;
    width: 100%;
    border: 2px solid #555555;
    border-radius: 8px;
    padding: 12px 0px;
    padding-left: 15px;
    font-family: Poppins;
    font-weight: 400;
  }

  .wrapper_form h1{
    color: #3e3e3e;
    font-family: Poppins;
    font-weight: 800;
  }


  .wrapper_form > form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 400px;
    width: 100%;
    margin-top: 20px;
  }

  .wrapper_form button{
    max-width: 250px;
    width: 100%;
    background: #0d9fee;
    color: white;
    padding: 8px 0px;
    border-radius: 8px;
    margin: auto;
    font-family: Poppins;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
  }

  .wrapper_form button:hover{
    background: #1092dc;
  }
  .wrapper_form button:active{
    background: #0f87cd;
  }


  .wrapper_input{
    display: flex;
    max-width: 400px;
    width: 100%;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
  }

  .main_page{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
  }

  .position_img_left{
    position: absolute;
    top: -500px;
    left: -400px;
  }
  .position_img_rigth{
    position: absolute;
    bottom: -350px;
    right: -140px;
  }

  @media (max-width: 1350px) {
      .position_img_left,
      .position_img_rigth{
        max-width: 400px;
      }

    .position_img_left{
      top: -320px;
      left: -150px;
    }
  }
  @media (max-width: 1095px){
    .position_img_left,
    .position_img_rigth{
      display: none;
    }
  }
</style>