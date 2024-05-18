<template>
  <div class="wrapper_bg">
    <h1 class="typing">{{ words }}</h1>
  </div>
</template>

<script>
import router from '../router'

export default {
  data() {
    let words = ''
    let index = 0
    let animateIndex = 0

    return {
      words,
      index,
      animateIndex
    }
  },

  mounted() {
    this.letterWriteFucn('User, welcome to the MyTodos application', 50)
  },

  methods: {
    letterWriteFucn(wordHello, time) {
      const intervalLetter = setInterval(() => {
        if (this.index < wordHello.length) {
          this.words += wordHello.split('')[this.index]
          this.index++
        } else {
          clearInterval(intervalLetter)
          setTimeout(() => {
            if (this.animateIndex === 0) {
              this.backWrite()
              this.animateIndex++
            } else {
              this.checkCoockie()
            }
          }, 2500)
        }
      }, time)
    },

    backWrite() {
      const backInterval = setInterval(() => {
        if (this.index !== 0) {
          this.index--
          this.words = this.words.slice(0, -1)
        } else {
          clearInterval(backInterval)
          this.letterWriteFucn('Loading, please wait', 28)
        }
      }, 10)
    },

    checkCoockie() {
      if (document.cookie === '') {
        router.push('/authorized')
      } else {
        console.log('welcom')
      }
    }
  }
}
</script>

<style scoped>
.wrapper_bg {
  position: relative;
  height: 100vh;
  background: red;
  background: -webkit-linear-gradient(
    72deg,
    #4ad457,
    #1798e8,
    #8b16ca
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    72deg,
    #4ad457,
    #1798e8
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.typing {
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
