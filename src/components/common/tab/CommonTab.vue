<script setup>
import { ref } from 'vue'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'

const props = defineProps({
    tabs: {
        type: Array,
        required: true,
        // [{ header: string, content: Component }]
    }
})

const activeIndex = ref(0)
</script>

<template>
    <TabView v-model:activeIndex="activeIndex" class="commonTab">
        <TabPanel 
            v-for="(tab, index) in tabs" 
            :key="index"
            :header="tab.header"
        >
            <component :is="tab.content" />
        </TabPanel>
    </TabView>
</template>

<style lang="scss" scoped>
.commonTab {
    margin-top:40px;
    &::v-deep(.p-tabview-nav) {
        display: flex;
        width: 100%;
    }
    &::v-deep(.p-tabview-nav-link) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background: transparent;
        color:#464C53;
        font-size:19px;
    }
    &::v-deep(.p-tabview-nav) {
        overflow: hidden;
        border:1px solid #C6C6C6;
        border-radius: 6px;
        background: transparent;
    }
    &::v-deep(.p-tabview-header) {
        flex:1;
        height: 56px;
        border-left:1px solid #C6C6C6;
        background-color: #fff;

        &:first-child {
            border:none;
        }

        &.p-highlight {
            background-color: #112660;
            .p-tabview-nav-link {
                color:#fff;
                font-weight: 700;
            }
        }
    }
    
}
</style> 