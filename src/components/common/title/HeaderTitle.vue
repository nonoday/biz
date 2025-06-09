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

  const titleStyle = computed(() => ({
    marginTop: props.marginTop,
  }))
</script>
<template>
<h3 class="headerTitle" :style="titleStyle">
    {{title}}
</h3>
</template>

<style lang="scss" scoped>
.headerTitle {
  margin-top:40px;
	font-weight: 700;
	line-height: 150%;		
  font-size:40px;
  letter-spacing: 1px;
}
</style>