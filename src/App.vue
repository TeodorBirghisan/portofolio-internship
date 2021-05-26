<template>
<div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <!-- <li class="nav-item">
          <router-link to="/register" class="nav-link">
             Sign Up
          </router-link>
        </li> -->
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            Login
          </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" @click.prevent="logOut">
            LogOut
          </a>
        </li>
      </div>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
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
      this.$router.push('/login');
    }
  }
}
</script>

<style>
#app{
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}
</style>
