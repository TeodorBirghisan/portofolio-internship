<template>
  <div class="contact-container">
    <div id="title">{{ title }}</div>
    <hr />
    <div class="contactDetails">
      <div id="email"><i class="fa fa-envelope"></i>{{ email }}</div>
      <div id="phone"><i class="fa fa-phone"></i>{{ phone }}</div>
      <div id="linkedIn">
        <i class="fa fa-globe"></i>
        <a :href="`${linkedIn}`">
          LinkedIn Profile
        </a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  components: "",
  props: { title: String, email: String, phone: String, linkedIn: String },
};
</script>

<style scoped>
.contact-container {
  width: 100%;
  height: fit-content;
  margin-bottom: 2rem;
  color: #fafeff;
}

.fa {
  font-size: 0.8rem;
  width: 1.5rem;
  height: 1.5rem;
  padding-left: 0.4em;
  padding-top: 0.4em;
  border-radius: 80%;
  color: #273642;
  background-color:#fafeff;
  margin-bottom: 0.5rem;
  margin-left: 0.7rem;
  margin-right: 0.3rem;
}

#title {
  font-size: 1.2rem;
  font-weight: bold;
  padding-left: 0.5rem;
}

hr {
  margin: 0 0;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
  width: 20%;
  color: #fafeff;
  opacity: 0.6;
}

div {
  font-size: 0.9rem;
}

.contactDetails {
  margin-bottom: 0.5rem;
}
#linkedIn {
  padding-bottom: 1rem;
}
</style>
