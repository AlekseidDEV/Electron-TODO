<script>
export default {
  name: 'EmptyDetail',

}
</script>

<template>
  <div class="wrapper-empty pt-3 px-2 position-relative">
    <div class="empty-icon relative d-flex flex-column align-items-center">
      <img class="img-not-descr" src="../../../assets/img/shopping_list_icon_192691.png" alt="img">
      <p class="text-not mt-3">Нажмите на задачу, чтобы посмотреть ее детали</p>
    </div>
  </div>
</template>

<style scoped>
.wrapper-empty {
  max-width: 700px;
  width: 100%;
  flex-shrink: 2;
}

.empty-icon{
  margin-top: 300px;
}

.img-not-descr{
  max-width: 200px;
  width: 100%;
}

.text-not{
  color: #b6b6b6;
}
</style>
