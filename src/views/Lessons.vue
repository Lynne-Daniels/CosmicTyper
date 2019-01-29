<template>
  <div class="wrapper wrapper--lessons">
    <div class="welcome">
      <div class="welcome-inner">
        <h1 class="title">Welcome to Typer</h1>
        <p
          class="description"
        >Typer is a tool to help you get better at typing HTML and CSS. There are a lot of rules and syntax you need to get used to and here you can practice.</p>
        <p>Select a lesson below to get started.</p>
      </div>
      <LessonList v-for="(lesson, index) in lessons" :key="index" :lesson="lesson"/>
    </div>
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
