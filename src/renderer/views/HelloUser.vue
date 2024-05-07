<template>
  <div class="wrapper_bg">
    <h1 class="typing">{{ words }}</h1>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import router from "../router";

let words = ref('')
let index = 0
let animateIndex = 0

onMounted(() => {
  const checkCoockie = () => {
    if(document.cookie === ''){
      router.push('/authorized')
    } else {
      console.log('welcom')
    }
  }

  const backWrite = () => {
    const backInterval = setInterval(() => {
      if(index !== 0){
        index--
        words.value = words.value.slice(0, -1)
      } else {
        clearInterval(backInterval)
        letterWriteFucn('Loading, please wait', 25)
      }
    }, 10)
  }

  const letterWriteFucn = (wordHello, time) => {
    const intervalLetter = setInterval(() => {
      if (index < wordHello.length) {
        words.value += wordHello.split('')[index]
        index++
      } else {
        clearInterval(intervalLetter)
        setTimeout(() => {
          if(animateIndex === 0){
            backWrite()
            animateIndex++
          } else {
            checkCoockie()
          }
        }, 2500)
      }
    }, time)
  };

    letterWriteFucn('User, welcome to the MyTodos application', 50)
})

</script>

<style scoped>
.wrapper_bg {
  position: relative;
  height: 100vh;
  background: red;
  background: -webkit-linear-gradient(72deg, #4ad457, #1798e8, #8b16ca); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(72deg, #4ad457, #1798e8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.typing{
  font-family: 'Poppins';
  font-weight: 800;
  color: white;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, 0%);
  text-align: center;
  font-size: 60px;
}
</style>