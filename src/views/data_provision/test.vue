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
	<table>
		<tr>
			<td>roadAddr</td>
			<td>String</td>
			<td>Y</td>
			<td>전체 도로명주소</td>
		</tr>
		<tr>
			<td>roadAddrPart1</td>
			<td>String</td>
			<td>Y</td>
			<td>도로명주소(참고항목 제외)</td>
		</tr>
		<tr>
			<td>roadAddrPart2</td>
			<td>String</td>
			<td>N</td>
			<td>도로명주소 참고항목</td>
		</tr>
		<tr>
			<td>JibunAddr</td>
			<td>String</td>
			<td>Y</td>
			<td>지번주소</td>
		</tr>
		<tr>
			<td>engAddr</td>
			<td>String</td>
			<td>Y</td>
			<td>도로명주소(영문)</td>
		</tr>
		<tr>
			<td>zipNo</td>
			<td>String</td>
			<td>Y</td>
			<td>우편번호</td>
		</tr>
		<tr>
			<td>admCd</td>
			<td>String</td>
			<td>Y</td>
			<td>행정구역코드</td>
		</tr>
		<tr>
			<td>rnMgtSn</td>
			<td>String</td>
			<td>Y</td>
			<td>도로명코드</td>
		</tr>
		<tr>
			<td>detBdNmList</td>
			<td>String</td>
			<td>N</td>
			<td>상세건물명</td>
		</tr>
		<tr>
			<td>bdNm</td>
			<td>String</td>
			<td>N</td>
			<td>건물명</td>
		</tr>
		<tr>
			<td>bdKdcd</td>
			<td>String</td>
			<td>Y</td>
			<td>공동주택여부(1:공동주택, 0:비공동주택)</td>
		</tr>
		<tr>
			<td>siNm</td>
			<td>String</td>
			<td>Y</td>
			<td>시도명</td>
		</tr>
		<tr>
			<td>SggNm</td>
			<td>String</td>
			<td>Y</td>
			<td>시군구명</td>
		</tr>
		<tr>
			<td>emdNm</td>
			<td>String</td>
			<td>Y</td>
			<td>읍면동명</td>
		</tr>
		<tr>
			<td>LiNm</td>
			<td>String</td>
			<td>Y</td>
			<td>법정리명</td>
		</tr>
		<tr>
			<td>rn</td>
			<td>String</td>
			<td>Y</td>
			<td>도로명</td>
		</tr>
		<tr>
			<td>udrtYn</td>
			<td>String</td>
			<td>Y</td>
			<td>지하여부(0:지상, 1:지하)</td>
		</tr>
		<tr>
			<td>buldMnnm</td>
			<td>Number</td>
			<td>Y</td>
			<td>건물본번</td>
		</tr>
		<tr>
			<td>buldSlno</td>
			<td>Number</td>
			<td>Y</td>
			<td>건물부번</td>
		</tr>
		<tr>
			<td>mtYn</td>
			<td>String</td>
			<td>Y</td>
			<td>산여부(0:대지, 1:산)</td>
		</tr>
		<tr>
			<td>InbrMnnm</td>
			<td>Number</td>
			<td>Y</td>
			<td>지번본번(번지)</td>
		</tr>
		<tr>
			<td>InbrSino</td>
			<td>String</td>
			<td>Y</td>
			<td>읍면동일련번호</td>
		</tr>
		<tr>
			<td>hstryYn</td>
			<td>String</td>
			<td>Y</td>
			<td><span>* 2020년 12월 8일 추가된 항목</span>변동이력여부(0:현행 주소정보, 1:요청변수의 keyword(검색어)가 변동된 주소정보에서 검색된 정보)</td>
		</tr>
		<tr>
			<td>reljibun</td>
			<td>String</td>
			<td>N</td>
			<td><span>* 2020년 12월 8일 추가된 항목</span>관련지번</td>
		</tr>
		<tr>
			<td>hemdNm</td>
			<td>String</td>
			<td>N</td>
			<td><span>* 2020년 12월 8일 추가된 항목</span>관할주민센터<span>※참고정보이며, 실제와 다를 수 있습니다.</span></td>
		</tr>
	</table>
</template>


<style lang="scss" scoped>
	@use '@/assets/scss/contents/box/box';
	@use '@/assets/scss/contents/badge/commonBadge';
    @use '@/assets/scss/contents/input/input_radio.scss';
    @use '@/assets/scss/contents/list/source';
</style>