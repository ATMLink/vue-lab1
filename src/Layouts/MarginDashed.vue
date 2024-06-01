<template>
  <div class="margin-dashed">
    <slot />
  </div>
</template>

<style scoped>
.margin-dashed {
  border: 1px dashed blue;
  padding: 20px;
  margin-bottom: 10px;
}
</style>