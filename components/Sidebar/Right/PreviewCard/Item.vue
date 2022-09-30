<template>
  <div
    class="p-3 hover:bg-gray-100 cursor-pointer dark:hover:bg-dim-300 border-b"
    :class="wrapperClass"
  >
    <slot></slot>
  </div>
</template>
<script setup>
const { twitterBorderColor, defaultTransition } = useTailwindConfig();

const wrapperClass = computed(
  () => `${twitterBorderColor} ${defaultTransition}`
);
</script>
