<script setup>
import {ref, reactive} from 'vue';

const props = defineProps(['questionsLength'])
const emit = defineEmits(['finalizeChanges'])

const editOn = ref(false)
// The keys in all of questions
const question = ref('') 
const statement = ref('') 
const answers = reactive({"a":'',"b":'',"c":'',"d":''}) 
const value = ref('') 

const sendChanges = () => {
  const dataToSend = {
    "question": question.value,
    "statement": statement.value,
    "answers": answers,
    "value": value.value
  };
  emit('finalizeChanges', dataToSend);
};

</script>

<template>

    <div>
        <button @click="editOn = !editOn">Click To Edit The Questions</button>
    </div>
    <br>

    <div v-if="editOn">
        <label for="questionNumber">Question: </label>
        <input type="text" id="questionNumber" v-model="question"><br>

        <label for="Statement">Statement: </label>
        <input type="text" id="Statement" v-model="statement"><br>

        <p>Answers: </p>

        <label for="Answers">A: </label>
        <input type="text" id="Answers" v-model="answers.a"><br> 
        <label for="Answers">B: </label>
        <input type="text" id="Answers" v-model="answers.b"><br> 
        <label for="Answers">C: </label>
        <input type="text" id="Answers" v-model="answers.c"><br> 
        <label for="Answers">D: </label>
        <input type="text" id="Answers" v-model="answers.d"><br> 

        <label for="Value">Value: </label>
        <input type="text" id="Value" v-model="value"><br>
        <br>

        <button @click="sendChanges">Click to finalize changes</button>
    </div>
</template>