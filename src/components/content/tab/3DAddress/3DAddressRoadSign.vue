<script setup>
	import { ref, onMounted, computed, defineAsyncComponent } from 'vue'

	import SubHeaderTitle from '@/components/common/title/SubHeaderTitle.vue'
</script>

<template>
	<SubHeaderTitle title="입체도로의 도로명판의 종류" />
	<div class="commonBox">
		<p class="commonBox__title">한방향용</p>
		<div class="section__content">
			<div class="section__contentBox">
				<p class="section__contentTitle">벽면 부착형</p>
				<div class="section__contentInner">
					<img src="@/assets/images/policy_introduction/img_roadname_plate01.png" alt="벽면 부착형 샘플 이미지" />
				</div>
			</div>
			<div class="section__contentBox">
				<p class="section__contentTitle">벽면 부착형</p>
				<div class="section__contentInner">
					<img src="@/assets/images/policy_introduction/img_roadname_plate02.png" alt="벽면 부착형 샘플 이미지" />
				</div>
			</div>
		</div>
	</div>
	<div class="commonBox">
		<p class="commonBox__title">양방향용</p>
		<div class="section__content">
			<div class="section__contentBox">
				<p class="section__contentTitle">벽면 부착형</p>
				<div class="section__contentInner">
					<img src="@/assets/images/policy_introduction/img_roadname_plate03.png" alt="벽면 부착형 샘플 이미지" />
				</div>
			</div>
			<div class="section__contentBox">
				<p class="section__contentTitle">천장 부착형</p>
				<div class="section__contentInner">
					<img src="@/assets/images/policy_introduction/img_roadname_plate04.png" alt="천장 부착형 샘플 이미지" />
				</div>
			</div>
		</div>
	</div>
	<div class="commonBox">
		<p class="commonBox__title">앞쪽방향용</p>
		<div class="section__content">
			<div class="section__contentBox">
				<p class="section__contentTitle">벽면 부착형</p>
				<div class="section__contentInner">
					<img src="@/assets/images/policy_introduction/img_roadname_plate05.png" alt="벽면 부착형 샘플 이미지" />
				</div>
			</div>
			<div class="section__contentBox">
				<p class="section__contentTitle">천장 부착형</p>
				<div class="section__contentInner">
					<img src="@/assets/images/policy_introduction/img_roadname_plate06.png" alt="천장 부착형 샘플 이미지" />
				</div>
			</div>
		</div>
	</div>
	<div class="commonBox">
		<p class="commonBox__title">예고용</p>
		<div class="section__content">
			<div class="section__contentBox">
				<p class="section__contentTitle">벽면 부착형</p>
				<div class="section__contentInner">
					<img src="@/assets/images/policy_introduction/img_roadname_plate07.png" alt="벽면 부착형 샘플 이미지" />
				</div>
			</div>
			<div class="section__contentBox">
				<p class="section__contentTitle">천장 부착형</p>
				<div class="section__contentInner">
					<img src="@/assets/images/policy_introduction/img_roadname_plate08.png" alt="천장 부착형 샘플 이미지" />
				</div>
			</div>
		</div>
	</div>
	<div class="commonBox">
		<p class="commonBox__title">터널, 지하도로 등의 기초 번호판의 구조</p>
		<div class="section__content">
			<div class="section__contentBox type01">
				<div class="section__contentInner">
					<img src="@/assets/images/policy_introduction/img_roadname_plate09.png" alt="터널, 지하도로 등의 기초 번호판의 구조 샘플 이미지" />
				</div>
			</div>
		</div>
	</div>
	<div class="commonBox">
		<p class="commonBox__title">내부도로 기초번호판 구조</p>
		<div class="section__content">
			<div class="section__contentBox type02">
				<p class="section__contentTitle">일반용</p>
				<div class="section__contentInner">
					<img src="@/assets/images/policy_introduction/img_roadname_plate10.png" alt="일반용 샘플 이미지" />
				</div>
			</div>
			<div class="section__contentBox type02">
				<p class="section__contentTitle">둥근 기둥용</p>
				<div class="section__contentInner">
					<img src="@/assets/images/policy_introduction/img_roadname_plate11.png" alt="둥근 기둥용 샘플 이미지" />
				</div>
			</div>
			<div class="section__contentBox type02">
				<p class="section__contentTitle">각진 기둥용</p>
				<div class="section__contentInner">
					<img src="@/assets/images/policy_introduction/img_roadname_plate12.png" alt="각진 기둥용 샘플 이미지" />
				</div>
			</div>
		</div>
	</div>
	<div class="commonBox">
		<p class="commonBox__title">건물번호판의 구조</p>
		<div class="section__content">
			<div class="section__contentBox">
				<p class="section__contentTitle">벽면 부착형</p>
				<div class="section__contentInner">
					<img src="@/assets/images/policy_introduction/img_roadname_plate13.png" alt="벽면 부착형 샘플 이미지" />
				</div>
			</div>
			<div class="section__contentBox">
				<p class="section__contentTitle">천장 부착형</p>
				<div class="section__contentInner">
					<img src="@/assets/images/policy_introduction/img_roadname_plate14.png" alt="천장 부착형 샘플 이미지" />
				</div>
			</div>
		</div>
	</div>
	<div class="commonBox">
		<p class="commonBox__title">건물번호판의 사물주소판의 구조</p>
		<div class="section__content">
			<div class="section__contentBox">
				<p class="section__contentTitle">벽면 부착형</p>
				<div class="section__contentInner">
					<img src="@/assets/images/policy_introduction/img_roadname_plate15.png" alt="벽면 부착형 샘플 이미지" />
				</div>
			</div>
			<div class="section__contentBox">
				<p class="section__contentTitle">천장 부착형</p>
				<div class="section__contentInner">
					<img src="@/assets/images/policy_introduction/img_roadname_plate16.png" alt="천장 부착형 샘플 이미지" />
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@use '@/assets/scss/contents/page/introduction';
	@use '@/assets/scss/contents/box/box';
</style>