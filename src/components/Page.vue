<template>
    <div class="page-container">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, perferendis! Ducimus impedit minus nulla enim unde libero quasi distinctio et cupiditate quas, placeat quos cumque. Voluptatem illo sed totam quis?</p>
      <Header/>
      <Content/>
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