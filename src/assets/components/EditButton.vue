<script setup>
import {ref} from 'vue';

const props = defineProps(['questionsLength'])
const editedQuestion = ref('');
const editedAnswer = ref('');
const editedQuestionIndex = ref(-1);

const startEdit = (questionIndex, question, answer) => {
  editingAvailable.value = true;
  editedQuestionIndex.value = questionIndex;
  editedQuestion.value = question;
  editedAnswer.value = answer;
};

// //function 
// <button @click="startEdit(1, 'hi', 'bcd')">
//     Click to edit
//   </button>

</script>

<template>
    <div>
        <button>Click To Edit The Questions</button>
    </div>

    <div>
        <input type="text" id="questionNumber">
        <label for="questionNumber">Question number: </label>
    </div>
</template>