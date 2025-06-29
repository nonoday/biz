<script setup>
	import { ref, onMounted, computed, defineAsyncComponent } from 'vue'

	import SubHeaderTitle from '@/components/common/title/SubHeaderTitle.vue'
</script>

<template>
	<SubHeaderTitle title="주소정보 주요 통계" />
	<div class="commonBox">
		<div class="commonBox__headerDate">
			<p class="commonBox__title">내부도로 기초번호판 구조</p>
			<div class="commonBox__date">‘25년 4월말</div>
		</div>
		<div class="section__content">
			<div class="section__contentBox type02">
				<p class="section__contentTitle">도로명</p>
				<div class="section__contentCount">
					169,440건
				</div>
			</div>
			<div class="section__contentBox type02">
				<p class="section__contentTitle">도로명주소</p>
				<div class="section__contentCount">
					169,440건
				</div>
			</div>
			<div class="section__contentBox type02">
				<p class="section__contentTitle">사물주소</p>
				<div class="section__contentCount">
					169,440건
				</div>
			</div>
			<div class="section__contentBox type02">
				<p class="section__contentTitle">지점번호판</p>
				<div class="section__contentCount">
					169,440건
				</div>
			</div>
			<div class="section__contentBox type02">
				<p class="section__contentTitle">기초번호판</p>
				<div class="section__contentCount">
					169,440건
				</div>
			</div>
			<div class="section__contentBox type02">
				<p class="section__contentTitle">사물주소판</p>
				<div class="section__contentCount">
					169,440건
				</div>
			</div>
		</div>
	</div>
	<div class="commonBox">
		<div class="commonBox__headerDate">
			<p class="commonBox__title">내부도로 기초번호판 구조</p>
			<div class="commonBox__date">‘25년 4월말</div>
		</div>
		<div class="section__content">
			차트
		</div>
	</div>

	<div class="commonBox">
		<div class="commonBox__headerDate">
			<p class="commonBox__title">도로명 상세구분</p>
			<div class="commonBox__date">‘25년 4월말</div>
		</div>
		<div class="section__content">
			<div class="section__contentBox">
				<p class="section__contentTitle">위계별</p>
				<div class="section__contentInner type01">
					차트
				</div>
			</div>
			<div class="section__contentBox">
				<p class="section__contentTitle">용도별</p>
				<div class="section__contentInner type01">
					차트
				</div>
			</div>
		</div>
	</div>

	<div class="commonBox">
		<div class="commonBox__headerDate">
			<p class="commonBox__title">도로명 시도구분</p>
			<div class="commonBox__date">‘25년 4월말</div>
		</div>
		<div class="section__content">
			<div class="section__contentBox type01">
				<p class="section__contentTitle">위계별</p>
				<div class="section__contentInner">
					
				</div>
			</div>
		</div>
	</div>
	<div class="commonBox">
		<div class="commonBox__headerDate">
			<p class="commonBox__title">도로명 시도구분</p>
			<div class="commonBox__date">‘25년 4월말</div>
		</div>
		<div class="section__content">
			<div class="section__contentBox type01">
				<p class="section__contentTitle">벽면 부착형</p>
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