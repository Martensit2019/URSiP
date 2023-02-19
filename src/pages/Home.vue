<script setup>
import { ref } from 'vue'
import Tabs from '@/components/Tabs.vue'
import Analyze from '@/components/Analyze/index.vue'

const tabs = [
  { name: 'analyze', label: 'Analyze' },
  { name: 'campaigns', label: 'My campaigns' },
  { name: 'configure', label: 'Configure' },
]
const activeTab = ref('analyze')

const changeTab = (tabName) => {
  activeTab.value = tabName
}
</script>

<template>
  <Tabs :names="tabs" :activeTab="activeTab" @changeTab="changeTab">
    <div v-if="activeTab === 'analyze'">
    <Analyze />
    </div>
    <div v-if="activeTab === 'campaigns'">campaigns</div>
    <div v-if="activeTab === 'configure'">configure</div>
  </Tabs>
</template>
