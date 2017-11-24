<template>
  <div class="acafe">
    <div class="picture" :style="{ backgroundImage: 'url(' + this.picture + ')' }"></div>
    <div class="name">{{ name }}</div>
    <div class="price">{{ price | money }}</div>
  </div>
</template>

<script>
  export default {
    props: ['name', 'price', 'picture']
  }
</script>

<style scoped>
  div.acafe {
    text-align: center;
  }

  div.picture {
    width: 100px;
    height: 100px;
    background-size: cover;
    background-position: center;
    border-radius: 100%;
    transition-duration: 1s;
    cursor: pointer;
    margin: auto;
  }

  div.picture:hover {
    transform: rotate(360deg);
  }

  div.name {
    font-weight: bold;
  }

  div.price {
    font-size: 10px;
  }
</style>
