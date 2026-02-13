<template>
  <div :class="message.type === 'user' ? 'flex justify-end space-x-4 my-5' : 'flex items-start space-x-4 my-5'">
    <div :class="message.type === 'user' 
        ? 'w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full border-2'
        : 'w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl border-2'">

      <component :is="message.type === 'user' ? UserIcon : PaintBrushIcon" 
            class="h-8 w-8" 
            :class="message.type === 'user' ? 'text-gray-500' : 'text-violet-400'" />
    </div>
    <div>
      <p class="text-sm font-medium text-gray-200">{{ message.type === 'user' ? '魔法詠唱' : 'AI' }}</p>
      <div v-if="message.isImage">
        <img :src="message.content" alt="AI生成圖" class="w-full max-w-sm rounded-xl mt-3 cursor-pointer transition-transform duration-300 hover:scale-105">
      </div>
      <div v-else>
          <p class="text-sm text-gray-500">{{ message.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PaintBrushIcon, UserIcon } from '@heroicons/vue/24/solid';

defineProps({
  message: Object
});
</script>
