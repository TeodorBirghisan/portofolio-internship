<template>
  <div class="skills-container">
    <div id="title">{{ title }}</div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Skills",
  props: { title: String, skill: String, rating: String },
};
</script>

<style scoped>
.skills-container {
  width: 100%;
  height: auto;
  color: white;
}

#title {
  font-size: 1.2rem;
  font-weight: bold;
  padding-left: 0.5rem;
}

hr {
  margin: 0 0;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
  width: 20%;
  color: #fafeff;
  opacity: 0.6;
}
</style>
