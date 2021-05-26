<template>
<router-view/>
</template>

<script>
//import CVPage from './components/CVPage.vue'
//import Login from './components/auth/Login';
export default {
  name: 'App',
  computed:{
    currentUser(){
      return this.$store.state.auth.user;
    },
    userId(){
      return this.$store.state.auth.user.id
    }
  },
  components: {
  },
  methods: {
    logOut(){
      this.$store.dispatch('auth/logout');
      this.$router.push('/');
    }
  }
}
</script>

<style>
#app{
  height: 100vh;
  width: 100vw;
  display: flex;
  padding: 2rem;
  flex-direction: column;
}
</style>
