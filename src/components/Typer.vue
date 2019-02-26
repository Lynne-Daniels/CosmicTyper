<template>
  <div class="instructions">
    <h1 class="title">{{lesson.title}}</h1>
    <p class="desc">{{lesson.desc}}</p>
    <div class="charactersWrap">
      <div v-html="characters"></div>
    </div>
  </div>
</template>

<script>
const modifiers = ["CapsLock", "Shift", "Control", "Alt"];

export default {
  name: "typer",
  props: {
    lesson: Object
  },
  data() {
    return {
      index: 0,
      lessonSplit: this.lesson.final.split("")
    };
  },

  created() {
    window.addEventListener("keyup", this.typing);
  },
  computed: {
    characters() {
      const spanList = this.lessonSplit
        .map(letter => `<span class="character">${letter}</span>`)
        .join("");
      return spanList;
    }
  },
  methods: {
    typing(evt) {
      const key = evt.key;

      if (this.isModifier(key)) {
        return;
      }

      if (key != "Enter" && key == this.lessonSplit[this.index]) {
        console.log("that was the right key!");
      }
    },
    isModifier(key) {
      return modifiers.some(mod => mod == key);
    }
  }
};
</script>

<style>
</style>
