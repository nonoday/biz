<script setup>
	import { ref, onMounted, computed, defineAsyncComponent } from 'vue'

	import SubHeaderTitle from '@/components/common/title/SubHeaderTitle.vue'
</script>

<template>
	<SubHeaderTitle title="장소지능 출입구 정보 소개" />

	<div class="sectionBox">
		<div class="sectionBox__left">
			<p class="section__subTitle">장소지능 출입구정보</p>
			<p class="section__subText">기존 건물의 주 출입구의 정보제공에서 다양한 이동체별(교육약자, 로봇 등) 맞춤형 출입구 정보제공을 위한 출입구 정보제공 확대(출입구 유형 및 구분, 진입로 형태)</p>
		</div>
		<div class="sectionBox__right type02">
			<img src="@/assets/images/policy_introduction/img_location01.png" alt="장소지능 출입구정보 샘플 이미지" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@use '@/assets/scss/contents/page/introduction';
</style>