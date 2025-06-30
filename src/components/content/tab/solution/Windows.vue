<script setup>
    import { ref, onMounted, watch } from 'vue'
    import Button from 'primevue/button'
	import StepperContainer from '@/components/common/list/StepperContainer.vue'

	// 스테퍼 데이터 정의
	const stepperSteps = ref([
		{
			title: '설치 및 실행',
		},
		{
			title: '서비스 이용등록',
			type: '신청기간'
		},
		{
			title: '초기자료 업데이트',
			type: '한국지역정보개발원'
		},
		{
			title: '설정 및 검색 테스트',
			type: '신청기간'
		},
	])

</script>

<template>

    <StepperContainer :steps="stepperSteps">
        <template #step-1>
            <ul class="stepperContainer__list">
                <li>배포판 설치 조건 예시
                    <p class="stepperContainer__related">아래와 같은 조건으로 설치하는 상황을 가정하여 설명합니다.</p>

                    <ol class="stepperContainer__tipBoxList">
                        <li>- 네트워크 구분 : 인터넷망</li>
                        <li>- 운영체제 : Windows 64비트</li>
                        <li>- 설치 경로 : C:\jusoro-2.0.0-win64-internet</li>
                    </ol>
                    <p class="stepperContainer__related">위 조건에 맞는 배포판인 jusoro-2.0.0-win64-internet.zip 준비</p>

                </li>
                <li>배포판 설치
                    <ol class="stepperContainer__tipBoxList">
                        <li>- Windows 기본 압축프로그램 또는 보유하고 있는 압축프로그램을 이용하여 jusoro-2.0.0-win64-internet.zip 파일을 압축 해제하여 C:\jusoro-2.0.0-win64-internet 폴더를 생성합니다.</li>
                        <li>- 압축해제 후 C:\jusoro-2.0.0-win64-internet 폴더 하위에 ‘jusoro’와 ‘jdk1.8.0_102_windows64’의 2개 폴더가 생성 되면 정상적으로 설치 된 것입니다.</li>
                    </ol>
                    <div class="stepperContainer__tipBox type01">
                        <div>
                            <strong>Tip</strong>
                        </div>
                        <p class="stepperContainer__tipBoxText">사용상의 편의를 위하여 설치 후 폴더명을 간략하게 변경하셔도 무방합니다<br />예시) C:\jusoro-2.0.0-win64-internet -> C:\jusoro-2.0.0</p>
                    </div>
                </li>
                <li>배포판 실행
                    <ol class="stepperContainer__tipBoxList">
                        <li>1. Windows 탐색기를 이용하는 경우<br />c:\jusoro-2.0.0-win64-internet\jusoro\bin 폴더로 이동 → startup.cmd 파일을 더블 클릭하여 실행<br />※ Windows 32비트의 경우 startup32.cmd 파일을 더블 클릭 합니다.</li>
                        <li>2. Command 창을 이용하는 경우<br />cd c:\jusoro-2.0.0-win64-internet\jusoro\bin 폴더로 이동 → startup.cmd 파일 실행<br />※ Windows 32비트의 경우 startup32.cmd 파일을 실행 합니다.</li>
                    </ol>
                    <div class="stepperContainer__tipBox type01">
                        <div>
                            <strong>Tip</strong>
                        </div>
                        <p class="stepperContainer__tipBoxText">솔루션을 종료 할 경우 실행 파일과 동일한 위치에 있는 shutdown.cmd (Windows 32비트는 shutdown32.cmd) 이용<br />주소검색솔루션이 설치 된 서버와 다른 PC에서 관리화면에 접속하시는 경우 활용가이드 [5.참고사항(FAQ)]항목을 참고하시기 바랍니다</p>
                    </div>
                </li>
                <li>JAVA 사용
                    <p class="stepperContainer__related">최초 실행 시 Windows 보안경고가 표시 되는 경우 '액세스 허용'을 클릭하여 Windows 방화벽에 Java에 대한 액세스 허용 등록 과정을 수행합니다.</p>
                </li>
                <li>정상 설치 확인
                    <p class="stepperContainer__related">웹브라우저에 다음 URL을 입력하여 정상 동작 확인<br />http://127.0.0.1:[포트번호] 또는 http://[서버IP]:[포트번호]<Br />예시) http://127.0.0.1:8983</p>
                    <div class="stepperContainer__tipBox type01">
                        <div>
                            <strong>Tip</strong>
                        </div>
                        <p class="stepperContainer__tipBoxText">기본 포트는 8983으로 설정 되어 있습니다. 이용 포트번호를 변경 시 활용가이드 [5.참고사항(FAQ)] 항목을 참고하시기 바랍니다</p>
                    </div>
                </li>
                <li>관리자 IP 설정
                    <ol class="stepperContainer__tipBoxList">
                        <li>
                          - 관리자 IP 설정 목적<br />
                          주소검색솔루션 관리 화면은 보안상 솔루션이 설치 된 PC 또는 서버에서 접속한 경우에만 접속 가능하도록 초기 설정 되어 있습니다.<br />
                          주소검색솔루션을 설치 하신 PC 또는 서버 이외의 PC를 이용하여 관리자 화면에 접근하시기 위해서는 아래와 같이 설정하시기 바랍니다.
                        </li>
                        <li>- 관리자 IP 설정 방법<br />
                            1.[주소검색솔루션 설치 디렉토리]/jusoro/server/etc/jetty.xml 파일을 문서편집기를 이용하여 엽니다.<br />
                            2.121 ~ 123라인의 코멘트를 제거하고 관리자 화면에 접근을 허용하고자 하는 IP를 기술합니다.<br />
                            3.수정한 jetty.xml 파일을 저장하신 후 주소검색솔루션을 재기동 합니다.
                        </li>
                    </ol>
                    <div class="stepperContainer__tipBox type01">
                        <div>
                            <strong>Tip</strong>
                        </div>
                        <p class="stepperContainer__tipBoxText">특정한 규칙을 가진 다수의 관리자 IP를 설정하거나 사내 인트라넷과 같이 특정 IP에서만 접속하여 이용하는 경우 활용가이드 [5.참고사항(FAQ)] 항목을 참고하시기 바랍니다</p>
                    </div>
                </li>
                
            </ul>
        </template>

        <template #step-2>
            <ul class="stepperContainer__list">
              <li>도로명주소 업데이트서버를 이용한 최신 도로명주소 현행화를 수행하기 위하여 최초 접속 시 서비스 이용등록을 수행합니다.</li>
              <li>'서비스 이용 등록' 버튼 클릭하면 이용등록 창이 표시됩니다.</li>
              <li>업체명(기관명)을 입력 후 등록버튼을 클릭하면 이용등록이 완료됩니다.
                <ul class="stepperContainer__related">
                  <li>- 업체명(기관명)은 25글자 이내로 입력해 주시기 바랍니다.</li>
                  <li>- 이용등록 시 네트워크 연결이 되어 있지 않은 경우 또는 도로명주소업데이트서버에 접속할 수 없는 경우</li>
                  <li>- '사용등록에 실패했습니다[error:::403:::Forbidden]' 오류가 발생합니다. 네트워크설정을 확인 후 재시도 하시기 바랍니다.</li>
                </ul>
              </li>
            </ul>
            <div class="stepperContainer__image">
              <img src="@/assets/images/data_provision/img_win01.png" alt=" 샘플 이미지" />
            </div>
        </template>

        <template #step-3>
            <ul class="stepperContainer__list">
              <li>도로명주소 업데이트서버를 이용한 최신 도로명주소 현행화를 수행하기 위하여 최초 접속 시 서비스 이용등록을 수행합니다.</li>
              <li>'서비스 이용 등록' 버튼 클릭하면 이용등록 창이 표시됩니다.</li>
              <li>업체명(기관명)을 입력 후 등록버튼을 클릭하면 이용등록이 완료됩니다.
                <ul class="stepperContainer__related">
                  <li>- 업체명(기관명)은 25글자 이내로 입력해 주시기 바랍니다.</li>
                  <li>- 이용등록 시 네트워크 연결이 되어 있지 않은 경우 또는 도로명주소업데이트서버에 접속할 수 없는 경우 '사용등록에 실패했습니다[error:::403:::Forbidden]' 오류가 발생합니다. 네트워크설정을 확인 후 재시도 하시기 바랍니다.</li>
                </ul>
              </li>
            </ul>
            <div class="stepperContainer__image">
              <img src="@/assets/images/data_provision/img_win02.png" alt=" 샘플 이미지" />
            </div>
        </template>

        <template #step-4>
            <ul class="stepperContainer__list">
              <li>설정 및 검색 테스트 상세 설명
                <ul class="stepperContainer__related">
                  <li>1.데이터 갱신 배치 설정 : 지정한 시간에 솔루션에 내장 된 스케쥴러에 의해 도로명주소업데이트 서버를 이용하여 주소를 현행화합니다.</li>
                  <li>2.주소검색 설정 : 팝업서비스를 이용하는 경우 화면에 표시되는 항목을 설정합니다.</li>
                  <li>3.주소검색 팝업서비스 : 팝업서비스 이용 방법을 테스트 할 수 있습니다.</li>
                  <li>4.주소검색 API서비스 : 검색API서비스 이용 방법을 테스트 할 수 있습니다.</li>
                </ul>
              </li>
            </ul>
            <div class="stepperContainer__image">
              <img src="@/assets/images/data_provision/img_win03.png" alt=" 샘플 이미지" />
            </div>
        </template>
    </StepperContainer>


</template>


<style lang="scss" scoped>
	@use '@/assets/scss/contents/table/datatable';
	@use '@/assets/scss/contents/page/downloadRequestDetails';
	@use '@/assets/scss/contents/badge/commonBadge';
	@use '@/assets/scss/contents/input/input_checkbox';
	@use '@/assets/scss/contents/box/box';
	@use '@/assets/scss/contents/list/stepper';


</style> 