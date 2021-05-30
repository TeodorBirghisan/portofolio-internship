<template>
    <div class="all-components-container">
    <Header v-bind:firstName="getFirstName()" v-bind:lastName="getLastName()" v-bind:occupation="getOccupation()"/>
    <div class="page-container">
      <div class="scrollable-content">
        <Content 
        v-for="item in userAusbildung" :key="item.type" 
        v-bind:title="item.type.charAt(0).toUpperCase() + item.type.slice(1)" 
        v-bind:section="item.Details"/>
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
    user: Object,
    userAusbildung: Object
  },
  methods:{
    getFirstName(){
      if(this.user !== undefined)
        return this.user.firstName;
    },
    getLastName(){
      if(this.user !== undefined)
        return this.user.lastName;
    },
    getOccupation(){
      if(this.user !== undefined)
        return this.user.occupation;
    }
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
  margin-left: 1rem;
  overflow: auto;
}

.scrollable-content{
  overflow: auto;
}
 
.page-container::-webkit-scrollbar {
    width: 10px;
}
 
.page-container::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
.page-container::-webkit-scrollbar-thumb {
  background: #888; 
}
 
.page-container::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>