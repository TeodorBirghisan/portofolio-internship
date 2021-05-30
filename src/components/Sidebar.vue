<template>
  <div class="sidebar-container">
    <div class="avatar-container">
      <img id="avatar"  :src="getImage()"/>
    </div>

    <div class="sidebar-content-scrollable">
      <Contact title="Contact" v-bind:email="getEmail()" v-bind:phone="getPhone()" v-bind:linkedIn="getLinkedIn()"/>
      <Skills title="Skills" v-bind:userSkills="userSkills"/>
      <Hobbies title="Hobbies" v-bind:description="getHobby()" />
    </div>
  </div>
</template>

<script>
import Contact from "./Contact";
import Hobbies from "./Hobbies";
import Skills from "./Skills";

export default {
  name: "Sidebar",
  computed:{
    currentUser(){
      return this.$store.state.auth.user;
    }
  },
  components: {
    Contact,
    Hobbies,
    Skills,
  },
  props: {
    user: Object,
    userSkills: Object
  },
  methods:{
    getEmail(){
      if(this.user !== undefined)
        return this.user.email;
    },
    getPhone(){
      if(this.user !== undefined)
        return this.user.telephone;
    },
    getHobby(){
      if(this.user !== undefined)
        return this.user.hobby;
    },
    getLinkedIn(){
      if(this.user !== undefined)
        return this.user.linkedIn;
    },
    getImage(){
      if(this.$store.state.auth.user.id === 1){
        return require('../../public/BirghisanTeodor.jpg')
      }
      if(this.$store.state.auth.user.id === 2){
        return require("../../public/AlexandraPuchianu.jpeg");
      }
      if(this.$store.state.auth.user.id === 3){
        return require("../../public/RaduGiulia.png");
      }
    }
  }

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
