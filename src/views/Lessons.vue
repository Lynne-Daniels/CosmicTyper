<template>
  <div class="wrapper wrapper--lessons">
    <h1>Lessons</h1>
    <Lesson v-for="(lesson, index) in lessons" :key="index" :lesson="lesson"/>
  </div>
</template>

<script>
import Lesson from "@/components/Lesson";

export default {
  name: "lessons",
  components: {
    Lesson
  },
  data() {
    return {
      lessons: []
    };
  },
  created() {
    this.getLessons();
  },
  methods: {
    getLessons: async function() {
      try {
        const res = await fetch("http://localhost:4000/lessons");
        const lessons = await res.json();
        this.lessons = lessons;
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style>
</style>
