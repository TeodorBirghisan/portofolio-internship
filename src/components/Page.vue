<template>
    <div class="page-container">
      <Content/>
    </div>
</template>

<script>
import Content from './Content';

export default {
  name: 'Page',
  components:{
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