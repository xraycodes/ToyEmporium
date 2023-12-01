<template>
    <div>
        <button class = 'subQuizButton' @click="show=!show">Submit Quiz</button>
    </div>

    <div v-show="show" class = 'popUp'>
        <div class = 'popUpHead'>
     <h1 v v-show="show">Congratulations!</h1>
     <p> {{learnerType}} </p>
     <br>
     <p>{{ description }}</p>
        </div>
        <div class = 'mid'></div>
    <div class = 'popUpFoot'>
     <button @click="show = !show" class = 'subQuizButton' id = 'popUpCloseButton'>Close</button>
    </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({learnerType:String,description:String});
let show = ref(false);
   function popUp()
   {
        show = !show;
        console.log('submit pressed ' + show);
   }

   
</script>

<style scoped>
p{
    text-transform: capitalize;
    margin-top:10px;
    color: #fff;
    padding-left: 20px;
    padding-right: 20px;
    
  font-size: clamp(1rem,2.3vw,2rem);
}

h1{
    text-decoration: underline;
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 10px;
    
  font-size: clamp(1rem,2.3vw,2rem);
}

.mid{
    height:50vh;
}
.popUpHead{
    border-radius: 2px;
    background-color:rgb(15, 150, 82) ;
    padding: 10px;
    border: solid 5px #09715c solid;
}
.popUpFoot{
    background-color: #09715c solid;
}
#popUpCloseButton{
    
   /* position: relative; */
   /* top:65vh; */
   width: 100%;
   margin: 0 auto;
   border: solid 1px rgb(15, 150, 82) ;
    
}
.popUp{
    width: 60vw;
    height: 80%;
    background-color: rgba(15, 150, 82, 0.411);
    position: fixed;
    top:15px;
    border-radius: 5px;
    border: #09715c solid 10px;
    backdrop-filter: blur(4px);
    display: flex;
    flex-direction: column;
    margin-left: 20vw;
   


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