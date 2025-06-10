<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Calendar from 'primevue/calendar'
import RadioButton from 'primevue/radiobutton'

const props = defineProps({
  placeholder: {
    type: String,
    default: '검색어를 입력해주세요.'
  }
})

const searchText = ref('')
const selectedPeriod = ref(null)
const startDate = ref(null)
const endDate = ref(null)

const handleSearch = () => {
  emit('search', { 
    searchText: searchText.value, 
    period: selectedPeriod.value,
    dateRange: {
      start: startDate.value,
      end: endDate.value
    }
  })
}

const handleClear = () => {
  searchText.value = ''
  selectedPeriod.value = null
  startDate.value = null
  endDate.value = null
}

const emit = defineEmits(['search'])
</script>

<template>
  <div class="searchForm" role="search" aria-label="검색">
    <div class="searchForm__periodSelector">
      <div class="searchForm__periodGroup" role="radiogroup" aria-label="검색 기간 선택">
        <div class="searchForm__radio">
          <RadioButton v-model="selectedPeriod" inputId="period1" name="period" value="1" aria-label="1개월 선택" />
          <label for="period1" class="p-radiobutton-label">1개월</label>
        </div>
        <div class="searchForm__radio">
          <RadioButton v-model="selectedPeriod" inputId="period3" name="period" value="3" aria-label="3개월 선택" />
          <label for="period3" class="p-radiobutton-label">3개월</label>
        </div>
        <div class="searchForm__radio">
          <RadioButton v-model="selectedPeriod" inputId="period6" name="period" value="6" aria-label="6개월 선택" />
          <label for="period6" class="p-radiobutton-label">6개월</label>
        </div>
      </div>
      <div class="date-range">
        <span class="p-float-label">
          <Calendar 
            v-model="startDate" 
            inputId="startDate"
            :showIcon="true"
            :maxDate="endDate"
            dateFormat="yy.mm.dd"
            aria-label="시작 날짜"
          />
          <label for="startDate">시작일</label>
        </span>
        <span class="p-float-label">
          <Calendar 
            v-model="endDate" 
            inputId="endDate"
            :showIcon="true"
            :minDate="startDate"
            dateFormat="yy.mm.dd"
            aria-label="종료 날짜"
          />
          <label for="endDate">종료일</label>
        </span>
      </div>
    </div>
    <div class="searchForm__inputBox">
      <span class="p-float-label p-input-icon-right flex-grow">
        <InputText 
          v-model="searchText"
          id="headerSearch"
          autocomplete="off"
          aria-label="검색어 입력"
        />
        <i class="pi pi-times cursor-pointer" @click="handleClear" />
        <label for="headerSearch">{{ placeholder }}</label>
      </span>
      <Button 
        class="p-button-primary" 
        icon="pi pi-search" 
        label="검색" 
        @click="handleSearch"
        aria-label="검색 실행"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
	@use '@/assets/scss/contents/search/search_form';
</style> 