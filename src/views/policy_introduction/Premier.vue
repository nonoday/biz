<script setup>
	import { ref, onMounted, computed, defineAsyncComponent } from 'vue'

    import Button from 'primevue/button'
	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
	import CommonTab from '@/components/common/tab/CommonTab.vue'
	import DetailBottomButtons from '@/components/common/button/DetailBottomButtons.vue'

	const handleList = () => {
		console.log('목록록');
	}
 
	const tabConfig = [
		{
			header: '수상시설물 주소 소개',
			component: defineAsyncComponent(() => import('@/components/content/tab/waterFacility/WaterFacilityIntro.vue'))
		},
		{
			header: '수상시설물 주소부여 방법',
			component: defineAsyncComponent(() => import('@/components/content/tab/waterFacility/WaterFacilityMethod.vue'))
		}
	]
</script>

<template>
	<HeaderTitle title="수상시설물이란?" />
	
	<CommonTab :tabs="tabConfig" />
	<DetailBottomButtons
		type="left"
		:leftButtons="[
			{ text: '목록으로', onClick: handleList, class: 'tertiary' }
		]"
	/>
</template>
