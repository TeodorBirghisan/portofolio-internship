<template>
  <div class="contact-container">
    <div>{{ title }}</div>
    <div>{{ email }}</div>
    <div>{{ phone }}</div>
    <div><a href='{{linkedIn}}'>LinkedIn Profile</a></div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  components: "",
  props: { title: String, email: String, phone: String, linkedIn: String },
};
</script>

<style scoped>
.contact-container {
  width: 100%;
  height: 25%;
  background-color: yellow;
  margin-bottom: 2rem;
}
</style>
