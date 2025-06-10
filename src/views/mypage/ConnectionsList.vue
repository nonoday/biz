<script setup>
	import { ref, onMounted, computed } from 'vue'

	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
	import SearchForm from '@/components/common/search/SearchForm.vue'

	const handleSearch = ({ searchText, period, dateRange }) => {
		console.log('검색어:', searchText)
		console.log('선택된 기간:', period ? `${period}개월` : '사용자 지정 기간')
		console.log('시작일:', dateRange.start)
		console.log('종료일:', dateRange.end)
	}
</script>

<template>
	<HeaderTitle title="연계신청내역" :mypage="true" />
	<SearchForm @search="handleSearch" />
</template>
