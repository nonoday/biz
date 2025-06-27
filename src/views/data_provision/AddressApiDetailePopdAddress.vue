<script setup>
	import { ref, onMounted, computed, defineAsyncComponent } from 'vue'
    import Dropdown from 'primevue/dropdown'
    import Button from 'primevue/button'

	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
	import DetailBottomButtons from '@/components/common/button/DetailBottomButtons.vue'


    const selectedLanguage = ref('java')
    const languageOptions = ref([
        { label: 'JAVA', value: 'java' },
        { label: '.NET', value: 'net' }
    ])

	const handleList = () => {
	}

	const handleEdit = () => {

	}

</script>

<template>
	<HeaderTitle title="주소정보 API 연계" />

	<div class="commonBox">
		<h4 class="commonBox__title">기본정보</h4>
        <dl class="commonBox__explanation">
            <dt>API 종류</dt>
            <dd>도로명 API</dd>
            <dt>API 유형</dt>
            <dd>팝업 API</dd>
            <dt>가이드 및 소스</dt>
            <dd class="badgeBox">
                <span class="badge jsp">JSP</span>
                <span class="badge asp">ASP</span>
                <span class="badge php">PHP</span>
                <span class="badge css">CSS</span>
            </dd>
        </dl>
    </div>

	<div class="commonBox">
		<h4 class="commonBox__title">모바일 팝업 API 화면예시(스마트폰과 태블릿)</h4>
        <div class="commonBox__image">
            <img src="@/assets/images/data_provision/img_guide02.png" alt="모바일 팝업 API 화면예시(스마트폰과 태블릿)">
        </div>
    </div>

    
    <div class="source">
        <div class="source__description">
            <div class="source__item">
                <h5 class="source__title"> API 정보</h5>
                <ul class="source__list02">
                    <li>
                        1. 오픈API 신규 사용자의 경우 'API신청하기'메뉴에서 API종류(도로명주소API 또는 좌표제공API), API유형(팝업API 또는 모바일팝업API)를 선택하여 신청
                    </li>
                    <li>
                        2. 도로명주소API 또는 좌표제공API 메뉴에서 제공하는 가이드 및 소스를 활용하여 적용 
                    </li>
                    <li>
                        3. 도로명주소API 또는 좌표제공API 메뉴에서 제공하는 가이드 및 소스를 활용하여 적용 
                    </li>
                </ul>
            </div>
        </div>
        <div class="source__view">
            <div class="source__viewSample">
                <div class="source__viewHeader">
                    <h5 class="source__title">샘플 소스</h5>
                    <div class="source__function">
                        <Dropdown 
                            v-model="selectedLanguage" 
                            :options="languageOptions" 
                            optionLabel="label" 
                            optionValue="value"
                            placeholder="언어 선택"
                            class="source__dropdown"
                        />
                        
                        <Button class="source__copyButton">복사</Button>
                    </div>
                </div>
                <div class="source__sampleBox" style="height:185px;background:#000;">소스</div>

            </div>
        </div>
    </div>

    <DetailBottomButtons
        type="both"
        :leftButtons="[
            { text: '목록으로', onClick: handleList, class: 'tertiary' }
        ]"
        :rightButtons="[
            { text: 'OPEN API 신청하기', onClick: handleEdit, class: 'primary' },
        ]"
    />

</template>


<style lang="scss" scoped>
	@use '@/assets/scss/contents/box/box';
	@use '@/assets/scss/contents/badge/commonBadge';
    @use '@/assets/scss/contents/input/input_radio.scss';
    @use '@/assets/scss/contents/list/source';
</style>