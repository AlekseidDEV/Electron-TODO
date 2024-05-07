<template>
  <div class="wrapper_bg">
    <h1 class="typing">{{ words }}</h1>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

let words = ref('')
let index = 0

let wordHello = 'User, welcome to the MyTodos application'
let loadLetter = 'Loading, please wait'

onMounted(() => {
  const letterWriteFucn = () => {
    const intervalLetter = setInterval(() => {
      if (index < wordHello.length) {
        words.value += wordHello.split('')[index]
        index++
      } else {
        clearInterval(intervalLetter)
      }
    }, 50)
  }


  letterWriteFucn()

})

</script>

<style scoped>
.wrapper_bg {
  height: 100vh;
  background: red;
  background: -webkit-linear-gradient(72deg, #4ad457, #1798e8, #8b16ca); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(72deg, #4ad457, #1798e8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>