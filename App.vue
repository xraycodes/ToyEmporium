<script setup>
// Importing questions.json 
import JSONfile from './assets/components/questions.json'

import { reactive, ref, watch } from 'vue';

// Functionalites
import AddAndDeleteButtons from './assets/components/AddAndDeleteButtons.vue';
import EditButton from './assets/components/EditButton.vue';
import submitQuizButton from './assets/components/submitQuizButton.vue';
// import resultsPage from './assets/components/resultsPage.vue';

// Styling
import Header from './assets/components/layout/Header.vue';
import Footer from './assets/components/layout/Footer.vue';


// JSONfile content is created into object
const questionsInJSONAsObj = reactive(JSONfile)

// Total number of questions shown(Initial is 2 as per questions.json)  
const questionsLength = ref(JSONfile.length)

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
const answerArray = ref([]);//holds the keys
const submittedAnswersObject = ref([]);//holds both keys and indexes as objects in an array
let allClicked = false;
let selectedCheckArray = ref([]);//this help check whether the same question has been selected more than once
let dontAdd = false;
let points = ref(0);// holds the total points from the answers
let yourType = ref();//learner type prop
let yourDescription = ref();//learner type description
function radClicked(key,index)//ken
{
  dontAdd = false;
  console.log(questionsLength.value + ' is the amount of total questions to answer');
  
  console.log('this radio button was clicked on index ' + index + ' and was answer '  + key);
  // answerArray.value.push(key);
  checkDuplicates(index);

  
  if(submittedAnswersObject.value.length < questionsLength.value)
  {
    if(dontAdd==false){
     submittedAnswersObject.value.push ({"ques":index + 1,"answer":key});
    selectedCheckArray.value.push(index + 1);
   
    console.log(submittedAnswersObject);
   
  }
}


  console.log(submittedAnswersObject.value.length + ' is the current length of the submitted answers');

  if(questionsLength.value === submittedAnswersObject.value.length)
  {
    console.log('ok full');
    allClicked = true;
    tallyAnswers();
  }

}

function tallyAnswers()
{
  console.log('tallyanswers called here');
  
  submittedAnswersObject.value.forEach(element => {
    console.log(element.answer);
    if(element.answer==='a')
    {
      points.value += 1;
    }
    if(element.answer==='b')
    {
      points.value += 2;
    }
    if(element.answer==='c')
    {
      points.value += 3;
    }
    if(element.answer==='d')
    {
      points.value += 4;
    }
  });
  console.log('congrats, you have ' + points.value);
  if(points.value ===7)
  {
    console.log('you have a DESIGNERS eye!! very cool!');
    yourType.value = 'you have a DESIGNERS eye!! very cool!';
    yourDescription.value = 'Does your child love to color, draw, paint, shape, sticker, sew, decorate, build and design? Then this is the place for you!';

  }
  if(points.value>7&&points.value<=14)
  {
      console.log('you are quite the THINKER!! fantastic!');
      yourType.value = 'you are quite the THINKER!! fantastic!';
      yourDescription.value = 'Does your child love puzzles and games, as well as to flex their knowledge and solve conundrums? Then this is the place for you!';
  }
  if(points.value > 14 && points.value <=21)
  {
    console.log('you would make a great SCIENTIST one day!! tubular!');
    yourType.value = 'you would make a great SCIENTIST one day!! tubular!'
    yourDescription.value = 'Is your child curious about dinosaurs, minerals, the human body, physics, chemistry, biology, forensics and nanotech? Then this is the place for you!';
  }
  if(points.value > 21 && points.value<=28)
  {
    console.log('your varied interests would make for a fine DIRECTOR! awesome!');
    yourType.value = 'your varied interests would make for a fine DIRECTOR! awesome!'
    yourDescription.value = 'Does your child love to “Play House” or create worlds with dinosaurs, dolls, and other critters? Then this is the place for you.';
  }
}

function checkDuplicates(index)
{
  selectedCheckArray.value.forEach(element => {
    if(element == index +1)
    {
      dontAdd = true;
      console.log('this is a dupe ...dontAdd is ' + dontAdd);
      return;
    }
    // else if(element != index + 1 ) 
    // {dontAdd = false;}

    console.log(index + element + 'here' + dontAdd);
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
      <div v-for="(question, index) in questionsInJSONAsObj" id="questionBlock">
        <p>{{ index + 1 }}. {{ question.statement }}</p>
        <div v-for="(answer, key) in question.answers" class = 'answers'>
          <input type="radio" :id="key"  :name="'question-' + (index + 1)" @click="radClicked(key,index)">
          <label :for="key" > {{ answer }}</label>
          <!-- remove below -->
           <label>{{  }}</label> 
        </div>

        <br>
        
      </div>

      <!-- Outputs # of question template component based on length of questionsLength -->
    
      <!-- Add or delete buttons to add or subtract total questions -->
      <!-- Recieves removeTemplate and addTemplate from component -->
      <AddAndDeleteButtons @removeTemplate="removeTemplate" @addTemplate="addTemplate" />

      <br>
      <!-- Edit button to modify question and its answers -->
      <EditButton :questionsLength="questionsLength" @finalizeChanges="finalizeChanges" />

      <!-- below, the submit button component and popUp, hidden by v-show until all questions are answered -->
      <div v-show="allClicked">
          <submitQuizButton :learnerType = 'yourType' :description = 'yourDescription' class = 'subCom'></submitQuizButton>
      </div>
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
main{
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.answers{
 display: flex;
width: fit-content;
/* margin-left: 40vw; */
/* flex-direction: row; */
}
.subCom{
  width:100%;
  margin: 0 auto;
}
input:hover{

  transform:scale(1.2);
  transition: 1s;

}
p{
  margin-bottom: 10px;
}

@media  (min-width:450px) {
  .answers{
    margin-left: 35vw;
    
  }
}
p,h1,label{
  font-size: clamp(1rem,2.2vw,1.8rem);
  text-transform: capitalize;
}

</style>
