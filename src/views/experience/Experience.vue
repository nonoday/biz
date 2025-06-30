<script setup>
	import { ref, onMounted, onUnmounted, computed, defineAsyncComponent } from 'vue'
	import TabView from 'primevue/tabview'
	import TabPanel from 'primevue/tabpanel'
	import Button from 'primevue/button'
	import Dialog from 'primevue/dialog'
	import CommonTab from '@/components/common/tab/CommonTab.vue'

	const activeIndex = ref(0)
	const activeLnbItem = ref(null) 
	const showModal = ref(false)

	// 모달 열기/닫기 함수
	const openModal = () => {
		showModal.value = true
	}

	const closeModal = () => {
		showModal.value = false
	}

	// LNB 아이템 토글 함수
	const toggleLnbItem = (index) => {
		if (activeLnbItem.value === index) {
			activeLnbItem.value = null
		} else {
			activeLnbItem.value = index
		}
	}

	// 페이지 진입 시 body 배경색 설정
	onMounted(() => {
		document.body.style.setProperty('background-color', '#F5F5F5', 'important');
	});

	// 페이지 벗어날 때 body 배경색 원래대로 복원
	onUnmounted(() => {
		document.body.style.removeProperty('background-color');
	});

	
	const tabConfig = [
		{
			header: '스키마 구성',
			component: defineAsyncComponent(() => import('@/components/content/tab/experience/SpaceContent.vue'))
		},
		{
			header: '데이터 체험하기',
			component: defineAsyncComponent(() => import('@/components/content/tab/experience/AttributeContent.vue'))
		}
	]
</script>

<template>
	<div class="experience__header">
		<a href="/" title="메인이동하기"><img src="@/assets/images/common/img_logo.png" alt="주소기반산업지원서비스" /></a>
		<TabView v-model:activeIndex="activeIndex" class="experience__tab">
			<TabPanel header="속성정보 체험하기"></TabPanel>
			<TabPanel header="공간정보 체험하기"></TabPanel>
			<TabPanel header="신규주소정책 체험하기"></TabPanel>
		</TabView>
		<Button>
			<span class="blind">닫기</span>
		</Button>
	</div>
	<div class="experience__content">
		<div class="experience__lnb">
			<ul class="experience__lnbList">
				<li>
					<Button 
						class="experience__lnbItem" 
						:class="{ active: activeLnbItem === 0 }"
						@click="toggleLnbItem(0)"
					>
						도로명 주소 공간정보
					</Button>
					<ul class="experience__lnbItemList" v-show="activeLnbItem === 0">
						<li><Button class="experience__lnbInnerItem">도로명주소 한글</Button></li>
						<li><Button class="experience__lnbInnerItem">도로명 영문</Button></li>
						<li><Button class="experience__lnbInnerItem">상세주소 표시</Button></li>
						<li><Button class="experience__lnbInnerItem">상세주소 동 표시</Button></li>
						<li><Button class="experience__lnbInnerItem">사물주소</Button></li>
						<li><Button class="experience__lnbInnerItem">도로명</Button></li>
					</ul>
				</li>
				<li>
					<Button 
						class="experience__lnbItem" 
						:class="{ active: activeLnbItem === 1 }"
						@click="toggleLnbItem(1)"
					>
						도로명주소 
					</Button>
					<ul class="experience__lnbItemList" v-show="activeLnbItem === 1">
						<li><Button class="experience__lnbInnerItem">도로명주소 한글</Button></li>
						<li><Button class="experience__lnbInnerItem">도로명 영문</Button></li>
						<li><Button class="experience__lnbInnerItem">상세주소 표시</Button></li>
						<li><Button class="experience__lnbInnerItem">상세주소 동 표시</Button></li>
						<li><Button class="experience__lnbInnerItem">사물주소</Button></li>
						<li><Button class="experience__lnbInnerItem">도로명</Button></li>
					</ul>
				</li>
				<li>
					<Button 
						class="experience__lnbItem" 
						:class="{ active: activeLnbItem === 2 }"
						@click="toggleLnbItem(2)"
					>
						도로명주소 DB
					</Button>
					<ul class="experience__lnbItemList" v-show="activeLnbItem === 2">
						<li><Button class="experience__lnbInnerItem">도로명주소 한글</Button></li>
						<li><Button class="experience__lnbInnerItem">도로명 영문</Button></li>
						<li><Button class="experience__lnbInnerItem">상세주소 표시</Button></li>
						<li><Button class="experience__lnbInnerItem">상세주소 동 표시</Button></li>
						<li><Button class="experience__lnbInnerItem">사물주소</Button></li>
						<li><Button class="experience__lnbInnerItem">도로명</Button></li>
					</ul>
				</li>
				<li>
					<Button 
						class="experience__lnbItem" 
						:class="{ active: activeLnbItem === 3 }"
						@click="toggleLnbItem(3)"
					>
						전자지도
					</Button>
					<ul class="experience__lnbItemList" v-show="activeLnbItem === 3">
						<li><Button class="experience__lnbInnerItem">도로명주소 한글</Button></li>
						<li><Button class="experience__lnbInnerItem">도로명 영문</Button></li>
						<li><Button class="experience__lnbInnerItem">상세주소 표시</Button></li>
						<li><Button class="experience__lnbInnerItem">상세주소 동 표시</Button></li>
						<li><Button class="experience__lnbInnerItem">사물주소</Button></li>
						<li><Button class="experience__lnbInnerItem">도로명</Button></li>
					</ul>
				</li>
			</ul>
		</div>
		<div v-if="activeIndex === 0">
			<button @click="openModal">레이어팝업</button>
			
			<p class="experience__resultNot">
				검색 결과가 없습니다.<br />속성정보를 선택해 데이터를 확인해보세요.
			</p>
			
			<div class="experience__contentBox" style="display:none;">
				<!-- 탭안에 내용은 채워주세요. -->
				<CommonTab :tabs="tabConfig" />
			</div>


		<!-- 커스텀 헤더 모달 팝업 -->
			<Dialog 
				v-model:visible="showModal" 
				:modal="true"
				:closable="true"
				:closeOnEscape="true"
				class="customModal"
				:style="{ width: '404px', maxWidth: '404px' }"
			>
				
				<div class="customModal__box">
					<p class="customModal__contentTitle">건물</p>
					<ul class="customModal__contentList">
						<li><span class="title">시군구코드</span>: 11140</li>
						<li><span class="title">건물명</span>: 에스엘용산</li>
						<li><span class="title">도로구간번호</span>: 1508</li>
						<li><span class="title">건물용코드</span> : 14201(금융업소)</li>
					</ul>
				</div>
			</Dialog>

		</div>
		

		
		<div v-if="activeIndex === 1">
			<h3>공간정보 체험하기</h3>
		</div>
		
		<div v-if="activeIndex === 2">
			<h3>신규주소정책 체험하기</h3>
		</div>
	</div>
</template>
<style lang="scss">
	.customModal {padding:24px !important;background-color: #fff;}
	.customModal .p-dialog-header {
		justify-content: flex-end !important;
	}
</style>
<style lang="scss" scoped>
	@use '@/assets/scss/contents/layout/experience';
</style>