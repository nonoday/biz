<script setup>
	import { ref, onMounted, computed, defineAsyncComponent } from 'vue'

	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
	import CommonTab from '@/components/common/tab/CommonTab.vue'
    
	const tabConfig = [
		{
			header: '주소검색 솔루션 소개',
			component: defineAsyncComponent(() => import('@/components/content/tab/solution/SolutionIntro.vue'))
		},
		{
			header: '주소검색 솔루션 다운로드',
			component: defineAsyncComponent(() => import('@/components/content/tab/solution/SolutionDownload.vue'))
		},
		{
			header: '주소검색 솔루션 팝업서비스',
			component: defineAsyncComponent(() => import('@/components/content/tab/solution/SolutionPopup.vue'))
		}
	]
</script>

<template>
	<HeaderTitle title="주소정보 솔루션 제공" />
	<CommonTab :tabs="tabConfig" />
</template>

