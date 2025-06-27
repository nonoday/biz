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

	// API 리스트 데이터
	const apiList = [
		{
			id: 1,
			title: '팝업 API',
			contentTitle: '도로명주소',
			contentText: 'API 소스',
			headerType: 'type01',
			icon: iconApi02,
			iconAlt: '도로명주소',
			types: ['jsp', 'asp', 'php']
		},
		{
			id: 2,
			title: '검색 API',
			contentTitle: '좌표제공',
			contentText: 'API 소스',
			headerType: 'type03',
			icon: iconApi03,
			iconAlt: '좌표제공',
			types: ['css', 'xml', 'json']
		},
		{
			id: 3,
			title: '모바일 팝업 API',
			contentTitle: '도로명주소_상세주소',
			contentText: 'API 소스',
			headerType: 'type02',
			icon: iconApi04,
			iconAlt: '도로명주소_상세주소',
			types: ['jsp', 'php', 'css', 'xml']
		},
		{
			id: 4,
			title: '팝업 API',
			contentTitle: '지도제공',
			contentText: 'API 소스',
			headerType: 'type01',
			icon: iconApi05,
			iconAlt: '지도제공',
			types: ['asp', 'php', 'json']
		},
		{
			id: 5,
			title: '팝업 API',
			contentTitle: '도로명주소',
			contentText: 'API 소스',
			headerType: 'type01',
			icon: iconApi02,
			iconAlt: '도로명주소',
			types: ['jsp', 'css', 'xml', 'json']
		},
		{
			id: 6,
			title: '검색 API',
			contentTitle: '좌표제공',
			contentText: 'API 소스',
			headerType: 'type03',
			icon: iconApi03,
			iconAlt: '좌표제공',
			types: ['asp', 'php', 'css']
		},
		{
			id: 7,
			title: '모바일 팝업 API',
			contentTitle: '상세주소',
			contentText: 'API 소스',
			headerType: 'type02',
			icon: iconApi04,
			iconAlt: '상세주소',
			types: ['jsp', 'xml', 'json']
		},
		{
			id: 8,
			title: '팝업 API',
			contentTitle: '지도제공',
			contentText: 'API 소스',
			headerType: 'type01',
			icon: iconApi05,
			iconAlt: '지도제공',
			types: ['php', 'css', 'xml']
		},
		{
			id: 9,
			title: '검색 API',
			contentTitle: '도로명주소',
			contentText: 'API 소스',
			headerType: 'type03',
			icon: iconApi02,
			iconAlt: '도로명주소',
			types: ['jsp', 'asp', 'css', 'json']
		}
	]

	const handleTabClick = (tabId) => {
		activeTab.value = tabId
	}

	// 필터링된 API 리스트
	const filteredApiList = computed(() => {
		if (activeTab.value === 0) {
			return apiList
		} else {
			const selectedTabText = tabList[activeTab.value].text
			return apiList.filter(api => {
				return api.contentTitle.includes(selectedTabText) || 
					   api.contentTitle === selectedTabText ||
					   (selectedTabText === '상세주소' && api.contentTitle.includes('상세주소'))
			})
		}
	})
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
        총<span class="addressApiListTotal__count">{{ filteredApiList.length }}</span>건
    </div>
    <ul class="addressApiList">
        <li v-for="api in filteredApiList" :key="api.id">
            <div class="addressApiList__box">
				<div :class="['addressApiList__header', api.headerType]">
					{{ api.title }}
					<span class="addressApiList__icon">
						<img aria-hidden="true" :src="api.icon" :alt="api.iconAlt" />
					</span>
				</div>
				<div class="addressApiList__content">
					<p class="addressApiList__contentTitle">{{ api.contentTitle }}</p>
					<p class="addressApiList__contentText">{{ api.contentText }}</p>
					<div class="addressApiList__type">
						<span v-for="type in api.types" :key="type" :class="['badge', type]">
							{{ type.toUpperCase() }}
						</span>
					</div>
					<div class="addressApiList__function">
						<Button class="addressApiList__apply">신청하기</Button>
						<Button class="addressApiList__viewDetails">자세히보기</Button>
					</div>
				</div>
			</div>
        </li>
    </ul>
</template>


<style lang="scss" scoped>
	@use '@/assets/scss/contents/list/api_list';
	@use '@/assets/scss/contents/badge/commonBadge';
</style>
