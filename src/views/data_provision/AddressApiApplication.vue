<script setup>
	import { ref, onMounted, computed, defineAsyncComponent } from 'vue'
    import Checkbox from 'primevue/checkbox';
    import Button from 'primevue/button'
	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
	import DetailBottomButtons from '@/components/common/button/DetailBottomButtons.vue'
    import CustomInputText from '@components/common/input/CustomInputText.vue';
    import PersonalTerms from '@/components/common/term/PersonalTerms.vue'
    import PrivacyConsent from '@/components/common/term/PrivacyConsent.vue'
    import RadioButton from 'primevue/radiobutton';
	
    //인풋
    const currentAddress = ref('');
    //셀렉트박스
	const selectedItem02 = ref(null);
    const items02 = ref([
        {label:'제목', value:'subject'},
        {label:'reme', value:'content'},
    ]);
    
    // 신청기관 유형 라디오 버튼
    const organizationType = ref('personal');
    // 서비스망 라디오 버튼
    const serviceNetwork = ref('internet');


	const handleList = () => {
		// 목록으로 이동
	}

	const handleEdit = () => {
		// 수정 처리
	}

    //인풋
    const loadApplication = ref(false);
    
</script>

<template>
	<HeaderTitle title="주소정보 API 연계" />
	<div class="commonBox">
		<h4 class="commonBox__title">신청 정보</h4>
        <dl class="commonBox__explanation">
            <dt>API 종류</dt>
            <dd>도로검색</dd>
            <dt>API 유형</dt>
            <dd>검색 API</dd>
        </dl>
    </div>
    <div class="commonBox">
        <div class="commonBox__function">
            <h4 class="commonBox__title">신청서 작성</h4>
            <div class="commonBox__checkbox">
                <Checkbox v-model="loadApplication" inputId="loadApplication" :binary="true" />
                <label for="loadApplication">신청서 불러오기</label>
            </div>
        </div>
        <h5 class="commonBox__subTitle">신청기관 유형 <span class="commonBox__essential">*</span></h5>
        <ul class="commonBox__radioList">
            <li>
                <RadioButton v-model="organizationType" value="personal" inputId="personal" />
                <label for="personal">개인</label>
            </li>
            <li>
                <RadioButton v-model="organizationType" value="corporate" inputId="corporate" />
                <label for="corporate">법인</label>
            </li>
        </ul>

		<h5 class="commonBox__subTitle">업체(기관 명) <span class="commonBox__essential">*</span></h5>
		<div class="commonBox__form">
			<CustomInputText v-model="currentAddress" id="currentAddress" class="input" placeholder="한국지역정보개발원" title="한국지역정보개발원" /> 
		</div>

        <h5 class="commonBox__subTitle">시스템 명 <span class="commonBox__essential">*</span></h5>
		<div class="commonBox__form">
			<CustomInputText v-model="currentAddress" id="currentAddress" class="input" placeholder="도로명주소 유통 시스템" title="도로명주소 유통 시스템" /> 
		</div>

        <h5 class="commonBox__subTitle">URL(IP)</h5>
		<div class="commonBox__form">
			<CustomInputText v-model="currentAddress" id="currentAddress" class="input" placeholder="juso.go.kr" title="juso.go.kr" /> 
		</div>

        <h5 class="commonBox__subTitle">시스템 개요</h5>
		<div class="commonBox__form">
			<CustomInputText v-model="currentAddress" id="currentAddress" class="input" placeholder="도로명주소 유통 시스템입니다." title="도로명주소 유통 시스템입니다." /> 
		</div>

        <h5 class="commonBox__subTitle">서비스망</h5>
        <ul class="commonBox__radioList">
            <li>
                <RadioButton v-model="serviceNetwork" value="internet" inputId="internet" />
                <label for="internet">인터넷 망</label>
            </li>
            <li>
                <RadioButton v-model="serviceNetwork" value="administrative" inputId="administrative" />
                <label for="administrative">행정망(공공기관 또는 공기관망을 사용하는 업체)</label>
            </li>
        </ul>

        <h5 class="commonBox__subTitle">CSS 파일 경로</h5>
		<div class="commonBox__form">
            <div class="commonBox__download type01">
                <p class="commonBox__downloadTitle">가이드 및 소스</p>
                <Button class="commonBox__downloadButton" title="다운로드">다운로드</Button>
            </div>
			<CustomInputText v-model="currentAddress" id="currentAddress" class="input" placeholder="business.juso.go.kr.css" title="business.juso.go.kr.css" /> 
            <p class="commonBox__tipBox type02">회사로고, 배경화면 색상테마를 변경할 수 있도록 지원합니다.</p>
		</div>
    </div>

	<div class="commonBox">
		<h4 class="commonBox__title">서비스 용도 및 시스템 목록</h4>
		<p class="commonBox__tip"><span class="commonBox__essential">*</span> 표시는 필수 입력 사항입니다</p>
        <h5 class="commonBox__subTitle">서비스 용도 <span class="commonBox__essential">*</span></h5>
        <ul class="commonBox__radioList">
            <li>
                <RadioButton v-model="serviceNetwork" value="internet" inputId="internet" />
                <label for="internet">운영</label>
            </li>
            <li>
                <RadioButton v-model="serviceNetwork" value="administrative" inputId="administrative" />
                <label for="administrative">개발(본인인증없이 발급)</label>
            </li>
        </ul>
        <h5 class="commonBox__subTitle">시스템(사이트) 목록</h5>
        <div class="commonBox__download type01">
            <p class="commonBox__downloadTitle">가이드 및 소스</p>
            <Button class="commonBox__downloadButton" title="다운로드">다운로드</Button>
        </div>
        <div>파일추가</div>
    </div>
    <div class="commonBox__tipBox type03">
        <ul class="commonBox__informationList">
            <li>행정망 내 운영 시스템인 경우 API요청 URL 정보는 별도 문의하시기 바랍니다. 1588-0061(7번 도로명주소)</li>
            <li>여러개의 시스템 연계 신청인 경우, 해당 시스템의 IP 또는 URL 목록을 첨부하시면 승인키가 일괄 부여됩니다.</li>
        </ul>
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

    @use '@/assets/scss/contents/input/input_radio.scss';
</style>