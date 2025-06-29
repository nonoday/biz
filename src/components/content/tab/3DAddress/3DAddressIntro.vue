<script setup>
	import { ref, onMounted, computed, defineAsyncComponent } from 'vue'

	import SubHeaderTitle from '@/components/common/title/SubHeaderTitle.vue'
</script>

<template>

	<div class="sectionBox">
		<div class="sectionBox__left">
			<SubHeaderTitle title="입체주소 소개" />
			<p class="section__title">도로명 부여 대상 도로가 지상도로에서<br />입체도로(고가도로,지하도로), 내부도로(건물, 구조물 안 통로)로 확대</p>

			<p class="section__subTitle">입체도로 :  <span class="subTip">공중 또는 지하에 설치된 도로 및 통로</span></p>
			<ul class="section__list">
				<li>· 고가도로 : 공중에 설치된 도로 및 통로</li>
				<li>· 지하도로 : 지하에 설치된 도로 및 통로</li>
			</ul>

			<p class="section__subTitle">내부도로 :  <span class="subTip">건물 또는 구조물의 내부에 설치된 도로 및 통로</span></p>
			<ul class="section__list">
				<li>· 건물의 내부에 설치된 도로 및 통로</li>
				<li>· 건물이 아닌 구조물의 내부에 설치된 도로 및 통로</li>
			</ul>

		</div>
		<div class="sectionBox__right type01">
			<img src="@/assets/images/policy_introduction/img_solid01.png" alt="사물주소 표기 샘플 이미지" />
		</div>
	</div>
	<hr class="hrLine" />
	<p class="section__explanation">새로운 도로명주소법이 개정됨에 따라 <strong class="stress">재난 및 응급상황 발생 시 신속한 구조 · 구급활동이 가능</strong>해질 뿐 아니라,<br />드론 배송이나 자율주행 등 4차산업 핵심기술을 생활에 적용할 수 있는 기반이 마련될것으로 기대하고 있습니다.</p>

	<div class="section__image">
		<img src="@/assets/images/policy_introduction/img_solid02.png" alt="드론배달,사물인터넷,자율주행차,실내 내비게이션,자율주행로봇 배달" />
	</div>
</template>

<style lang="scss" scoped>
	@use '@/assets/scss/contents/page/introduction';
</style>        