<template>
    <div>
        <button class = 'subQuizButton' @click="show=!show">Submit Quiz</button>
    </div>

    <div v-show="show" class = 'popUp'>
     <h1 v v-show="show">Congratulations!</h1>
     <p>You are a </p>
     <p></p>
     <button @click="show = !show" class = 'subQuizButton' id = 'popUpCloseButton'>Close</button>
    </div>
</template>

<script setup>
import { ref } from "vue";

let show = ref(false);
   function popUp()
   {
        show = !show;
        console.log('submit pressed ' + show);
   }

   
</script>

<style scoped>

#popUpCloseButton{
    
   position: relative;
   top:70vh;
    
}
.popUp{
    width: 100%;
    height: 500px;
    background-color: rgb(15, 150, 82);
    position: fixed;
    top:5px;
   


}

.subQuizButton{
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