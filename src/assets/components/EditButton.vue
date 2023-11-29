<script setup>
import {ref, reactive} from 'vue';

const props = defineProps(['questionsLength'])
const emit = defineEmits(['finalizeChanges'])

const editOn = ref(false)
const question = ref('') 
const statement = ref('') 
const answers = ref('') 
const value = ref('') 

// const editedQuestion = ref('');
// const editedAnswer = ref('');
// const editedQuestionIndex = ref(-1);

// const startEdit = (questionIndex, question, answer) => {
//   editedQuestionIndex.value = questionIndex;
//   editedQuestion.value = question;
//   editedAnswer.value = answer;
// };

// //function 
// <button @click="startEdit(1, 'hi', 'bcd')">r
//     Click to edit
//   </button>

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

        <label for="Answers">Answers: </label>
        <input type="text" id="Answers" v-model="answers"><br>  

        <label for="Value">Value: </label>
        <input type="text" id="Value" v-model="value"><br>
        <br>

        <button @click="$emit(finalizeChanges(question,statement,answers,value))">Click to finalize changes</button>
    </div>
</template>