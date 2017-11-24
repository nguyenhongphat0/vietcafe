<template>
  <div class="columns detail">
    <div class="column is-3 picture">
      <img :src="picture" class="image is-128x128"></img src="">
    </div>
    <div class="column is-9 info">
      <div class="name">{{ name }}</div>
      <div class="price">{{ price | money }}</div>
      <div class="description">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'price', 'picture', 'description']
}
</script>

<style lang="scss" scoped>
  .picture img {
    margin: auto;
    border-radius: 100%;
  }

  .name {
    font-weight: bold;
    font-size: 22px;
  }

  .price {
    font-size: 14px;
    display: block;
  }

  .description {
    border-left: 2px solid;
    font-size: 14px;
    font-style: italic;
    padding: 10px;
  }
</style>
