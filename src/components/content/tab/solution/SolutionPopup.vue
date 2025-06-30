<script setup>
    import { ref, onMounted, watch } from 'vue'
    import Button from 'primevue/button'
    import Dropdown from 'primevue/dropdown'

    const selectedLanguage = ref('java')
    const languageOptions = ref([
        { label: 'JAVA', value: 'java' },
        { label: '.NET', value: 'net' }
    ])

	const handleList = () => {
		// 목록으로 이동
	}

</script>

<template>
    <div class="commonBox__tipBox type01">
        기본 검색화면이 포함된 팝업서비스로 팝업옵션(색상변경, 로고, 크기 등) 설정에 따라 이용할 수 있습니다. <br />주소검색 설정에 따라 영문도로명주소, 사서함, 구)우편번호 검색을 할 수 있으며, 검색결과에 도서지역을 표시 및 자동완성 옵션을 사용할 수 있습니다.
    </div>

    <div class="source">
        <div class="source__description">
            <div class="source__item">
                <h5 class="source__title">검색결과 출력항목</h5>
                <table class="source__table">
                    <colgroup>
                        <col style="width: 120px;"/>
                        <col style="width: 80px;"/>
                        <col style="width: 80px;"/>
                        <col style="width: 300px;"/>
                    </colgroup>
                    <caption>검색결과 출력항목 테이블입니다.항목으로는 출력변수명, 타입, 필수여부, 설명가 있습니다.</caption>
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
                            <td>지번 정보</td>
                        </tr>
                        <tr>
                            <td>engAddr</td>
                            <td>String</td>
                            <td>Y</td>
                            <td>도로명 주소(영문)</td>
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
                            <td>bdMgtList</td>
                            <td>String</td>
                            <td>Y</td>
                            <td>건물관리번호</td>
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
                    </tbody>
                </table>
            </div>
        </div>
        <div class="source__view">
            <div class="source__viewSample">
                <div class="source__viewHeader">
                    <h5 class="source__title">팝업 화면 호출</h5>
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
                <div class="source__sampleBox" style="height:491px;background:#000;">소스</div>
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
                <div class="source__sampleBox" style="height:491px;background:#000;">소스</div>
            </div>
        </div>
    </div>

    <div class="source">
        <div class="source__description">
            <div class="source__item">
                <h5 class="source__title">팝업화면 옵션</h5>
                <table class="source__table">
                    <colgroup>
                        <col style="width: 66px;"/>
                        <col style="width: 80px;"/>
                        <col style="width: 80px;"/>
                        <col style="width: 186px;"/>
                        <col style="width: 168px;"/>
                    </colgroup>
                    <caption>팝업화면 옵션 테이블입니다.항목으로는 출력변수명, 타입, 필수여부, 설명가 있습니다.</caption>
                    <thead>
                        <tr>
                            <th colspan="2">요청변수명</th>
                            <th>타입</th>
                            <th>필수여부</th>
                            <th>기본값</th>
                        </tr>
                    </thead>
                    <tbody>

                    <tr>
                      <td colspan="2">width</td>
                      <td>Number</td>
                      <td>주소검색팝업 창 너비</td>
                      <td>450</td>
                    </tr>
                    <tr>
                      <td colspan="2">height</td>
                      <td>Number</td>
                      <td>주소검색팝업 창 높이</td>
                      <td>600</td>
                    </tr>
                    <tr>
                      <td colspan="2">left</td>
                      <td>Number</td>
                      <td>주소검색팝업 위치 X값</td>
                      <td>화면 중앙</td>
                    </tr>
                    <tr>
                      <td colspan="2">Top</td>
                      <td>Number</td>
                      <td>주소검색팝업 위치 y값</td>
                      <td> 화면중앙</td>
                    </tr>
                    <tr>
                      <td colspan="2">autoClose</td>
                      <td>Boolean</td>
                      <td>검색결과 선택 시 주소검색 팝업 자동 닫힘 유무</td>
                      <td>Y</td>
                    </tr>
                    <tr>
                      <td colspan="2">popupName</td>
                      <td>String</td>
                      <td>검색결과 선택 시 주소검색 팝업 자동 닫힘 유무</td>
                      <td>도로명주소 검색</td>
                    </tr>
                    <tr>
                      <td colspan="2">logoText</td>
                      <td>String</td>
                      <td>주소검색팝업 하단 표시내용</td>
                      <td>powered by business.juso.go.kr</td>
                    </tr>
                    <tr>
                      <td colspan="2">searchType</td>
                      <td>Array</td>
                      <td>ADDR:도로명주소ADDR_ENG:영문도로명주소POSTBOX_ADDR:사서함OLD_ADDR:구 우편번호</td>
                      <td>ADDR</td>
                    </tr>
                    <tr>
                      <td colspan="2">autocompleteUseYn</td>
                      <td>String</td>
                      <td>도로명주소 자동완성 사용 여부</td>
                      <td>N</td>
                    </tr>
                    <tr>
                      <td colspan="2">farNmUseYn</td>
                      <td>String</td>
                      <td>도로명주소 도서지역 표시 여부</td>
                      <td>N</td>
                    </tr>
                    <tr>
                      <td colspan="2">selectSigUseYn</td>
                      <td>String</td>
                      <td>시·군·구 선택 사용 여부</td>
                      <td>N</td>
                    </tr>
                    <tr>
                      <td colspan="2">defaultSigCd</td>
                      <td>String</td>
                      <td>기본 시군구 코드</td>
                      <td>00000</td>
                    </tr>
                    <tr>
                      <td rowspan="8">theme</td>
                      <td>bgColor</td>
                      <td>String</td>
                      <td>바탕 배경 색상</td>
                      <td>#F8F8F8</td>
                    </tr>
                    <tr>
                      <td>outlineColor</td>
                      <td>String</td>
                      <td>테두리 색상</td>
                      <td>#FFFFFF</td>
                    </tr>
                    <tr>
                      <td>searchBgColor</td>
                      <td>String</td>
                      <td>검색 창 배경 색상</td>
                      <td>#FFFFFF</td>
                    </tr>

                    <tr>
                      <td>queryTextColor</td>
                      <td>String</td>
                      <td>검색 창 글자 색상</td>
                      <td>#222222</td>
                    </tr>
                    <tr>
                      <td>contentBgColor</td>
                      <td>String</td>
                      <td>본문 배경 색상</td>
                      <td>#FFFFFF</td>
                    </tr>
                    <tr>
                      <td>pageBgColor</td>
                      <td>String</td>
                      <td>페이지 표시 배경 색상</td>
                      <td>#F8F8F8</td>
                    </tr>
                    <tr>
                      <td>textColor</td>
                      <td>String</td>
                      <td>기본 글자 색상</td>
                      <td>#000000</td>
                    </tr>
                    <tr>
                      <td>logoTextColor</td>
                      <td>String</td>
                      <td>로고 글자 색상</td>
                      <td>#667379</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="source__view">
            <div class="source__viewSample">
                <div class="source__viewHeader">
                    <h5 class="source__title">색상변경 예시</h5>
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
                <div class="source__sampleBox" style="height:389px;background:#000;">소스</div>
                <div class="source__viewHeader">
                    <h5 class="source__title">팝업 타이틀 및 로고변경 예시</h5>
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
                <div class="source__sampleBox" style="height:253px;background:#000;">소스</div>
                <div class="source__viewHeader">
                    <h5 class="source__title">팝업 크기변경 예시</h5>
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
                <div class="source__sampleBox" style="height:236px;background:#000;">소스</div>
            </div>
        </div>
    </div>

    <div class="commonBox">
      <h4 class="commonBox__title">주소검색솔루션 API서비스</h4>
        <p class="commonBox__text">주소검색 결과를 xml, json 파일형식으로 제공 하며, 검색어 입력 및 조회 화면은 사용자가 구현하셔야 합니다.</p>
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
                    <caption>API 정보 테이블입니다.항목으로는 호출방식, 요청 URL, 출력결과 있습니다.</caption>
                    <thead>
                        <tr>
                            <th>호출방식</th>
                            <th>요청 URL</th>
                            <th>출력결과</th>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>GET</td>
                        <td>http://[서버IP]:[서버포트]/app/search/addrSearchApi.do</td>
                        <td>xml, json</td>
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
                    <caption>요청변수 테이블입니다.항목으로는 출력변수명, 타입, 필수여부, 설명가 있습니다.</caption>
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
                        <td>currentPage</td>
                        <td>Integer</td>
                        <td>Y</td>
                        <td>1</td>
                        <td>현재 페이지 번호</td>
                      </tr>
                      <tr>
                        <td>countPerPage</td>
                        <td>Integer</td>
                        <td>Y</td>
                        <td>10</td>
                        <td>페이지당 출력할 결과 Row 수</td>
                      </tr>
                      <tr>
                        <td>keyword</td>
                        <td>String</td>
                        <td>Y</td>
                        <td>-</td>
                        <td>주소 검색어</td>
                      </tr>
                      <tr>
                        <td>reSultType</td>
                        <td>String</td>
                        <td>N</td>
                        <td>xml</td>
                        <td>검색결과형식 설정(xml, json)</td>
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
                    <caption>출력결과 테이블입니다.항목으로는 출력변수명, 타입, 필수여부, 설명가 있습니다.</caption>
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
                        <td rowspan="23">juso</td>
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
                        <td>rdMgtSn</td>
                        <td>String</td>
                        <td>Y</td>
                        <td>도로명코드</td>
                      </tr>
                      <tr>
                        <td>bdMgtSn</td>
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
                        <td>Y</td>
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
                  </tbody>
                </table>
            </div>
            <div class="source__item">
                <h5 class="source__title">에러코드</h5>
                <table class="source__table">
                    <colgroup>
                        <col style="width: 120px;"/>
                        <col style="width: 460px;"/>
                    </colgroup>
                    <caption>에러코드 테이블입니다.항목으로는 에러코드, 에러메시지 있습니다.</caption>
                    <thead>
                        <tr>
                            <th>에러코드</th>
                            <th>에러메시지</th>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>0</td>
                        <td>정상</td>
                      </tr>
                      <tr>
                        <td>-999</td>
                        <td>시스템에러</td>
                      </tr>
                      <tr>
                        <td>E0005</td>
                        <td>검색어가 입력되지 않았습니다.</td>
                      </tr>
                      <tr>
                        <td>E0006</td>
                        <td>주소를 상세히 입력해 주시기 바랍니다.</td>
                      </tr>
                      <tr>
                        <td>E9999</td>
                        <td>장기간 주소정보를 현행화하지 않아 서비스가 중단 되었습니다.</td>
                      </tr>
                    </tbody>
                </table>
            </div>
            <div class="source__item">
                <h5 class="source__title">XML 검색결과 예시</h5>
                <div>예시코드</div>
            </div>
            <div class="source__item">
                <h5 class="source__title">JSON 검색결과 예시</h5>
                <div>예시코드</div>
            </div>
        </div>
        <div class="source__view">
            <div class="source__viewSample">
                <div class="source__viewHeader">
                    <h5 class="source__title">웹호출 소스</h5>
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
                <div class="source__sampleBox" style="height:1868px;background:#000;">소스</div>

            </div>
        </div>
    </div>

</template>


<style lang="scss" scoped>
	@use '@/assets/scss/contents/table/datatable';
	@use '@/assets/scss/contents/page/downloadRequestDetails';
	@use '@/assets/scss/contents/badge/commonBadge';
	@use '@/assets/scss/contents/input/input_checkbox';
	@use '@/assets/scss/contents/box/box';
	@use '@/assets/scss/contents/list/source';
</style> 