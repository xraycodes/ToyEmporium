<script setup>
import {ref, reactive} from 'vue';

const props = defineProps(['questionsLength'])
const emit = defineEmits(['finalizeChanges'])

const editOn = ref(false)
// The keys in all of questions
const question = ref('') 
const statement = ref('') 
const answers = reactive({"a":'',"b":'',"c":'',"d":''}) 
const value = ref('') 

const sendChanges = () => {
  const dataToSend = {
    "question": question.value,
    "statement": statement.value,
    "answers": answers,
    "value": value.value
  };
  emit('finalizeChanges', dataToSend);
};

</script>

<template>

    <div>
        <button id="editButton" @click="editOn = !editOn">Click To Edit The Questions</button>
    </div>
    <br>

    <div v-if="editOn">
        <label for="questionNumber">Question: </label>
        <input type="text" id="questionNumber" v-model="question"><br>

        <label for="Statement">Statement: </label>
        <input type="text" id="Statement" v-model="statement"><br>

        <p>Answers: </p>

        <label for="Answers">A: </label>
        <input type="text" id="Answers" v-model="answers.a"><br> 
        <label for="Answers">B: </label>
        <input type="text" id="Answers" v-model="answers.b"><br> 
        <label for="Answers">C: </label>
        <input type="text" id="Answers" v-model="answers.c"><br> 
        <label for="Answers">D: </label>
        <input type="text" id="Answers" v-model="answers.d"><br> 

        <label for="Value">Value: </label>
        <input type="text" id="Value" v-model="value"><br>
        <br>

        <button id="finalizeButton" @click="sendChanges">Click To Finalize Changes</button>
    </div>
</template>

<style>
#editButton,
#finalizeButton {
  appearance: none;
  background-color: #09715c;;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  margin-right: 10px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
}

</style>