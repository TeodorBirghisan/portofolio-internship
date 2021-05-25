<template>
    <div class="all-components-container">
    <Header title="Radu Giulia" occupation="Software Developer"/>
    <div class="page-container">
      <div class="scrollable-content">
        <Content title="Education"/>
        <Content title="Hobbies"/>
    </div>
     
      </div>
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

.all-components-container{
  height: 100%;
  width: 75%;
}
.page-container{
  height:75%;
  background-color: blueviolet;
  margin-left: 1rem;
  overflow: auto;
}

.scrollable-content{
  overflow: auto;
}
</style>