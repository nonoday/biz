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
        서비스는 별도의 행정절차 없이 연계 신청 즉시 승인키가 발급되며, 가이드 및 샘플소스를 활용하여 구축 후 바로 이용 가능합니다.<br />
        도로명주소 변동자료는 매일 오전 07시 이후 다운로드 가능합니다. 인터넷망, 행정망 모두 이용 가능합니다. <br />
        행정망 서비스를 위한 도로명주소 연계 URL은 별도로 문의 주시기 바랍니다.  [문의] 1588-0061(7번 도로명주소)
    </div>
	<div class="commonBox">
		<h4 class="commonBox__title">시스템 구축 언어별(JAVA, .NET) 연계적용방법</h4>
        <p class="commonBox__text">소스 및 가이드(연계에 필요한 클라이언트 라이브러리 포함)</p>

        <div class="commonBox__download">
            <p class="commonBox__downloadTitle">인터넷망</p>
            <ul class="commonBox__functionList">
                <li><Button class="commonBox__downloadButton" title="JAVA 다운로드">JAVA 다운로드</Button></li>
                <li><Button class="commonBox__downloadButton" title="NET 다운로드">.NET 다운로드</Button></li>
            </ul>
        </div>
        <div class="commonBox__download">
            <p class="commonBox__downloadTitle">행정망</p>
            <ul class="commonBox__functionList">
                <li><Button class="commonBox__downloadButton" title="JAVA 다운로드">JAVA 다운로드</Button></li>
                <li><Button class="commonBox__downloadButton" title="NET 다운로드">.NET 다운로드</Button></li>
            </ul>
        </div>
    </div>

    <div class="source">
        <div class="source__description">
            <div class="source__item">
                <h5 class="source__title">JAVA 기반 제공파일</h5>
                <p class="source__text">JAVA기반일 경우, 일변동 DB 자동제공 클라이언트 API에는 아래와 같은 파일이 제공됩니다.</p>
                <ul class="source__list">
                    <li>ADSClient-x.x.jar : 클라이언트 라이브러리(x.x : 버전 넘버), 이 jar 파일은 적용하는 application의 classpath에 위치해야 합니다.</li>
                    <li>ADSClient-x.x.zip : 클라이언트 라이브러리의 소스파일, 이 zip 파일은 API를 통해 개발하지 않고, 소스를 수정하여 사용할 수 있습니다.</li>
                    <li>ADSClient-x.x-doc.zip : API의 Java Document입니다. 라이브러리에서 사용되는 함수에 대한 자세한 설명을 보실수 있습니다.</li>
                    <li>일변동 DB 자동제공_가이드_JAVA.pdf : 일변동 DB 자동제공 가이드를 통해서 서비스를 적용하기 위한 설명을 확인할 수 있습니다.</li>
                </ul>
            </div>
            <div class="source__item">
                <h5 class="source__title">.NET 기반 제공파일</h5>
                <p class="source__text">.NET기반일 경우, 일변동 DB 자동제공 클라이언트 API에는 아래와 같은 파일이 제공됩니다.</p>
                <ul class="source__list">
                    <li>ADSClient-dll-x.x.jar : 클라이언트 라이브러리(x.x : 버전 넘버), 이 DLL 파일은 적용하는 application에 위치해야 합니다.</li>
                    <li>ADSClient-x.x.zip : 클라이언트 라이브러리의 소스파일, 이 zip 파일은 DLL를 통해 개발하지 않고, 소스를 수정하여 사용할 수 있습니다.</li>
                    <li>일변동 DB 자동제공_가이드_닷넷.pdf : 일변동 DB 자동제공 가이드를 통해서 서비스를 적용하기 위한 설명을 확인할 수 있습니다.</li>
                </ul>
            </div>
            <div class="source__item">
                <h5 class="source__title">주요입력파라미터 정보</h5>
                <p class="source__text">.NET기반일 경우, 일변동 DB 자동제공 클라이언트 API에는 아래와 같은 파일이 제공됩니다.</p>
                <ul class="source__list">
                    <li>승인키[필수] : 변동자료 연계서비스 사용을 위해 제공받은 승인키</li>
                    <li>요청자료 구분[필수] : 제공 받고자 하는 요청자료의 구분값(가이드 문서 참고)</li>
                    <li>변동자료 날짜구분[필수] : 일변동 자료(D), 월변동 자료(M)으로 구분되며, 매칭데이터및 지도 자료는 D만 가능함, 기초구역관련 정보는 M</li>
                    <li>재반영 포함여부[필수] : 재반영 데이터를 포함하여 제공받을지 여부(기본으로 Y  설정을 통해서, 재반영 데이터도 일변동 자료 제공시 함께 적용할 수 있도록 해야합니다.)</li>
                    <li>요청 데이터 일자(From) : 일반적으로 일변동 자료 요청시에는 해당 값을 요청하지 않습니다.</li>
                    <li>요청 데이터 일자(To) : 일반적으로 일변동 자료 요청시에는 해당 값을 요청하지 않습니다.</li>
                </ul>
            </div>
        </div>
        <div class="source__view">
            <div class="source__viewSample">
                <div class="source__viewHeader">
                    <h5 class="source__title">API적용 샘플소스</h5>
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
                <div class="source__sampleBox" style="height:2332px;background:#000;">소스</div>
            </div>
        </div>
    </div>

    <div class="source">
        <div class="source__description">
            <div class="source__item">
                <h5 class="source__title">데이터 파일 저장 경로 설정</h5>
                <p class="source__text"></p>
                <ul class="source__list">
                    <li>ads.setFilePath(String filePath)로 파일을 저장할 기본 Path를 설정.<br/>EX) ads.setFilePath("addrInfo");</li>
                    <li>setCreateDateDirectory(String datePattern)로 해당 날짜형식의 하위 디렉토리를 자동 생성 가능.<br/>입력 파라미터인 String datePattern값이 null 이면 기본 'YYYYMMDD' 형식의 디렉토리에 변동 자료가 저장.<br/>입력 파라미터는 ADSUtils.YYYYMMDD, ADSUtils.YYMMDD, ADSUtils.YYYYY, ADSUtils.MMDD 4종류를 제공.<br/>EX) ads.setCreateDateDirectory(ADSUtils.YYMMDD);</li>
                    <li>setUsingDate(int usingDatePattern) 통해서, 디렉토리 생성시 일변동자료의 기준일, 일변동자료 파일 생성일을 기준으로 해당 디렉토리에 파일이 저장.<br/>일변동자료 기준일(ADSUtils.FILE_DATE) : 변동내역의 기준일자 입니다.<br/>예) 20150101일 변동 자료 → 20150101일자에 해당하는 디렉토리에 파일이 저장.<br/>입력 파라미터는 ADSUtils.YYYYMMDD, ADSUtils.YYMMDD, ADSUtils.YYYYY, ADSUtils.MMDD 4종류를 제공.	<br/>EX) ads.setUsingDate(ADSUtils.MAKE_DATE);</li>
                </ul>
            </div>
        </div>
        <div class="source__view">
            <div class="source__viewSample">
                <div class="source__viewHeader">
                    <h5 class="source__title">변동자료 및 재반영 데이터 다운로드 서비스 호출</h5>
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
                <div class="source__sampleBox" style="height:170px;background:#000;">소스</div>
            </div>
        </div>
    </div>
    
    <div class="source">
        <div class="source__description">
            <div class="source__item">
                <h5 class="source__title">결과 데이터 확인</h5>
                <p class="source__text">제공 받은 데이터의 정보 확인 가능.<br />제공 받은 데이터 파일을 정렬하여 ArrayList로 결과값을 제공.<br />제공받은 각 파일의 정보는 ReceiveData 객체로 제공되며, 아래와 같이 확인 가능.</p>
                <ul class="source__list">
                    <li>receiveData.getFileName() 파일명 정보</li>
                    <li>receiveData.getFilePath() 파일 절대경로 </li>
                    <li>receiveData.getRetryYn() 재반영 데이터 여부(Y:재반영데이터, N:일반 변동데이터)</li>
                    <li>receiveData.getFileDate() 변동자료 파일기준일(YYYYMMDD 형식)</li>
                    <li>receiveData.getCreateDate() 변동자료 파일 생성일(YYYYMMDD 형식)</li>
                    <li>receiveData.getCntcCode() 요청자료 코드</li>
                    <li>receiveData.getFileSize() 파일 사이즈(byte)</li>
                    <li>receiveData.getResCode() 응답코드</li>
                    <li>receiveData.getResMsg() 응답메시지(한글)</li>
                </ul>
            </div>
        </div>
        <div class="source__view">
            <div class="source__viewSample">
                <div class="source__viewHeader">
                    <h5 class="source__title">결과 데이터 정렬   </h5>
                    <div class="source__function">
                        <Button class="source__copyButton">복사</Button>
                    </div>
                </div>
                <div class="source__sampleBox" style="height:138px;background:#000;">소스</div>
                <div class="source__viewHeader">
                    <h5 class="source__title">결과 데이터 확인소스</h5>
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
                <div class="source__sampleBox" style="height:331px;background:#000;">소스</div>
            </div>
        </div>
    </div>


	<div class="commonBox">
		<h4 class="commonBox__title">기타 언어 연계적용방법</h4>
        <p class="commonBox__text">도로명주소 연계는 개발언어의 종류와 상관없이 URL정보를 만들어 도로명주소 서버로 요청하면, 해당하는 자료를 제공받을 수 있는 구조입니다.<br />아래의 순서와 기준에 맞게 개발하시면, Java/.Net 외의 개발언어로 도로명주소 연계를 제공받을 수 있습니다.</p>

        <div class="commonBox__download">
            <p class="commonBox__downloadTitle">가이드</p>
            <Button class="commonBox__downloadButton" title="다운로드">다운로드</Button>
        </div>
    </div>

    <div class="source">
        <div class="source__description">
            <div class="source__item">
                <h5 class="source__title">첫번째 URL 정보 요청 (필수)</h5>
                <p class="source__text">URL정보를 만들어 연계정보를 요청하면, 해당하는 변동자료를 수신받을 수 있습니다.</p>
                <ul class="source__list">
                    <li>SAMPLE URL : http://update.juso.go.kr/updateInfo.do?app_key=인증키&date_gb=D&cntc_cd=009004&retry_in=Y&req_dt=20180501</li>
                    <li>app_key[필수] : 도로명주소 연계 신청을 통해 발급받은 승인키</li>
                    <li>date_gb[필수] : 날짜구분 코드(D:일변동)</li>
                    <li>cntc_cd[필수] : 자료요청 구분 코드(JAVA 또는 .NET 가이드문서 참조)</li>
                    <li>retry_in[필수]: 재반영 데이터 포함여부(Y:재반영 데이터 포함 제공, N:재반영 데이터 미제공)</li>
                    <li>req_dt  : 요청일자 From(요청일자 설정시, 해당 일에 대한 정보를 제공 받는다.)</li>
                    <li>req_dt2 : 요청일자 To(요청기간동안의 데이터를 요청시 설정, 단 From~To 사이의 기간이 10일을 초과할 수 없다.)</li>
                </ul>
            </div>
            <div class="source__item">
                <h5 class="source__title">두번째, 수신정보 확인(필수)</h5>
                <p class="source__text">Response 수신정보를 100Byte로 나눠 저장합니다. 특정경로에 생성일자폴더(YYMMDD)를 만들고, 100Byte 이후부터 파일사이즈 길이만큼 데이터를 읽어 파일을 생성합니다.</p>
                <ul class="source__list">
                    <li>SAMPLE DATA : 0120180501AlterD.JUSUBU.20180501.ZIP</li>
                    <li>0~2 Byte   : 파일 순번</li>
                    <li>2~10 Byte  : 기준일</li>
                    <li>10~60 Byte : 파일명(공백제거)</li>
                    <li>60~70 Byte : 파일사이즈</li>
                    <li>70~75 Byte : 응답코드</li>
                    <li>75~81 Byte : 제공받은 자료요청 구분 코드(cntc_cd)정보</li>
                    <li>81~82 Byte : 재반영데이터 여부</li>
                    <li>82~90 Byte : 생성일자</li>
                </ul>
            </div>
            <div class="source__item">
                <h5 class="source__title">두번째, 수신정보 확인(필수)</h5>
                <p class="source__text">Response 수신정보를 100Byte로 나눠 저장합니다. 특정경로에 생성일자폴더(YYMMDD)를 만들고, 100Byte 이후부터 파일사이즈 길이만큼 데이터를 읽어 파일을 생성합니다.</p>
                <p class="source__text">응답코드별 의미</p>
                <ul class="source__list">
                    <li>P0000 : 정상 반영</li>
                    <li>P1000 : 이미 정상 반영이 이루어진 상태입니다. 중복요청 필요하면, URL정보 호출 시 req_date(수신받을 날짜)값을 입력하시기 바랍니다.</li>
                    <li>E0001 : 승인키가 입력되지 않았습니다. URL정보 호출 시 app_key(승인키)값을 입력하시기 바랍니다.</li>
                    <li>E0002 : 해당 승인키가 미승인상태입니다.</li>
                    <li>E0003 : 존재하지않는 승인키 입니다. 발급받은 승인키와 일치하는지 다시 확인하시기 바랍니다.</li>
                    <li>E0004 : 도로명주소 연계 신청으로 발급받은 승인키를 사용하시기 바랍니다.</li>
                    <li>E1001 : 요청하신 날짜에 해당하는 파일이 존재하지 않습니다.</li>
                    <li>E1002 : 자료요청 구분값이 입력되지 않았습니다. URL정보 호출 시 cntc_cd(자료요청 구분)값을 입력하시기 바랍니다.</li>
                    <li>E1004 : 요청기간이 최대 기일을 초과 하였습니다.(MAX 10일)</li>
                    <li>E1005 : 응답메세지 생성 과정에서 예기치 않은 오류가 발생했습니다.</li>
                    <li>E1006 : URL정보 호출 시 date_gb(구분)값을 입력하시기 바랍니다.</li>
                    <li>E1007 : 요청일자는 YYYYMMDD 형식입니다. URL정보 호출 시 req_date, req_date_to 값이 빈값이 아닐 경우, 형식을 확인하시기 바랍니다.</li>
                    <li>E1008 : 승인되지 않은 cntc_cd(자료요청 구분)값이 입력되었습니다.</li>
                    <li>E1999 : 정의되지 않은 오류가 발생했습니다. </li>
                </ul>
            </div>
        </div>
        <div class="source__view">
            <div class="source__viewSample">
                <div class="source__viewHeader">
                    <h5 class="source__title">API적용 샘플소스</h5>
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
                <div class="source__sampleBox" style="height:929px;background:#000;">소스</div>
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