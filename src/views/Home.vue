<template>
  <div class="home">
    <h1>Welcome Home!</h1>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "home",
  components: {},
  computed: {
    ...mapState("lessons", ["lessonProgress"]),
    ...mapGetters("lessons", [])
  }
};
</script>
