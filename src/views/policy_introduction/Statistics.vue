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
			header: '주요 통계',
			component: defineAsyncComponent(() => import('@/components/content/tab/statistics/MainStatistics.vue'))
		},
		{
			header: '활용 통계',
			component: defineAsyncComponent(() => import('@/components/content/tab/statistics/UsageStatistics.vue'))
		}
	]
</script>

<template>
	<HeaderTitle title="주소정보 통계" />
	
	<CommonTab :tabs="tabConfig" />
	<DetailBottomButtons
		type="left"
		:leftButtons="[
			{ text: '목록으로', onClick: handleList, class: 'tertiary' }
		]"
	/>
</template>
