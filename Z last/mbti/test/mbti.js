document.querySelector(".backToQuestions").classList.add("hidden");
document.querySelector(".submit").classList.add("hidden");
document.querySelector(".previous").classList.add("hidden");
document.querySelector(".results").classList.add("hidden");

var pageNumCont = document.querySelector(".numbers");
var pageNum = 1;
pageNumCont.innerHTML = "page " + pageNum + "/8";

var omar = "hello";

const Niq = [
    "I focus on the bigger picture rather than details.",
    "I am future-oriented.",
    "I am strategic in planning to reach goals.",
    "I 'go with the flow'.",
    "I enjoy abstract concepts and theoretical discussions.",
    "I often fail to explain my thought process.",
    "I think in images/impressions rather than words/sentences.",
    "I rely on my instincts.",
    "I have sudden realizations.",
    "I use metaphors a lot."
];

const Neq = [
    "I am creative.",
    "I enjoy brainstorming and exploring multiple options.",
    "I often see connections and relationships between seemingly unrelated things.",
    "I am great at communicating.",
    "I am hyperfocused when i am inspired.",
    "I have difficulty with commitment.",
    "I am almost never bored.",
    "I enjoy imagining different scenarios and outcomes.",
    "I am curious and eager to learn about a wide variety of topics.",
    "I have many casual hobbies, they drop and pick up at will."
];

const Seq = [
    "I am highly aware of my surroundings and notice details easily.",
    "I enjoy engaging in physical activities and experiences.",
    "I thrive on being in the moment and acting spontaneously.",
    "I am energized by sensory experiences and stimulation.",
    "I observe details without necessarily connecting to past/future",
    "I have a keen sense of aesthetics and appreciate beauty in the world around me.",
    "I am quick to respond to changes in my environment.",
    "I enjoy activities over talking when hanging out",
    "I prefer hands-on learning and doing things practically.",
    "I have a great connection with my five senses."
];

const Siq = [
    "I have a strong memory for details and past experiences.",
    "I find comfort in routines and familiar patterns.",
    "I pay close attention to practical details and specifics.",
    "I value stability and reliability in my life.",
    "I enjoy organizing and categorizing information.",
    "I am good at recalling facts and specific information.",
    "I relate past experiences to present circumstances.",
    "I prefer tried-and-true methods and traditions.",
    "I focus on details rather than the big picture.",
    "I am aware of internal bodily sensations."
];

const Teq = [
    "I am a rule-follower",
    "I value logical consistency and coherence in ideas.",
    "I am skilled at judging things objectively and logically.",
    "I set emotions aside and make judgements based on what seems rational and reasonable.",
    "I am often labled as 'bossy'.",
    "I am judgemental to illogical decisions.",
    "I am really cautious.",
    "I value effectiveness and practicality.",
    "I am persuasive and charismatic.",
    "I see the world in black-and-white."
];
const Tiq = [
    "i have internal belief systems built on past discoveries and insights.",
    "I am deeply analytical and logical.",
    "I prefer to solve problems independently and methodically.",
    "I expect reality to conform to my already existing ideas.",
    "I gradually adjust my thinking if they come in constant conflict with reality.",
    "I value meaning and purpose.",
    "My mind is more organized than my surroundings.",
    "I sometimes play devil's advocate.",
    "I give practical solutions to emotional problems.",
    "I am driven to create logical systems and structures."
];

const Feq = [
    "I am sensitive to the emotions and feelings of others.",
    "I base my decisions on my values which are determined through interacting with people or the assessment of others' needs.",
    "I often prioritize the needs and feelings of others over my own.",
    "I am skilled at empathizing with people and understanding their perspectives.",
    "My values are heavily influenced by cultural values and societal norms.",
    "I symphasize easily with others.",
    "I enjoy socializing and connecting with others.",
    "I am good at mediating conflicts and finding common ground.",
    "I am a people pleaser.",
    "I find fulfillment in helping and supporting others."
];

