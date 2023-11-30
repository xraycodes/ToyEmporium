<script setup>
// Importing questions.json 
import JSONfile from './assets/components/questions.json'

import { reactive, ref, watch } from 'vue';

// Functionalites
import QuestionTemplate from './assets/components/questionTemplate.vue';
import AddAndDeleteButtons from './assets/components/AddAndDeleteButtons.vue';
import EditButton from './assets/components/EditButton.vue';

// Styling
import Header from './assets/components/layout/Header.vue';
import Footer from './assets/components/layout/Footer.vue';

// JSONfile content is created into object
const questionsInJSONAsObj = reactive(JSONfile)

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
  }
)

const finalizeChanges = (data) => {
  questionsInJSONAsObj[(data["question"] - 1)]["statement"] = data["statement"]
  questionsInJSONAsObj[(data["question"] - 1)]["answers"] = data["answers"]
  questionsInJSONAsObj[(data["question"] - 1)]["value"] = data["value"]
}

const removeTemplate = () => {
  questionsInJSONAsObj.pop() 

}
</script>

<template>
  {{ questionsLength }}
  {{ questionsInJSONAsObj }}
  <Header></Header>
  <!-- Main Content Section -->
  <main>
    <!-- Your Quiz Content Goes Here -->
    <section class="quiz-section">
      <!-- Quiz questions and blanks go here -->

      <h1>Quiz</h1>
      <br>
      <!-- Outputs the static questions in questions.json-->
      <div v-for="(question,index) in questionsInJSONAsObj">
        <p>{{index + 1}}. {{ question.statement }}</p>
        <div v-for="(answer, key) in question.answers">
          <input type="radio" :id="key" :name="'question-' + (index + 1)">
          <label :for="key"> {{ answer }}</label>
        </div>
        <br>
      </div>

      <!-- Outputs # of question template component based on length of questionsLength -->
      <QuestionTemplate :questionsLength="questionsLength" v-for="i in (questionsLength - JSONfile.length)" />


      <!-- Add or delete buttons to add or subtract total questions -->
      <!-- Recieves removeTemplate and addTemplate from component -->
      <AddAndDeleteButtons @removeTemplate="removeTemplate" @addTemplate="questionsLength++" />
      
      <br>
      <!-- Edit button to modify question and its answers -->
      <EditButton :questionsLength="questionsLength" @finalizeChanges="finalizeChanges"/>

    </section>
  </main>

  <!-- <Footer></Footer> -->
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
