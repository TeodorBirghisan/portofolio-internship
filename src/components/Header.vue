<template>
  <div class="header-container">
    <div class="logout-container">
      <button @click="logOut">Log Out</button>
    </div>
    <h1 class="header-title">{{getFullName()}}</h1>
    <hr size="3" width="50%" color="grey">
    <h4 class="header-subtitle text-muted">{{occupation}}</h4>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    firstName:String,
    lastName:String,
    occupation: String
  },
  methods: {
    logOut(){
      this.$store.dispatch('auth/logout');
      this.$router.push('/');
    },
    getFullName(){
      return this.firstName + " " + this.lastName;
    }
  }
};
</script>

<style>
.header-container{
  width: 100%;
  height: 20%;
  background-color: #F4F4F4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logout-container{
  align-self: flex-end;
  padding-right: 2rem;
}

button{
  background-color: #F4F4F4;
  color:rgb(53, 53, 53);
  font-family: serif;
  font-variant-caps:all-small-caps;
  width: 6rem;
  height: 2rem;
}

.header-container hr{
    margin :0;
    color: rgb(44, 44, 44);
    background-color: currentColor;
    border: 0;
    opacity: .25;
}
.header-title {
  color:rgb(53, 53, 53);
  font-family: serif;
  font-variant-caps:all-small-caps;
}

/* .header-title h1{
  font-size: 32px;
} */

.header-subtitle {
  padding-top: 1px;
  font-family: serif;
  margin-top: 5px;
}
</style>