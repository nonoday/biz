<script setup>
	import { ref, onMounted, computed, defineAsyncComponent } from 'vue'

	import SubHeaderTitle from '@/components/common/title/SubHeaderTitle.vue'
</script>

<template>
	<SubHeaderTitle title="사물주소란?" />
	<p class="section__title">주소부여가 어려운곳에 도로명과 기초번호를 이용하여 사물에 부여한 주소</p>
	<p class="section__text">안전사고 발생시 신속 대응 지원 및 내비게이션 등에 안내체계 마련을 위해 도로명과 기초번호를 이용하여 구성한 사물주소 정보를 제공</p>
	<p class="section__tip">* 기초번호 전신주 등에 표시</p>
	<hr class="hrLine" />
	<div class="sectionBox">
		<div class="sectionBox__left">
			<h5 class="section__title">사물주소 표기</h5>
			<p class="section__subTitle">1) 시설물 <span class="subTip">(시설 및 장소, 이하 ‘시설물’)이 건물등의 밖에 있는 경우 </span></p>
			<p class="section__subText">행정구역명 + 도로명 + 사물번호 + 사물유형명</p>
			<dl class="section__exampleInformation">
				<dt>예시</dt>
				<dd>서울특별시 강남구 학동로2 비상수급시설</dd>
			</dl>
			<p class="section__subTitle">2) 시설물이 건물등의 안에 있는 경우</p>
			<p class="section__subText">행정구역명 + 도로명 + 건물번호 + 쉼표(,) + 사물번호 + 사물유형명</p>
			<dl class="section__exampleInformation">
				<dt>예시</dt>
				<dd>서울 특별시 종로구 중학천길42, 201호 무인발급기</dd>
			</dl>
		</div>
		<div class="sectionBox__right type01">
			<img src="@/assets/images/policy_introduction/img_address_thing03.png" alt="사물주소 표기 샘플 이미지">
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@use '@/assets/scss/contents/page/introduction';
</style>        