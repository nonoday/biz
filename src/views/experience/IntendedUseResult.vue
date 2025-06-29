<script setup>
	import { ref, onMounted, computed, defineAsyncComponent } from 'vue'
    import Checkbox from 'primevue/checkbox';

	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
	import DetailBottomButtons from '@/components/common/button/DetailBottomButtons.vue'
	import SubHeaderTitle from '@/components/common/title/SubHeaderTitle.vue'

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
	<p class="body-krds__medium"><span class="color01">“주소 검색”</span>으로 다운로드 서비스 <strong class="color01">16</strong>건, API 서비스 <strong class="color01">5</strong>건</p>


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
    @use '@/assets/scss/contents/layout/step.scss';    
    @use '@/assets/scss/contents/list/user_list.scss';    
</style> 
