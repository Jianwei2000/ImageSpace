<template>
    <div class="container mx-auto px-4 py-8">
        <!-- 如果沒輸入任何內容，會顯示這個畫面 -->
        <div v-if="chatStore.messages.length === 0">
            <h1 class="text-center text-3xl font-bold mb-4">Welcome to ImageSpace</h1>
            <p class="text-center text-lg text-gray-500 md:ml-60">輸入想法來生成影像</p>
        </div>

        <div v-else>
            <ChatBubble v-for="i in chatStore.messages" :key="i.id" :message="i"/>
        </div>
    </div>

</template>

<script setup>
import ChatBubble from "./ChatBubble.vue";
import { useChatStore } from "../stores/chat";
const chatStore = useChatStore();
</script>