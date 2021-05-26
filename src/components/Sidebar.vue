<template>
  <div class="sidebar-container">
    <div class="avatar-container">
      <img id="avatar" src="../../public/avatar.png" />
    </div>
    <!-- <h1>
      {{user}}
    </h1> -->
    <!-- <h4>{{userSkills}}</h4> -->
    <div class="sidebar-content-scrollable">
      <Contact title="Contact" email="puchianu_alexandra@yahoo.com" phone="0749816360" linkedIn="https://www.linkedin.com/in/alexandra-puchianu-433a381b4/"/>
      <Skills title="Skills" skill="Angular" rating="4" />
      <Hobbies title="Hobbies" description="Imi place sa ma dau cu bicicleta, poate da, poate nu, nu stiu si altele. Imi plac mai multe lucruri.Imi place sa ma dau cu bicicleta, poate da, poate nu, nu stiu si altele." />
    </div>
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
  props: {
    user: Object,
    userSkills: Object
  },
};
</script>

<style scoped>
.sidebar-container {
  background: #253846;
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.sidebar-content-scrollable {
  width: 100%;
  height: 70%;
  overflow: auto;
  padding: 1rem;
}

.sidebar-content-scrollable::-webkit-scrollbar {
  width: 10px;
}

.sidebar-content-scrollable::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.sidebar-content-scrollable::-webkit-scrollbar-thumb {
  background: #888;
}

.sidebar-content-scrollable::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.avatar-container {
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
}

#avatar {
  height: 100%;
  padding-top: 1rem;
  padding-left: 4rem;
  padding-right: 4rem;
  padding-bottom: 2rem;
}
</style>