const Fiq = [
    "I value genuinity and sincerity.",
    "I deeply care about authenticity and staying true to myself.",
    "I can feel others' pain as if it was my own.",
    "I prioritize understanding my own feelings and motivations.",
    "I am deeply empathetic.",
    "I value close, meaningful relationships based on mutual understanding.",
    "I adopt my ethics based on my assessment rather than the opinion of others'.",
    "I seek inner harmony and strive for personal growth.",
    "I hate critiquing others.",
    "I do what I feel is right regardless of what society tells me."
];
var niScore = 0;
var neScore = 0;
var siScore = 0;
var seScore = 0;
var tiScore = 0;
var teScore = 0;
var fiScore = 0;
var feScore = 0;

var allQs = [Niq, Neq, Tiq, Teq, Feq, Fiq, Seq, Siq];
var allQsNames = ["ni", "ne", "ti", "te", "fe", "fi", "se", "si"];

for(var i = 0; i < 8; i++){
    var score = 0;
    var page = document.createElement("div");
    page.classList.add("page");
    page.classList.add("hidden");
    page.classList.add("page" + (i + 1));
    document.querySelector(".pages").appendChild(page);
    page.innerHTML = "page" + (i + 1);
    for(var j = 0; j < 10; j++){
        var qnadiv = document.createElement("div");
        qnadiv.classList.add("qna");
        page.appendChild(qnadiv);
        qnadiv.style.alignSelfSelf = "center";
        var question = document.createElement("h4");
        question.innerText = allQs[i][j];
        qnadiv.appendChild(question);
        var input = document.createElement("input");
        input.style.width = "70%";
        input.type = "range";
        input.min = "0";
        input.max = "100";
        input.value = "50";
        input.classList.add(allQsNames[i]);
        var relate = document.createElement("h5");
        relate.innerText = "Very Relatable";
        relate.style.order = "3";
        var notrelate = document.createElement("h5");
        notrelate.innerText = "Not at All Relatable";
        notrelate.style.order = "1";
        input.style.order = "2";
        var answer = document.createElement("div");
        answer.appendChild(input);
        answer.appendChild(relate);
        answer.appendChild(notrelate);
        qnadiv.appendChild(answer);
        answer.classList.add("answer");

    }
}

function calculateScore(groupclass){
    var sliders = document.querySelectorAll(groupclass);
    var total = 0;
    sliders.forEach(slider => {
        total += parseInt(slider.value);
    })
    return total;
}

