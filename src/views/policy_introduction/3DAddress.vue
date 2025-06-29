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
			header: '입체주소 소개',
			component: defineAsyncComponent(() => import('@/components/content/tab/3DAddress/3DAddressIntro.vue'))
		},
		{
			header: '입체주소의 부여방법',
			component: defineAsyncComponent(() => import('@/components/content/tab/3DAddress/3DAddressMethod.vue'))
		},
		{
			header: '입체도로 도로명판의 종류',
			component: defineAsyncComponent(() => import('@/components/content/tab/3DAddress/3DAddressRoadSign.vue'))
		}
	]
</script>

<template>
	<HeaderTitle title="입체주소란?" />
	
	<CommonTab :tabs="tabConfig" />
	<DetailBottomButtons
		type="left"
		:leftButtons="[
			{ text: '목록으로', onClick: handleList, class: 'tertiary' }
		]"
	/>
</template>
