<script setup>
	import { ref, onMounted, computed } from 'vue'

    //탭
    const tabItems = ref([
        {label:'주소정보 다운로드', route:'/addressInformation/AddressDownloadDetails                                                                                           '},
        {label:'데이터 구성', route:'/addressInformation/DataOrganization'},
        {label:'스키마 구성', route:'/addressInformation/SchemaComposition'},
    ]);


</script>

<template>
	스키마

</template>

