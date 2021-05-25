<template>
  <div class="content-section-container">
    <h5>{{title}}</h5>
    <hr size="3" width="40%" color="grey">
    <div class="content">
      <div class="content">
        <h6 class="subtitle">{{subtitle}}</h6>
        <h6 class="location">/ {{location}}</h6>
      </div>
      <h6 class="interval">{{startDate}} - {{endDate}}</h6>
    </div>
    <p class="content-details">{{details}}</p>
  </div>
</template>

<script>
export default {
  name: "ContentSection",
  props: {
    title:String,
    subtitle:String,
    details:String,
    startDate:String,
    endDate:String,
    location:String
  }
};
</script>

<style>
.content-section-container {
  padding-left: 1rem;
  padding-top: 1rem;
  width: 100%;
  height: auto;
  background-color:white;
  padding-right: 3rem;
  padding-bottom: 5px;
}

.content-details{
  color:black;
  word-wrap: break-word;
  text-align: justify;
}

.content{
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
}

.subtitle{
font-style: italic;
color:grey;
margin-right: 5px;
}

.location{
color:#ADADAD;
}
</style>
