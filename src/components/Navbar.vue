<template>
  <nav class="navbar is-transparent is-fixed-top is-primary">
    <div class="navbar-brand">
      <router-link :to="'/'" class="navbar-item">
        <img src="../assets/logo.png" alt="">
      </router-link>
      <router-link :to="'/'" class="navbar-item" style="margin-left: -10px"><b>Vietcafe</b></router-link>
      <div class="navbar-burger" data-target="menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu" id="menu">
      <div class="navbar-start">
        <router-link :to="'cafe'" class="navbar-item">Thực đơn</router-link>
        <a class="navbar-item">Thông tin</a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">Liên hệ</a>
          <div class="navbar-dropdown">
            <a class="navbar-item">Facebook</a>
            <a class="navbar-item">Zalo</a>
            <a class="navbar-item">Instagram</a>
          </div>
        </div>
      </div>
      <div class="navbar-end">
        <a href="tel:0903670437" class="navbar-item">
          <button class="button is-primary">
            <i class="material-icons">phone</i>
            <sup>0903670437</sup>
          </button>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
  function hambuger () {
    document.addEventListener('DOMContentLoaded', function () {
      var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
      if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(function ($el) {
          $el.addEventListener('click', function () {
            var target = $el.dataset.target
            var $target = document.getElementById(target)
            $el.classList.toggle('is-active')
            $target.classList.toggle('is-active')
          })
        })
      }
    })
  }

  export default {
    created: hambuger
  }
</script>

<style>
  .navbar {
    box-shadow: 0 0 5px 1px black;
  }
</style>
