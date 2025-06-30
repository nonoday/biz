<script setup>
	import { ref, onMounted, computed } from 'vue'

	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
</script>

<template>
	<HeaderTitle title="도로명 주소 공간정보 체험하기" />
	<div class="experience__introduction">
		<div class="experience__introductionImage"><img src="@/assets/images/experience/img_person02.png" alt="도로명 주소 속성정보 체험하기 예시"></div>
		<div class="experience__introductionBox">
			<dl class="experience__introductionInfo">
				<dt>도로명 주소 공간정보 체험하기</dt>
				<dd>
도로명주소 공간정보 체험하기는 지도 기반 서비스를 통해 다양한 공간 정보를 시각적으로 확인할 수 있는 기능입니다. <br />
사용자는 도로명주소, 법정구역, 건물 등 다양한 정보를 지도 위에서 직접 선택하고, 
각 선택된 항목에 대해 상세한 정보를 팝업창으로 제공받을 수 있습니다. <br />
이를 통해 사용자는 실시간으로 다양한 공간 정보를 탐색하고, 
직관적으로 데이터를 활용할 수 있는 경험을 제공합니다					
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