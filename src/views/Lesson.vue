<template>
  <div class="lesson-single">
    <Typer :lesson="lesson.tasks[0]"/>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Typer from "@/components/Typer";

export default {
  name: "lesson",
  components: {
    Typer
  },
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
