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
		<li class="active">
			<div class="step__box">
				<div class="step__notation">1단계</div>
				<div class="step__title">사용 목적 선택</div>
			</div>
		</li>
		<li>
			<div class="step__box">
				<div class="step__notation">2단계</div>
				<div class="step__title">세부 설정</div>
			</div>
		</li>
		<li>
			<div class="step__box">
				<div class="step__notation">3단계</div>
				<div class="step__title">추천 서비스</div>
			</div>
		</li>
	</ol>
	<div class="step__type"><span class="step__current">1단계</span> / 3단계</div>
	
	<SubHeaderTitle title="사용 목적 선택" />
	<p class="body-krds__medium">아래 목록에서 사용 목적을 선택해주세요.</p>

	<ul class="user__list">
		<li><Button class="user__button purpose01">주소검색</Button></li>
		<li><Button class="user__button purpose02">건물검색</Button></li>
		<li><Button class="user__button purpose03">배달서비스</Button></li>
		<li><Button class="user__button purpose04">의료서비스</Button></li>
		<li class="active"><Button class="user__button purpose05">쇼핑서비스</Button></li>
		<li><Button class="user__button purpose06">지도서비스</Button></li>
		<li><Button class="user__button purpose07">은행서비스</Button></li>
		<li><Button class="user__button purpose08">택배서비스</Button></li>
	</ul>

    <DetailBottomButtons
        type="right"
        :rightButtons="[
            { text: '다음단계', onClick: handleEdit, class: 'primary' },
            { text: '다음단계', onClick: handleDelete, class: 'tertiary' }
        ]"
    />
</template>

<style lang="scss" scoped>
    @use '@/assets/scss/contents/layout/step.scss';    
    @use '@/assets/scss/contents/list/user_list.scss';    
</style> 
