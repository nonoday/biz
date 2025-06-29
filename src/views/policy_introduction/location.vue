<script setup>
	import { ref, onMounted, computed, defineAsyncComponent } from 'vue'

	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
	import CommonTab from '@/components/common/tab/CommonTab.vue'
	import DetailBottomButtons from '@/components/common/button/DetailBottomButtons.vue'

	const handleList = () => {
		console.log('목록록');
	}
 
	const tabConfig = [
		{
			header: '장소지능 출입구 정보 소개',
			component: defineAsyncComponent(() => import('@/components/content/tab/locationIntelligence/LocationIntelligenceIntro.vue'))
		},
		{
			header: '출입구 정보 구축 예시',
			component: defineAsyncComponent(() => import('@/components/content/tab/locationIntelligence/LocationIntelligenceExamples.vue'))
		}
	]
</script>

<template>
	<HeaderTitle title="장소지능 출입구 정보란?" />
	
	<CommonTab :tabs="tabConfig" />
	<DetailBottomButtons
		type="left"
		:leftButtons="[
			{ text: '목록으로', onClick: handleList, class: 'tertiary' }
		]"
	/>
</template>
