<template>
  <div class="skills-container">
    <div id="title">{{ title }}</div>
    <hr />
    <div v-for="index in 3" :key="index" class="skill-item">
      <div class="skill-name">
        <span>{{ skill }}</span>
      </div>
      <div class="skill-rating">
        <i
          v-for="index in 3"
          :key="index"
          class="fa fa-circle"
          aria-hidden="true"
        ></i>
        <i
          v-for="index in 2"
          :key="index"
          class="fa fa-circle empty-circle"
          aria-hidden="true"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  props: { 
    title: String, 
    skill: String, 
    rating: String, 
    userSkills: Object,
  },
};
</script>

<style scoped>
.skills-container {
  width: 100%;
  height: auto;
  color: white;
  padding-bottom: 1rem;
}

#title {
  font-size: 1.2rem;
  font-weight: bold;
}

hr {
  margin: 0 0;
  margin-bottom: 0.5rem;
  width: 20%;
  color: #fafeff;
  opacity: 0.6;
}

.skill-item {
  margin-left: 0.5rem;
  display: flex;
}

.skill-name {
  width: 30%;
}

.skill-rating {
  display: inline-flex;
  float: right;
  margin-right: 3rem;
  margin-top: 5px;
}

.fa {
  margin: 0.1rem;
}

.empty-circle {
  font-weight: 100;
}
</style>
