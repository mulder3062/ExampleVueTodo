<template>
  <div id="app">
    <h1>Todo</h1>

    <div>
      <h2>진행</h2>
      <div>
        <button>등록</button>
      </div>
      <ul>
        <li>
          <input type="checkbox">
          <input class="todo-title"
                 type="text"
                 placeholder="내용을 입력하세요"
                 value="첫번째 할 일"
          />
          <button>삭제</button>
        </li>
        <li>
          <input type="checkbox">
          <input class="todo-title"
                 type="text"
                 placeholder="내용을 입력하세요"
          />
          <button>삭제</button>
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
export default {
  name: 'App'
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
