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
		<li class="active">
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
	<div class="step__type"><span class="step__current">2단계</span> / 3단계</div>
	
	<SubHeaderTitle title="세부 설정 선택" />
	<p class="body-krds__medium"><span class="color01">“주소 검색”</span>의 이용환경, 제공방식, 확장자를 선택해주세요.</p>

	<ol class="userSet__list">
		<li>
			<p class="user__title"><strong>1. 이용 환경</strong> - 어떤 작업 환경에서 일하시나요?</p>
			<ul class="user__list">
				<li class="active"><Button class="user__button environment01">인터넷망</Button></li>
				<li><Button class="user__button environment02">행정망</Button></li>
				<li><Button class="user__button environment03">폐쇄망</Button></li>
				<li><Button class="user__button environment04">모름</Button></li>
			</ul>
		</li>
		<li>
			<p class="user__title"><strong>2. 제공방식</strong> - 어떤 방식으로 제공받길 원하시나요?</p>
			<ul class="user__list">
				<li><Button class="user__button method01">전체</Button></li>
				<li class="active"><Button class="user__button method02">다운로드</Button></li>
				<li><Button class="user__button method03">연계</Button></li>
				<li><Button class="user__button method04">솔루션</Button></li>
			</ul>
		</li>
		<li>
			<p class="user__title"><strong>3. 확장자</strong> - 어떤 확장자 파일로 제공받길 원하시나요?</p>
			<ul class="user__list">
				<li><Button class="user__button environment01">전체</Button></li>
				<li class="active"><Button class="user__button environment02">TXT</Button></li>
				<li><Button class="user__button environment03">JSON</Button></li>
				<li><Button class="user__button environment04">SHP</Button></li>
			</ul>
		</li>
	</ol>

    <DetailBottomButtons
        type="both"
        :leftButtons="[
            { text: '이전단계', onClick: handleList, class: 'tertiary' }
        ]"
        :rightButtons="[
            { text: '다음단계', onClick: handleEdit, class: 'primary' },
        ]"
    />
</template>
<style lang="scss" scoped>
    @use '@/assets/scss/contents/layout/step.scss';    
    @use '@/assets/scss/contents/list/user_list.scss';    
</style> 
