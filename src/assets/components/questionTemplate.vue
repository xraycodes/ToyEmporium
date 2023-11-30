<script setup>
import {ref, reactive, watch, computed} from 'vue';
import JSONfile from './questions.json'

// Importing length of questions from App.vue
const props = defineProps(['questionsLength'])
const questionNumber = ref(props.questionsLength)

const questionsInJSON = reactive(JSONfile)
const question = ref('') 
const statement = ref('') 
const answers = ref('') 
const value = ref('') 

// testing

// Watch for changes in the inputs and update the reactive object
// watch([question, statement, answers, value], () => {
//   const index = question.value - 1;
//   questionsInJSON[index]['question'] = question.value;
//   questionsInJSON[index]['statement'] = statement.value;
//   questionsInJSON[index]['answers'] = answers.value;
//   questionsInJSON[index]['value'] = value.value;
// })

// const calculate = () => {
//     const index = questionNumber.value - 1
//     if (!questionsInJSON[index]) {
//         questionsInJSON[index] = {};
//     }
//     console.log(question.value)
//     console.log(statement.value)
//     console.log(answers.value)

//     questionsInJSON[index]['question'] = question.value
//     questionsInJSON[index]['statement'] = statement.value
//     questionsInJSON[index]['answers'] = answers.value
//     questionsInJSON[index]['value'] = value.value
//     console.log(questionsInJSON)
// }

</script>

<template> 
    <p>{{ questionNumber }}. Insert question </p>
    <div>
        <input id="a" type="radio" name="question">
        <label for="a">Insert A</label>
    </div>
    <div>
        <input id="b" type="radio" name="question">
        <label for="b">Insert B</label>
    </div>
    <div>
        <input id="c" type="radio" name="question">
        <label for="c">Insert C</label>
    </div>
    <div>
        <input id="d" type="radio" name="question">
        <label for="d">Insert D</label>
    </div>
    <br>

</template>

