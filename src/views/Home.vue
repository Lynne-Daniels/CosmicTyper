<template>
  <div class="home">
    <p>{{lessonProgress}}</p>
    <Lesson></Lesson>
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
