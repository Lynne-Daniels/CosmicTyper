<template>
  <div class="home">
    <h1>Welcome Home!</h1>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Lesson from "@/components/Lesson.vue";

export default {
  name: "home",
  components: {
    Lesson
  },
  computed: {
    ...mapState("lessons", ["lessonProgress"]),
    ...mapGetters("lessons", [])
  }
};
</script>
