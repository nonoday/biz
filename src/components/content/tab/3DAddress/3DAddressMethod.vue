<script setup>
	import { ref, onMounted, computed, defineAsyncComponent } from 'vue'

	import SubHeaderTitle from '@/components/common/title/SubHeaderTitle.vue'
</script>

<template>

	<SubHeaderTitle title="입체주소 부여방법" />
	<p class="section__title">입체주소 부여방법 및 예시</p>

	<p class="section__text">1) 입체도로 등의 도로명 부여</p>

	<ul>
		<li class="section__subText">도로명을 부여하는 도로를 지상도로 외에 입체도로(지하 고가 도로), 내부도로(지하상가 통행도 등)까지 확대</li>
		<li class="section__subText">지상도로의 도로명은 현재와 같이 ‘대로, 로, 길’로 부여하되, 입체도로와 내부 통로는 각각의 도로 유형과 장소(고가도로 등 / 지하철역 지하상가 이름)를 나타내는 명칭을 포함하여 부여</li>
	</ul>

	<dl class="section__exampleInformation">
		<dt>예시</dt>
		<dd>서울특별시 송파구잠실역중앙통로 110</dd>
	</dl>

	<p class="section__text">2) 행정구역 미결정 지역에서의 도로명주소 표기 방법</p>

	<ul>
		<li class="section__subText">새만금 등 행정구역이 아직 결정되지 않은 지역에서 도로명주소를 사용할 때 ”행정구역 명칭” 대신에 “사업지역 명칭”을 사용</li>
		<li class="section__subText">행정구역이 결정된 이후에는 해당 시 도와 시 군 구의 명칭으로 바꾸어 사용하도록 하여 주소변경에 따른 불편을 없도록 하였습니다.</li>
	</ul>

	<dl class="section__exampleInformation">
		<dt>예시</dt>
		<dd>‘전라북도 새만금지구 새만금중앙대로3’ → 행정구역이 결정되면, ‘전라북도 ○○ 시(군) 새만금중앙대로3’으로 전환 </dd>
	</dl>


	<div class="section__image">
		<img src="@/assets/images/policy_introduction/img_solid03.png" alt="입체주소 예시" />
	</div>
</template>

<style lang="scss" scoped>
	@use '@/assets/scss/contents/page/introduction';
</style>        