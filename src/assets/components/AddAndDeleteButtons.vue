<script setup>
import {ref, watch, onMounted} from 'vue'
const emit = defineEmits(['addTemplate', 'removeTemplate'])
const props = defineProps(['questionsLength'])

const questionNumber = ref(props.questionsLength)

const MAXQUESTIONLENGTH = 10
const MaxQuestions = ref(true)

// onMounted(() => {
//   watch(()=>questionNumber,(newValue) => {
//     if (newValue >= MAXQUESTIONLENGTH) {
//       MaxQuestions.value = false
//     }
//   })
// })

// NEEDS FIXING
// onMounted(() => {
//   watch(() => props.questionsLength, (newValue) => {
//     questionNumber.value = newValue; // Update questionNumber when props.questionsLength changes
//     if (newValue >= MAXQUESTIONLENGTH) {
//       MaxQuestions.value = !MaxQuestions.value;
//     }
//   });
// });

</script>

<template>
    <div>
        <button v-if="MaxQuestions" @click="$emit('addTemplate')">Click to add template</button>
        <button @click="$emit('removeTemplate')">Click to remove template</button>
  </div>
</template>