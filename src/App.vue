<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> 
    &nbsp;<RouterLink to="/about">About</RouterLink> 
      &nbsp;<RouterLink to="/posts">Posts</RouterLink>
     &nbsp;&nbsp;&nbsp;&nbsp; <input type="text" v-model="useModule.dialog" />
  </nav>
  <router-view />
</template>

<script setup>
import { useModuleStore } from './stores/TaskStore';
const useModule = useModuleStore()
  //
</script>

<script>
</script>
