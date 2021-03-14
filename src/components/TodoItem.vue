<template>
  <span class="progress" v-if="!item.checked">
      <input type="checkbox" v-on:change="checkItem(item)">
      <input class="todo-title"
             type="text"
             placeholder="내용을 입력하세요"
             v-model="item.title"
      />
     <button v-on:click="deleteItem(item.id)">삭제</button>
  </span>
  <span class="done" v-else>
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

<!-- scoped 라는 범위를 지정하면 이 컴포넌트와 이 컴포넌트의 자식에만 스타일이 적용되며 부모 컴포넌트에는 적용되지 않는다 -->
<style scoped>
button {
  background-color: orange;
}

.progress input {
  color: black
}

.done span {
  text-decoration: line-through;
}
</style>
