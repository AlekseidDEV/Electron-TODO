<script>
export default {
  name: 'TaskListView',
  data(){
    return{
        isDateList: '"Сегодня"'
    }
  }
}
</script>

<template>
  <div class="wrapper-list px-3 pt-3">
    <div class="control-panel">
      <div class="is-day d-flex align-items-center">
        <span  class="collapse-btn pe-2"><v-icon scale="1.2" name="oi-sidebar-collapse" fill="#19191999"></v-icon></span>
        <h2 class="name-list">{{isDateList.replace(/^"|"$/g, '')}}</h2>
      </div>
    </div>

    <div class="add-task  mt-3">
      <input class="px-3 py-3 input-add" type="text" :placeholder="'+ добавить задачу в раздел ' + isDateList">
    </div>

    <div class="drop-list-task">
<!--   тут по идеи должны быть выпадающие списки, в зависимости от нажатой кнопки в меню   -->
    </div>
  </div>
</template>

<style scoped>

.input-add{
  width: 100%;
  border-radius: 5px;
  border: none;
  background: rgb(243, 243, 243);
  padding-left: 20px;
  font-size: 13px;
}

.input-add::placeholder{
  font-size: 14px;
  font-weight: 400;
}

.input-add:focus{
  border: 1px solid #249bf5;
}

.wrapper-list{
  max-width: 770px;
  flex-shrink: 1;
  width: 100%;
  border-right: 1px solid #edecec;
}

.collapse-btn{
  cursor: pointer;
}

.name-list{
  font-size: 20px;
  margin-bottom: 0;
}

</style>
