<template>
  <Login/>
</template>

<script>
//import CVPage from './components/CVPage.vue'
import Login from './components/auth/Login';
export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>
#app{
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 2rem;
}
</style>
