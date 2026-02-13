<template>
     <main class="flex-grow flex flex-col items-center justify-center">
      <ChatRoom :messages="messages"/>
      <ChatInput @send="handleSend"/>
    </main>
</template>

<script setup>
import { ref } from "vue";
import ChatRoom from "../components/ChatRoom.vue";
import ChatInput from "../components/ChatInput.vue";

const messages = ref([])
let autoID = 1

//接收ChatInput發送的訊息
const handleSend = (text)=>{
  //User
  messages.value.push({
    id:autoID++,
    type:"user",
    content:text
  })
  //AI
  setTimeout(()=>{
    messages.value.push({
      id:autoID++,
      type:"ai",
      content:"圖片生成中，請稍後..." + text + "這是您的詠唱"
    })
  },1500)
}


</script>