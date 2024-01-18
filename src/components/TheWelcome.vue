<script setup lang="ts">
import { ref } from 'vue'
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import FirstComponent from './FirstComponent.vue'

const msg = ref('Welcome to my first component');

defineProps({
  helloWorld: String
})

</script>

<template>
  <h2>{{ helloWorld }}</h2>
  <h2>Welcome to kanpur</h2>
  <FirstComponent :msg="msg" /> 
</template>
