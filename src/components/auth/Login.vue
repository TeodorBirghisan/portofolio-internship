<template>
<div class="Login-container">
<div class="form-outline">
  <input type="email" id="typeEmail" class="form-control" />
  <label class="form-label" for="typeEmail">Email input</label>
</div>
<div class="form-outline">
  <input type="password" id="typePassword" class="form-control" />
  <label class="form-label" for="typePassword">Password input</label>
</div>
<button type="button" class="btn btn-primary btn-rounded">Primary</button>
</div>
</template>

<script>
//import { Form, Field, ErrorMessage } from "vee-validate";
//import * as yup from "yup";
export default {
name: 'Login',
components: {},
}
</script>

<style scoped>
</style>