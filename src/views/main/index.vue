<script setup>
    import { onMounted, defineAsyncComponent, ref } from "vue";
    import AOS from 'aos';
    import MainHeader from '@components/main/MainHeader.vue';
    import MainFooter from '@components/common/Footer.vue';
    import MainCarousel from '@components/main/MainCarousel.vue';
    import MainSearchBox from '@components/main/MainSearchBox.vue';
    import MainIndustrial from '@components/main/MainIndustrial.vue';
    import MainEtc from '@components/main/MainEtc.vue';
    import MainEventPopup from '@components/main/MainEventPopup.vue';

    const showInform = ref(false);
    const showOther = ref(false);

    const MainInform = defineAsyncComponent(() => import('@components/main/MainInform.vue'));
    const MainOther = defineAsyncComponent(() => import('@components/main/MainOther.vue'));

    onMounted(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.id === 'informSection') {
                        showInform.value = true;
                    } else if (entry.target.id === 'otherSection') {
                        showOther.value = true;
                    }
                }
            });
        }, {
            threshold: 0.1
        });

        const informSection = document.getElementById('informSection');
        const otherSection = document.getElementById('otherSection');

        if (informSection) observer.observe(informSection);
        if (otherSection) observer.observe(otherSection);
    });
</script>

<template>
    <div class="skip__navi"><a href="#mainHeaderSearch">본문바로가기</a></div>
    <MainHeader />
    <div class="content" id="contentArea">
        <MainEventPopup />
        <MainSearchBox /> 
        <MainCarousel />
        <!--  맵에 쓰이는 버튼
        <button title="확대하기" class="mapButton__plus">
            <span class="blind">확대</span>
        </button>
        <button title="축소하기" class="mapButton__minus">
            <span class="blind">축소</span>
        </button> -->
        <!-- 산업서비스 -->
        <MainIndustrial />

        <!-- 주소정보누리집이 알려드릴게요. -->
        <div id="informSection">
            <MainInform v-if="showInform" />
        </div>
        
        <!-- 도로명 국민 편의에 한발 더 가까이 -->
        <div id="otherSection">
            <MainOther v-if="showOther" />
        </div>
        <MainEtc />
    </div>
    <MainFooter />
</template>


<style lang="scss" scoped>
[data-aos] {
    pointer-events: none;
    &.aos-animate {
        pointer-events: auto;
    }
}

[data-aos="fade-up"] {
    transform: translate3d(0, 20px, 0);
    opacity: 0;
    &.aos-animate {
        transform: translate3d(0, 0, 0);
        opacity: 1;
    }
}

[data-aos="fade-right"] {
    transform: translate3d(-20px, 0, 0);
    opacity: 0;
    &.aos-animate {
        transform: translate3d(0, 0, 0);
        opacity: 1;
    }
}

[data-aos="fade-left"] {
    transform: translate3d(20px, 0, 0);
    opacity: 0;
    &.aos-animate {
        transform: translate3d(0, 0, 0);
        opacity: 1;
    }
}

.aos-init[data-aos][data-aos].aos-animate {
    transition-property: transform, opacity;
    transition-timing-function: ease-in-out;
}
</style>