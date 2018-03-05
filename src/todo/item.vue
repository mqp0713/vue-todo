<template>
  <div :class="['todo-item', todo.completed ? 'completed' : '']">
    <input 
     type="checkbox"
     class="toggle"
     v-model="todo.completed"
     >
     <label>{{todo.content}}</label>
     <button class="destory" @click="deleteTo">删除</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    }
  },
  methods: {
    deleteTo() {
      // 触发父组件的方法
      this.$emit('del', this.todo.id)
    }
  }
}
</script>

<style lang="stylus" scoped>
.todo-item {
  margin-top .5rem
}
.destory{
  
}
</style>
