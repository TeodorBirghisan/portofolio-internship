<template>
    <div class="sidebar-container">
      <Hobbies/>
      <Skills/>
    </div>
</template>

<script>
import Hobbies from './Hobbies'
import Skills from './Skills'

export default {
  name: 'Sidebar',
  components: {
    Hobbies,
    Skills
  },
  props: {
  }
}
</script>


<style scoped>
.sidebar-container{

}
</style>