<template>
    <div>
        <button :disabled="!allClicked" class='subQuizButton' @click="show = !show">Submit Quiz</button>
    </div>

    <div v-show="show" class='popUpc'>
        <div class='popUpHead'>

            <img src='../images/adventuretown.png' id="logo">

            <h1>Congratulations!</h1>
            <h2 id='lt'>{{ learnerType }}</h2>
            <br>
            <p>{{ description }}</p>
        </div>
        <div v-if="learnerType" class='mid'>
            <a :href="'https://www.adventuretowntoys.com/' + learnerType + '.html'">
                <img :src="'src/assets/images/learner-types/' + learnerType + '.png'" class=learnerImg>
            </a>
            <p>Click the image above for lots of cool and neat things!</p>
        </div>
        <div class='popUpFoot'>
            <button @click="show = !show" class='subQuizButton' id='popUpCloseButton'>Close</button>
        </div>
    </div>
</template>


<script setup>
import { ref } from "vue";


defineProps({ learnerType: String, description: String, allClicked: Boolean });
let show = ref(false);
let learnTypeLink = '';
let learnTypeLogo = '';
let leenteep = '';

// only the keys are used here.
let links = [{ Thinkers: 'https://www.adventuretowntoys.com/Thinkers.html' }, { Makers: 'https://www.adventuretowntoys.com/Makers.html' }, { Scientists: 'https://www.adventuretowntoys.com/Scientists.html' }, { Designers: 'https://www.adventuretowntoys.com/Designers.html' }, { Fledglings: 'https://www.adventuretowntoys.com/Fledglings.html' }, { Directors: 'https://www.adventuretowntoys.com/Directors.html' }]




function popUp() {
    show.value = true;

    leenteep = document.getElementById('lt').innerText;



    links.forEach(element => {
        if (leenteep === Object.keys(element).toString()) {

            learnTypeLink = 'https://www.adventuretowntoys.com/' + leenteep.toString() + '.html';


        }
    });
}


</script>

<style scoped>
p {
    text-transform: capitalize;
    margin-top: 10px;
    color: #fff;
    padding-left: 20px;
    padding-right: 20px;
    font-size: clamp(0.7rem, 1.5vw, 1.7rem);
}

.learnerImg {
    width: 100%;
    margin: 0 auto;
    max-width: fit-content;
    transition: 1s;
    max-width: 15vw;
}

.learnerImg:hover {
    transform: scale(1.1);
    transition: 1s;
}

h1 {
    text-decoration: underline;
    color: rgb(241, 241, 115);
    text-transform: uppercase;
    margin-bottom: 10px;
    font-size: clamp(1rem, 1.8vw, 2rem);
}

h2 {
    color: rgb(241, 241, 115);
    text-transform: uppercase;
    margin-bottom: 5px;
}

#logo {
    width: 100%;
    margin: 0 auto;
    max-width: 40%;
}

.mid {
    height: 100vh;
}

.popUpHead {
    border-radius: 2px;
    padding: 10px;
    border: solid 5px #09715c solid;
}

.popUpFoot {
    background-color: #09715c solid;
}

#popUpCloseButton {
    width: 100%;
    margin: 0 auto;
    border: solid 1px rgb(15, 150, 82);
}

.popUpc {
    width: 60vw;
    height: 90%;
    background-color: rgba(15, 150, 82, 0.884);
    position: fixed;
    top: 15px;
    border-radius: 5px;
    border: #09715c solid 10px;
    backdrop-filter: blur(4px);
    display: flex;
    flex-direction: column;
    margin-left: 16vw;
    margin-right: 19vw;

}

.subQuizButton {
    appearance: none;
    background-color: #09715c;
    ;
    border: 1px solid rgba(27, 31, 35, .15);
    border-radius: 6px;
    box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
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

.subQuizButton:disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: default;
}
</style>