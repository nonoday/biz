<script setup>
	import { ref, onMounted, computed } from 'vue'
	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
   

</script>

<template>
	<HeaderTitle title="장바구니" :mypage="true"  />
    
</template>

<style lang="scss" scoped>
	@use '@/assets/scss/contents/box/box';
    @use '@/assets/scss/contents/input/input_radio.scss';
</style>