<template>
    <div class="page-container">
      <Header title="Radu Giulia" occupation="Software Developer"/>
      <Content title="Education"/>
    </div>
</template>

<script>
import Header from './Header'
import Content from './Content';

export default {
  name: 'Page',
  components:{
    Header,
    Content
  },
  props: {
  }
}
</script>

<style>
.page-container{
  height: 100%;
  width: 75%;
  background-color: blueviolet;
  margin-left: 1rem;
}
</style>