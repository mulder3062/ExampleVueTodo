<template>
  <div id="app">
    <h1>Todo</h1>

    <div>
      <h2>진행</h2>
      <div>
        <button v-on:click="addItem">등록</button>
      </div>
      <ul>
        <li v-for="item in items" v-bind:key="item.id">
          <input type="checkbox">
          <input class="todo-title"
                 type="text"
                 placeholder="내용을 입력하세요"
                 v-model="item.title"
          />
          <button v-on:click="deleteItem(item.id)">삭제</button>
        </li>
      </ul>
    </div>

    <div>
      <h2>완료</h2>
      <ul>
        <li>
          <input type="checkbox" checked>
          <span>완료된 할 일</span>
          <button>삭제</button>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import util from './service/util';

export default {
  name: 'App',

  data: function() {
    return {
      /*
        item 객체 형태

        {
          id: 1,
          checked: false,
          title: '첫번째 할 일'
        }
      */
      items: []
    }
  },

  methods: {
    addItem: function() {
      this.items.push({
        id: util.uuid(),
        checked: false,
        title: null
      })
    },

    deleteItem: function(id) {
      const idx = this.items.findIndex(function(e) {
        return e.id === id;
      })

      this.items.splice(idx, 1);
    }
  }
}
</script>

<style>
ul {
  list-style: none;
}

.todo-title {
  width: 50%
}
</style>
