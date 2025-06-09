<script setup>
  import { ref, onMounted, watch } from "vue";
	import Dropdown from 'primevue/dropdown';

  const props = defineProps({
      options: Array,
      modelValue: [String, Number, Object],
      title: String,
      optionLabel : {
        type: String,
        default : 'label'
      },
      inputId : {
        type: String,
        required: true
      }
  });

  const customDropdown = ref(null);

  const emit = defineEmits(['update:modelValue']);

  const updateValue = (newValue) => {
    emit('update:modelValue', newValue);
  };

  onMounted(() => {
    if (props.title && customDropdown.value) {
      customDropdown.value.$el.setAttribute('title', props.title);
    }
  });

  watch(() => props.title, (newTitle) => {
    if (customDropdown.value) {
      customDropdown.value.$el.setAttribute('title', newTitle);
    }
  })

  // const handleKeydown = (event) => {
  //   if (event.key === 'Tab') {
  //     event.preventDefault();
      
  //     let nextElement = document.activeElement;

  //     do {
  //       nextElement = nextElement.nextElementSibling || nextElement.parentNode.nextElementSibling;
  //     } while (nextElement && !isFocusabel(nextElement));

  //     if (nextElement) {
  //       nextElement.focus();
  //     }
  //   }
  // }
  // const isFocusabel = (element) => {
  //   const focusableElements = [
  //     'A',
  //     'AREA',
  //     'BUTTON',
  //     'INPUT',
  //     'SELECT',
  //     'TEXTAREA',
  //   ]
  //   return focusableElements.includes(element.tagName) || element.hasAttribute('tabindex');
  // };

    // @keydown="handleKeydown"
</script>

<template>
  <Dropdown 
    :inputId="inputId" 
    :options="options" 
    :optionLabel="optionLabel"
    :model-value="modelValue"
    @update:model-value="updateValue"
    ref="customDropdown"
  />
  <div style="color:black">dsadsadsadsadsadsadsadsadsadsadsadsa</div>
</template>


<style lang="scss" scoped>

</style>