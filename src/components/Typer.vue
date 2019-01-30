<template>
  <div class="instructions">
    <h1 class="title">{{lesson.title}}</h1>
    <p class="desc">{{lesson.desc}}</p>
    <div class="charactersWrap">
      <div v-html="characters" v-on:keyup="typing($event)"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "typer",
  props: {
    lesson: Object
  },
  computed: {
    characters() {
      const letterArray = this.lesson.final.split("");
      const spanList = letterArray
        .map(letter => `<span class="character">${letter}</span>`)
        .join("");
      return spanList;
    }
  },
  methods: {
    typing(evt) {
      console.log(evt.target);
    }
  }
};
</script>

<style>
</style>
