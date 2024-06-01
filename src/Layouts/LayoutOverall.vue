<template>
  <div class="layout-overall">
    <!-- 导航条 -->
    <div class="navbar">
      <router-link to="/level-0">Home</router-link>
      <span v-for="n in level" :key="n">
        > <router-link :to="`/level-${n}`">Level {{ n }}</router-link>
      </span>
    </div> 

    <!-- 主页面占位符 -->
    <router-view /> 
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const level = computed(() => {
  const l = parseInt(route.params.level) || 0;
  return l > 0 ? Array.from({ length: l }, (_, i) => i + 1) : [];
});
</script>
