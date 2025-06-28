<script setup>
	import { ref, onMounted, computed, defineAsyncComponent } from 'vue'

	import SubHeaderTitle from '@/components/common/title/SubHeaderTitle.vue'
</script>
<template>
	
	<SubHeaderTitle title="사물/공간주소 정보 시설 유형" />
	<ul class="example__list">
		<li><img src="@/assets/images/policy_introduction/img_example01.png" alt="육교승강기"></li>
		<li><img src="@/assets/images/policy_introduction/img_example02.png" alt="둔치주차장"></li>
		<li><img src="@/assets/images/policy_introduction/img_example03.png" alt="지진옥외대피장소"></li>
		<li><img src="@/assets/images/policy_introduction/img_example04.png" alt="버스정류장"></li>
		<li><img src="@/assets/images/policy_introduction/img_example05.png" alt="택시승강장"></li>
		<li><img src="@/assets/images/policy_introduction/img_example06.png" alt="졸음쉼터"></li>
		<li><img src="@/assets/images/policy_introduction/img_example07.png" alt="지진해일긴급대피장소"></li>
		<li><img src="@/assets/images/policy_introduction/img_example08.png" alt="소공원"></li>
		<li><img src="@/assets/images/policy_introduction/img_example09.png" alt="어린이공원"></li>
		<li><img src="@/assets/images/policy_introduction/img_example10.png" alt="드론배달점"></li>
		<li><img src="@/assets/images/policy_introduction/img_example11.png" alt="비상급수시설"></li>
		<li><img src="@/assets/images/policy_introduction/img_example12.png" alt="인명구조함"></li>
		<li><img src="@/assets/images/policy_introduction/img_example13.png" alt="주차장"></li>
		<li><img src="@/assets/images/policy_introduction/img_example14.png" alt="전기차충전소"></li>
		<li><img src="@/assets/images/policy_introduction/img_example15.png" alt="공중전화"></li>
		<li><img src="@/assets/images/policy_introduction/img_example16.png" alt="우체통"></li>
		<li><img src="@/assets/images/policy_introduction/img_example17.png" alt="전동휠체어 급속충전기"></li>
		<li><img src="@/assets/images/policy_introduction/img_example18.png" alt="자전거거치대"></li>
		<li><img src="@/assets/images/policy_introduction/img_example19.png" alt="비상소화장치"></li>
		<li><img src="@/assets/images/policy_introduction/img_example20.png" alt="무더위쉼터"></li>
		<li><img src="@/assets/images/policy_introduction/img_example21.png" alt="민방위 대피시설"></li>
		<li><img src="@/assets/images/policy_introduction/img_example22.png" alt="어린이 놀이시설"></li>
		<li><img src="@/assets/images/policy_introduction/img_example23.png" alt="음식판매 자동차 허가구역"></li>
	</ul>
</template>

<style lang="scss" scoped>
    @use '@/assets/scss/contents/list/example_list';
</style>