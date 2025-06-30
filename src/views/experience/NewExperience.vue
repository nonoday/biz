<script setup>
	import { ref, onMounted, computed } from 'vue'

	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
</script>

<template>
	<HeaderTitle title="신규 주소정책 체험하기" />
	<div class="experience__introduction">
		<div class="experience__introductionImage"><img src="@/assets/images/experience/img_person03.png" alt="신규 주소정책 체험하기 예시"></div>
		<div class="experience__introductionBox">
			<dl class="experience__introductionInfo">
				<dt>신규 주소정책</dt>
				<dd>
신규 주소정책 체험하기는 최근 변경된 주소 정책에 대한 내용을 소개하는 기능입니다.<br />
사용자는 새롭게 적용된 주소 체계 변화와 정책 업데이트를 확인할 수 있으며, 
이를 통해 주소 관리 및 활용에 있어 변화된 사항들을 쉽게 이해할 수 있습니다. <br />

이 체험을 통해 신규 주소 정책에 대한 기본적인 정보를 얻고, 
실제 적용 사례를 통해 정책의 내용을 더 잘 알 수 있습니다.				
				</dd>
			</dl>
			<div class="experience__introductionButton">
				<Button class="button-krds primary middle">서비스 체험하기</Button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@use '@/assets/scss/contents/layout/experience';
</style>