<script setup>
import {ref} from 'vue';

const props = defineProps(['questionsLength'])
const questionNumber = ref(props.questionsLength)

</script>

<template>
    <p>Insert question {{ questionNumber }}</p>
    <div>
        <label for="a">Insert A</label>
        <input id="a" type="radio" name="question">
    </div>
    <div>
        <label for="b">Insert B</label>
        <input id="b" type="radio" name="question">
    </div>
    <div>
        <label for="c">Insert C</label>
        <input id="c" type="radio" name="question">
    </div>
    <div>
        <label for="d">Insert D</label>
        <input id="d" type="radio" name="question">
    </div>


</template>

