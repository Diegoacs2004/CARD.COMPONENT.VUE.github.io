<template>
    <font-awesome-icon :icon="['fas',icon]" />
    
    <h5 v-if="props.status==='Alive'">Vivo</h5>
    <h5 v-else>Muerto</h5>
</template>

<script setup>
import { computed } from "vue"

    const props = defineProps({
    status: String,
    specie: Number
})
    const icon = computed(()=>{
        return props.status==='Alive' ? 'heart':'skull'
    })

</script>

<style>
    
</style>
