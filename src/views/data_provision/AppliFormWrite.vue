<script setup>
	import { ref, onMounted, computed, defineAsyncComponent } from 'vue'
    import Checkbox from 'primevue/checkbox';

	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
	import DetailBottomButtons from '@/components/common/button/DetailBottomButtons.vue'


	const handleList = () => {
		// 목록으로 이동
	}

	const handleEdit = () => {
		// 수정 처리
	}

    const allOk = ref(false);
</script>

<template>
	<HeaderTitle title="주소정보 데이터 연계" />
	<div class="commonBox">
		<h4 class="commonBox__title">신청인</h4>
        <dl class="commonBox__explanation">
            <dt>성명(법인명)</dt>
            <dd>홍길동</dd>
            <dt>생년월일 (법인등록번호)</dt>
            <dd>2000-01-01</dd>
            <dt>전화번호</dt>
            <dd>02-0000-0000</dd>
            <dt>팩스번호</dt>
            <dd>02-0000-0000</dd>
            <dt>주소(전자우편)</dt>
            <dd>gildong@test.com</dd>
        </dl>
    </div>
	<div class="commonBox noGap">
		<h4 class="commonBox__title">데이터 연계 항목 (2)</h4>
        <div class="commonBox__information">
            <div class="commonBox__informationCategory">SHP</div>
            <h5 class="commonBox__informationTitle">[공개] 주소정보 (속성)</h5>
            <ul class="commonBox__informationList">
                <li>도로명주소 (한글, 영어, 상세주소, 상세주소 동표시, 도로명)</li>
                <li>사물주소</li>
            </ul>
        </div>
        <div class="commonBox__information">
            <div class="commonBox__informationCategory">SHP</div>
            <h5 class="commonBox__informationTitle">[공개] 주소정보 (도형)</h5>
            <ul class="commonBox__informationList">
                <li>건물군내상세주소동도형</li>
                <li>사물주소</li>
            </ul>
        </div>
    </div>
	<div class="commonBox">
		<h4 class="commonBox__title">안내사항</h4>
        <PersonalTerms 
            personalLabel="동의안함" 
            corporateLabel="동의함" 
        />
	</div>
	<div class="commonBox">
		<h4 class="commonBox__title">보안각서</h4>
        <PrivacyConsent 
            personalLabel="동의안함" 
            corporateLabel="동의함" 
        />
	</div>
    <DetailBottomButtons
        type="both"
        :leftButtons="[
            { text: '목록으로', onClick: handleList, class: 'secondary' }
        ]"
        :rightButtons="[
            { text: '다음으로', onClick: handleEdit, class: 'primary' },
        ]"
    />
</template>


<style lang="scss" scoped>
	@use '@/assets/scss/contents/box/box';
	@use '@/assets/scss/contents/box/term';
    @use '@/assets/scss/contents/input/input_checkbox.scss';
</style>