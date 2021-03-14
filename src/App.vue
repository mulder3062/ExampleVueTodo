<template>
  <div id="app">
    <h1>Todo</h1>

    <div>
      <h2>진행</h2>
      <div>
        <button v-on:click="addItem">등록</button>
      </div>
      <ul>
        <li v-for="item in progressItems" v-bind:key="item.id">
          <todo-item v-bind:item="item"
                     v-on:delete="deleteItem"
                     v-on:check="checkItem"
          />
        </li>
      </ul>
    </div>

    <div>
      <h2>완료</h2>
      <ul>
        <li v-for="item in doneItems" v-bind:key="item.id">
          <todo-item v-bind:item="item"
                     v-on:delete="deleteItem"
                     v-on:check="checkItem"
          />
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import util from './service/util';

export default {
  name: 'App',

  components: {
    TodoItem: function() {
      return import('./components/TodoItem');
    }
  },

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

  computed: {
    progressItems: function() {
      return this.items.filter(function(item) {
        return !item.checked;
      })
    },

    doneItems: function() {
      return this.items.filter(function(item) {
        return item.checked;
      })
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
    },

    checkItem: function(item) {
      item.checked = !item.checked;
    },
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
