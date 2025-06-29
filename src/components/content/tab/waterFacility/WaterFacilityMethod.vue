<script setup>
	import { ref, onMounted, computed, defineAsyncComponent } from 'vue'

	import SubHeaderTitle from '@/components/common/title/SubHeaderTitle.vue'
</script>

<template>
	<SubHeaderTitle title="출입구 정보 구축 예시" />
	<div class="sectionBox">
		<div class="sectionBox__left">
			<p class="section__subTitle">수상시설물 주소부여 방법</p>
			<p class="section__subText">육지와의 접합 여부에 따라 국문 : ‘수상’, 영문 : ’W’로 표기하며 시설물의 형태(건물/시설물) 등에 따라 도로명주소, 사물주소, 국가지점번호로 부여</p>
			<dl class="section__exampleInformation">
				<dt>예시</dt>
				<dd>경상남도 통영시 학림1길 수상11-32(W11032 Hangnim 1-gil, Tongueong-si,Gyeongsangnam-do)</dd>
			</dl>
		</div>
		<div class="sectionBox__right type01">
			<img src="@/assets/images/policy_introduction/img_water_sample.png" alt="수상시설물 주소부여 샘플 이미지" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@use '@/assets/scss/contents/page/introduction';
</style>