function updateScores(){
    niScore = calculateScore(".ni");
    neScore = calculateScore(".ne");
    tiScore = calculateScore(".ti");
    fiScore = calculateScore(".fi");
    siScore = calculateScore(".si");
    seScore = calculateScore(".se");
    teScore = calculateScore(".te");
    feScore = calculateScore(".fe");
    var totalScoresArray = [niScore, neScore, siScore, seScore, teScore, tiScore, feScore, fiScore];
    arrayN = ["ni", "ne", "si", "se", "te", "ti", "fe", "fi"];
    function sort(array, arrayNa) {
        var unsorted = true;
        while (unsorted) {
            unsorted = false;
            for (var i = 0; i < array.length - 1; i++) {
                if (array[i] < array[i + 1]) {
                    // Swap scores
                    var tempScore = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = tempScore;

                    // Swap corresponding function names
                    var tempName = arrayNa[i];
                    arrayNa[i] = arrayNa[i + 1];
                    arrayNa[i + 1] = tempName;

                    unsorted = true;
                }
            }
        }
    }


    sort(totalScoresArray, arrayN);
    var domF1 = arrayN[0];
    var auxf1;
    var mbti1 = "";
    var mbti2 = "";
    var mbti3 = "";
    var domF2 = arrayN[1];
    var auxf2 = "";
    var domF3 = arrayN[2];
    var auxf3 = "";

    if(domF1 == "te"){
        for (var i = 0; i < 8; i++){
            if(arrayN[i].includes("ni")){
                auxf1 = "ni";
                mbti1 = "ENTJ";
                break;
            }
            if(arrayN[i].includes("si")){
                auxf1 = "si";
                mbti1 = "ESTJ";
                break;
            }
        }
    }else if(domF1 == "fe"){
        for (var i = 0; i < 8; i++){
            if(arrayN[i].includes("ni")){
                auxf1 = "ni";
                mbti1 = "ENFJ";
                break;
            }
            if(arrayN[i].includes("si")){
                auxf1 = "si";
                mbti1 = "ESFJ";
                break;
            }
        }
    }else if(domF1 == "fi"){
        for (var i = 0; i < 8; i++){
            if(arrayN[i].includes("ne")){
                auxf1 = "ne";
                mbti1 = "INFP";
                break;
            }
            if(arrayN[i].includes("se")){
                auxf1 = "se";
                mbti1 = "ISFP";
                break;
            }
        }
    }else if(domF1 == "ti"){
        for (var i = 0; i < 8; i++){
            if(arrayN[i].includes("ne")){
                auxf1 = "ne";
                mbti1 = "INTP";
                break;
            }
            if(arrayN[i].includes("se")){
                auxf1 = "se";
                mbti1 = "ISTP";
                break;
            }
        }
    }else if(domF1 == "ne"){
        for (var i = 0; i < 8; i++){
            if(arrayN[i].includes("ti")){
                auxf1 = "ti";
                mbti1 = "ENTP";
                break;
            }
            if(arrayN[i].includes("fi")){
                auxf1 = "fi";
                mbti1 = "ENFP";
                break;
            }
        }
    }else if(domF1 == "se"){
        for (var i = 0; i < 8; i++){
            if(arrayN[i].includes("ti")){
                auxf1 = "ti";
                mbti1 = "ESTP";
                break;
            }
            if(arrayN[i].includes("fi")){
                auxf1 = "fi";
                mbti1 = "ESFP";
                break;
            }
        }
    }else if(domF1 == "ni"){
        for (var i = 0; i < 8; i++){
            if(arrayN[i].includes("te")){
                auxf1 = "te";
                mbti1 = "INTJ";
                break;
            }
            if(arrayN[i].includes("fe")){
                auxf1 = "fe";
                mbti1 = "INFJ";
                break;
            }
        }
    }else if(domF1 == "si"){
        for (var i = 0; i < 8; i++){
            if(arrayN[i].includes("te")){
                auxf1 = "te";
                mbti1 = "ISTJ";
                break;
            }
            if(arrayN[i].includes("fe")){
                auxf1 = "fe";
                mbti1 = "ISFJ";
                break;
            }
        }
    }


    if(domF2 == "te"){
        for (var i = 0; i < 8; i++){
            if(arrayN[i].includes("ni")){
                auxf2 = "ni";
                mbti2 = "ENTJ";
                break;
            }
            if(arrayN[i].includes("si")){
                auxf2 = "si";
                mbti2 = "ESTJ";
                break;
            }
        }
    }else if(domF2 == "fe"){
        for (var i = 0; i < 8; i++){
            if(arrayN[i].includes("ni")){
                auxf2 = "ni";
                mbti2 = "ENFJ";
                break;
            }
            if(arrayN[i].includes("si")){
                auxf2 = "si";
                mbti2 = "ESFJ";
                break;
            }
        }
    }else if(domF2 == "fi"){
        for (var i = 0; i < 8; i++){
            if(arrayN[i].includes("ne")){
                auxf2 = "ne";
                mbti2 = "INFP";
                break;
            }
            if(arrayN[i].includes("se")){
                auxf2 = "se";
                mbti2 = "ISFP";
                break;
            }
        }
    }else if(domF2 == "ti"){
        for (var i = 0; i < 8; i++){
            if(arrayN[i].includes("ne")){
                auxf2 = "ne";
                mbti2 = "INTP";
                break;
            }
            if(arrayN[i].includes("se")){
                auxf2 = "se";
                mbti2 = "ISTP";
                break;
            }
        }
    }else if(domF2 == "ne"){
        for (var i = 0; i < 8; i++){
            if(arrayN[i].includes("ti")){
                auxf2 = "ti";
                mbti2 = "ENTP";
                break;
            }
            if(arrayN[i].includes("fi")){
                auxf2 = "fi";
                mbti2 = "ENFP";
                break;
            }
        }
    }else if(domF2 == "se"){
        for (var i = 0; i < 8; i++){
            if(arrayN[i].includes("ti")){
                auxf2 = "ti";
                mbti2 = "ESTP";
                break;
            }
            if(arrayN[i].includes("fi")){
                auxf2 = "fi";
                mbti2 = "ESFP";
                break;
            }
        }
    }else if(domF2 == "ni"){
        for (var i = 0; i < 8; i++){
            if(arrayN[i].includes("te")){
                auxf2 = "te";
                mbti2 = "INTJ";
                break;
            }
            if(arrayN[i].includes("fe")){
                auxf2 = "fe";
                mbti2 = "INFJ";
                break;
            }
        }
    }else if(domF == "si"){
        for (var i = 0; i < 8; i++){
            if(arrayN[i].includes("te")){
                auxf2 = "te";
                mbti2 = "ISTJ";
                break;
            }
            if(arrayN[i].includes("fe")){
                auxf2 = "fe";
                mbti2 = "ISFJ";
                break;
            }
        }
    }

    if(domF3 == "te"){
        for (var i = 0; i < 8; i++){
            if(arrayN[i].includes("ni")){
                auxf3 = "ni";
                mbti3 = "ENTJ";
                break;
            }
            if(arrayN[i].includes("si")){
                auxf3 = "si";
                mbti3 = "ESTJ";
                break;
            }
        }
    }else if(domF3 == "fe"){
        for (var i = 0; i < 8; i++){
            if(arrayN[i].includes("ni")){
                auxf3 = "ni";
                mbti3 = "ENFJ";
                break;
            }
            if(arrayN[i].includes("si")){
                auxf3 = "si";
                mbti3 = "ESFJ";
                break;
            }
        }
    }else if(domF3 == "fi"){
        for (var i = 0; i < 8; i++){
            if(arrayN[i].includes("ne")){
                auxf3 = "ne";
                mbti3 = "INFP";
                break;
            }
            if(arrayN[i].includes("se")){
                auxf3 = "se";
                mbti3 = "ISFP";
                break;
            }
        }
    }else if(domF3 == "ti"){
        for (var i = 0; i < 8; i++){
            if(arrayN[i].includes("ne")){
                auxf3 = "ne";
                mbti3 = "INTP";
                break;
            }
            if(arrayN[i].includes("se")){
                auxf3 = "se";
                mbti3 = "ISTP";
                break;
            }
        }
    }else if(domF3 == "ne"){
        for (var i = 0; i < 8; i++){
            if(arrayN[i].includes("ti")){
                auxf3 = "ti";
                mbti3 = "ENTP";
                break;
            }
            if(arrayN[i].includes("fi")){
                auxf3 = "fi";
                mbti3 = "ENFP";
                break;
            }
        }
    }else if(domF3 == "se"){
        for (var i = 0; i < 8; i++){
            if(arrayN[i].includes("ti")){
                auxf3 = "ti";
                mbti3 = "ESTP";
                break;
            }
            if(arrayN[i].includes("fi")){
                auxf3 = "fi";
                mbti3 = "ESFP";
                break;
            }
        }
    }else if(domF3 == "ni"){
        for (var i = 0; i < 8; i++){
            if(arrayN[i].includes("te")){
                auxf3 = "te";
                mbti3 = "INTJ";
                break;
            }
            if(arrayN[i].includes("fe")){
                auxf3 = "fe";
                mbti3 = "INFJ";
                break;
            }
        }
    }else if(domF3 == "si"){
        for (var i = 0; i < 8; i++){
            if(arrayN[i].includes("te")){
                auxf3 = "te";
                mbti3 = "ISTJ";
                break;
            }
            if(arrayN[i].includes("fe")){
                auxf3 = "fe";
                mbti3 = "ISFJ";
                break;
            }
        }
    }



    var resultsDiv = document.querySelector(".results");
    resultsDiv.innerHTML = `
        <div class="top3">
        <h1>Your top 3 MBTI:</h1>
        <h2>1.  ${mbti1}</h2>
        <h2>2.  ${mbti2}</h2>
        <h2>3.  ${mbti3}</h2>
        </div>
        <div class="top3f">
        <h4>${domF1} Score: ${totalScoresArray[0]/10}%</h4>
        <h4>${domF2} Score: ${totalScoresArray[1]/10}%</h4>

        </div>
        <h4 class="thirdF">${domF3} Score: ${totalScoresArray[2]/10}%</h4>
        <h4 class="fourthF">${arrayN[3]} Score: ${totalScoresArray[3]/10}%</h4>
        <h4 class="fifthF">${arrayN[4]} Score: ${totalScoresArray[4]/10}%</h4>
        <h4 class="sixthF">${arrayN[5]} Score: ${totalScoresArray[5]/10}%</h4>
        <h4 class="seventhF" >${arrayN[6]} Score: ${totalScoresArray[6]/10}%</h4>
        <h4 class="eightthF">${arrayN[7]} Score: ${totalScoresArray[7]/10}%</h4>
    `;
}






