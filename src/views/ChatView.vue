<template>
     <main class="flex-grow flex flex-col items-center justify-center">
      <ChatRoom :messages="chatStore.messages"/>
      <ChatInput @send="handleSend"/>
    </main>
</template>

<script setup>
import ChatRoom from "../components/ChatRoom.vue";
import ChatInput from "../components/ChatInput.vue";
import { useChatStore } from "../stores/chat";
const chatStore = useChatStore();

//接收ChatInput發送的訊息
const handleSend = async (text)=>{
  //先把用戶輸入的訊息秀出來
  chatStore.addUserMsg(text);

  const placeholderID = chatStore.messages[chatStore.messages.length - 1].id;

  setTimeout(()=>{
    chatStore.addAIMsg("圖片生成中，請稍後...",false);
  },1500)

  try{
    //把訊息POST到後端
    const res = await fetch("http://127.0.0.1:8080/generate",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({prompt:text})
    })
    //前端使用blob處理二進位圖片
    const blob = await res.blob();
    const imgUrl = URL.createObjectURL(blob); //生成可用的圖片位置

    //找到placeholder並更新訊息內容，把圖片丟進去
    const aiMsgIndex = chatStore.messages.findIndex(i => i.id === placeholderID + 1)
    if(aiMsgIndex !== -1){
      chatStore.messages[aiMsgIndex].content = imgUrl;
      chatStore.messages[aiMsgIndex].isImage = true;
    }
  }
  catch(e){
    console.error(e); 
    //找到placeholder並更新訊息內容
    const aiMsgIndex = chatStore.messages.findIndex(i => i.id === placeholderID + 1)
     if(aiMsgIndex !== -1){
      chatStore.messages[aiMsgIndex].content = "圖片生成失敗，請稍後再重試...";
      chatStore.messages[aiMsgIndex].isImage = false;
    }
  }
}


</script>