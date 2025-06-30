<script setup>
	import { ref, onMounted, computed, defineAsyncComponent } from 'vue'
	import CommonTab from '@/components/common/tab/CommonTab.vue'
  import Button from 'primevue/button'
    
	const tabConfig = [
		{
			header: 'Windows 버전',
			component: defineAsyncComponent(() => import('@/components/content/tab/solution/Windows.vue'))
		},
		{
			header: 'Linux 버전',
			component: defineAsyncComponent(() => import('@/components/content/tab/solution/Linux.vue'))
		}
	]
</script>
<template>
    <div class="commonBox__tipBox type03">
        <ul class="commonBox__informationList">
            <li>2020.12.22일자로 2.0.0버전으로 업데이트 되었습니다.</li>
            <li>기존 버전 사용자께서는 필요시 "활용가이드"를 참고하여 업그레이드 하시기 바랍니다. </li>
            <li>SSL인증서 보안설정 필요시 "SSL설정가이드"를 참고하여 설정하시기 바랍니다.</li>
        </ul>
    </div>
    <div class="commonBox">
      <h4 class="commonBox__title">가이드 다운로드</h4>
      <ul class="commonBox__informationList type01">
          <li>2020.12.22일자로 2.0.0버전으로 업데이트 되었습니다.</li>
          <li>기존 버전 사용자께서는 필요시 "활용가이드"를 참고하여 업그레이드 하시기 바랍니다. </li>
          <li>SSL인증서 보안설정 필요시 "SSL설정가이드"를 참고하여 설정하시기 바랍니다.</li>
      </ul>

      <div class="commonBox__download">
          <p class="commonBox__downloadTitle">활용가이드</p>
          <Button class="commonBox__downloadButton" title="다운로드">다운로드</Button>
      </div>
      <div class="commonBox__download">
          <p class="commonBox__downloadTitle">SSL 설정가이드</p>
          <Button class="commonBox__downloadButton" title="다운로드">다운로드</Button>
      </div>
    </div>
    <div class="commonBox">
      <h4 class="commonBox__title">인터넷망 기반 주소 검색 솔루션</h4>
      <p class="commonBox__text">인터넷망용 윈도우즈 및 리눅스 주소검색 솔루션</p>

      <div class="commonBox__download">
          <p class="commonBox__downloadTitle">윈도우즈(Windows) 64bit</p>
          <ul class="commonBox__functionList">
              <li><Button class="commonBox__downloadButton" title="JAVA 다운로드">JAVA 다운로드</Button></li>
              <li><Button class="commonBox__downloadButton" title="NET 다운로드">.NET 다운로드</Button></li>
          </ul>
      </div>
      <div class="commonBox__download">
          <p class="commonBox__downloadTitle">윈도우즈(Windows) 32bit</p>
          <ul class="commonBox__functionList">
              <li><Button class="commonBox__downloadButton" title="JAVA 다운로드">JAVA 다운로드</Button></li>
              <li><Button class="commonBox__downloadButton" title="NET 다운로드">.NET 다운로드</Button></li>
          </ul>
      </div>
      <div class="commonBox__download">
          <p class="commonBox__downloadTitle">윈도우즈(Windows) 32bit</p>
          <ul class="commonBox__functionList">
              <li><Button class="commonBox__downloadButton" title="JAVA 다운로드">JAVA 다운로드</Button></li>
              <li><Button class="commonBox__downloadButton" title="NET 다운로드">.NET 다운로드</Button></li>
          </ul>
      </div>
    </div>
    <div class="commonBox">
      <h4 class="commonBox__title">행정망 기반 주소 검색 솔루션</h4>
      <p class="commonBox__text">행정망용 윈도우즈 및 리눅스 주소검색 솔루션</p>

      <div class="commonBox__download">
          <p class="commonBox__downloadTitle">윈도우즈(Windows) 64bit</p>
          <ul class="commonBox__functionList">
              <li><Button class="commonBox__downloadButton" title="JAVA 다운로드">JAVA 다운로드</Button></li>
              <li><Button class="commonBox__downloadButton" title="NET 다운로드">.NET 다운로드</Button></li>
          </ul>
      </div>
      <div class="commonBox__download">
          <p class="commonBox__downloadTitle">윈도우즈(Windows) 32bit</p>
          <ul class="commonBox__functionList">
              <li><Button class="commonBox__downloadButton" title="JAVA 다운로드">JAVA 다운로드</Button></li>
              <li><Button class="commonBox__downloadButton" title="NET 다운로드">.NET 다운로드</Button></li>
          </ul>
      </div>
      <div class="commonBox__download">
          <p class="commonBox__downloadTitle">윈도우즈(Windows) 32bit</p>
          <ul class="commonBox__functionList">
              <li><Button class="commonBox__downloadButton" title="JAVA 다운로드">JAVA 다운로드</Button></li>
              <li><Button class="commonBox__downloadButton" title="NET 다운로드">.NET 다운로드</Button></li>
          </ul>
      </div>
    </div>
    <div class="commonBox">
      <h4 class="commonBox__title">이용방법</h4>
      <CommonTab :tabs="tabConfig" />
    </div>
</template>

<style lang="scss" scoped>
	@use '@/assets/scss/contents/box/box';
</style> 