import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useChatStore = defineStore("chat",()=>{
    const messages = ref([]);
    let autoID = 1;
    const addUserMsg = (text)=>{
        messages.value.push({
        id:autoID++,
        type:"user",
        content:text
        })
    }

    const addAIMsg = (content, isImage = false)=>{
        messages.value.push({
        id:autoID++,
        type:"ai",
        content,
        isImage
        })
    }

    return {messages, addUserMsg, addAIMsg}
})