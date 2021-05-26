<template>
  <div class="CVPage-container">
    <Sidebar v-bind:user="content.user" v-bind:userSkills="content.userSkills"/>
    <Page  v-bind:user="content.user" v-bind:userAusbildung="content.userAusbildung"/>
  </div>
</template>

<script>
import Sidebar from './Sidebar'
import Page from './Page';
import UserService from '../services/user.service';

export default {
  name: 'CVPage',
  computed:{
    currentUser(){
      return this.$store.state.auth.user;
    }
  },
  data(){
    return {
      content:""
    }
  },
  mounted(){
    if(!this.currentUser){
      this.$router.push('/');
    }
    else{
      UserService.getUserInfo().then(
        (response) => {
          this.content = response.data;
        },
        (error) => {
          this.content = (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      )
    }
  },
  components: {
    Sidebar,
    Page
  },
  props: {
    
  }
}
</script>


<style scoped>
.CVPage-container{
  background-color: white;
  height: 100%;
  width: 100%;
  -webkit-box-shadow: 0px 0px 9px -1px rgba(0,0,0,0.88); 
  box-shadow: 0px 0px 9px -1px rgba(0,0,0,0.88);
  flex-direction: row;
  display: flex;
}
</style>
