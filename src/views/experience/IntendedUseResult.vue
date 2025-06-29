<script setup>
	import { ref, onMounted, computed, defineAsyncComponent } from 'vue'
    import Button from 'primevue/button'

	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
	import DetailBottomButtons from '@/components/common/button/DetailBottomButtons.vue'
	import SubHeaderTitle from '@/components/common/title/SubHeaderTitle.vue'
	import AddressCard from '@/components/common/box/AddressCard.vue'
	import SearchResultHeader from '@/components/common/search_result/SearchResultHeader.vue'
	// SVG 이미지들을 import
	import iconApi01 from '@/assets/images/data_provision/icon_api01.svg'
	import iconApi02 from '@/assets/images/data_provision/icon_api02.svg'
	import iconApi03 from '@/assets/images/data_provision/icon_api03.svg'
	import iconApi04 from '@/assets/images/data_provision/icon_api04.svg'
	import iconApi05 from '@/assets/images/data_provision/icon_api05.svg'

	const sampleData = ref([
		{
			id: 1,
			title: '체크박스 + 4개 badge 예시',
			description: '체크박스가 있고 4개의 badge가 있는 카드입니다.',
			updateDate: '2023.12.25',
			background: 'type01',
			badges: [
				{ text: 'TXT', type: '' },
				{ text: '제공하는 주소', type: 'primary' },
				{ text: 'JSON', type: 'tertiary' },
				{ text: 'SHP', type: 'secondary' }
			]
		},
		{
			id: 2,
			title: '체크박스 없음 + 2개 badge 예시',
			description: '체크박스가 없고 2개의 badge만 있는 카드입니다.',
			updateDate: '2023.12.24',
			background: 'type02',
			badges: [
				{ text: 'PDF', type: 'primary' },
				{ text: '문서', type: 'secondary' }
			]
		},
		{
			id: 3,
			title: '1개 badge만 있는 예시',
			description: '1개의 badge만 있는 카드입니다.',
			updateDate: '2023.12.23',
			background: 'type03',
			badges: [
				{ text: 'EXCEL', type: 'tertiary' }
			]
		}
	])

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
		}
	]

	const handleList = () => {
		// 목록으로 이동
	}

	const handleEdit = () => {
		// 수정 처리
	}

    
</script>
<template>
	<HeaderTitle title="주소정보 데이터 연계" />
	<ol class="step">
		<li class="prev">
			<div class="step__box">
				<div class="step__notation">1단계</div>
				<div class="step__title">사용 목적 선택</div>
			</div>
		</li>
		<li class="prev">
			<div class="step__box">
				<div class="step__notation">2단계</div>
				<div class="step__title">세부 설정</div>
			</div>
		</li>
		<li class="active">
			<div class="step__box">
				<div class="step__notation">3단계</div>
				<div class="step__title">추천 서비스</div>
			</div>
		</li>
	</ol>
	<div class="step__type"><span class="step__current">3단계</span> / 3단계</div>
	
	<SubHeaderTitle title="추천 서비스" />
	<p class="body-krds__medium"><span class="color01">"주소 검색"</span>으로 다운로드 서비스 <strong class="color01">16</strong>건, API 서비스 <strong class="color01">5</strong>건</p>

	<SearchResultHeader 
	:downloadServiceCount="75"
	resultType="download"
	:showSortOptions="false"
	/>
	<ul class="addressDownload__list">
		<li v-for="item in sampleData" :key="item.id">
			<AddressCard
				:show-checkbox="false"
				:background="item.background"
				:badges="item.badges"
				:title="item.title"
				:description="item.description"
				:update-date="item.updateDate"
				@download="() => handleDownload(item.id)"
				@detail="() => handleDetail(item.id)"
				@like="() => handleLike(item.id)"
			/>
		</li>
	</ul>

	<div class="userSet__buttonBox"><Button class="userSet__button"><span class="str">결과 더 보기</span></Button></div>

	<SearchResultHeader 
	:apiServiceCount="75"
	resultType="api"
	:showSortOptions="false"
	/>
	<ul class="addressApiList">
        <li v-for="api in apiList" :key="api.id">
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
	<div class="userSet__buttonBox"><Button class="userSet__button"><span class="str">결과 더 보기</span></Button></div>
    <DetailBottomButtons
        type="both"
        :leftButtons="[
            { text: '이전단계', onClick: handleList, class: 'tertiary' }
        ]"
        :rightButtons="[
            { text: '다시 추천받기', onClick: handleEdit, class: 'primary' },
        ]"
    />
</template>
<style lang="scss" scoped>
    @use '@/assets/scss/contents/layout/step';    
    @use '@/assets/scss/contents/list/user_list';
	@use '@/assets/scss/contents/list/api_list';
	@use '@/assets/scss/contents/page/AddressDownload';
	@use '@/assets/scss/contents/badge/commonBadge';
</style> 