document.querySelectorAll("input[type = 'range']").forEach(slide => {
    slide.addEventListener("input", updateScores);
})













var totalScoresArray = [niScore, neScore, siScore, seScore, teScore, tiScore, feScore, fiScore];
arrayN = ["ni", "ne", "si", "se", "te", "ti", "fe", "fi"];
function sort(array, arrayNa) {
    var unsorted = true;
    while (unsorted) {
        unsorted = false;
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i] < array[i + 1]) {
                // Swap scores
                var tempScore = array[i];
                array[i] = array[i + 1];
                array[i + 1] = tempScore;

                // Swap corresponding function names
                var tempName = arrayNa[i];
                arrayNa[i] = arrayNa[i + 1];
                arrayNa[i + 1] = tempName;

                unsorted = true;
            }
        }
    }
}


sort(totalScoresArray, arrayN);
var domF1 = arrayN[0];
var auxf1;
var mbti1 = "";
var mbti2 = "";
var mbti3 = "";
var domF2 = arrayN[1];
var auxf2 = "";
var domF3 = arrayN[2];
var auxf3 = "";

if(domF1 == "te"){
    for (var i = 0; i < 8; i++){
        if(arrayN[i].includes("ni")){
            auxf1 = "ni";
            mbti1 = "ENTJ";
            break;
        }
        if(arrayN[i].includes("si")){
            auxf1 = "si";
            mbti1 = "ESTJ";
            break;
        }
    }
}else if(domF1 == "fe"){
    for (var i = 0; i < 8; i++){
        if(arrayN[i].includes("ni")){
            auxf1 = "ni";
            mbti1 = "ENFJ";
            break;
        }
        if(arrayN[i].includes("si")){
            auxf1 = "si";
            mbti1 = "ESFJ";
            break;
        }
    }
}else if(domF1 == "fi"){
    for (var i = 0; i < 8; i++){
        if(arrayN[i].includes("ne")){
            auxf1 = "ne";
            mbti1 = "INFP";
            break;
        }
        if(arrayN[i].includes("se")){
            auxf1 = "se";
            mbti1 = "ISFP";
            break;
        }
    }
}else if(domF1 == "ti"){
    for (var i = 0; i < 8; i++){
        if(arrayN[i].includes("ne")){
            auxf1 = "ne";
            mbti1 = "INTP";
            break;
        }
        if(arrayN[i].includes("se")){
            auxf1 = "se";
            mbti1 = "ISTP";
            break;
        }
    }
}else if(domF1 == "ne"){
    for (var i = 0; i < 8; i++){
        if(arrayN[i].includes("ti")){
            auxf1 = "ti";
            mbti1 = "ENTP";
            break;
        }
        if(arrayN[i].includes("fi")){
            auxf1 = "fi";
            mbti1 = "ENFP";
            break;
        }
    }
}else if(domF1 == "se"){
    for (var i = 0; i < 8; i++){
        if(arrayN[i].includes("ti")){
            auxf1 = "ti";
            mbti1 = "ESTP";
            break;
        }
        if(arrayN[i].includes("fi")){
            auxf1 = "fi";
            mbti1 = "ESFP";
            break;
        }
    }
}else if(domF1 == "ni"){
    for (var i = 0; i < 8; i++){
        if(arrayN[i].includes("te")){
            auxf1 = "te";
            mbti1 = "INTJ";
            break;
        }
        if(arrayN[i].includes("fe")){
            auxf1 = "fe";
            mbti1 = "INFJ";
            break;
        }
    }
}else if(domF1 == "si"){
    for (var i = 0; i < 8; i++){
        if(arrayN[i].includes("te")){
            auxf1 = "te";
            mbti1 = "ISTJ";
            break;
        }
        if(arrayN[i].includes("fe")){
            auxf1 = "fe";
            mbti1 = "ISFJ";
            break;
        }
    }
}


