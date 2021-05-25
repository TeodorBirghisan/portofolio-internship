<template>
  <div class="CVPage-container">
    <Sidebar/>
    <Page/>
  </div>
</template>

<script>
import Sidebar from './Sidebar'
import Page from './Page';
import UserService from '../services/user.service';

export default {
  name: 'CVPage',
  data(){
    return {
      content:""
    }
  },
  mounted(){
    UserService.getUserInfo().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content = (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    )
  },
  components: {
    Sidebar,
    Page
  },
  computed:{
    
  },
  props: {
  }
}
</script>


<style scoped>
.CVPage-container{
  background-color: aqua;
  height: 100%;
  width: 100%;
  -webkit-box-shadow: 0px 0px 9px -1px rgba(0,0,0,0.88); 
  box-shadow: 0px 0px 9px -1px rgba(0,0,0,0.88);
  flex-direction: row;
  display: flex;
}
</style>
