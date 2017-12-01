<template>
  <div class="columns is-mobile is-multiline">
    <ACafe v-for="p in sp" :key="p.name" :name="p.name" :price="p.price" :picture="p.picture" class="column is-4-mobile"/>
  </div>
</template>

<script>
import ACafe from '@/components/cafe/ACafe'
import axios from 'axios'

export default {
  data () {
    return {
      sp: []
    }
  },
  components: {
    ACafe
  },
  created: function () {
    axios.get('/api/cafe/best').then(data => {
      this.sp = data.data
    })
  }
}
</script>