<script>
export default {
  name: "PanelControl",
  data() {
    return {
      btnArray: [
        {
          title: "task",
          icon: "io-checkbox",
          isShowBlock: true,
          size: "1.4",
        },
        {
          title: "calendar",
          icon: "bi-calendar-week-fill",
          isShowBlock: false,
          size: "1.4",
        },
        {
          title: "pomodoro",
          icon: "md-alarmadd-round",
          isShowBlock: false,
          size: "1.4",
        },
        {
          title: "matrix",
          icon: "bi-grid",
          isShowBlock: false,
          size: "1.4",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="wrapper_block">
    <div class="link_block">
        <span class="logo"><span class="stub_user"></span></span>
      <div class="link_wrapper">
        <p class="wrapper_icon" v-for="item of btnArray" :key="item.title">
          <v-icon
            :class="item.title"
            :name="item.icon"
            fill="#0d9fee"
            :scale="item.size"
          />
        </p>
      </div>
    </div>
    <div>
      1
    </div>
  </div>
</template>

<style scoped>
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
  border-right: 1px solid #b9b3b3;
}

.link_wrapper{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px 0px;
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