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
    } // components
  }
</script>

<style>

* {
  margin: 0px auto;
  padding: 0px;
  text-align: center;
}

</style>
