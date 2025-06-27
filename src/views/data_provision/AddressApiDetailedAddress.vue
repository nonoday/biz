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
    
    <div class="source">
        <div class="source__description">
            <div class="source__item">
                <h5 class="source__title"> API 정보</h5>
                <table class="source__table">
                    <colgroup>
                        <col style="width: 120px;"/>
                        <col style="width: 340px;"/>
                        <col style="width: 120px;"/>
                    </colgroup>
                    <caption>api정보 테이블입니다. 항목으로는 호출방식,구분,요청 URL,출력결과가 있습니다.</caption>
                    <thead>
                        <tr>
                            <th>POST<br />GET</th>
                            <th>요청 URL</th>
                            <th>출력결과</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>POST<br />GET</td>
                            <td class="alignLeft">http://business.juso.go.kr/addrink/addrLinkApi.Jsonp.do<br />(※ JAVA 1.6이상버전, TLS1.2 사용가능 이외 환경 http:// 사용)</td>
                            <td>JSONP<br />(xml, json)</td>
                        </tr>
                        <tr>
                            <td>POST<br />GET</td>
                            <td class="alignLeft">http://business.juso.go.kr/addrink/addrLinkApi.do<br />(※ JAVA 1.6이상버전, TLS1.2 사용가능 이외 환경 http:// 사용)</td>
                            <td>Jxml, json</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="source__item">
                <h5 class="source__title">요청변수</h5>
                <table class="source__table">
                    <colgroup>
                        <col style="width: 100px;"/>
                        <col style="width: 80px;"/>
                        <col style="width: 80px;"/>
                        <col style="width: 80px;"/>
                        <col style="width: 240px;"/>
                    </colgroup>
                    <caption>api정보 테이블입니다.항목으로는 요청변수명, 타입, 필수여부,설명이 있습니다.</caption>
                    <thead>
                        <tr>
                            <th>요청변수명</th>
                            <th>타입</th>
                            <th>필수여부</th>
                            <th>기본값</th>
                            <th>설명</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>confmKey</td>
                            <td>String</td>
                            <td>Y</td>
                            <td>-</td>
                            <td class="alignLeft">신청시 발급받은 승인키</td>
                        </tr>
                        <tr>
                            <td>currentPage</td>
                            <td>Integer</td>
                            <td>Y</td>
                            <td>1</td>
                            <td class="alignLeft">현재 페이지 번호</td>
                        </tr>
                        <tr>
                            <td>countPerPage</td>
                            <td>Integer</td>
                            <td>Y</td>
                            <td>10</td>
                            <td class="alignLeft">페이지당 출력할 결과 Row 수</td>
                        </tr>
                        <tr>
                            <td>keyword</td>
                            <td>String</td>
                            <td>Y</td>
                            <td>-</td>
                            <td class="alignLeft">주소 검색어</td>
                        </tr>
                        <tr>
                            <td>reSultType</td>
                            <td>String</td>
                            <td>N</td>
                            <td>xml</td>
                            <td class="alignLeft">검색결과형식 설정(xml, json)</td>
                        </tr>
                        <tr>
                            <td>hstryYn</td>
                            <td>String</td>
                            <td>N</td>
                            <td>N</td>
                            <td class="alignLeft">
                                <span class="str">* 2020년 12월 8일 추가된 항목</span>
                                변동된 주소정보 포함 여부
                            </td>
                        </tr>
                        <tr>
                            <td>firstSort</td>
                            <td>String</td>
                            <td>N</td>
                            <td>none</td>
                            <td class="alignLeft">
                                <span class="str">* 2020년 12월 8일 추가된 항목</span>
                                정확도순 정렬(none), 우선정렬(road:도로명 포함, location : 지번포함)
                                <span>※keyword(검색어)가 우선정렬 항목에 포함된 결과 우선 표출</span>
                            </td>
                        </tr>
                        <tr>
                            <td>confmKey</td>
                            <td>String</td>
                            <td>Y</td>
                            <td>-</td>
                            <td class="alignLeft">
                                <span class="str">* 2020년 12월 8일 추가된 항목</span>
                                출력결과에 추가된 항목(hstryYN, relJibun, hemdNm) 제공여부
                                <span>※ 해당 옵션으로 추가제공되는 항목의 경우, 추후 특정항목이 제거 되거나 추가될 수 있으니 적용 시 고려해주시기 바랍니다.</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="source__item">
                <h5 class="source__title">출력결과</h5>
                <table class="source__table">
                    <colgroup>
                        <col style="width: 90px;"/>
                        <col style="width: 90px;"/>
                        <col style="width: 80px;"/>
                        <col style="width: 80px;"/>
                        <col style="width: 240px;"/>
                    </colgroup>
                    <caption>api정보 테이블입니다.항목으로는 출력변수명, 타입, 필수여부, 설명가 있습니다.</caption>
                    <thead>
                        <tr>
                            <th colspan="2">출력변수명</th>
                            <th>타입</th>
                            <th>필수여부</th>
                            <th>설명</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    <tr>
                        <td rowspan="5">common</td>
                        <td>totalCount</td>
                        <td>String</td>
                        <td>Y</td>
                        <td>총 검색 데이터수</td>
                    </tr>
                    <tr>
                        <td>currentPerPage</td>
                        <td>Integer</td>
                        <td>Y</td>
                        <td>페이지 번호</td>
                    </tr>
                    <tr>
                        <td>countPerPage</td>
                        <td>Integer</td>
                        <td>Y</td>
                        <td>페이지당 출력할 결과 Row 수</td>
                    </tr>
                    <tr>
                        <td>errorCode</td>
                        <td>String</td>
                        <td>Y</td>
                        <td>에러 코드</td>
                    </tr>
                    <tr>
                        <td>errorMessage</td>
                        <td>String</td>
                        <td>Y</td>
                        <td>에러 메시지</td>
                    </tr>
                    <tr>
                        <td rowspan="25">juso</td>
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

                    </tbody>
                </table>
            </div>
            <div class="source__item">
                <h5 class="source__title">도로명 주소 표기 방법</h5>
                <ul>
                    <li>
                        검색API 출력결과를 이요한 도로명주소 구성방법
                        <p>시/도 + 시/군/구 + 읍/면 + 도로명 + 건물번호(본번-부번) + 상세주소(동/층/호) + (참고항목: 법정동, 공동주택명) </p>
                        <ol>
                            <li>
                                1.  읍/면이고 공동주택인 경우 : 시/도 + 시/군/구 + 읍/면 + 도로명 + 건물번호(본번-부번) + 상세주소(동/층/호) + (참고항목: 공동주택명)
                                <p>ex) 경기도 가평군 가평읍 가화로 164, 201동 102호(휴먼시아)</p>
                            </li>
                            <li>
                                2. 읍/면이고 공동주택이 아닌 경우(단독주택 또는 일반 건축물) : 시/도 + 시/군/구 + 읍/면 + 도로명 + 건물번호(본번-부번) + 상세주소(동/층/호)
                                <p>ex) 강원도 평창군 대화면 가평로 19-1</p>
                            </li>
                            <li>
                                3. 동이고 공동주택인 경우 : 시/도 + 시/군/구 + 도로명 + 건물번호(본번-부번) + 상세주소(동/층/호) + (참고항목: 법정동, 공동주택명)
                                <p>ex) 경기도 고양시 덕양구 화중로 164, 512동 1004호(화정동, 은빛마을5단지아파트)</p>
                            </li>
                            <li>
                                4. 동이고 공동주택이 아닌 경우(단독주택 또는 일반 건축물) :
                                - 시/도 + 시/군/구 + 도로명 + 건물번호(본번-부번) + 상세주소(동/층/호) + (참고항목: 법정동)
                                <p>ex) 서울특별시 구로구 중앙로 5, 3층(고척동)</p>
                            </li>
                        </ol>
                    </li>
                    <li>
                        검색API 출력결과를 이용한 도로명주소 구성방법
                        <ol>
                            <li>1.검색API 이용 시 사용자가 상세주소를 입력하는 부분은 직접 구현하셔야 합니다. (필수)</li>
                            <li>2. 사용자가 입력한 상세주소가 있는 경우 : 도로명주소 = <span>roadAddrPart1(도로명주소-참고항목제외) + ', ' + 사용자입력 상세주소(자체구현) + roadAddrPart2(도로명주소 참고항목)</span></li>
                            <li>3. 사용자가 입력한 상세주소가 없는 경우 : <span>도로명주소 = roadAddr(전체도로명주소) 또는 roadAddrPart1(도로명주소-참고항목제외) + roadAddrPart2(도로명주소 참고항목)</span></li>
                        </ol>
                    </li>
                </ul>
            </div>
        </div>
        <div class="source__view">
            <div class="source__viewSample">
                <div class="source__viewHeader">
                    <h5 class="source__title">웹 호출 소스</h5>
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
                <div class="source__sampleBox" style="height:2480px;background:#000;">소스</div>
                <div class="source__viewHeader">
                    <h5 class="source__title">어플리케이션 호출 소스</h5>
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
                <div class="source__sampleBox" style="height:3848px;background:#000;">소스</div>

                <div class="source__viewHeader">
                    <h5 class="source__title">검색어필터링 적용 예시</h5>
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
                <div class="source__sampleBox" style="height:885px;background:#000;">소스</div>

                <div class="source__viewHeader">
                    <h5 class="source__title">페이지 처리 활용 예시</h5>
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
                <div class="source__sampleBox" style="height:885px;background:#000;">소스</div>
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