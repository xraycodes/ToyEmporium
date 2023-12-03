<script setup>
window.addEventListener("pageshow", function (event) {
  var historyTraversal = event.persisted ||
    (typeof window.performance != "undefined" &&
      window.performance.navigation.type === 2);
  if (historyTraversal) {
    // Handle page restore.
    window.location.reload();
  }
});
// Importing questions.json 
import JSONfile from './assets/components/questions.json'

import { reactive, ref, watch } from 'vue';

// Functionalites
import AddAndDeleteButtons from './assets/components/AddAndDeleteButtons.vue';
import EditButton from './assets/components/EditButton.vue';
import submitQuizButton from './assets/components/submitQuizButton.vue';


// Styling
import Header from './assets/components/layout/Header.vue';
import Footer from './assets/components/layout/Footer.vue';


// JSONfile content is created into object
const questionsInJSONAsObj = reactive(JSONfile)

// Total number of questions shown(Initial is 2 as per questions.json)  
const questionsLength = ref(JSONfile.length)

const MAXQUESTIONLENGTH = 10

const addTemplate = () => {
  const newQuestion = {
    question: questionsInJSONAsObj.length + 1,
    statement: 'Insert question',
    answers: { a: 'Option A', b: 'Option B', c: 'Option C', d: 'Option D' },
    value: 1,
  };
  questionsInJSONAsObj.push(newQuestion);
  questionsLength.value++;
};

const finalizeChanges = (data) => {
  questionsInJSONAsObj[(data["question"] - 1)]["statement"] = data["statement"]
  questionsInJSONAsObj[(data["question"] - 1)]["answers"] = data["answers"]
  questionsInJSONAsObj[(data["question"] - 1)]["value"] = data["value"]
}

const removeTemplate = () => {
  questionsInJSONAsObj.splice(questionsLength.value - 1, 1)
  questionsLength.value--;
}

//------------------------------------------------------------------------------------------------------------

const submittedAnswersObject = ref([]);//holds both keys and indexes as objects in an array
let allClicked = false;
let selectedCheckArray = ref([]);//this help check whether the same question has been selected more than once
let dontAdd = false;
let points = ref(0);// holds the total points from the answers
let yourType = ref();//learner type prop
let yourDescription = ref();//learner type description
let tallyScale;
function radClicked(key, index)//ken
{
  dontAdd = false;

  

  checkDuplicates(index);

  if (submittedAnswersObject.value.length < questionsLength.value) {
    if (dontAdd == false) {
      submittedAnswersObject.value.push({ "ques": index + 1, "answer": key });
      selectedCheckArray.value.push(index + 1);


    }
  }


  

  if (questionsLength.value === submittedAnswersObject.value.length) {
    
    allClicked = true;
    tallyAnswers();
  }

}

function tallyAnswers() {
  
tallyScale = questionsLength.value/10;

  submittedAnswersObject.value.forEach(element => {
    
    if (element.answer === 'a') {
      points.value += 1 ;
    }
    if (element.answer === 'b') {
      points.value += 2 ;
    }
    if (element.answer === 'c') {
      points.value += 3 ;
    }
    if (element.answer === 'd') {
      points.value += 4;
    }
  });
  
  if (points.value <= 12*tallyScale) {
    
    yourType.value = 'Designers';
    yourDescription.value = 'you have a DESIGNERS eye!! very cool! Does your child love to color, draw, paint, shape, sticker, sew, decorate, build and design? Then this is the place for you!';

  }
  if (points.value > 12*tallyScale && points.value <= 16*tallyScale) {
    
    yourType.value = 'Thinkers';
    yourDescription.value = 'you are quite the THINKER!! Fantastic! Does your child love puzzles and games, as well as to flex their knowledge and solve conundrums? Then this is the place for you!';
  }
  if (points.value > 16*tallyScale && points.value <= 26*tallyScale) {
    
    yourType.value = 'Scientists'
    yourDescription.value = 'you would make a great SCIENTIST one day!! tubular! Is your child curious about dinosaurs, minerals, the human body, physics, chemistry, biology, forensics and nanotech? Then this is the place for you!';
  }
  if (points.value > 26*tallyScale && points.value <= 34*tallyScale) {
    
    yourType.value = 'Makers'
    yourDescription.value = 'as a MAKER, you create, build and explore! make dreams come true! Does your child love cars, to make robots, build, construct, engineer, tinker, code, and invent? Then this is the place for you!';
  }
  if (points.value > 34*tallyScale && points.value <= 39*tallyScale) {
    
    yourType.value = 'Directors'
    yourDescription.value = 'your varied interests would make for a fine DIRECTOR! Awesome! Does your child love to “Play House” or create worlds with dinosaurs, dolls, and other critters? Then this is the place for you!';
  }
  if (points.value > 39*tallyScale) {
   
    yourType.value = 'Fledglings'
    yourDescription.value = 'FLEDGINGS take flight with wide eyes and wonder! Does your child look at the world and all its things with wonder and excitement? ready to reach out and try new things, go to new places, then this is the place for you!.';
  }
}

function checkDuplicates(index) {
  selectedCheckArray.value.forEach(element => {
    if (element == index + 1) {
      dontAdd = true;
      
      return;
    }

  });
}
</script>

<template>
  <Header></Header>
  <!-- Main Content Section -->
  <main class="page-wrap">
    <!-- Your Quiz Content Goes Here -->
    <section class="quiz-section">
      <!-- Quiz questions and blanks go here -->

      <h1>Quiz</h1>
      <br>
      <!-- Outputs the static questions in questions.json-->
      <div v-for="(question, index) in questionsInJSONAsObj">
        <p class='qstatement'>{{ index + 1 }}. {{ question.statement }}</p>
        <div v-for="(answer, key) in question.answers" class='answers'>
          <input type="radio" :id="key" :name="'question-' + (index + 1)" @click="radClicked(key, index)">
          <label :for="key"> {{ answer }}</label>
         
        </div>

        <br>

      </div>

      <!-- Outputs # of question template component based on length of questionsLength -->

      <!-- Add or delete buttons to add or subtract total questions -->
      <!-- Recieves removeTemplate and addTemplate from component -->
      <AddAndDeleteButtons @removeTemplate="removeTemplate" @addTemplate="addTemplate"
        :questionsLength='questionsLength' :MAXQUESTIONLENGTH="MAXQUESTIONLENGTH" />

      <br>
      <!-- Edit button to modify question and its answers -->
      <EditButton :questionsLength="questionsLength" @finalizeChanges="finalizeChanges" />

      <!-- below, the submit button component and popUp, hidden by v-show until all questions are answered -->
      <submitQuizButton :allClicked="allClicked" :learnerType='yourType' :description='yourDescription'>
      </submitQuizButton>
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



<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.answers {
  display: flex;
  width: fit-content;


}

.subCom {
  width: 100%;
  margin: 0 auto;
}

input:hover {

  transform: scale(1.2);
  transition: 1s;
}

p {
  margin-bottom: 10px;
}

@media (min-width:500px) {
  .answers {
    margin-left: 35vw;
  }
}

p,
h1,
label {
  font-size: clamp(1rem, 2vw, 1.8rem);
  text-transform: capitalize;
}

.qstatement {
  background-color: rgba(0, 139, 86, 0.13);
  border-radius: 5px;
}
</style>
