<template>
  <div class="lesson">
    <h1>{{lesson.name}}</h1>
  </div>
</template>

<script>
export default {
  name: "lesson",
  props: {
    lesson: Object
  }
};
</script>

<style>
</style>
