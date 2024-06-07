<template>
  <div class="wrapper_form">
    <h1>Create an account</h1>
    <form>
      <div class="wrapper_input_reg">
        <div>
          <label class="label_input">
            <p>your name</p>
          </label>
          <input type="text" placeholder="name" class="input">
        </div>
        <div>
          <label class="label_input">
            <p>your email adress</p>
          </label>
          <input type="text" placeholder="login" class="input">
        </div>
        <div>
          <label class="label_input">
            <p>Create a password</p>
          </label>
          <input type="text" placeholder="password" class="input">
        </div>
        <div>
          <label class="label_input">
            <p>Repeat password</p>
          </label>
          <input type="text" placeholder="password" class="input">
        </div>
      </div>

      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script>
// import router from '../router'

export default {
  // mounted() {
  //   router.push('/authorized')
  // }
}
</script>

<style scoped>
.wrapper_input_reg{
  text-align: left;
  margin-bottom: 30px;
}

.label_input > p{
  font-family: Poppins;
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 5px;
  margin-top: 5px;
}
</style>
