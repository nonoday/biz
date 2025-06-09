<script setup>
  import {computed, defineAsyncComponent} from 'vue';
  import {useRoute} from 'vue-router';

  import NoneLayout from '@/layouts/NoneLayout.vue'

  const route = useRoute();
  const layouts = {
    NoneLayout
  };

  const layout = computed(() => {
    const { layout } = route.meta;
    const path = route.path;

    if (path === '/' || path === '/list') {
      return layouts['NoneLayout'];
    }


    return defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'));
  });

</script>

<template>
  <component :is="layout"><RouterView /></component>
</template>