<template>
  <div class="CVPage-container">
    <Sidebar/>
    <Page/>
  </div>
</template>

<script>
import Sidebar from './Sidebar'
import Page from './Page';

export default {
  name: 'CVPage',
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

}
</style>
