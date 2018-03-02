<template>
  <div class="helper">
    <span class="left">{{unFinishedTodoLength}}</span>
    <span class="tabs">
      <span
       v-for="state in states"
       :key="state"
       :class="[state, filter === state ? 'actived' : '']"
       @click="toggleFilter(state)"
      >
        {{state}}
      </span>
    </span>
    <span class="clear" @click="clearAllCompleted">清除所有选中</span>
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
        'all',
        'active',
        'completed'
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
      this.$emit('toggle', state)
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
}
.all {
  border 1px solid #dadada
  margin-left 5px
  border-radius 10px
  display none
}
.active {
  border 1px solid #dadada
  margin-left 5px
  border-radius 10px
  display none
}
.completed {
  border 1px solid #dadada
  margin-left 5px
  border-radius 10px
  display none
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
