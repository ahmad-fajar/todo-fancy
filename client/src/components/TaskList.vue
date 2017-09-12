<template>

  <div class="cont_princ_lists">
    <ul>
      <li class="list_shopping li_num_0_1"
      v-for="(todo, idx) in todoList"
      :key="todo._id">
        <div class="col_md_1_list">
          <p>{{ todo.tags }}</p>
        </div>
        <div class="col_md_2_list">
          <h4>{{ todo.task }}</h4>
          <p>{{ todo.desc }}</p>
        </div>
        <div class="col_md_3_list">
          <div class="cont_text_date">
            <p>{{ todo.duedate }}</p>
          </div>
          
          <div class="cont_btns_options">
            
          <a href="#" @click.prevent="deleteTodo(idx, todo._id)" class="btn btn-danger btn-xs">Delete Task</a>
          </div>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        // todoList: [],
        dummy: 'data dummy TaskList'
      }
    },

    computed: {
      todoList () {
        return this.$store.state.todo
      }
    },

    methods: {
      // getAllTodo () {
      //   this.$axios.get('/task')
      //   .then(({data}) => {
      //     this.todoList = data
      //   })
      //   .catch(e => console.error(e))
      // },
      deleteTodo (idx, id) {
        this.$axios.delete('/task/' + id)
        .then(() => {
          // this.todoList.splice(idx, 1)
          this.$store.state.todo.splice(idx, 1)
        })
      }
    },

    created () {
      this.$store.commit('getAllTodo')
      // this.getAllTodo()
    }
  }
</script>