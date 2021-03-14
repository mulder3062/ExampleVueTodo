import Vue from 'vue'
import App from './App.vue'
import TodoItem from "@/components/TodoItem";

Vue.config.productionTip = false

// 전역 컴포넌트
Vue.component('todo-item', TodoItem);

new Vue({
  render: h => h(App),
}).$mount('#app')
