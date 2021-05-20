<template>
    <div class="page-container">
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

}
</style>