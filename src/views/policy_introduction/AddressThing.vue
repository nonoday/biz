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
			header: '사물주소 소개',
			component: defineAsyncComponent(() => import('@/components/content/tab/addressThing/AddressThingIntro.vue'))
		},
		{
			header: '사물주소 유형',
			component: defineAsyncComponent(() => import('@/components/content/tab/addressThing/AddressThingTypes.vue'))
		},
		{
			header: '사물주소 사용 예시',
			component: defineAsyncComponent(() => import('@/components/content/tab/addressThing/AddressThingExamples.vue'))
		}
	]
</script>

<template>
	<HeaderTitle title="사물주소" />
	
	<CommonTab :tabs="tabConfig" />
	<DetailBottomButtons
		type="left"
		:leftButtons="[
			{ text: '목록으로', onClick: handleList, class: 'tertiary' }
		]"
	/>
</template>
