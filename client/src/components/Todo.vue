<template>

  <div class="cont_principal">
    <div class="cont_centrar">

      <AddNewTask></AddNewTask>

      <TaskList></TaskList>

      <!--   End cont_central  -->
    </div>
  </div>

</template>

<script>
  import AddNewTask from '@/components/AddNewTask'
  import TaskList from '@/components/TaskList'
  export default {
    components: {
      AddNewTask,
      TaskList
    }, // components

    data () {
      return {
        auth: false,
        todoToken: localStorage.getItem('todoToken')
      }
    }, // data

    created () {
      this.authCheck()
    }, // created

    methods: {
      authCheck () {
        let token = localStorage.getItem('todoToken')
        if (!token || token === '' || token === undefined) {
          console.log('no todoToken found')
          // localStorage.removeItem('todoToken')
          this.$router.push('login')
        } else {
          console.log('todoToken found')
          console.log(this.todoToken)
          this.$axios.get('/user/auth', {
            headers: {
              todoToken: this.todoToken
            }
          })
          .then(({data}) => {
            if (data === true) {
              this.auth = true
            } else {
              // localStorage.removeItem('todoToken')
              this.$router.push('login')
            }
          })
        }
      } // authCheck
    } // methods
  }
</script>

<style>

* {
  margin: 0px auto;
  padding: 0px;
  text-align: center;
}

</style>
