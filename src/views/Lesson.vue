<template>
  <div class="lesson-single">
    <h1>{{lesson.name}}</h1>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "lesson",
  data() {
    return {
      lesson: null
    };
  },
  created() {
    if (!this.areLessonsLoaded) {
      this.$router.push({ name: "lessons" });
      return;
    }
    const id = this.$route.params.id;
    this.lesson = this.$store.getters["lessons/singleLesson"](id);
  },
  computed: {
    ...mapState("lessons", ["areLessonsLoaded"]),
    ...mapGetters("lessons", [])
  }
};
</script>

<style>
</style>