if(domF2 == "te"){
    for (var i = 0; i < 8; i++){
        if(arrayN[i].includes("ni")){
            auxf2 = "ni";
            mbti2 = "ENTJ";
            break;
        }
        if(arrayN[i].includes("si")){
            auxf2 = "si";
            mbti2 = "ESTJ";
            break;
        }
    }
}else if(domF2 == "fe"){
    for (var i = 0; i < 8; i++){
        if(arrayN[i].includes("ni")){
            auxf2 = "ni";
            mbti2 = "ENFJ";
            break;
        }
        if(arrayN[i].includes("si")){
            auxf2 = "si";
            mbti2 = "ESFJ";
            break;
        }
    }
}else if(domF2 == "fi"){
    for (var i = 0; i < 8; i++){
        if(arrayN[i].includes("ne")){
            auxf2 = "ne";
            mbti2 = "INFP";
            break;
        }
        if(arrayN[i].includes("se")){
            auxf2 = "se";
            mbti2 = "ISFP";
            break;
        }
    }
}else if(domF2 == "ti"){
    for (var i = 0; i < 8; i++){
        if(arrayN[i].includes("ne")){
            auxf2 = "ne";
            mbti2 = "INTP";
            break;
        }
        if(arrayN[i].includes("se")){
            auxf2 = "se";
            mbti2 = "ISTP";
            break;
        }
    }
}else if(domF2 == "ne"){
    for (var i = 0; i < 8; i++){
        if(arrayN[i].includes("ti")){
            auxf2 = "ti";
            mbti2 = "ENTP";
            break;
        }
        if(arrayN[i].includes("fi")){
            auxf2 = "fi";
            mbti2 = "ENFP";
            break;
        }
    }
}else if(domF2 == "se"){
    for (var i = 0; i < 8; i++){
        if(arrayN[i].includes("ti")){
            auxf2 = "ti";
            mbti2 = "ESTP";
            break;
        }
        if(arrayN[i].includes("fi")){
            auxf2 = "fi";
            mbti2 = "ESFP";
            break;
        }
    }
}else if(domF2 == "ni"){
    for (var i = 0; i < 8; i++){
        if(arrayN[i].includes("te")){
            auxf2 = "te";
            mbti2 = "INTJ";
            break;
        }
        if(arrayN[i].includes("fe")){
            auxf2 = "fe";
            mbti2 = "INFJ";
            break;
        }
    }
}else if(domF == "si"){
    for (var i = 0; i < 8; i++){
        if(arrayN[i].includes("te")){
            auxf2 = "te";
            mbti2 = "ISTJ";
            break;
        }
        if(arrayN[i].includes("fe")){
            auxf2 = "fe";
            mbti2 = "ISFJ";
            break;
        }
    }
}

