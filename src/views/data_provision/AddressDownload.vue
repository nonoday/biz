<script setup>
	import { ref, onMounted, computed } from 'vue'
    import Button from 'primevue/button'

	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
	import SubHeaderTitle from '@/components/common/title/SubHeaderTitle.vue'
	import SearchResultHeader from '@/components/common/search_result/SearchResultHeader.vue'


</script>

<template>
	<HeaderTitle title="주소정보 다운로드" />
	<div class="addressDownload__header">
		<SubHeaderTitle title="주소정보 큐레이션" />
		<div class="addressDownload__more">
			<span class="addressDownload__moreTip">데이터 상세검색이 필요하신가요?</span> 
			<a href="#" class="addressDownload__link"  title="큐레이션으로 보기">상세검색 바로가기</a>
		</div>
	</div>

	<ul class="addressDownload__category">
		<li><Button class="addressDownload__button type01" title="전체보기">전체</Button></li>
		<li><Button class="addressDownload__button type02" title="주소보기">주소</Button></li>
		<li><Button class="addressDownload__button type03" title="도로보기">도로</Button></li>
		<li><Button class="addressDownload__button type04" title="건물보기">건물</Button></li>
		<li><Button class="addressDownload__button type05" title="출입구보기">출입구</Button></li>
		<li><Button class="addressDownload__button type06" title="사물보기">사물</Button></li>
		<li><Button class="addressDownload__button type07" title="시설물보기">시설물</Button></li>
		<li><Button class="addressDownload__button type08" title="기타정보보기">기타정보</Button></li>
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

<style lang="scss" scoped>
	@use '@/assets/scss/contents/box/box';
	@use '@/assets/scss/contents/page/AddressDownload';
</style>