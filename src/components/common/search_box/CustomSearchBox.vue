<script setup>
  import { ref, watch } from "vue";
	import InputText from 'primevue/inputtext'
	import Button from 'primevue/button';

  const props = defineProps({
      modelValue : {
        type: String,
        required: true,
      },
      placeholder : {
        type: String,
        default : '입력하세요.'
      },
      title : {
        type: String,
        default : ''
      }
  });

  const emit = defineEmits(['update:modelValue']);

  const clearInput = () => {
    modelValue.value = '';
    emit('update:modelValue', '');

    setTimeout(() => {
      const inputElement = document.querySelector('.contentSearch input');
      if (inputElement) {
        inputElement.focus();
      }
    }, 0);
  };

  watch(() => props.modelValue, (newValue) => {
    modelValue.value = newValue
  })

  const modelValue = ref(props.modelValue);

</script>

<template>
  <div class="searchBox contentSearch">
    <label class="blind" for="search">검색어 입력</label>
    <InputText 
      v-model="modelValue"
      :placeholder="placeholder"
      :title="title"
      id="search"
    />
    <Button v-if="modelValue" @click="clearInput" class="clearButton" title="삭제">
      <span class="blind">삭제</span>
      <i aria-hidden="true" class="bi bi-x" />
    </Button>
    <Button class="searchButton" title="검색">
      <i aria-hidden="true" class="bi bi-search" />
      <span class="irText">검색</span>
    </Button>
  </div>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/common/_mixin';

.searchBox {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 390px;
  height: 40px;
  border-radius: 6px;
  border:1px solid #c0c4ca;
  background: #fff;
  font-size:14px;

  .p-inputtext {
    width: 100%;
    height: 100%;
    padding:0 0 0 10px;
    border-radius: 0;
    background: transparent;
    border:none;
    box-sizing: border-box;
    font-size:14px;
  }
}
.clearButton {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  min-width: 22px;
  border-radius: 50%;
  margin-left:14px;
  background: #e1e4ea;
  color:#333;

  i {
    width: auto;
    height: auto;
    font-size:17px;
    font-weight: bold;
    margin:1px 0 0 1px;
  }
}
.searchButton {
  overflow: visible;
  width: 24px;
  height: 24px;
  margin:0 20px 0 14px;

  i {
    width: auto;
    height: auto;
    color:#000;
    font-size: 20px;
    &::before {
      font-weight: 800px !important;
    }
  }
}

@include mixin.breakpoint-tablet {
  .searchBox {
    width: 100%;
    max-width: 100%;
    height: 45px;
    border-radius: 10px;
    font-size:13px;
    .p-inputtext {
      padding-left:16px;
    }
  }
  .searchButton {margin: 0 14px 0 0;}
}
</style>