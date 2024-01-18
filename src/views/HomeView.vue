<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { ref } from 'vue'

const propsVar = ref('this is props');
</script>

<template>
  <main>
    <TheWelcome :hello-world="propsVar" />
  </main>
</template>
