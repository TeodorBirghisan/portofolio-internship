<template>
  <div class="sidebar-container">
    <img id="avatar" src="../../public/avatar.png" />
    <Contact />
    <Skills />
    <Hobbies />
  </div>
</template>

<script>
import Contact from "./Contact";
import Hobbies from "./Hobbies";
import Skills from "./Skills";

export default {
  name: "Sidebar",
  components: {
    Contact,
    Hobbies,
    Skills,
  },
  props: {},
};
</script>

<style scoped>
.sidebar-container {
  background: red;
  width: 25%;
  height: 100%;
}
#avatar {
  width: 100%;
  padding-top: 1rem;
  padding-left: 4rem;
  padding-right: 4rem;
  padding-bottom: 2rem;
}
</style>
