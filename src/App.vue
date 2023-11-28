<script setup>
import JSONfile from './assets/questions.json'

import {reactive, ref, watch} from 'vue';
import QuestionTemplate from './assets/components/questionTemplate.vue';
import AddAndDeleteButtons from './assets/components/AddAndDeleteButtons.vue';
import EditButton from ;

const questionsInJSON = reactive(JSONfile)

// If set to True will allow questioned to be edited
const editingAvailable = ref(false);

// Total number of questions shown(Initial is 2 as per questions.json)  
const questionsLength = ref(JSONfile.length)

const editedQuestion = ref('');
const editedAnswer = ref('');
const editedQuestionIndex = ref(-1);

const startEdit = (questionIndex, question, answer) => {
  editingAvailable.value = true;
  editedQuestionIndex.value = questionIndex;
  editedQuestion.value = question;
  editedAnswer.value = answer;
};

</script>

<template>
  <h1>Quiz</h1>
  <!-- Outputs the static questions in questions.json-->
  <div v-for="question in questionsInJSON">
      <p> {{ question.statement }}</p>
      <div v-for="(answer, key) in question.answers">
        <input type="radio"
                :id ="key"
                :name="'question-' + question.question">
        <label :for="key"> {{ answer }}</label>
      </div>
   </div>

   <div v-if="editingAvailable">
    <h2>Edit Question</h2>
    <form @submit.prevent="saveEdit">
      <div>
        <label for="editedQuestion">Question:</label>
        <input v-model="editedQuestion" id="editedQuestion" type="text" />
      </div>
      <div>
        <label for="editedAnswer">Answer:</label>
        <input v-model="editedAnswer" id="editedAnswer" type="text" />
      </div>
      <button type="submit">Save</button>
    </form>
  </div>

<div v-for="question in (questionsLength - JSONfile.length)">
  <QuestionTemplate/>
</div>

<!-- Add or delete buttons to add or subtract total questions -->
<AddAndDeleteButtons :questionsLength="questionsLength" @removeTemplate="questionsLength--" @addTemplate="questionsLength++"/>
<EditButton :questionsLength="questionsLength"/>
</template>

<style scoped>
</style>

