<script setup>
	import { ref, onMounted, computed, defineAsyncComponent } from 'vue'

	import SubHeaderTitle from '@/components/common/title/SubHeaderTitle.vue'
</script>

<template>
	<SubHeaderTitle title="출입구 정보 구축 예시" />

  <div class="section__image">
    <img src="@/assets/images/policy_introduction/img_location02.png" alt="출입구 정보 구축 예시 이미지" />
  </div>


</template>

<style lang="scss" scoped>
	@use '@/assets/scss/contents/page/introduction';
</style>