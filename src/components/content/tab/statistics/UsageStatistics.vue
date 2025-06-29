<script setup>
	import { ref, onMounted, computed, defineAsyncComponent } from 'vue'

	import SubHeaderTitle from '@/components/common/title/SubHeaderTitle.vue'
</script>

<template>
	<SubHeaderTitle title="주소정보 주요 통계" />
	<div class="commonBox">
		<div class="commonBox__headerDate">
			<p class="commonBox__title">이용방식별 주소정보 보유 현황</p>
			<div class="commonBox__date">‘25년 4월말</div>
		</div>
		<div class="section__content">
			<div class="section__contentBox">
				<p class="section__contentTitle">공개하는 주소정보</p>
				<div class="section__contentInner type02">
					차트
				</div>
			</div>
			<div class="section__contentBox">
				<p class="section__contentTitle">제공하는 주소정보</p>
				<div class="section__contentInner type02">
					차트
				</div>
			</div>
		</div>
	</div>

	<div class="commonBox">
		<div class="commonBox__headerDate">
			<p class="commonBox__title">이용방식별 주소정보 보유 현황</p>
			<div class="commonBox__date">‘25년 4월말</div>
		</div>
		<div class="section__content">
			<div class="section__contentBox">
				<p class="section__contentTitle">공개하는 주소정보</p>
				<div class="section__contentInner type02">
					차트
				</div>
			</div>
			<div class="section__contentBox">
				<p class="section__contentTitle">제공하는 주소정보</p>
				<div class="section__contentInner type02">
					차트
				</div>
			</div>
		</div>
	</div>

	<div class="commonBox">
		<div class="commonBox__headerDate">
			<p class="commonBox__title">주소정보 이용 상세현황 (다운로드)</p>
			<div class="commonBox__date">‘25년 4월말</div>
		</div>
		<div class="section__content">
			<div class="section__contentBox type01">
				<p class="section__contentTitle">공개하는 주소정보</p>
				<div class="section__contentInner">
					
				</div>
			</div>
		</div>
		<div class="section__content">
			<div class="section__contentBox type01">
				<p class="section__contentTitle">제공하는 주소정보</p>
				<div class="section__contentInner">
					
				</div>
			</div>
		</div>
	</div>

	<div class="commonBox">
		<div class="commonBox__headerDate">
			<p class="commonBox__title">주소검색기, 솔루션 제공현황</p>
			<div class="commonBox__date">‘25년 4월말</div>
		</div>
		<div class="section__content">
			<div class="section__contentBox type01">
				<p class="section__contentTitle">현황 통계</p>
				<div class="section__contentInner">
					
				</div>
			</div>
		</div>
	</div>

	<div class="commonBox">
		<div class="commonBox__headerDate">
			<p class="commonBox__title">주소검색 현황</p>
			<div class="commonBox__date">‘25년 4월말</div>
		</div>
		<div class="section__content">
			<div class="section__contentBox type01">
				<p class="section__contentTitle">현황 통계</p>
				<div class="section__contentInner">
					
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@use '@/assets/scss/contents/page/introduction';
	@use '@/assets/scss/contents/box/box';
</style>