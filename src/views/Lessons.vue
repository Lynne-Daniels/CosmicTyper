<template>
  <div class="wrapper wrapper--lessons">
    <h1>Lessons</h1>
    <LessonList v-for="(lesson, index) in lessons" :key="index" :lesson="lesson"/>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import LessonList from "@/components/Lesson-List";

export default {
  name: "lessons",
  components: {
    LessonList
  },
  data() {
    return {};
  },
  created() {
    if (!this.areLessonsLoaded) {
      this.$store.dispatch("lessons/getLessons");
    }
  },
  computed: {
    ...mapState("lessons", ["lessonProgress", "lessons", "areLessonsLoaded"]),
    ...mapGetters("lessons", [])
  }
};
</script>

<style>
</style>
