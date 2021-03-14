<template>
  <div id="app">
    <div>
      <!--
        <NPM 모듈 자원 접근>

        ~으로 시작하면 npm 모듈에서 자원을 찾는다.

        예) node_modules\@vue\cli-service\generator\template\src\assets\logo.png
      -->
      <img src="~@vue\cli-service\generator\template\src\assets\logo.png" width="24px"/>
      <span>Vue.js Example</span>
    </div>


    <h1>
      <!--
        <정적자원 접근>
      -->
      <img src="/img/static_todo_list.png" />

      <span>Todo</span>

      <!--
         <동적 자원 접근>

         @으로 시작되면 모듈 요청으로 해석되며 src/ 경로 밑으로 찾게되며
         4kb 미만이면 base64 인코딩되어 직접 첨부되어 HTTP 트래픽을 줄여준다. (크기는 vue.config.js 파일에서 변경 가능)

         예) 프로젝트 ROOT\src\assets\img\todo_list.png
      -->
      <img src="@/assets/img/todo_list.png" />
    </h1>

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
#app h1 {
  font-size: 48pt;
}

ul {
  list-style: none;
}

.todo-title {
  width: 50%
}
</style>
