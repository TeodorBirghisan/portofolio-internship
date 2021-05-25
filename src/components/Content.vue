<template>
    <div class="content-container">
    <h3>{{title}}</h3>
    <ContentSection 
    title="Software Developer" 
    subtitle="Principal Group" 
    details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa at accusamus perferendis doloribus, quam voluptates corporis possimus sapiente eaque ratione incidunt voluptate aliquam placeat alias omnis. Nemo, facere. Sit, consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa at accusamus perferendis doloribus, quam voluptates corporis possimus sapiente eaque ratione incidunt voluptate aliquam placeat alias omnis. Nemo, facere. Sit, consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa at accusamus perferendis doloribus, quam voluptates corporis possimus sapiente eaque ratione incidunt voluptate aliquam placeat alias omnis. Nemo, facere. Sit, consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa at accusamus perferendis doloribus, quam voluptates."
    location="Brasov" 
    startDate="2020" endDate="2021"/> 
    </div>
</template>

<script>
import ContentSection from './ContentSection'

export default {
  name: 'Content',
  components: {
    ContentSection
  },
  props:{
    title:String
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