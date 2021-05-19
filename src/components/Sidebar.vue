<template>
    <div class="sidebar-container">
      <Hobbies/>
    </div>
</template>

<script>
import Hobbies from './Hobbies'

export default {
  name: 'Sidebar',
  components: {
    Hobbies
  },
  props: {
  }
}
</script>


<style scoped>
.sidebar-container{

}
</style>