if(domF3 == "te"){
    for (var i = 0; i < 8; i++){
        if(arrayN[i].includes("ni")){
            auxf3 = "ni";
            mbti3 = "ENTJ";
            break;
        }
        if(arrayN[i].includes("si")){
            auxf3 = "si";
            mbti3 = "ESTJ";
            break;
        }
    }
}else if(domF3 == "fe"){
    for (var i = 0; i < 8; i++){
        if(arrayN[i].includes("ni")){
            auxf3 = "ni";
            mbti3 = "ENFJ";
            break;
        }
        if(arrayN[i].includes("si")){
            auxf3 = "si";
            mbti3 = "ESFJ";
            break;
        }
    }
}else if(domF3 == "fi"){
    for (var i = 0; i < 8; i++){
        if(arrayN[i].includes("ne")){
            auxf3 = "ne";
            mbti3 = "INFP";
            break;
        }
        if(arrayN[i].includes("se")){
            auxf3 = "se";
            mbti3 = "ISFP";
            break;
        }
    }
}else if(domF3 == "ti"){
    for (var i = 0; i < 8; i++){
        if(arrayN[i].includes("ne")){
            auxf3 = "ne";
            mbti3 = "INTP";
            break;
        }
        if(arrayN[i].includes("se")){
            auxf3 = "se";
            mbti3 = "ISTP";
            break;
        }
    }
}else if(domF3 == "ne"){
    for (var i = 0; i < 8; i++){
        if(arrayN[i].includes("ti")){
            auxf3 = "ti";
            mbti3 = "ENTP";
            break;
        }
        if(arrayN[i].includes("fi")){
            auxf3 = "fi";
            mbti3 = "ENFP";
            break;
        }
    }
}else if(domF3 == "se"){
    for (var i = 0; i < 8; i++){
        if(arrayN[i].includes("ti")){
            auxf3 = "ti";
            mbti3 = "ESTP";
            break;
        }
        if(arrayN[i].includes("fi")){
            auxf3 = "fi";
            mbti3 = "ESFP";
            break;
        }
    }
}else if(domF3 == "ni"){
    for (var i = 0; i < 8; i++){
        if(arrayN[i].includes("te")){
            auxf3 = "te";
            mbti3 = "INTJ";
            break;
        }
        if(arrayN[i].includes("fe")){
            auxf3 = "fe";
            mbti3 = "INFJ";
            break;
        }
    }
}else if(domF3 == "si"){
    for (var i = 0; i < 8; i++){
        if(arrayN[i].includes("te")){
            auxf3 = "te";
            mbti3 = "ISTJ";
            break;
        }
        if(arrayN[i].includes("fe")){
            auxf3 = "fe";
            mbti3 = "ISFJ";
            break;
        }
    }
}
// Update results display

