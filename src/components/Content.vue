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
    overflow: auto;
}
 
.content-container::-webkit-scrollbar {
    width: 10px;
}
 
.content-container::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
.content-container::-webkit-scrollbar-thumb {
  background: #888; 
}
 
.content-container::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>