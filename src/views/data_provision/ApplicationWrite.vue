<script setup>
	import { ref, onMounted, computed, defineAsyncComponent } from 'vue'
    import Checkbox from 'primevue/checkbox';

	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
	import DetailBottomButtons from '@/components/common/button/DetailBottomButtons.vue'
    import CustomInputText from '@components/common/input/CustomInputText.vue';
    import PersonalTerms from '@/components/common/term/PersonalTerms.vue'
    import PrivacyConsent from '@/components/common/term/PrivacyConsent.vue'

	const handleList = () => {
		// 목록으로 이동
	}

	const handleEdit = () => {
		// 수정 처리
	}

    //인풋
    const currentAddress = ref('');
    const loadApplication = ref(false);
    
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
    <div class="commonBox">
        <div class="commonBox__function">
            <h4 class="commonBox__title">수령인</h4>
            <div class="commonBox__checkbox">
                <Checkbox v-model="loadApplication" inputId="loadApplication" :binary="true" />
                <label for="loadApplication">신청서 불러오기</label>
            </div>
        </div>
		<h5 class="commonBox__subTitle">성명(법인명)</h5>
		<div class="commonBox__form">
			<CustomInputText v-model="currentAddress" id="currentAddress" class="input" placeholder="" title="" /> 
		</div>

		<h5 class="commonBox__subTitle">생년월일 (법인등록번호)</h5>
		<div class="commonBox__form">
			<CustomInputText v-model="currentAddress" id="currentAddress" class="input" placeholder="" title="" /> 
		</div>

		<h5 class="commonBox__subTitle">전화번호</h5>
		<div class="commonBox__form">
			<CustomInputText v-model="currentAddress" id="currentAddress" class="input" placeholder="" title="" /> 
		</div>

		<h5 class="commonBox__subTitle">팩스번호</h5>
		<div class="commonBox__form">
			<CustomInputText v-model="currentAddress" id="currentAddress" class="input" placeholder="" title="" /> 
		</div>

		<h5 class="commonBox__subTitle">주소(전자우편)</h5>
		<div class="commonBox__form">
			<CustomInputText v-model="currentAddress" id="currentAddress" class="input" placeholder="" title="" /> 
		</div>
    </div>
	<div class="commonBox">
		<h4 class="commonBox__title">인수물의 내용</h4>
		<p class="commonBox__tip"><span class="commonBox__essential">*</span> 상기 자료는 2025년 04일자로 작성된 자료임</p>

		<h5 class="commonBox__subTitle">수령방법 및 용도</h5>
        <dl class="commonBox__explanation type01">
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

		<h5 class="commonBox__subTitle">데이터 연계 항목 (3)</h5>
        <div class="commonBox__information">
            <div class="commonBox__informationCategory">SHP</div>
            <h5 class="commonBox__informationTitle02">[공개] 주소정보 (속성)</h5>
            <ul class="commonBox__informationList">
                <li>도로명주소 (한글, 영어, 상세주소, 상세주소 동표시, 도로명)</li>
                <li>사물주소</li>
            </ul>
        </div>
        <div class="commonBox__information">
            <div class="commonBox__informationCategory">SHP</div>
            <h5 class="commonBox__informationTitle02">[공개] 주소정보 (도형)</h5>
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
    <div class="commonBox">
		<h4 class="commonBox__title">전자적 처리결과 통보 동의</h4>
		<p class="commonBox__text02">[선택] 전자적 방법에 따른 처리결과 통보</p>
        <ul class="commonBox__informationList">
            <li>본인은 이 건 업무처리와 관련하여 담당 공무원이 그 결과를 다음의 전자적 방법에 의해 통보 하는데 동의합니다.</li>
        </ul>

    </div>
    <DetailBottomButtons
        type="both"
        :leftButtons="[
            { text: '목록으로', onClick: handleList, class: 'tertiary' }
        ]"
        :rightButtons="[
            { text: '신청하기', onClick: handleEdit, class: 'primary' },
        ]"
    />
</template>


<style lang="scss" scoped>
	@use '@/assets/scss/contents/box/box';
	@use '@/assets/scss/contents/box/term';
    @use '@/assets/scss/contents/input/input_checkbox.scss';
</style>