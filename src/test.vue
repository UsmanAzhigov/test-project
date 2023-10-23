<template>
  <div>
    <form @submit.prevent="createOrder">
      <input v-model="status" placeholder="Статус (новый, выполнен)" />
      <textarea v-model="comment" placeholder="Комментарий"></textarea>
      <button type="submit">Создать Заказ</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: '',
      comment: '',
    };
  },
  methods: {
    createOrder() {
      axios
        .post('/create-warehouse-entry', { status: this.status, comment: this.comment })
        .then((response) => {
          console.log('Заказ создан и запись в Складе добавлена', response.data);
        })
        .catch((error) => {
          console.error('Ошибка при создании заказа и записи в Складе', error);
        });
    },
  },
};
</script>
