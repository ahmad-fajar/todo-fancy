<template>
  <div>
     <Navbar></Navbar>
     <Todo></Todo>
  </div>
</template>

<script src="../assets/js/todo.js"></script>
<script>
  import Navbar from '@/components/Navbar'
  import Todo from '@/components/Todo'
  export default {
    components: {
      Navbar,
      Todo
    }
  }
</script>

<style src="../assets/css/style.css"></style>