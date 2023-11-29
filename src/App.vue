<script setup>
import JSONfile from './assets/components/questions.json'

import { reactive, ref } from 'vue';
import QuestionTemplate from './assets/components/QuestionTemplate.vue';
import AddAndDeleteButtons from './assets/components/AddAndDeleteButtons.vue';
import EditButton from './assets/components/EditButton.vue';
import Header from './assets/components/layout/Header.vue';
import Footer from './assets/components/layout/Footer.vue';


const questionsInJSON = reactive(JSONfile)

// If set to True will allow questioned to be edited
const editingAvailable = ref(false);

// Total number of questions shown(Initial is 2 as per questions.json)  
const questionsLength = ref(JSONfile.length)

// const questionsInfoObj = reactive({})
const finalizeChanges = (question,statement,answers,value) =>{
    questionsInJSON [question] = question 
    questionsInJSON [statement] = statement
    questionsInJSON [answers] = answers
    questionsInJSON [value] = value
  }

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
  <Header></Header>
  <!-- Main Content Section -->
  <main>
    <!-- Your Quiz Content Goes Here -->
    <section class="quiz-section">
      <!-- Quiz questions and blanks go here -->

      <h1>Quiz</h1>
      <br>
      <!-- Outputs the static questions in questions.json-->
      <div v-for="question in questionsInJSON">
        <p>{{question.question}}. {{ question.statement }}</p>
        <div v-for="(answer, key) in question.answers">
          <input type="radio" :id="key" :name="'question-' + question.question">
          <label :for="key"> {{ answer }}</label>
        </div>
        <br>
      </div>

      <!-- Outputs # of question template component based on length of questionsLength -->
      <QuestionTemplate :questionsLength="questionsLength" v-for="i in (questionsLength - 2)" />


      <!-- Add or delete buttons to add or subtract total questions -->
      <AddAndDeleteButtons @removeTemplate="questionsLength--" @addTemplate="questionsLength++" />
      
      <br>
      <EditButton :questionsLength="questionsLength"/>

    </section>
  </main>

  <Footer></Footer>
  <!-- Hamburger Menu Overlay -->
  <div class="overlay">
    <div class="overlay-content">
      <a href="https://www.adventuretowntoys.com">Home</a>
      <a href="#">Quiz Categories</a>
      <a href="https://www.adventuretowntoys.com/about-us">About Us</a>
    </div>
  </div>
</template>



<style scoped></style>
