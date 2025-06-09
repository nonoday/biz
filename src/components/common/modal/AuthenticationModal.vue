<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from 'vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';

const visible = ref(false);
const lastFocusedElement = ref(null);
const modalRef = ref(null);
const dialogRef = ref(null);

const emit = defineEmits(['close']);

const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
let focusableContent = [];
let firstFocusableElement;
let lastFocusableElement;

const updateFocusableElements = () => {
    const dialogElement = document.querySelector('.p-dialog-content');
    if (!dialogElement) return;
    
    focusableContent = Array.from(dialogElement.querySelectorAll(focusableElements));
    firstFocusableElement = focusableContent[0];
    lastFocusableElement = focusableContent[focusableContent.length - 1];

    if (firstFocusableElement) {
        firstFocusableElement.focus();
    }
};

const handleTabKey = (e) => {
    if (!visible.value) return;
    
    const isTabPressed = e.key === 'Tab' || e.keyCode === 9;
    if (!isTabPressed) return;

    if (!focusableContent.length) {
        updateFocusableElements();
        if (!focusableContent.length) {
            e.preventDefault();
            return;
        }
    }

    if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
            e.preventDefault();
            lastFocusableElement.focus();
        }
    } 
    // Tab
    else {
        if (document.activeElement === lastFocusableElement) {
            e.preventDefault();
            firstFocusableElement.focus();
        }
    }
};

const setFocusTrap = async () => {
    await nextTick();
    updateFocusableElements();
};

const openModal = async () => {
    lastFocusedElement.value = document.activeElement;
    visible.value = true;
    
    await nextTick();
    setFocusTrap();
};

const closeModal = () => {
    visible.value = false;
    emit('close');
    
    if (lastFocusedElement.value && typeof lastFocusedElement.value.focus === 'function') {
        lastFocusedElement.value.focus();
    }
};

defineExpose({
    openModal
});

const handleAuthentication = (type) => {
    console.log(`Selected authentication type: ${type}`);
};

watch(() => visible.value, async (newValue) => {
    if (newValue) {
        await nextTick();
        const dialogElement = document.querySelector('.p-dialog-content');
        if (dialogElement) {
            dialogElement.addEventListener('keydown', handleTabKey);
        }
        updateFocusableElements();
    } else {
        const dialogElement = document.querySelector('.p-dialog-content');
        if (dialogElement) {
            dialogElement.removeEventListener('keydown', handleTabKey);
        }
    }
});
</script>

<template>
    <Dialog 
        v-model:visible="visible"
        modal 
        :closable="false"
        :style="{ width: '30rem' }"
        @hide="closeModal"
        class="authentication-dialog"
        :closeOnEscape="true"
        ref="modalRef"
        role="dialog"
        aria-modal="true"
    >
        <div 
            ref="dialogRef"
            class="authentication-dialog__content"
            @keydown.esc="closeModal"
        >
            <div class="dialog-header">
                <h2 
                    id="auth-modal-title" 
                    class="dialog-title"
                >본인인증</h2>
                <Button 
                    icon="pi pi-times" 
                    class="dialog-close-btn p-button-rounded p-button-text" 
                    @click="closeModal"
                    aria-label="Close dialog"
                />
            </div>
            <div class="authentication-buttons" role="group" aria-labelledby="auth-modal-title">
                <Button 
                    class="auth-button p-button-primary" 
                    @click="handleAuthentication('personal')"
                    aria-label="본인 인증"
                >
                    본인 인증
                </Button>
                <Button 
                    class="auth-button p-button-secondary" 
                    @click="handleAuthentication('simple')"
                    aria-label="간편 인증"
                >
                    간편 인증
                </Button>
                <Button 
                    class="auth-button p-button-info" 
                    @click="handleAuthentication('ipin')"
                    aria-label="아이핀 인증"
                >
                    아이핀 인증
                </Button>
            </div>
        </div>
    </Dialog>
</template>

<style scoped>
.authentication-dialog {
    border-radius: 8px;
}

.dialog-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background-color: #f8f9fa;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

.dialog-title {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: #2c3e50;
}

.dialog-close-btn {
    width: 2rem;
    height: 2rem;
    color: #6c757d;
}

.dialog-close-btn:hover {
    background-color: #e9ecef;
    color: #343a40;
}

.dialog-close-btn:focus {
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px #2196F3;
    outline: none;
}

.authentication-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
}

.auth-button {
    width: 100%;
    height: 3rem;
    font-size: 1.1rem;
}

:deep(.p-dialog-mask) {
    backdrop-filter: blur(4px);
    background-color: rgba(0, 0, 0, 0.4);
}

:deep(.p-dialog) {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    outline: none;
}
</style> 