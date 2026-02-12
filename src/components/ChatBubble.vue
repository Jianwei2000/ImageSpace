<template>
    <!-- 使用者輸入的氣泡 -->
    <div class="flex justify-end space-x-4 mt-4">
        <div class="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full border-2">
            <UserIcon class="h-8 w-8 text-gray-500" />
        </div>
        <div>
            <p class="text-sm font-medium text-gray-200">魔法詠唱</p>
            <p class="text-sm text-gray-500">
                生成一張貓咪的圖片<br>
            </p>
        </div>
    </div>
    <!-- AI回復的氣泡 -->
    <div class="flex items-start space-x-4">
        <div class="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl border-2">
            <PaintBrushIcon class="h-8 w-8 text-violet-400 " />
        </div>
        <div>
            <p class="text-sm font-medium text-gray-200">AI</p>
            <p class="text-sm text-gray-500">影像生成中，請稍後...</p>
        </div>
    </div>
 
</template>

<script setup>
import { PaintBrushIcon } from '@heroicons/vue/24/solid';
import{UserIcon} from '@heroicons/vue/24/solid';

</script>