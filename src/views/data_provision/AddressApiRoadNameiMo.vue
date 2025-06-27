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
		<h4 class="commonBox__title">기본정보</h4>
        <div class="commonBox__image">
            <img src="@/assets/images/data_provision/img_guide01.png" alt="모바일 팝업 API 화면예시(스마트폰과 태블릿)">
        </div>
    </div>

    
    <div class="source">
        <div class="source__description">
            <div class="source__item">
                <h5 class="source__title"> API 정보</h5>
                <table class="source__table">
                    <colgroup>
                        <col style="width: 120px;"/>
                        <col style="width: 80px;"/>
                        <col style="width: 260px;"/>
                        <col style="width: 120px;"/>
                    </colgroup>
                    <caption>api정보 테이블입니다. 항목으로는 호출방식,구분,요청 URL,출력결과가 있습니다.</caption>
                    <thead>
                        <tr>
                            <th>호출방식</th>
                            <th>구분</th>
                            <th>요청 URL</th>
                            <th>출력결과</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>POST<br />GET</td>
                            <td>웹</td>
                            <td class="alignLeft">http://business.juso.go.kr/addrink/addrLinkURL.do</td>
                            <td>파라미터</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="source__item">
                <h5 class="source__title">요청변수</h5>
                <table class="source__table">
                    <colgroup>
                        <col style="width: 120px;"/>
                        <col style="width: 80px;"/>
                        <col style="width: 80px;"/>
                        <col style="width: 300px;"/>
                    </colgroup>
                    <caption>api정보 테이블입니다.항목으로는 요청변수명, 타입, 필수여부,설명이 있습니다.</caption>
                    <thead>
                        <tr>
                            <th>요청변수명</th>
                            <th>타입</th>
                            <th>필수여부</th>
                            <th>설명</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>confmKey</td>
                            <td>String</td>
                            <td>Y</td>
                            <td class="alignLeft">신청시 발급받은 승인키</td>
                        </tr>
                        <tr>
                            <td>returnURL</td>
                            <td>String</td>
                            <td>Y</td>
                            <td class="alignLeft">주소 검색 결과를 리턴받을 URL<br />(통합검색창을 호출한 페이지)</td>
                        </tr>
                        <tr>
                            <td>resultType</td>
                            <td>String</td>
                            <td>N</td>
                            <td class="alignLeft">도로명주소 검색결과 화면 출력유형<br />(1:도로명, 2:도로명+지번, 3:도로명+상세 건물명, 4:도로명+지번+상세 건물명)</td>
                        </tr>
                        <tr>
                            <td>useDetail<br />Addr</td>
                            <td>String</td>
                            <td>N</td>
                            <td class="alignLeft">
                                상세주소 동/층/호정보 제공여부<br />
                                Y: 제공, N:미제공(직접입력)<br />
                                ※ 자세한 내용은 'API신청 > 팝업API' 메뉴에서 상세주소 팝업API 적용방법을 참고하시기 바랍니다.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="source__item">
                <h5 class="source__title">출력결과</h5>
                <table class="source__table">
                    <colgroup>
                        <col style="width: 120px;"/>
                        <col style="width: 80px;"/>
                        <col style="width: 52px;"/>
                        <col style="width: 300px;"/>
                    </colgroup>
                    <caption>api정보 테이블입니다.항목으로는 출력변수명, 타입, 필수여부, 설명가 있습니다.</caption>
                    <thead>
                        <tr>
                            <th>출력변수명</th>
                            <th>타입</th>
                            <th>필수여부</th>
                            <th>설명</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>roadFullAddr</td>
                            <td>String</td>
                            <td>Y</td>
                            <td>전체 도로명</td>
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
                            <td>도로명주소 참고 항목</td>
                        </tr>
                        <tr>
                            <td>jibunAddr</td>
                            <td>String</td>
                            <td>Y</td>
                            <td>지번주소</td>
                        </tr>
                        <tr>
                            <td>engAddr</td>
                            <td>String</td>
                            <td>Y</td>
                            <td>도로명(영문)</td>
                        </tr>
                        <tr>
                            <td>zipNo</td>
                            <td>String</td>
                            <td>Y</td>
                            <td>우편번호</td>
                        </tr>
                        <tr>
                            <td>addrDetail</td>
                            <td>String</td>
                            <td>N</td>
                            <td>고객 입력 상세 주소</td>
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
                            <td>bdMgtList</td>
                            <td>String</td>
                            <td>Y</td>
                            <td>건물관리번호</td>
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
                            <td>sggNm</td>
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
                            <td>liNM</td>
                            <td>String</td>
                            <td>N</td>
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
                            <td>지하여부 (0:지상,1:지하)</td>
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
                            <td>InbrSlno</td>
                            <td>Number</td>
                            <td>Y</td>
                            <td>지번부번(호)</td>
                        </tr>
                        <tr>
                            <td>emdNo</td>
                            <td>String</td>
                            <td>Y</td>
                            <td>읍면동일련번호</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="source__item">
                <h5 class="source__title">에러코드</h5>
                <table class="source__table">
                    <colgroup>
                        <col style="width: 290px;"/>
                        <col style="width: 290px;"/>
                    </colgroup>
                    <caption>api정보 테이블입니다.항목으로는 가 있습니다.</caption>
                    <thead>
                        <tr>
                            <th>오류메시지</th>
                            <th>조치방법</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>시스템에러</td>
                            <td class="alignLeft">도로명주소 도움센터로 문의하시기 바랍니다.</td>
                        </tr>
                        <tr>
                            <td>승인되지 않은 KEY 입니다.</td>
                            <td class="alignLeft">정확한 승인키를 입력하세요.(검색API 승인키 사용불가)</td>
                        </tr>
                        <tr>
                            <td>정상적인 경로로 접속하시기 바랍니다.</td>
                            <td class="alignLeft">요청변수 중 reurnUrl 항목이 없습니다. 요청변수를 다시 확인하세요.</td>
                        </tr>
                        <tr>
                            <td>검색어가 입력되지 않았습니다.</td>
                            <td class="alignLeft">검색어를 입력해주세요.</td>
                        </tr>
                        <tr>
                            <td>주소를 상세히 입력해 주시기 바랍니다.</td>
                            <td class="alignLeft">시도명으로는 검색이 불가합니다.</td>
                        </tr>
                        <tr>
                            <td>검색어는 두글자 이상 입력되어야 합니다.</td>
                            <td class="alignLeft">한 글자만으로는 검색이 불가합니다.</td>
                        </tr>
                        <tr>
                            <td>검색어는 문자와 숫자 같이 입력되어야 합니다.</td>
                            <td class="alignLeft">숫자만으로는 검색이 불가합니다.</td>
                        </tr>
                        <tr>
                            <td>검색어가 너무 깁니다.(한글40자, 영문, 숫자 80자 이하)</td>
                            <td class="alignLeft">80글자를 초과한 검색어는 검색이 불가능합니다.</td>
                        </tr>
                        <tr>
                            <td>검색어에 너무 긴 숫자가 포함되어 있습니다. (숫자 10자 이하)</td>
                            <td class="alignLeft">10자리를 초과하는 숫자가 포함된 검색어는 검색이 불가합니다.</td>
                        </tr>
                        <tr>
                            <td>특수문자+숫자만으로는 검색이 불가능합니다.</td>
                            <td class="alignLeft">특수문자와 숫자만으로 이루어진 검색어는 검색이 불가 합니다.</td>
                        </tr>
                        <tr>
                            <td>SQL 예약어 또는 특수문자(%,=, >, <, [, ])는 검색이 불가능합니다.</td>
                            <td class="alignLeft">SQL예약어 또는 특수문자를 제거 후 검색합니다.</td>
                        </tr>
                        <tr>
                            <td>개발승인키 기간이 만료되어 서비스를 이용하실 수 없습니다</td>
                            <td class="alignLeft">개발승인키를 다시 발급받아 API서비스를 호출합니다.</td>
                        </tr>
                        <tr>
                            <td>검색 범위를 초과하였습니다.</td>
                            <td class="alignLeft">검색결과가 9천건이 초과하는 검색은 불가합니다.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="source__view">
            <div class="source__viewSample">
                <div class="source__viewHeader">
                    <h5 class="source__title">주소입력화면 소스</h5>
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
                <div class="source__sampleBox" style="height:1273px;background:#000;">소스</div>
                <div class="source__viewHeader">
                    <h5 class="source__title">주소입력화면 소스</h5>
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
                <div class="source__sampleBox" style="height:848px;background:#000;">소스</div>

                <div class="source__viewHeader">
                    <h5 class="source__title">주소입력화면 소스</h5>
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
                <div class="source__sampleBox" style="height:372px;background:#000;">소스</div>
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