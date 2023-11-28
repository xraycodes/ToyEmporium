<script setup>
const emit = defineEmits(['addTemplate', 'removeTemplate'])
</script>

<template>
    <div>
        <button @click="$emit('addTemplate')">Click to add template</button>
        <button @click="$emit('removeTemplate')">Click to remove template</button>
  </div>
</template>