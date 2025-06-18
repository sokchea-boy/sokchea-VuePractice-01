<template>
    <nav class="h-16 flex shadow-md">
        <div id="nav-item" class="flex justify-between items-center w-10/11 m-auto gap-12">
            <div class="flex gap-12">
                 <navigation-item 
                  v-for="item in navItems" 
                  :key="item.label" 
                  :item="item"
                  :to="item.path"
                  >
                </navigation-item>
            </div>
            <div class="flex gap-12">
                <navigation-item v-for="item in navItemleft" :key="item.label" :item="item">Loing</navigation-item>
            </div>
        </div>
    </nav>
</template>

<script setup>
   import NavigationItem from './NavigationItem.vue';
    import { ref } from 'vue';
    const navItems = ref([
        {label: "Home", path: "/", icon: "home"},
        {label: "About", path: "/about", icon: ""},
        {label: "Contace", path: "/contace", icon: "contact_page"},
    ])
   
</script>