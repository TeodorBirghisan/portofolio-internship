<template>
  <CVPage/>
</template>

<script>
import CVPage from './components/CVPage.vue'

export default {
  name: 'App',
  components: {
    CVPage
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
