<script setup>
	import { ref, onMounted, computed } from 'vue'

	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
</script>

<template>
	<HeaderTitle title="도로명 주소 속성정보 체험하기" />
	<div class="experience__introduction">
		<div class="experience__introductionImage"><img src="@/assets/images/experience/img_person01.png" alt="도로명 주소 속성정보 체험하기 예시"></div>
		<div class="experience__introductionBox">
			<dl class="experience__introductionInfo">
				<dt>도로명 주소 속성정보</dt>
				<dd>고용노동부는 국민 누구나 원하는 일자리에서 마음껏 역량을 발휘할 수 있도록 더 많은 일자리를 만들고, 더 든든하고 안전한 일터를 조성하기 위해 노력하고 있습니다.국민 여러분의 땀의 가치가 정당하게 인정받을 수 있도록 언제나 국민의 눈높이에서 정책을 펼쳐나가겠습니다.</dd>
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