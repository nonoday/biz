<script setup>
    import { ref, onMounted, computed } from "vue";
    import DataTable from 'primevue/datatable'
    import Column from 'primevue/column';
    import ColumnGroup from 'primevue/columngroup';
    import Row from 'primevue/row';
    import Button from 'primevue/button';
    import InputText from 'primevue/inputtext';
    import RadioButton from "primevue/radiobutton";
    import Checkbox from "primevue/checkbox";
    import Breadcrumb from 'primevue/breadcrumb'
    import CustomDropdown from '@components/dropdown/CustomDropdown.vue';
    import CustomInputText from '@components/input_text/CustomInputText.vue';
    import CustomPaginator from '@components/paginator/CustomPaginator.vue';
    import HeaderTitle from '@components/title/HeaderTitle.vue';


    // 브레드크럼
    const breadcrumbs = [
        {
            label:'메인',
            title:'메인으로 이동',
            url: '/',
        },
        {
            label:'주소정보 조회',
            title:'주소정보 조회로 이동',
            url: '/',
        },
        {
            label:'사물 주소 조회',
            title:'사물 주소로 이동',
            url: '/',
        },

    ]

</script>

<template>
    <Breadcrumb :model="breadcrumbs" aria-label="네비게이션">
        <template #item="{ item }">
            <a :href="item.url" :title="item.title">{{item.label}}</a>
        </template>
    </Breadcrumb>

    <HeaderTitle title="개인정보 처리방침" />

    <div class="joinFrm">
    <b>제1조(개인정보의 처리 목적)</b><br>
    "도로명주소 누리집"은 다음 각 호에서 열거한 목적을 위하여 최소한으로 개인정보를 처리하고 있습니다. 처리한 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행하고 있습니다.
    <br>
    1. 주소정보의 제공 신청<br>
    도로명주소법 시행규칙 제53조제3항제2호,제3호에 따라 도로명주소 전자지도 및 위치(좌표) 정보가 포함된 주소정보의 제공을 요청하는 경우 제공되는 주소정보의 해외반출 금지, 목적외 사용 제한 및 기타 보안서약서 상의 내용 준수 실태 점검 등을 위해 이용
    <br>
    2. 주소정보의 연계 신청<br>
    도로명주소법 시행규칙 제53조제3항제2호,제3호에 따른 도로명주소 전자지도 및 위치(좌표) 정보가 포함된 주소정보를 「주소정보 제공에 관한 규정」 제9조에 따라 원격 정보제공서비스로 연계하여 제공받으려는 경우 주소정보의 해외반출 금지, 목적외 사용 제한 및 기타 보안서약서 상의 내용 준수 실태 점검, 이용기간의 연장 및 이용 수수료 안내 등을 위해 이용
    <br>
    3. 주소동일성 영문증명서 신청<br>
    도로명주소법 시행령 제51조제2항제7조에 따른 주소동일성 영문증명서 발급 신청 정보 관리<br>
    <br>
    
    <b>제2조(개인정보의 처리 및 보유기간)</b><br>
    "도로명주소 누리집"에서 처리하는 개인정보는 수집·이용 목적으로 명시한 범위 내에서 처리하며, 개인정보보호법 및 관련 법령에서 정하는 보유기간을 준용하여 이행하고 있습니다.<br>
    1. 주소정보의 제공 요청<br>
    - 수집근거 : 정보주체의 동의, 도로명주소법 제25조, 도로명주소 시행규칙 제53조<br>
    - 보유기간 : 3년<br>
    2. 주소정보의 연계 신청<br>
    - 수집근거 : 정보주체의 동의, 도로명주소법 제25조, 도로명주소법 시행규칙 제53조<br>
    - 보유기간 : 서비스 이용기간 종료 후 3년까지<br>
    3. 주소동일성 영문증명서 발급 신청<br>
    - 수집근거 : 도로명주소법 제27조, 도로명주소법 시행령 제51조<br>
    - 보유기간 : 3년<br>
    <br>
    
    <b>제3조(처리하는 개인정보 항목)</b><br>
    "도로명주소 누리집"은 다음의 개인정보 항목을 처리하고 있습니다.<br>
    1. 주소정보의 제공 및 연계서비스 신청인 정보<br>
    - 필수항목 : 성명(법인명), 생년월일(법인등록번호), 전화번호, 주소(전자우편)<br>
    2. 주소정보의 제공 인수 확인 수령인 정보<br>
    - 필수항목 : 성명(법인명), 생년월일(법인등록번호), 전화번호, 주소(전자우편)<br>
    3. 주소동일성 영문증명서 발급 신청 정보<br>
    - 필수항목 : 회사명(법인명), 전화번호, 주소(전자우편), 영문사업자등록증<br>
    <br>
    
    <b>제4조(개인정보 처리업무의 위탁에 관한 사항)</b><br>
    "도로명주소 누리집"은 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.<br><br>
    가. 수탁처리 기관<br>

    <div class="layerTable tabContents" tabindex="0" style="margin: 10px 0px;">
        <table>
            <caption class="blind">도로명주소 통계정보 테이블로 연번, 구분, 지역수의 통계 정보를 제공합니다.</caption>
            <colgroup><col style="width:auto"><col style="width:auto"><col style="width:auto"><col style="width:auto"><col style="width:auto"></colgroup>
            <thead>
                <tr>
                    <th>수탁기관명</th><th>주소</th><th>전화</th><th>근무시간</th><th>위탁업무</th>
                </tr>
            </thead>	
            <tbody>	
                <tr>	
                    <td>한국지역정보개발원</td>	
                    <td>서울특별시 마포구 성암로 301</td>	
                    <td>02-2031-9668</td>	
                    <td>09:00~18:00</td>	
                    <td>국가주소정보시스템 및 누리집<br>유지관리를 위한 개인정보 처리 업무</td>		
                </tr>	
            </tbody>
        </table>
    </div>
    나. 수탁처리 수행업체<br>
    <div class="layerTable tabContents" tabindex="0" style="margin: 10px 0px;">
        <table>
            <caption class="blind">도로명주소 통계정보 테이블로 연번, 구분, 지역수의 통계 정보를 제공합니다.</caption>
            <colgroup><col style="width:auto"><col style="width:auto"><col style="width:auto"><col style="width:auto"><col style="width:auto"></colgroup>
            <thead>
                <tr>
                    <th>수탁업체명</th><th>주소</th><th>전화</th><th>근무시간</th><th>위탁업무</th>
                </tr>
            </thead>	
            <tbody>	
                <tr>	
                    <td>엘티메트릭(주)</td>	
                    <td>서울특별시 마포구 성암로 189</td>	
                    <td>1588-0061(7번)</td>	
                    <td>09:00~18:00</td>	
                    <td>국가주소정보시스템 및 누리집<br>유지관리를 위한 개인정보 처리 업무</td>		
                </tr>	
            </tbody>
        </table>
    </div>
    <br>
    
    <b>제5조(개인정보의 파기 절차 및 방법)</b><br>
    ①  "도로명주소 누리집"은 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.<br>
    단, 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.<br>
    ② 개인정보 파기의 절차와 방법은 다음과 같습니다.<br>
    1. 파기절차 :  "도로명주소 누리집"은 파기 사유가 발생한 개인정보를 선정하고,"도로명주소 누리집"의 개인정보 분야별책임자의 승인을 받아 개인정보를 파기합니다.<br>
    2. 파기방법 :  "도로명주소 누리집"은 전자적 파일 형태로 기록, 저장된 개인정보는 기록을 재생할 수 없도록 파기하며, 종이 문서에 기록·저장된 개인정보는 분쇄기로하거나 소각하여 파기합니다.<br>
    <br>
    
    <b>제6조(정보주체와 법정대리인의 권리·의무 및 행사방법에 관한 사항)</b><br>
    ① 정보주체는  "도로명주소 누리집"에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.<br>
    ② 제1항에 따른 권리 행사는 "도로명주소 누리집"에 대해 「개인정보 보호법」 시행령 제41조 제1항에 따라 서면, 전자우편, 팩스 등을 통하여 하실 수 있으며  "도로명주소 누리집"은 이에 대해 지체없이 조치하겠습니다.<br>
    ③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받는 자 등은 대리인을 통하여 하실 수 도 있습니다. 이 경우 “개인정보 처리 방법에 관한 고시” 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.<br>
        ※ 만14세 미만 아동에 관한 개인정보의 열람등 요구는 법정대리인이 직접 해야하며, 만14세 이상의 미성년자인 정보주체는 정보주체의 개인정보에 관하여 미성년자 본인이 권리를 행사하거나 법정대리인을 통하여 권리를 행사할 수도 있습니다.<br>
    ④ 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.<br>
    ⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.<br>
    ⑥  "도로명주소 누리집"은 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리 정지의 요구 시 열람 등 요구를 한자가 본인이거나 정당한 법정대리인인지를 확인합니다.<br>
    <br>
    
    <b>제7조(개인정보의 안정성 확보조치에 관한 사항)</b><br>
    "도로명주소 누리집"은 개인정보의 안정성 확보를 위해 다음과 같은 조치를 취하고 있습니다.<br>
    ① 내부관리계획의 수립 및 시행 : 개인정보의 안전한 처리를 위하여 내부관리계획을 수립하여 시행하고 있습니다.<br>
    ② 개인정보 취급직원의 최소화 및 교육 : 개인정보를 취급하는 직원은 반드시 필요한 인원에 한하여 지정·관리하고 있으며 취급직원을 대상으로 안전한 관리를 위한 교육을 실시하고 있습니다.<br>
    ③ 정기적인 자체 지도 실시 : 개인정보 취급 관련 안정성 확보를 위해 매년 자체 개인정보보호 관리수준 진단을 실시하고 있습니다.<br>
    ④ 개인정보에 대한 접근 제한 : 개인정보를 처리하는 개인정보처리시스템에 대한 접근권한의 부여·변경·말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.<br>
    ⑤ 접속기록의 보관 : 개인정보처리시스템에 접속한 기록을 2년 동안 보관·관리하고 있습니다.<br> 
    ⑥ 개인정보의 암호화 : 개인정보는 암호화 등을 통해 안전하게 저장 및 관리되고 있습니다. 또한, 중요한 데이터는 저장 및 전송 시 암호화하여 사용하는 등의 별도 보안기능을 사용하고 있습니다.<br>
    ⑦ 해킹 등에 대비한 기술적 대책 : "주소정보 누리집"은 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적으로 갱신·점검하고 있습니다.<br>
    ⑧ 비인가자에 대한 출입 통제 : 개인정보를 보관하고 있는 개인정보처리시스템의 물리적 보관 장소를 별도를 두고 이에 대해 출입통제 절차를 수립·운영하고 있습니다.<br>
    <br>
    
    <b>제8조(개인정보를 자동으로 수집하는 장치의 설치·운영 및 그 거부에 관한 사항)</b><br> 
    ① "도로명주소 누리집"은 정보주체의 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.<br>
    ② 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자의 컴퓨터 하드디스크에 저장되기도 합니다.<br>
    가. 쿠키의 사용목적 : 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 보안접속 여부 등을 파악하여 이용자에게 최적화된 정보를 제공하기 위해 사용됩니다.<br>
    나. 쿠키의 설치·운영 및 거부 : 웹브라우저 옵션 설정을 통해 쿠키 허용, 쿠키 차단 등의 설정을 할 수 있습니다.<br>
    다. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.<br>
    <br>
    
    <b>제9조(가명정보 처리에 관한 사항)</b><br>
    현재 개인정보를 가명처리 하고 있지 않으며, 가명처리 할 경우 관련사항을 정보주체가 확인할 수 있도록 안내하겠습니다.<br>
    <br>
    
    <b>제10조(개인정보 보호책임자에 관한 사항)</b><br>
    ① "도로명주소 누리집"은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호 책임자를 지정하고 있습니다.<br>
    <div class="layerTable tabContents" tabindex="0" style="margin: 10px 0px;">
        <table>
            <caption class="blind">도로명주소 통계정보 테이블로 연번, 구분, 지역수의 통계 정보를 제공합니다.</caption>
            <colgroup><col style="width:auto"><col style="width:auto"><col style="width:auto"><col style="width:auto"></colgroup>
            <thead>
                <tr>
                    <th>구분</th><th>부서(직위)</th><th>성명</th><th>연락처</th>
                </tr>
            </thead>	
            <tbody>	
                <tr>	
                    <td>개인정보보호 책임자</td>	
                    <td>주소생활공간과장</td>	
                    <td>박광섭</td>	
                    <td>044-205-3551</td>	
                </tr>	
                <tr>	
                    <td>개인정보보호 담당자</td>	
                    <td>주소생활공간과 팀장</td>	
                    <td>국정완</td>	
                    <td>044-205-3561</td>		
                </tr>
            </tbody>
        </table>
    </div>
    ② 정보주체는  "도로명주소 누리집"의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 분야별 담당부서로 문의하실 수 있습니다.  "도로명주소 누리집"은 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.<br>
    <br>
    
    <b>제11조(개인정보의 열람청구를 접수·처리하는 부서)</b><br>
    ① 정보주체는 「개인정보 보호법」 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있으며, "도로명주소 누리집"은 정보주체의 개인정보 열람청구가 신속하게 처리되도록 노력 하겠습니다.<br>
        - 개인정보 열람청구 접수·처리 부서<br>
    <div class="layerTable tabContents" tabindex="0" style="margin: 10px 0px;">
        <table>
            <caption class="blind">도로명주소 통계정보 테이블로 연번, 구분, 지역수의 통계 정보를 제공합니다.</caption>
            <colgroup><col style="width:auto"><col style="width:auto"><col style="width:auto"><col style="width:auto"><col style="width:auto"></colgroup>
            <thead>
                <tr>
                    <th>총괄부서</th><th>담당자</th><th>전화</th><th>전자우편</th><th>팩스</th>
                </tr>
            </thead>	
            <tbody>	
                <tr>	
                    <td>주소생활공간과</td>	
                    <td>국정완</td>	
                    <td>044-205-3561</td>	
                    <td>coach@korea.kr</td>	
                    <td>044-205-8962</td>	
                </tr>	
            </tbody>
        </table>
    </div>
    ② 정보주체께서는 제1항의 열람청구 접수·처리부서 이외에 ‘개인정보 포털’ 누리집(www.privacy.go.kr)를 통하여서도 개인정보 열람청구를 하실 수 있습니다.<br>
        ※ 개인정보 포털 → 민원서비스 → 정보주체 권리행사 → 개인정보 열람 등 요구(본인인증 필요)<br>
    <br>
    
    <b>제12조(정보주체의 권익침해에 대한 구제방법)</b><br>
    ① 정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.<br>
    1. 개인정보분쟁조정위원회 : (국번없이) 1833-6972 <a href="https://www.kopico.go.kr" style="color:#0e4a83" target="_blank"> ☞사이트바로가기(클릭)</a><br>
    2. 개인정보침해신고센터 : (국번없이) 118 <a href="https://privacy.kisa.or.kr" style="color:#0e4a83" target="_blank"> ☞사이트바로가기(클릭)</a><br>
    3. 대검찰청 : (국번없이) 1301 <a href="https://www.spo.go.kr" style="color:#0e4a83" target="_blank"> ☞사이트바로가기(클릭)</a><br>
    4. 경찰청 : (국번없이) 182 <a href="https://ecrm.police.go.kr" style="color:#0e4a83" target="_blank"> ☞사이트바로가기(클릭)</a><br>
    ② 「개인정보 보호법」 제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.<br>
    ※ 중앙행정심판위원회 : (국번없이) 110<a href="https://www.simpan.go.kr" style="color:#0e4a83" target="_blank"> ☞사이트바로가기(클릭)</a><br>
    <br>
    
    <b>제13조(개인정보 처리방침의 변경에 관한 사항)</b><br>
    ① 이 개인정보 처리방침은 2023.12.14부터 적용됩니다.<br>
    ② 이전의 개인정보 처리방침은 우측에서 확인하실 수 있습니다.
    <a href="javascript:void(0);" role="button" onclick="javascript:layerPopupCommon.call(this);" data-popup="#privacyPolicy" style="color:#0e4a83"> ☞이전 처리방침 보기(클릭)</a>
    <br>
</div>

</template>