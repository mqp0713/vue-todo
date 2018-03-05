<template>
  <div class="helper">
    <span class="left">{{unFinishedTodoLength}}</span>
    <span class="tabs">
      <span
       v-for="state in states"
       :key="state"
       :class="[{'actived' : filter == state , 'all': state == '全部', 'active': state == '未完成', 'completed': state == '已完成'}]"
       @click="toggleFilter(state)"
      >
        {{state}}
      </span>
    </span>
    <span class="clear" @click="clearAllCompleted">清除已完成事件</span>
  </div>
</template>

<script>
export default {
  props: {
    filter: {
      type: String,
      required: true,
    },
    todos: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      states: [
        '全部',
        '未完成',
        '已完成',
      ]
    }
  },
  computed: {
    unFinishedTodoLength() {
      return this.todos.filter(todo => !todo.computed).length
    }
  },
  methods:{
    toggleFilter(state) {
      this.$emit('toogle', state)
    },
    clearAllCompleted() {
      this.$emit('clearAll')
    }
  }
}
</script>

<style lang="stylus" scoped>
.helper {
  font-size 2rem
  margin-top .5rem
}
.all {
  border 1px solid #dadada
  margin-left 5px
  border-radius 10px
}
.active {
  border 1px solid #dadada
  margin-left 5px
  border-radius 10px
}
.completed {
  border 1px solid #dadada
  margin-left 5px
  border-radius 10px
}
.clear {
  border 1px solid #dadada
  border-radius 10px
  margin-left 5px
}
.actived {
  color red
}
</style>
