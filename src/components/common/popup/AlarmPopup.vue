<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['close']);

const swiper = ref(null);
const isPlaying = ref(true);

const initSwiper = () => {
    if (swiper.value) {
        swiper.value.destroy();
    }
    
    swiper.value = new Swiper('.alarmPopup__swiper', {
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: 'auto',
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'fraction',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        observer: true,
        observeParents: true
    });
};

const togglePlay = () => {
    if (isPlaying.value) {
        swiper.value.autoplay.stop();
        isPlaying.value = false;
    } else {
        swiper.value.autoplay.start();
        isPlaying.value = true;
    }
};

watch(() => props.isOpen, (newValue) => {
    if (newValue) {
        nextTick(() => {
            initSwiper();
        });
    }
});

onMounted(() => {
    if (props.isOpen) {
        initSwiper();
    }
});

const closePopup = () => {
    emit('close');
};
</script>

<template>
    <div v-if="isOpen" class="alarmPopup">
        <div class="alarmPopup__inner">
            <div class="alarmPopup__content">
                <div class="swiper alarmPopup__swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="alarmPopup__item">
                                <p class="alarmPopup__title">시스템 점검이 예정되어 있습니다.</p>
                                <p class="alarmPopup__text">25년 9월 도로명 신규 데이터가 업데이트 되었습니다.<br />25년 9월 도로명 신규 데이터가 업데이트 되었습니다.</p>
                                <div class="alarmPopup__buttonBox">
                                    <Button class="alarmPopup__button">자세히보기</Button>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="alarmPopup__item">
                                <p class="alarmPopup__title">시스템 점검이 예정되어 있습니다.</p>
                                <p class="alarmPopup__text">25년 9월 도로명 신규 데이터가 업데이트 되었습니다.<br />25년 9월 도로명 신규 데이터가 업데이트 되었습니다.</p>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="alarmPopup__item">
                                <p class="alarmPopup__title">시스템 점검이 예정되어 있습니다.</p>
                                <p class="alarmPopup__text">25년 9월 도로명 신규 데이터가 업데이트 되었습니다.<br />25년 9월 도로명 신규 데이터가 업데이트 되었습니다.</p>
                            </div>
                        </div>
                    </div>
                    <div class="alarmPopup__function">
                        <div class="swiper-pagination"></div>
                        <div class="alarmPopup__controls">
                            <button 
                                type="button" 
                                class="alarmPopup__playBtn" 
                                @click="togglePlay"
                                :title="isPlaying ? '정지' : '재생'"
                            >
                                <i :class="isPlaying ? 'bi bi-pause-fill' : 'bi bi-play-fill'"></i>
                            </button>
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-button-next"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <button type="button" class="alarmPopup__close" @click="closePopup" title="닫기">
                <i class="bi bi-x-lg"></i>
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '@/assets/scss/contents/layout/alarm.scss';    
</style> 