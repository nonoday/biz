<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'

const props = defineProps({
    totalCount: {
        type: Number,
        required: true
    }
})

const emit = defineEmits(['sort'])

const sortTypes = [
    { label: '관련도순', value: 'relevance' },
    { label: '최신순', value: 'latest' },
    { label: '인기순', value: 'popular' }
]

const currentSort = ref('relevance')

const handleSort = (sortValue) => {
    currentSort.value = sortValue
    emit('sort', sortValue)
}
</script>

<template>
    <div class="searchResultHeader">
        <div class="searchResultHeader__result">
            검색 결과 <span class="searchResultHeader__count">{{ totalCount }}</span>건
        </div>
        <div class="searchResultHeader__function">
            <strong class="searchResultHeader__title">정렬기준</strong>
            <ul class="searchResultHeader__filter">
                <li v-for="type in sortTypes" :key="type.value">
                    <Button 
                        class="searchResultHeader__button"
                        :class="{ active: currentSort === type.value }"
                        @click="handleSort(type.value)"
                    >
                        {{ type.label }}
                    </Button>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.searchResultHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top:40px;

    &__result {
        color:#1d1d1d;
        font-size:19px;
        font-weight: 700;
    }
    &__count {
        color:#004fd3;
    }
    &__function {
        display: flex;
        gap:12px;
    }
    &__title {
        color:#1D1D1D;
        font-size:17px;
    }
    &__filter {
        display: flex;
        align-items: center;
        gap:12px;
    }
    &__button {
        display: inline-block;
        height: 26px;
        padding:0 4px;
        color:#1D1D1D;
        font-size:17px;

        &:hover {
            text-decoration: underline;
        }

        &.active {
            border-radius: 4px;
            background-color: #EEF2F7;
        }
    }
}

</style> 