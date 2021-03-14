<template>
  <span v-if="!item.checked">
      <input type="checkbox" v-on:change="checkItem(item)">
      <input class="todo-title"
             type="text"
             placeholder="내용을 입력하세요"
             v-model="item.title"
      />
     <button v-on:click="deleteItem(item.id)">삭제</button>
  </span>
  <span v-else>
    <input type="checkbox" v-on:change="checkItem(item)" checked>
    <span>{{ item.title ? item.title : '(내용 없음)' }}</span>
    <button v-on:click="deleteItem(item.id)">삭제</button>
  </span>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    item: Object
  },

  methods: {
    deleteItem: function(id) {
      this.$emit('delete', id);
    },

    checkItem: function(item) {
      this.$emit('check', item);
    },
  }
}
</script>
