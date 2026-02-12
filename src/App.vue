
<template>
  <div class="flex flex-col h-screen">
    <Navbar />
     <router-view/>
    <Foot />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Foot from "./components/Foot.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Foot,
  },
};
</script>

