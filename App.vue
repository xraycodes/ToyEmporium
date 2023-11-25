<script setup>
import JSONfile from './assets/questions.json'

import {reactive, ref} from 'vue'
import QuestionTemplate from './components/questionTemplate.vue'

const questionsInJSON = reactive(JSONfile)

const editing = ref(false);
const editedQuestion = ref('');
const editedAnswer = ref('');
const editedQuestionIndex = ref(-1);


const startEdit = (questionIndex, question, answer) => {
  editing.value = true;
  editedQuestionIndex.value = questionIndex;
  editedQuestion.value = question;
  editedAnswer.value = answer;
};




const questionsLength = ref(JSONfile.length)
const addTemplate = () => {
  questionsLength.value++
}
const removeTemplate = () => {
  questionsLength.value--
}


// const paragraph = ref([])
// const addParagraph = () =>{
//   paragraph.value.push(paragraph.value.length+1)
// }

// const removeParagraph = () => {
//   paragraph.value.pop()
// }

const flag = true
const template = QuestionTemplate
</script>


<template>

  <h1>Quiz</h1>
  <div v-if="flag" v-for="question in questionsInJSON">
      <p> {{ question.statement }}</p>
      <div v-for="(answer, key) in question.answers">
        <label :for="key">{{ key }} {{ answer }}</label>
        <input type="radio"
                :id ="key"
                :name="'question-' + question.question">
      </div>
   </div>

   <br>

   <div v-if="editing">
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
  
  
<!-- <QuestionTemplate v-for="i in questionsLength"/> -->



  <div>
    <button @click="addTemplate">Click to add template</button>
    <button @click="removeTemplate">Click to remove template</button>
    <h1>{{ questionsLength }}</h1>
  </div>

  <!-- <div>
    <button @click="">Click to edit</button>
   </div> -->

   <button @click="startEdit(1, 'hi', 'bcd')">
    Click to edit
  </button>


</template>



<style scoped>
</style>
