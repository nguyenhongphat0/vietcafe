<template>
  <div class="">
    <div class="search section column is-12">
      <div class="field">
        <label class="label is-small">Tìm cafe</label>
        <div class="control is-expanded">
          <input type="text" class="input" v-model="pattern">
        </div>
      </div>
    </div>
    <div class="container">
      <div class="products column is-12">
        <div class="product section" v-for="cafe in matchedCafes()" :key="cafe.name">
          <CafeDetail :name="cafe.name" :price="cafe.price" :picture="cafe.picture" :description="cafe.description" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CafeDetail from '@/components/cafe/CafeDetail'
  import axios from 'axios'

  export default {
    data () {
      return {
        sp: [],
        pattern: ''
      }
    },
    created: function () {
      axios.get('/api/cafe').then(data => {
        this.sp = data.data
      })
    },
    components: {
      CafeDetail
    },
    methods: {
      toUS: function (alias) {
        var str = alias
        str = str.toLowerCase()
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
        str = str.replace(/đ/g, 'd')
        str = str.trim()
        return str
      },
      matchedCafes: function () {
        return this.sp.filter(cafe => {
          var res = true
          var name = this.toUS(cafe.name)
          this.pattern.split(' ').forEach(word => {
            if (name.indexOf(this.toUS(word)) === -1) {
              res = false
            }
          })
          return res
        })
      }
    }
  }
</script>


<style lang=scss>
  $primary: #3E2723;

  .search {
    background-color: $primary;

    .label {
      color: white;
      font-weight: normal;
    }

    .input {
      border: none;
      background-color: #4E3733;
      color: white;
    }
  }

  .product:nth-child(2n) {
    background-color: $primary;
    color: white;
    border-radius: 10px;
  }
</style>