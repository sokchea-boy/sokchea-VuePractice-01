<template>
    <router-link to="item.part" class="flex  flex-col items-start gap-2 sm:flex-row sm:items-start">
        <span class="material-symbols-outlined">{{ item.icon }}</span>
        <span>{{ item.label }}</span>
    </router-link>
</template>

<script setup>
    defineProps (["item"])
</script>