<template>
  <div class="main_page" v-if="loginUser">
      <LoginComponent/>

    <p class="register_link" @click="loginUser = !loginUser">or register</p>
  </div>
  <div class="main_page" v-else>
    <RegistComponent/>
  </div>
</template>

<script>
import LoginComponent from '../components/ui/LoginComponent.vue'
import RegistComponent from '../components/ui/RegistComponent.vue'

  export default {
    components: {LoginComponent, RegistComponent},

    data(){
      return{
        loginUser: true
      }
    }
  }
</script>

<style scoped>
.register_link {
  font-family: Poppins;
  font-weight: 400;
  text-decoration: underline;
  font-size: 14px;
  margin-top: 10px;
  color: black;
  cursor: pointer;
}
</style>
