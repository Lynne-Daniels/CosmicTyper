<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name: 'home'}">Home</router-link>|
      <router-link :to="{name: 'lessons'}">Lessons</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/styles.scss";
</style>