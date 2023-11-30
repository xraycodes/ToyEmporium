<script setup>
// Importing questions.json 
import JSONfile from './assets/components/questions.json'

import { reactive, ref, watch } from 'vue';

// Functionalites
import QuestionTemplate from './assets/components/QuestionTemplate.vue';
import AddAndDeleteButtons from './assets/components/AddAndDeleteButtons.vue';
import EditButton from './assets/components/EditButton.vue';

// Styling
import Header from './assets/components/layout/Header.vue';
import Footer from './assets/components/layout/Footer.vue';

// JSONfile content is created into object
const questionsInJSONAsObj = reactive(JSONfile)

// Testing
const questionsObj = reactive(questionsInJSONAsObj)

// If set to True will allow questioned to be edited
const editingAvailable = ref(false);

// Total number of questions shown(Initial is 2 as per questions.json)  
const questionsLength = ref(JSONfile.length)

watch(questionsLength, (newValue,oldValue) => {
    const index = newValue - 1
    if (!questionsInJSONAsObj[index]) {
        questionsInJSONAsObj[index] = {};
    }
    questionsInJSONAsObj[index]['question'] = questionsLength.value
    questionsInJSONAsObj[index]['statement'] = 'Insert question'
    questionsInJSONAsObj[index]['answers'] = {"a":"Option A", "b":"Option B","c":"Option C","d":"Option D"}
    questionsInJSONAsObj[index]['value'] = 1
    console.log(questionsInJSONAsObj)
  }
)

  
// const editedQuestion = ref('');
// const editedAnswer = ref('');
// const editedQuestionIndex = ref(-1);

// const startEdit = (questionIndex, question, answer) => {
//   editingAvailable.value = true;
//   editedQuestionIndex.value = questionIndex;
//   editedQuestion.value = question;
//   editedAnswer.value = answer;
// };

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
      <div v-for="question in questionsInJSONAsObj">
        <p>{{question.question}}. {{ question.statement }}</p>
        <div v-for="(answer, key) in question.answers">
          <input type="radio" :id="key" :name="'question-' + question.question">
          <label :for="key"> {{ answer }}</label>
        </div>
        <br>
      </div>

      <!-- Outputs # of question template component based on length of questionsLength -->
      <QuestionTemplate :questionsLength="questionsLength" v-for="i in (questionsLength - JSONfile.length)" />


      <!-- Add or delete buttons to add or subtract total questions -->
      <!-- Recieves removeTemplate and addTemplate from component -->
      <AddAndDeleteButtons @removeTemplate="questionsLength--" @addTemplate="questionsLength++" />
      
      <br>
      <!-- Edit button to modify question and its answers -->
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
