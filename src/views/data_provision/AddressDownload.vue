<script setup>
	import { ref, onMounted, computed } from 'vue'
    import Button from 'primevue/button'

	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
	import SubHeaderTitle from '@/components/common/title/SubHeaderTitle.vue'
	import SearchResultHeader from '@/components/common/search_result/SearchResultHeader.vue'


</script>

<template>
	<HeaderTitle title="주소정보 다운로드" />
	<div>
		<SubHeaderTitle title="주소정보 큐레이션" />
		<div>
			<Button title="큐레이션으로 보기">데이터 상세검색이 필요하신가요? <span>상세검색 바로가기</span></Button>
		</div>
	</div>

	<ul>
		<li><Button title="전체보기">전체</Button></li>
		<li><Button title="주소보기">주소</Button></li>
		<li><Button title="도로보기">도로</Button></li>
		<li><Button title="건물보기">건물</Button></li>
		<li><Button title="출입구보기">출입구</Button></li>
		<li><Button title="사물보기">사물</Button></li>
		<li><Button title="시설물보기">시설물</Button></li>
		<li><Button title="기타정보보기">기타정보</Button></li>
	</ul>

	<SearchResultHeader 
		:publicAddressCount="50" 
		:providedAddressCount="30" 
		resultType="both" 
		:sortTypes="[
			{ label: '관련도순', value: 'relevance' },
			{ label: '최신순', value: 'latest' }
		]"
	/>

</template>
