<template>
<div>

      <!-- add new task bar -->
      <div class="cont_todo_list_top">
        <div class="cont_titulo_cont">
          <h3>Add New Task</h3>
        </div>
        <div class="cont_add_titulo_cont"><a onclick="addNew()"><span class="glyphicon glyphicon-plus"></span></a>
        </div>
      </div> <!-- add new task bar -->

      <!-- new task dropdown -->
      <div class="cont_crear_new cont_crear_new">
        <table class="table">
          <!-- baris pertama -->
          <tr>
            <th>Action</th>
            <th>Title</th>
            <th>Due Date</th>
          </tr>

          <!-- drop down tag -->
          <tr>
            <td>
              <select name="" id="action_select" v-model="tags">
                <option value="important">IMPORTANT</option>
                <option value="random">RANDOM</option>
              </select>
            </td>

            <!-- input todo title -->
            <td>
              <input type="text" class="input_title_desc" v-model="task"/>
            </td>

            <!-- drop down input due date -->
            <td>
              <input type="date" v-model="duedate">
            </td>
          </tr> <!-- baris pertama -->

          <!-- baris kedua -->
          <tr>
            <th class="titl_description">Description</th>
          </tr>
          <tr>
            <td colspan="3">
              <input type="text" class="input_description" required v-model="desc"/>
            </td>
          </tr> <!-- baris kedua -->

          <!-- add button -->
          <tr>
            <td colspan="3">
              <button class="btn_add_fin" @click.prevent="addNewTask"><span class="glyphicon glyphicon-floppy-disk"></span></button>
            </td>
          </tr>
        </table>
      </div> <!-- new task dropdown -->

</div>
</template>

<script>
  export default {
    data () {
      return {
        duedate: null,
        desc: null,
        tags: null,
        task: null
      }
    },

    methods: {
      addNewTask (event) {
        console.log('add new task')
        let payload = {
          duedate: this.duedate,
          desc: this.desc,
          tags: this.tags,
          task: this.task
        }
        this.$store.dispatch('newTask', payload)
      }
    }
  }
</script>
