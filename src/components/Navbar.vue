<template>
    <nav class="fixed top-0 left-0 w-full p-4">
        <div class="flex justify-between items-center mx-4" >
            <h1>ImageSpace</h1>
            <ul class="flex space-x-4">
                <li class="transition-transform duration-300 hover:scale-110 cursor-pointer">
                    <router-link to="/fav"><HeartIcon class="w-6 h-6 inline-block mr-2"/>收藏</router-link>
                </li>
                <li class="transition-transform duration-300 hover:scale-110 cursor-pointer">
                    <router-link to="/"><BackspaceIcon class="w-6 h-6 inline-block mr-2"/>返回</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import{HeartIcon} from "@heroicons/vue/24/solid";
import{BackspaceIcon} from "@heroicons/vue/24/outline";

</script>