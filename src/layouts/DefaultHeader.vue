<script setup>
	import { ref, onMounted, nextTick, onBeforeUnmount, computed } from 'vue'
  
</script>

<template>
<ul id="skipArea" class="skip__navi">
  <li><a href="#gnb" title="메인메뉴 바로가기">메인메뉴 바로가기</a></li>
  <li><a class="outline_light" href="#content" title="본문 바로가기">본문 바로가기</a></li>
</ul>

<div class="header__wrap">
  <div class="header">
    <div class="header__inner">
      <div class="header__utill">
        <h1 class="header__logo"><img src="@images/common/img_logo.png" alt="주소기반산업지원서비스" /></h1>
      </div>
    </div>
    <div class="header__nav">dsadsa</div>
  </div>
</div>

</template>

<style lang="scss" scoped>
	@use '@/assets/scss/contents/layout/header.scss';
</style>

      
      