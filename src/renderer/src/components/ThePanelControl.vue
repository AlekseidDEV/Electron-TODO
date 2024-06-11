<script>
export default {
  name: "PanelControl",
  emits: ['visibleBlock'],
  data() {
    return {
      btnArray: [
        {
          title: "Task",
          icon: "io-checkbox",
          isShowBlock: true,
          size: "1.3",
          colorDefault: '#b9b3b3',
          colorActive: '#0d9fee'
        },
        {
          title: "Calendar",
          icon: "bi-calendar-week-fill",
          isShowBlock: false,
          size: "1.3",
          colorDefault: '#b9b3b3',
          colorActive: '#0d9fee'
        },
        {
          title: "Pomodoro",
          icon: "md-alarmadd-round",
          isShowBlock: false,
          size: "1.3",
          colorDefault: '#b9b3b3',
          colorActive: '#0d9fee'
        },
        {
          title: "Matrix",
          icon: "bi-grid",
          isShowBlock: false,
          size: "1.3",
          colorDefault: '#b9b3b3',
          colorActive: '#0d9fee'
        },
      ],
    };
  },

  methods: {
    changeBlock(itemActive){
      this.btnArray.forEach((btn) => {
        if(btn.title === itemActive){
          btn.isShowBlock = true
          this.$emit('visibleBlock', itemActive)
        }else{
          btn.isShowBlock = false
        }
      })
    }
  }
};
</script>

<template>
  <div class="wrapper_block">
    <div class="link_block">
        <span class="logo"><span class="stub_user"></span></span>
      <div class="link_wrapper">
        <p class="wrapper_icon" v-for="item of btnArray" :key="item.title" :title="item.title">
          <v-icon
            :class="item.title"
            :name="item.icon"
            :fill="item.isShowBlock ? item.colorActive : item.colorDefault"
            :scale="item.size"
            @click="changeBlock(item.title)"
          />
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

.Task:hover,
.Calendar:hover,
.Pomodoro:hover,
.Matrix:hover
{
  fill: grey;
}

.wrapper_block {
  display: flex;
  height: 100vh;
}

.wrapper_icon{
    cursor: pointer;
    display: flex;
    justify-content: center;
}

.link_block {
  padding: 10px 10px;
  background: #f9f9f9;
  border-right: 1px solid #e6e6e6;
}

.link_wrapper{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px 0px;
}

.logo{
    background: rgb(107, 206, 107);
    width: 30px;
    height: 30px;
    display: flex;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
}

.stub_user{
    background: rgb(236, 236, 236);
    width: 10px;
    height: 10px;
    display: flex;
    border-radius: 2px;
}
</style>
