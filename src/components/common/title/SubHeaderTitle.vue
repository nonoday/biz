<script setup>
  import { computed } from "vue";

  const props = defineProps({
      title: {
        type: String,
        required : true
      },
      marginTop: {
        type: String,
        default : ''
      },
  });

  const subTitleStyle = computed(() => ({
    marginTop: props.marginTop,
  }))
</script>
<template>
<h4 class="subHeaderTitle" :style="subTitleStyle">
    {{title}}
</h4>
</template>

<style lang="scss" scoped>
.subHeaderTitle {
  margin-top:48px;
	font-weight: 700;
	line-height: 150%;		
  font-size:32px;
  letter-spacing: 1px;
}
</style>