<template>
  <div class="lesson">
    <h1 class="lesson__title">{{lesson.name}}</h1>
    <router-link :to="{name: 'lesson', params: {id: lesson.id} }">Start Lesson</router-link>
  </div>
</template>

<script>
export default {
  name: "lesson-list",
  props: {
    lesson: Object
  }
};
</script>

<style>
</style>