window.onload = updateScores;


document.querySelector(".page1").classList.remove("hidden");
document.querySelector(".page1").classList.add("flex");
document.querySelector(".next").addEventListener("click", function(){
    if(pageNum == 8){
        alert("this is the last page");
    }else{
        pageNum += 1;
        pageNumCont.innerHTML = "page " + pageNum + "/8";
    }
    if(pageNum > 1){
        document.querySelector(".previous").classList.remove("hidden");
    }
    if(pageNum == 8){
        document.querySelector(".submit").classList.remove("hidden");
    }

    document.querySelectorAll(".page").forEach(Element =>{
        Element.classList.add("hidden");
        Element.classList.remove("flex");
    })
    document.querySelector(".page" + pageNum).classList.remove("hidden");
    document.querySelector(".page" + pageNum).classList.add("flex");
})

document.querySelector(".previous").addEventListener("click", function(){
    if(pageNum == 1){
        alert("this is the first page");
    }else{
        pageNum -= 1;
        pageNumCont.innerHTML = "page " + pageNum + "/8";
    }
    document.querySelectorAll(".page").forEach(Element =>{
        Element.classList.add("hidden");
        Element.classList.remove("flex");
    })
    document.querySelector(".page" + pageNum).classList.remove("hidden");
    document.querySelector(".page" + pageNum).classList.add("flex");
})

document.querySelector(".submit").addEventListener("click", function(){
    document.querySelectorAll(".first-page").forEach(Element => {
        Element.classList.add("hidden");
    })
    document.querySelectorAll(".last-page").forEach(subject => {
        subject.classList.remove("hidden");
    })
    document.querySelector(".results").classList.add("show-results");
})

document.querySelector(".backToQuestions").addEventListener("click", function(){
    document.querySelectorAll(".first-page").forEach(Element => {
        Element.classList.remove("hidden");

    })
    document.querySelectorAll(".last-page").forEach(subject => {
        subject.classList.add("hidden");
    })
    document.querySelector(".results").classList.remove("show-results");
})
document.querySelectorAll("button").forEach(button =>
    button.addEventListener("click", function(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })
)