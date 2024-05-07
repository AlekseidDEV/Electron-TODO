<template>
  <div class="main_page">
    <div class="wrapper_form">
      <h1>Login to your account</h1>
      <form>
        <div class="wrapper_input">
          <input class="input" type="text" placeholder="your name">
          <input class="input" type="password" placeholder="password">
        </div>
        <button type="submit">
            log in
        </button>
        <p class="register_link">or register</p>
      </form>

      <img class="position_img_left" src="../public/Group%2043.png" alt="img">
      <img class="position_img_rigth" src="../public/Group%2046.png" alt="img">
    </div>

  </div>
</template>

<script setup>

</script>

<style scoped>
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