<template>
  <div class="contact-container">
    <div id="title">{{ title }}</div>
    <div id="email"><i class="fa fa-envelope"></i>{{ email }}</div>
    <div id="phone"><i class="fas fa-phone"></i> {{ phone }}</div>
    <div id="linkedIn"><i class="fa fa-globe"></i>LinkedIn Profile</div>
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
