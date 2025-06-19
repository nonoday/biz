<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'

const props = defineProps({
    totalCount: {
        type: Number,
        required: false,
        default: 0
    },
    publicAddressCount: {
        type: Number,
        default: 0
    },
    providedAddressCount: {
        type: Number,
        default: 0
    },
    resultType: {
        type: String,
        default: 'single',
        validator: (value) => ['single', 'public', 'provided', 'both', 'combined'].includes(value)
    },
    sortTypes: {
        type: Array,
        default: () => [
            { label: '관련도순', value: 'relevance' },
            { label: '최신순', value: 'latest' },
            { label: '인기순', value: 'popular' }
        ]
    },
    defaultSort: {
        type: String,
        default: 'relevance'
    }
})

const emit = defineEmits(['sort'])

const currentSort = ref(props.defaultSort)

const handleSort = (sortValue) => {
    currentSort.value = sortValue
    emit('sort', sortValue)
}

const getResultText = () => {
    switch (props.resultType) {
        case 'single':
            return `검색 결과 <span class="searchResultHeader__count">${props.totalCount}</span>건`
        case 'public':
            return `공개하는 주소 <span class="searchResultHeader__count">${props.publicAddressCount}</span>건`
        case 'provided':
            return `제공하는 주소 <span class="searchResultHeader__count">${props.providedAddressCount}</span>건`
        case 'both':
            return `공개하는 주소 <span class="searchResultHeader__count">${props.publicAddressCount}</span>건, 제공하는 주소 <span class="searchResultHeader__count">${props.providedAddressCount}</span>건`
        case 'combined':
            return `검색 결과 <span class="searchResultHeader__count">${props.totalCount}</span>건 (공개: <span class="searchResultHeader__count">${props.publicAddressCount}</span>건, 제공: <span class="searchResultHeader__count">${props.providedAddressCount}</span>건)`
        default:
            return `검색 결과 <span class="searchResultHeader__count">${props.totalCount}</span>건`
    }
}
</script>

<template>
    <div class="searchResultHeader">
        <div class="searchResultHeader__result" v-html="getResultText()">
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