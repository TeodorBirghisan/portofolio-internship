<template>
    <div class="content-container">
    <ContentSection/>
    </div>
</template>

<script>
import ContentSection from './ContentSection'

export default {
  name: 'Content',
  components: {
    ContentSection
  }
}
</script>

<style scoped>
.content-container{
    padding-left: 1rem;
    padding-top: 1rem;
    width: 100%;
    height: 80%;
    background-color: brown;
}
</style>