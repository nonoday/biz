<script setup>
	import { ref, onMounted, computed, defineAsyncComponent } from 'vue'

	import SubHeaderTitle from '@/components/common/title/SubHeaderTitle.vue'
</script>

<template>
	<SubHeaderTitle title="수상시설물 주소부여" />
	<p class="section__subTitle">수상시설물 주소부여란?</p>
	<p class="section__subText">기존 지상에 위치한 건물에만 부여하던 도로명 주소를 해상팬션, 양식장 등 수상(해상)에 위차한 시설물까지 확대 부여 </p>
	<ul class="example__list">
		<li><img src="@/assets/images/policy_introduction/img_water01.png" alt="해상낚시터 임대업장"></li>
		<li><img src="@/assets/images/policy_introduction/img_water02.png" alt="해상굴판매장"></li>
		<li><img src="@/assets/images/policy_introduction/img_water03.png" alt="바다공중화장실"></li>
		<li><img src="@/assets/images/policy_introduction/img_water04.png" alt="해상펜션(콘도)"></li>
		<li><img src="@/assets/images/policy_introduction/img_water05.png" alt="죽방렴"></li>
		<li><img src="@/assets/images/policy_introduction/img_water06.png" alt="양식장"></li>
	</ul>
</template>

<style lang="scss" scoped>
	@use '@/assets/scss/contents/page/introduction';
    @use '@/assets/scss/contents/list/example_list';
</style> 