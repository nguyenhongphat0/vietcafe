<template>
  <div>
    <section class="container section">
      <div class="columns">
        <div class="column is-4">
          <img src="../../assets/logo.png" alt="">
        </div>
        <div class="column is-8">
          <h1 class="title is-1">Chào bạn!</h1>
          <h1 class="subtitle is3">Uống gì hôm nay?</h1>
          <BestSelling/>
        </div>
      </div>
    </section>
    <Story/>
  </div>
</template>

<script>
import BestSelling from '@/components/cafe/BestSelling'
import Story from '@/components/Story'

export default {
  components: {
    BestSelling,
    Story
  }
}
</script>
