<template>
  <div class="hobbies-container">
    <div id='title'>{{title}}</div>
     <hr />
    <p class="text">{{description}}</p>
  </div>
</template>

<script>
export default {
  name: "Hobbies",
  props: {
    title:String,
    description:String
  },
};
</script>

<style scoped>
.hobbies-container {
  color: #fafeff;
  margin-left: 6px;
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

.text{
font-size: 0.9rem;
padding-left: 0.5rem;
}
</style>
