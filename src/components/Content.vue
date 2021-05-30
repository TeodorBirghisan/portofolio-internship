<template>
    <div class="content-container">
    <h3 class="title">{{title}}</h3>
    <hr class="line" size="6" width="5%">
    <ContentSection 
      v-for="item in section" :key="item.id" 
      v-bind:position="item.position"
      v-bind:title="item.title" 
      v-bind:description="item.description"
      v-bind:location="item.location" 
      v-bind:startyear="item.startyear" 
      v-bind:endyear="item.endyear"
    />
    <hr class="line" size="3" width="95%"> 
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
    title:String,
    section:Object
  }
}
</script>

<style scoped>
.title{
  padding-left: 15px;
  color: #253846;
}

.line{
    margin-left: 15px;
    color: black;
    opacity: .35;
}

.content-container{
    padding-left: 1rem;
    padding-top: 1rem;
    width: 100%;
    height: 80%;
    background-color: white;
    overflow: auto;
}

</style>