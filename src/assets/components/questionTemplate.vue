<script setup>
import {ref, reactive, computed} from 'vue';
import JSONfile from './questions.json'



const props = defineProps(['questionsLength'])
const questionNumber = ref(props.questionsLength)

const questionsInJSON = reactive(JSONfile)
const question = ref('') 
const statement = ref('') 
const answers = ref('') 
const value = ref('') 

computed(()=> {
    questionsInJSON['question'] = question.value
    questionsInJSON['statement'] = statement.value
    questionsInJSON['answers'] = answers.value
    questionsInJSON['value'] = value.value
})

</script>

<template>
    <p>{{ questionNumber }}. Insert question </p>
    <div>
        <input id="a" type="radio" name="question" v-model="question">
        <label for="a">Insert A</label>
    </div>
    <div>
        <input id="b" type="radio" name="question" v-model="statement">
        <label for="b">Insert B</label>
    </div>
    <div>
        <input id="c" type="radio" name="question" v-model="answers">
        <label for="c">Insert C</label>
    </div>
    <div>
        <input id="d" type="radio" name="question" v-model="value">
        <label for="d">Insert D</label>
    </div>
    <br>

</template>

