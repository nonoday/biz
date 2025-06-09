<script setup>
defineProps({
    content: {
        type: String,
        required: true
    },
    likeCount: {
        type: Number,
        default: 0
    },
    isLiked: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['like'])

const handleLike = () => {
    emit('like')
}
</script>

<template>
    <div class="detailContent">
        <div v-html="content"></div>
        <div class="detailContent__likeSection">
            <button 
                class="detailContent__likeButton" 
                :class="{ 'liked': isLiked }"
                @click="handleLike"
            >
                추천하기
                <span class="detailContent__likeCount">{{ likeCount }}</span>
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.detailContent {
    padding: 40px 0;
    border-bottom:1px solid #B1B8BE;

    :deep(p) {
        margin: 10px 0;
        line-height: 150%;
    }

    :deep(img) {
        max-width: 100%;
        height: auto;
        border-radius: 4px;
        margin: 10px 0;
    }

    :deep(a) {
        color: #2563eb;
        text-decoration: none;
        
        &:hover {
            text-decoration: underline;
        }
    }

    :deep(ul), :deep(ol) {
        margin: 10px 0;
    }

    :deep(li) {
        margin: 5px 0;
    }

    :deep(table) {
        width: 100%;
        border-collapse: collapse;
        margin: 10px 0;
    }

    :deep(th), :deep(td) {
        border: 1px solid #e5e7eb;
        padding: 10px;
        text-align: left;
    }

    :deep(th) {
        background-color: #f9fafb;
    }

    &__likeSection {
        margin-top:48px;
        text-align: left;
    }
    &__likeButton {
        display: inline-block;
        padding-left:32px;
        background: url('@images/common/bg_like_off.png') no-repeat 0 3px;
        color:#000000;
        font-size:20px;

        &.liked {
            background-image: url('@images/common/bg_like_on.png');
        }
    }
    &__likeCount {
        color: #325EE6;
        font-size: 20px;
    }
}
</style> 