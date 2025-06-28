<script setup>
	import { ref, onMounted, computed, defineAsyncComponent } from 'vue'

	import SubHeaderTitle from '@/components/common/title/SubHeaderTitle.vue'

	const addressThingTypes = ref([
		{
			image: '/src/assets/images/policy_introduction/img_category01.png',
			alt: '육교승강기',
			description: [
				'도로와 육교간 이동을 위하여 설치한 승강기',
				'육교승강기의 형상을 면형으로 표시',
				'승강기 출입구의 중심점'
			]
		},
		{
			image: '/src/assets/images/policy_introduction/img_category02.png',
			alt: '둔치주차장',
			description: [
				'하천의 둔치에 설치된 노외 주차장',
				'둔치 주차장의 주차면과 차량 이동이 가능한 범위 포함한 경계를 면형으로 표시',
				'도로와 연결된 출입구의 중심점'
			]
		},
		{
			image: '/src/assets/images/policy_introduction/img_category03.png',
			alt: '지진옥외 대피장소',
			description: [
				'긴급대피 목적으로 지진 발생 시 대피지구 내 10분 내 대피 가능한 안전장소',
				'건물과 옹벽 담장 등의 시설믈 제외한 대피장소(공터 등)의 겨예글 면형으로 표시',
				'출입구가 있는 경우 도로와 연결된 출입구의 중심점, 출입구가 없이 개방된 경우 다중의 접근이 펼이한 통행로의 중심점'
			]
		},
		{
			image: '/src/assets/images/policy_introduction/img_category04.png',
			alt: '버스정류장',
			description: [
				'버스가 사람을 태우거나 내려 주기 위하여머무르는 일정한 장소',
				'버스정류장 안내표지 또는 승차대의 중심점을 점형으로 표시',
				'버스정류장 안내 표지 또는 승차대의 중심점'
			]
		},
		{
			image: '/src/assets/images/policy_introduction/img_category05.png',
			alt: '택시승강장',
			description: [
				'택시 운송사업용 자동차가 승객을 승하차시키거나, 태우기 위한 대기장소(구역)',
				'택시 승강장 안내표지 또는 승차대의중심점을 점형으로 표시',
				'택시승강장 안내표지 또는 승차대의 중심점'
			]
		},
		{
			image: '/src/assets/images/policy_introduction/img_category06.png',
			alt: '졸음쉼터',
			description: [
				'졸음운전으로 인한 사고 예방 및 휴식 공간 제공을 위해 휴게소간 간격이 먼 구간에 설치하여 이용객에게 휴식공간을 제공하는장소',
				'졸음쉼터로 사용된는 주차장 시설 및가속 감속 차선을 포함하여 면형으로 표시',
				'도로의 실폭에서 졸음 쉼터의 가속 감속차선이 시작되는 지점'
			]
		},
		{
			image: '/src/assets/images/policy_introduction/img_category07.png',
			alt: '지진해일긴급대피장소',
			description: [
				'긴급 (임시) 피난을 목적으로 지진해일 발생시 10분 내 대피 가능한 안전장소',
				'대피장소로 운동장, 주차장, 건물옥상, 도로위 등의 경계를 면형으로 표시',
				'출입구가 도로와 연결된 경우 출입구의 중심점,출입구가 없이 개방된 경우 다중의 접근이 편리한 통행로의 중심점'
			]
		},
		{
			image: '/src/assets/images/policy_introduction/img_category08.png',
			alt: '소공원',
			description: [
				'소규모 토지를 이용하여 도시만의 휴식 및 정서 함양을 위해 설치하는 공원',
				'운동 및 놀이시설, 휴게시설 등 부대시설 포함한 공원 경게를 면형으로 표시',
				'출입구가 도로와 연결된 경우 출입구의 중심점, 출입구가 없이 개방된 경우 다중의 접근이 편리한 통행로의 중심점'
			]
		},
		{
			image: '/src/assets/images/policy_introduction/img_category09.png',
			alt: '어린이 공원',
			description: [
				'어린이 보건 및 정서생활의 향상에 이바지하기 위하여 설치하는 공원',
				'운동 및 놀이시설, 휴게시설 등 부대시설 모두 포함한 공원 경계를 면형으로 표시',
				'다중의 접근이 편리한 통행로의 중심'
			]
		},
		{
			image: '/src/assets/images/policy_introduction/img_category10.png',
			alt: '비상급수시설',
			description: [
				'전쟁, 지진, 풍수해 등의 자연재해로 국가적 비상재난이 발생하였을 때, 상수도 파괴와 오염에 대비하여 식수, 생활용수 확보를 위해 마련된 시설',
				'비상급수시설의 중심점을 점형으로 표시',
				'비상급수시설의 중심점'
			]
		},
		{
			image: '/src/assets/images/policy_introduction/img_category11.png',
			alt: '인명구조함',
			description: [
				'인명을 구조하기 위해 필요한 장비를 보관하는 시설이나 장치',
				'인명구조함 중심점을 점형으로 표시',
				'인명구조함의 중심점'
			]
		},
		{
			image: '/src/assets/images/policy_introduction/img_category12.png',
			alt: '드론 배달점',
			description: [
				'물품을 적재하여 드론이 이륙하고, 배달을 위해 착륙 후 물품을 인출할 수 있는 주소기반 이착륙 지점',
				'드론 배달점 설치 지점을 점형으로 표시',
				'드론배달점 설치 지점'
			]
		},
		{
			image: '/src/assets/images/policy_introduction/img_category13.png',
			alt: '주차장',
			description: [
				'도로의 노면 또는 노면외의 일정한 구역에 설치된 주차장',
				'노상주차장의 주차면과 주차장 경계를 면형으로 표시',
				'출입구가 있는 경우, 도로와 연결된 출입구의 중심점 또는 출입구가 없는 경우 차량이 진입하는 방향의 첫 번째 주차면 경계의 중심점'
			]
		},
		{
			image: '/src/assets/images/policy_introduction/img_category14.png',
			alt: '전기차충전소',
			description: [
				'전기를 연료로 사용하는 자동차에 전기를 충전하기 위한 장소',
				'전기차 충전시설과 주차면을 포함한 경계를 면형으로 표시',
				'차량이 진입하는 방향의 충전소'
			]
		},
		{
			image: '/src/assets/images/policy_introduction/img_category15.png',
			alt: '공중전화',
			description: [
				'일반인이 누구나 이용할 수 있도록 공공장소에 설치된 전화기',
				'공중전화 또는 각 공중전화부스의 중심점을 점형으로 표시',
				'공중전화 또는 각 공중전화부스의 중심점'
			]
		},
		{
			image: '/src/assets/images/policy_introduction/img_category16.png',
			alt: '우체통',
			description: [
				'편지나 우편물을 수령하고 보관하는 장치',
				'우체통의 중심점을 점형으로 표시',
				'우체통의 중심점'
			]
		},
		{
			image: '/src/assets/images/policy_introduction/img_category17.png',
			alt: '전동휠체어 급속충전기',
			description: [
				'노인 및 장애인의 편의를 위해 전동휠체어 및 전동스쿠터를 충전할 수 있도록 설치한 장치',
				'전동휠체어 급속충전기의 중심점을 점형으로 표시',
				'전동휠체어 급속충전기의 중심점'
			]
		},
		{
			image: '/src/assets/images/policy_introduction/img_category18.png',
			alt: '자전거거치대',
			description: [
				'자전거의 주차, 보관 등을위해 자전거를 지탱할 수 있도록 공공장소에 설치한 장치',
				'자전거거치대에 해당하는 경계를 면형으로 표시',
				'자전거거치대 형상의 경계선 중 도로와 가장 인접한 경계선의 중심점'
			]
		},
		{
			image: '/src/assets/images/policy_introduction/img_category19.png',
			alt: '비상소화장치',
			description: [
				'소방호스 등을 소방용수시설에 연결하여 화재를 진압하는 시설이나 장치',
				'비상소화장치의 중심점을 점형으로 표시',
				'비상소화장치의 중심점'
			]
		},
		{
			image: '/src/assets/images/policy_introduction/img_category20.png',
			alt: '무더위쉼터',
			description: [
				'더위를 피해 쉴 수 있도록 공공시설, 광장, 공원 등에 설치 또는 지정한 시설물 및 장소',
				'무더위쉼터 시설물 및 장소의 중심점을 점형으로 표시',
				'무더위쉼터 시설물 및 장소의 중심점'
			]
		},
		{
			image: '/src/assets/images/policy_introduction/img_category21.png',
			alt: '민방위대피시설',
			description: [
				'민방위사태 발생시 주민의 생명과 재산을 보호하기 위해 지정된 시설',
				'민방위대피시설 출입구의 중심을 점형으로 표시',
				'민방위대피시설 출입구의 중심점'
			]
		},
		{
			image: '/src/assets/images/policy_introduction/img_category22.png',
			alt: '어린이 놀이시설',
			description: [
				'어린이 놀이기구가 설치된 실외의 놀이터',
				'어린이 놀이시설에 해당하는 경계를 면형으로 표시',
				'출입구가 있는 경우 도로와 연결된 출입구의 중심점 또는 출입구가 없이 개방되어 있는 경우 다중의 접근이 편리한 통행로의 중심점'
			]
		},
		{
			image: '/src/assets/images/policy_introduction/img_category23.png',
			alt: '음식판매 자동차 허가구역',
			description: [
				'음식판매 자동차(푸드트럭) 영업이 가능하도록 지방자치 단체에서 조례로 정한 구역',
				'음식판매 자동차(푸드트럭) 영업장소 구획면이 표시된 경계를 면형으로 표시<span class="str">*구획면이 없는 경우 영업중인 푸드트럭을 모두 포함하는 경계를 면형으로 표시</span>',
				'출입구가 있는 경우 도로와 연결된 출입구의 중심점 또는 출입구가 없이 개방되어 있는 경우 다중의 접근이 편리한 통행로의 중심점'
			]
		}
	])
</script>
<template>
	
	<SubHeaderTitle title="사물/공간주소 정보 시설 유형" />
	<ul class="type__list">
		<li v-for="(item, index) in addressThingTypes" :key="index">
			<div class="type__image"><img :src="item.image" :alt="item.alt"></div>
			<ul class="type__description">
				<li v-for="(desc, descIndex) in item.description" :key="descIndex" v-html="desc"></li>
			</ul>
		</li>
	</ul>
</template>

<style lang="scss" scoped>
	.type {
		&__list {
			display: flex;
			flex-wrap: wrap;
			gap: 24px;
			margin-top:24px;
			> li {
				width: 384px;
				height: 540px;
				padding:32px;
				border:1px solid #C6C6C6;
				border-radius: 12px;
			}
		}
		&__image {
			font-size:0;
		}
		&__description {
			margin-top:10px;
			li {
				margin-top:12px;
				padding-left:32px;
                background: url('@images/common/bullet/bul_dot02.svg') no-repeat 0 0;
                color: #555555;
                font-size:17px;
				&:first-child {
					margin:0;
				}

			}
		}
	}
</style>