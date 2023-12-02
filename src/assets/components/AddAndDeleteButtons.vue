<script setup>
import {ref, watch, } from 'vue'


const emit = defineEmits(['addTemplate', 'removeTemplate'])
const props = defineProps(['questionsLength', 'MAXQUESTIONLENGTH'])

const addButtonFlag = ref(false)

watch(() => props.questionsLength, (newValue) => {
  if (newValue == props.MAXQUESTIONLENGTH) {
    addButtonFlag.value = false
  } else {
    addButtonFlag.value = true
  }
})

</script>

<template>
    <div>
        <p id="alert" v-if="!addButtonFlag">Maximum questions allowed is {{ props.MAXQUESTIONLENGTH }}</p>
        <br>
        <button id="addButton" v-if="addButtonFlag" @click="$emit('addTemplate')">Click To Add Template</button>
        <button id="deleteButton" @click="$emit('removeTemplate')">Click To Remove Template</button>
  </div>
</template>

<style scoped>

#alert {
  color:red;
  font-weight: bold;
}

#addButton {
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

#deleteButton {
  appearance: none;
  background-color: #d35555;;
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