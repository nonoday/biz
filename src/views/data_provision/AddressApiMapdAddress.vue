<script setup>
	import { ref, onMounted, computed, defineAsyncComponent } from 'vue'
    import Dropdown from 'primevue/dropdown'
    import Button from 'primevue/button'

	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
	import DetailBottomButtons from '@/components/common/button/DetailBottomButtons.vue'




	const handleList = () => {
	}

	const handleEdit = () => {

	}

</script>

<template>
	<HeaderTitle title="주소정보 API 연계" />

	<div class="commonBox">
		<h4 class="commonBox__title">지도제공</h4>
        <div class="commonBox__download">
            <p class="commonBox__downloadTitle">가이드 및 소스</p>
            <Button class="commonBox__downloadButton" title="다운로드">다운로드</Button>
        </div>
        <dl class="commonBox__explanation">
            <dt>API 유형</dt>
            <dd>팝업 API</dd>
            <dt>소개</dt>
            <dd>
                다양한 도로명주소 활용을 위하여 사용환경에 맞춰 적용할 수 있도록 4가지 타입의 UI를 지원하며, div태그 형식으로 제공합니다.<br />
                검색어, 도로명주소 코드 및 좌표(GRS80)정보를 통하여 해당 주소의 상세정보 및 위치표기를 제공합니다.<br />
                자세한 적용방법은 가이드를 참고하시기 바랍니다.
            </dd>
        </dl>
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