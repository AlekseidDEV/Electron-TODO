<script>
export default {
  name: "ListView",
  data() {
    return {
      btnsDays: [
        {
          name: 'Сегодня',
          icon: 'bi-calendar-day',
          path: ''
        },
        {
          name: 'Следующие 7 дней',
          icon: 'bi-calendar2-date',
          path: ''
        },
        {
          name: 'В этом месяце',
          icon: 'bi-calendar2-month',
          path: ''
        }
      ],
      btnsDropDown: [
        {
          name: 'Списки',
          description: 'Используйте списки для категоризации и управления своими задачами и заметками.',
        },
        {
          name: 'Фильтры',
          description: 'Отображение задач, отфильтрованных по списку, дате, приоритету, метке и другим параметрам.',
        },
        {
          name: 'Метки',
          description: 'Используйте метки, для обозначения задач',
        }
      ],
      btnsStatusTodo: [
        {
          name: 'Выполнено',
          icon: 'bi-check-square',
          path: '#'
        },
        {
          name: 'Корзина',
          icon: 'fa-trash-alt',
          path: '#'
        }
      ]
    }
  }
};
</script>

<template>
  <div class="px-1 mt-2 wrapper-list-view">
    <div class="wrapper-day-btn">
      <div
        class="btn-day py-2 px-3 position-relative align-items-center"
        v-for="btn of btnsDays"
        :key="btn.name">
        <v-icon
          class="icon"
          :name="btn.icon"
          fill="#19191999"
          scale="1.1"
        />
        <span class="ps-2 btn-name">{{ btn.name }}</span>
        <span class="counter-task position-absolute">5</span>
      </div>
    </div>

    <div class="wrapper-drop-down mt-3">
      <div class="btn-drop-down py-2 px-3 position-relative" v-for="btn of btnsDropDown" :key="btn.name">
        <v-icon scale="0.9" class="hover-drop plus position-absolute" name="bi-plus-lg"></v-icon>
        <div class="titles-drop position-relative">
          <v-icon scale="0.9" class="hover-drop chevron position-absolute" name="hi-solid-chevron-right"></v-icon>
          <span class="px-1">{{ btn.name }}</span>
        </div>
        <ul v-if="false" class="position-absolute">
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
      </div>
    </div>

    <div class="wrapper-status mt-4">
      <div
        class="btn-day py-2 px-3 position-relative align-items-center"
        v-for="btn of btnsStatusTodo"
        :key="btn.name">
        <v-icon
          class="icon"
          :name="btn.icon"
          fill="#19191999"
          scale="1.1"
        />
        <span class="ps-2 btn-name">{{ btn.name }}</span>
        <span class="counter-task position-absolute">5</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-name{
  font-size: 15px;
}
.wrapper-list-view {
  max-width: 260px;
  width: 100%;
  border-right: 1px solid #edecec;
}

.wrapper-day-btn {
  padding-bottom: 20px;
  border-bottom: 1px solid #edecec;
}

.chevron {
  left: -15px;
  top: 50%;
  transform: translateY(-50%);
}

.plus {
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.hover-drop {
  opacity: 0;
  transition: 0.3s;
}

.wrapper-drop-down {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-bottom: 20px;
  border-bottom: 1px solid #edecec;
}

.btn-drop-down {
  color: #a4a4a4;
  font-size: 13px;
  max-width: 251px;
  width: 100%;
}

.btn-drop-down:hover .hover-drop {
  opacity: 1;
}

.btn-drop-down,
.btn-day {
  max-width: 100%;
  width: 100%;
  display: flex;
  cursor: pointer;
}

.btn-drop-down:hover,
.btn-day:hover {
  background: rgb(243, 243, 243);
  border-radius: 5px;
  transition: 0.2s;
}

.counter-task {
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  opacity: 0.5;
}
</style>
