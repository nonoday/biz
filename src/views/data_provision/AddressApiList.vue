<script setup>
	import { ref, onMounted, computed, defineAsyncComponent } from 'vue'
    import Button from 'primevue/button'
	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'

	// SVG 이미지들을 import
	import iconApi01 from '@/assets/images/data_provision/icon_api01.svg'
	import iconApi02 from '@/assets/images/data_provision/icon_api02.svg'
	import iconApi03 from '@/assets/images/data_provision/icon_api03.svg'
	import iconApi04 from '@/assets/images/data_provision/icon_api04.svg'
	import iconApi05 from '@/assets/images/data_provision/icon_api05.svg'

	const activeTab = ref(0)

	const tabList = [
		{
			id: 0,
			icon: iconApi01,
			alt: '전체 이미지',
			text: '전체'
		},
		{
			id: 1,
			icon: iconApi02,
			alt: '도로명주소 이미지',
			text: '도로명주소'
		},
		{
			id: 2,
			icon: iconApi03,
			alt: '좌표제공 이미지',
			text: '좌표제공'
		},
		{
			id: 3,
			icon: iconApi04,
			alt: '상세주소 이미지',
			text: '상세주소'
		},
		{
			id: 4,
			icon: iconApi05,
			alt: '지도제공 이미지',
			text: '지도제공'
		}
	]

	const handleTabClick = (tabId) => {
		activeTab.value = tabId
	}
</script>

<template>
	<HeaderTitle title="주소정보 API 연계" />

	<ul class="addressApiListTab">
        <li 
            v-for="tab in tabList" 
            :key="tab.id"
            :class="{ active: activeTab === tab.id }"
        >
            <Button 
                class="addressApiListTab__button"
                @click="handleTabClick(tab.id)"
            >
                <img aria-hidden="true" :src="tab.icon" :alt="tab.alt" />
                <span class="addressApiListTab__text">{{ tab.text }}</span>
            </Button>
        </li>
    </ul>
    <div class="addressApiListTotal">
        <span class="addressApiListTotal__count">32</span>건
    </div>
    <ul class="addressApiList">
        <li>
            <div class="addressApiList__header">
                팝업 API
                <span class="addressApiList__icon"><img aria-hidden="true" src="@/assets/images/data_provision/icon_api03.svg"  alt="팝업" /></span>
            </div>
            <div class="addressApiList__content">
            </div>
            <div class="addressApiList__function">
            </div>
        </li>
    </ul>
</template>


<style lang="scss" scoped>
	@use '@/assets/scss/contents/list/api_list';
</style>