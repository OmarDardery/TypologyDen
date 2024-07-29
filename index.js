var menuButton = $(".menubutton");
var menu = $(".menu");
var opacity = $(".opacity");

$(".last-page").hide();

menuButton.on("click", function() {
    menuButton.toggleClass("rotated");
    menu.toggleClass("hidden-menu");

    if (opacity.hasClass("hidden")) {
        opacity.removeClass("hidden");
        void opacity[0].offsetWidth; // Trigger a reflow

        opacity.addClass("opacityy");
        opacity.one("click", function() {
            opacity.removeClass("opacityy");
            opacity.one("transitionend", function() {
                opacity.addClass("hidden");
            });
            menuButton.toggleClass("rotated");
            menu.toggleClass("hidden-menu");
        });
    } else {
        opacity.removeClass("opacityy");
        opacity.one("transitionend", function() {
            opacity.addClass("hidden");
        });
        opacity.one("click", function() {
            opacity.removeClass("opacityy");
            opacity.one("transitionend", function() {
                opacity.addClass("hidden");
            });
            menuButton.toggleClass("rotated");
            menu.toggleClass("hidden-menu");
        });
    }
});
// the part above is for the menu functionality
// the part below is for loading tests
function loadTest(testName){
    $(".test-name").hide();
    $(".body-container").hide();
    $("#" + testName + "Test").removeClass("hidden");
}

$(".test-name").on("click", function(){
    loadTest($(this).attr("id"));
});

//the code below is for loading the home of the site.

$(".homeButton").on("click", function(){
    window.location.reload();
});

// the code below is for atoring all questions

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




const ni = {
    questions: Niq,
    score: 0,
    label: "Ni"
};
const ne = {
    questions: Neq,
    score: 0,
    label: "Ne"
};
const si = {
    questions: Siq,
    score: 0,
    label: "Si"
};
const ti = {
    questions: Tiq,
    score: 0,
    label: "Ti"
};
const fi = {
    questions: Fiq,
    score: 0,
    label: "Fi"
};
const te = {
    questions: Teq,
    score: 0,
    label: "Te"
};
const se = {
    questions: Seq,
    score: 0,
    label: "Se"
};
const fe = {
    questions: Feq,
    score: 0,
    label: "Fe"
};

var pageNumMbti = 1;
//the space below is to create question divs
function randNumsArray(arraylennum){
    var ranNumArray = [];
    for(var i = 0; i < arraylennum; i++){
        do{
            var ranNum = Math.floor(arraylennum * Math.random());
        }while(ranNumArray.includes(ranNum));
        ranNumArray[i] = ranNum;
    }
    return ranNumArray;
}

function createQuestionsMbti(object) {
    var page = $("<div></div>"); // Create a new div element
    page.attr("id", "page" + pageNumMbti); // Set the ID using jQuery attr method
    $("#mbtiTest .pages").append(page); // Append the new page to the container
    pageNumMbti++;
    page.addClass("page");
    var rand = randNumsArray(object.questions.length);
    for (var i = 0; i < object.questions.length; i++) {
        var questionmbti = $("<div></div>"); // Create a new div for the question container
        questionmbti.addClass("question-container"); // Add class using jQuery addClass method
        questionmbti.addClass(object.label + "page"); // Add additional class
        page.append(questionmbti); // Append the question container to the page

        var question = $("<h4></h4>"); // Create a new h3 element
         // Get an array of random indices
        question.text(object.questions[rand[i]]); // Set the text of the question using jQuery text method
        question.addClass("question");
        questionmbti.append(question); // Append the question to the question container
        var inputDiv = $(`<div class = 'inputDiv'><h5>Not At All Relatable</h5><input class = ${object.label} type = 'range' min = '0' max = '100' value='50'><h5>Very Relatable</h5></div>`);
        questionmbti.append(inputDiv);
    }
}


var mbtiObjects = [ne, ni, se, si, fe, fi, te, ti];

var l = randNumsArray(8);
for(var i = 0; i < 8; i++){
    createQuestionsMbti(mbtiObjects[l[i]]);
}
$(".page").hide();
$(".page1").show();
var pageNumberMbti = 1;
$("#mbtiTest .numbers").text(pageNumberMbti + "/8");

$(".submit").hide();

$("#mbtiTest .next").on("click", function(){
    if(pageNumberMbti == 8){
        $(".end").removeClass("hidden-warning");
        $(".closewarning").one("click", function(){
            $(".end").addClass("hidden-warning");
        });
    }else{
        pageNumberMbti++;
        $(".page").hide();
        $("#page" +pageNumberMbti).show();
        if(pageNumberMbti == 8){
            $("#mbtiTest .submit").show();
        }
    }
    $("#mbtiTest .numbers").text(pageNumberMbti + "/8");
});

$("#mbtiTest .previous").on("click", function(){
    if(pageNumberMbti == 1){
        $(".start").removeClass("hidden-warning");
        $(".closewarning").one("click", function(){
            $(".start").addClass("hidden-warning");
        });
    }else{
        pageNumberMbti--;
        $(".page").hide();
        $("#page" +pageNumberMbti).show();
    }
    $("#mbtiTest .numbers").text(pageNumberMbti + "/8");
});



function calculateScore(groupclass){
    var sliders = document.querySelectorAll("." + groupclass);
    var total = 0;
    sliders.forEach(slider => {
        total += parseInt(slider.value);
    })
    return total;
}
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

$("#mbtiTest .submit").on("click", function(){
    se.score = calculateScore(se.label);
    si.score = calculateScore(si.label);
    ne.score = calculateScore(ne.label);
    ni.score = calculateScore(ni.label);
    fe.score = calculateScore(fe.label);
    fi.score = calculateScore(fi.label);
    te.score = calculateScore(te.label);
    ti.score = calculateScore(ti.label);
    var totalScoresArray = [ni.score, ne.score, si.score, se.score, te.score, ti.score, fe.score, fi.score];
    arrayN = ["ni", "ne", "si", "se", "te", "ti", "fe", "fi"];
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



    var resultsDiv = document.querySelector("#mbtiTest .results");
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

    $("#mbtiTest .first-page").hide();
    $("#mbtiTest .last-page").show();
});

$("#mbtiTest .backToQuestions").on("click", function(){
    $("#mbtiTest .first-page").show();
    $("#mbtiTest .last-page").hide();
});

$("input").attr("draggable", "false");

$(".toppp").on("click", function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
});

/*
.
.
.
.
.
enneagram */
const e1 = {
    questions: [
        "I am very organized.",
        "I am a workaholic.",
        "I am very consistent.", 
        "I am scared of commiting mistakes.", 
        "My morals are strong.", 
        "I search for purpose and meaning in life.", 
        "I am hard on myself.", 
        "I always justify my behavior."],
    score: 0,
    label: "e1",
    name: "1"
}
const e2 = {
    questions: [
        "I am approachable.",
        "I often overshare my personal problems.",
        "I seek to help others.", 
        "I am too critical of others when I am under a ton of friends.", 
        "I strive to have good influence on people around me.", 
        "I am very extraverted.", 
        "I had to take a great amount of responsibility when I was younger.", 
        "I emphasize with people easily."],
    score: 0,
    label: "e2",
    name: "2"
}
const e3 = {
    questions: [
        "I love getting admiration.",
        "I strive to be an over-achiever.",
        "My ambitions are very high.", 
        "I change my personality around different people.", 
        "I get jelous when I am not the best.", 
        "I am often seen as arrogant.", 
        "I compare myself to others often.", 
        "I must be the best, not just 'good'."],
    score: 0,
    label: "e3",
    name: "3"
}
const e4 = {
    questions: [
        "I am often emotional.",
        "I strive to be unique.",
        "I search for aesthetics in everything.", 
        "I get offended easily.", 
        "I struggle with my Identity.", 
        "I value originality.", 
        "I seek happiness, yet i feel unworthy of it.", 
        "'I wont be chosen if I am not unique'."],
    score: 0,
    label: "e4",
    name: "4"
}
const e5 = {
    questions: [
        "I am curious by nature.",
        "I love theorizing.",
        "I always want to feel capable.", 
        "I love the unknown and the unusual.", 
        "I often isolate myself.", 
        "I love to think about complex ideas.", 
        "I am very observant.", 
        "I have a hard time expressing feelings."],

    score: 0,
    label: "e5",
    name: "5"
}
const e6 = {
    questions: [
        "I am often anxious.",
        "I rely on external sources for support.",
        "I am scared of life changing decisions.", 
        "Uner stress, I start blaming others.", 
        "I seek support and guidance.", 
        "I like to be prepared for everything.", 
        "I worry a lot.", 
        "I often ignore my instincts."],
    score: 0,
    label: "e6",
    name: "6"
}
const e7 = {
    questions: [
        "I often procrastinate, but rarely I am extremely productive.",
        "I value freedom.",
        "I have commitment issues.", 
        "I want to try everything to have a better chance to find the ideal thing.", 
        "I am often impatient.", 
        "I have questionable coping mechanisms.", 
        "I am scared of missing out on things.", 
        "I avoid pain and dwelling on negative things."],
    score: 0,
    label: "e7",
    name: "7"
    
}
const e8 = {
    questions: [
        "I hate not being in control.",
        "People are often intimited by me.",
        "I am stubborn.", 
        "I am vey detemined.", 
        "I am self-assertive.", 
        "I often feel misunderstood.", 
        "I have a short temper.", 
        "I am afraid of being vulnerable."],
    score: 0,
    label: "e8",
    name: "8"
}
const e9 = {
    questions: [
        "I am a peace keeper.",
        "I avoid conflict as much as possible.",
        "I try too hard to fit in.", 
        "I find it extremely hard to say no.", 
        "I try as hard as I can to be admired.", 
        "i care about people's opinions.", 
        "I wait for my problems to solve themselves.", 
        "I deny the bad parts of life."],
    score: 0,
    label: "e9",
    name: "9"
}


var pageNumEnneagram = 1;

function createQuestionsEnneagram(object) {
    var page = $("<div></div>"); // Create a new div element
    page.attr("id", "Epage" + pageNumEnneagram); // Set the ID using jQuery attr method
    $("#enneagramTest .pages").append(page); // Append the new page to the container
    pageNumEnneagram++;
    page.addClass("page");
    var rand = randNumsArray(object.questions.length);
    for (var i = 0; i < object.questions.length; i++) {
        var questionenneagram = $("<div></div>"); // Create a new div for the question container
        questionenneagram.addClass("question-container"); // Add class using jQuery addClass method
        page.append(questionenneagram); // Append the question container to the page

        var question = $("<h4></h4>"); // Create a new h3 element
         // Get an array of random indices
        question.text(object.questions[rand[i]]); // Set the text of the question using jQuery text method
        question.addClass("question");
        questionenneagram.append(question); // Append the question to the question container
        var inputDiv = $(`<div class = 'inputDiv'><h5>Not At All Relatable</h5><input class = ${object.label} type = 'range' min = '0' max = '100' value='50'><h5>Very Relatable</h5></div>`);
        questionenneagram.append(inputDiv);
    }
}

createQuestionsEnneagram(e1);
createQuestionsEnneagram(e2);
createQuestionsEnneagram(e3);
createQuestionsEnneagram(e4);
createQuestionsEnneagram(e5);
createQuestionsEnneagram(e6);
createQuestionsEnneagram(e7);
createQuestionsEnneagram(e8);
createQuestionsEnneagram(e9);

var pageNumberEnneagram = 1;
$(".page").hide();
$("#Epage1").show();

$("#enneagramTest .numbers").text(pageNumberEnneagram + "/9");

$("#enneagramTest .next").on("click", function(){
    if(pageNumberEnneagram == 9){
        $(".end").removeClass("hidden-warning");
        $(".closewarning").one("click", function(){
            $(".end").addClass("hidden-warning");
        });
    }else{
        pageNumberEnneagram++;
        $(".page").hide();
        $("#Epage" +pageNumberEnneagram).show();
        if(pageNumberEnneagram == 9){
            $("#enneagramTest .submit").show();
        }
    }
    $("#enneagramTest .numbers").text(pageNumberEnneagram + "/9");
});

$("#enneagramTest .previous").on("click", function(){
    if(pageNumberEnneagram == 1){
        $(".start").removeClass("hidden-warning");
        $(".closewarning").one("click", function(){
            $(".start").addClass("hidden-warning");
        });
    }else{
        pageNumberEnneagram--;
        $(".page").hide();
        $("#Epage"  +pageNumberEnneagram).show();
    }
    $("#enneagramTest .numbers").text(pageNumberEnneagram + "/9");
});


$("#enneagramTest .submit").on("click", function(){
    e1.score = calculateScore(e1.label);
    e2.score = calculateScore(e2.label);
    e3.score = calculateScore(e3.label);
    e4.score = calculateScore(e4.label);
    e5.score = calculateScore(e5.label);
    e6.score = calculateScore(e6.label);
    e7.score = calculateScore(e7.label);
    e8.score = calculateScore(e8.label);
    e9.score = calculateScore(e9.label);
    var enneagramscoress = [e1.score / 8, e2.score / 8, e3.score / 8, e4.score / 8, e5.score / 8, e6.score / 8, e7.score / 8, e8.score / 8, e9.score / 8];

    const enneagramScores = [e1.score / 8, e2.score / 8, e3.score / 8, e4.score / 8, e5.score / 8, e6.score / 8, e7.score / 8, e8.score / 8, e9.score / 8];
    var enneagramLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const data = {
        labels: ['Enneagram 1', 'Enneagram 2', 'Enneagram 3', 'Enneagram 4', 'Enneagram 5', 'Enneagram 6', 'Enneagram 7', 'Enneagram 8', 'Enneagram 9'],
        datasets: [{
            data: enneagramScores,
            backgroundColor: ['#80af81', '#405d72','#7c00fe','#1a5319' , '#bc9f8b', '#e68369', '#ef5a6f', '#ffc700', '#c80036'],
            borderColor: '#d3d3d3',
            hoverOffset: 20
        }]
    };
    sort(enneagramscoress, enneagramLabels);

    // Calculate the wing
    var wing = "";
    for (var i = 0; i < 9; i++) {
        if (enneagramLabels[0] == 9) {
            if ((enneagramLabels[0] - 1) == enneagramLabels[i] || (1) == enneagramLabels[i]) {
                wing = enneagramLabels[i];
                break;
            }
        } else if (enneagramLabels[0] == 1) {
            if ((enneagramLabels[0] + 1) == enneagramLabels[i] || (9) == enneagramLabels[i]) {
                wing = enneagramLabels[i];
                break;
            }
        } else {
            if ((enneagramLabels[0] - 1) == enneagramLabels[i] || (enneagramLabels[0] + 1) == enneagramLabels[i]) {
                wing = enneagramLabels[i];
                break;
            }
        }
    }

    // Define the data for the chart
    
    
    // Custom plugin for variable radii pie chart
    const config = {
        type: 'polarArea',
        data: data,
        options: {
            plugins: {
                label: false,
                title: {
                    display: true,
                    text: `Your Enneagram Type Is: ${enneagramLabels[0]}w${wing}`,
                    font: {
                        size: 18,
                        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                        weight: 'bold',
                    },
                    padding: {
                        top: 20,
                        bottom: 20
                    }
                }
            }
        }
    };

    var head = {
        score: [e5.score, e6.score, e7.score],
        name: [e5.name, e6.name, e7.name]
    }

    var heart = {
        score: [e2.score, e3.score, e4.score],
        name: [e2.name, e3.name, e4.name]
    }

    var gut = {
        score: [e8.score, e9.score, e1.score],
        name: [e8.name, e8.name, e1.name]
    }
    sort(head.score, head.name);
    sort(heart.score, heart.name);
    sort(gut.score, gut.name);
    var triscore = [head.score[0], heart.score[0], gut.score[0]];
    var tritype = [head.name[0], heart.name[0], gut.name[0]];
    sort(triscore, tritype);
    // Render the chart
    var resultsDiv = document.querySelector("#enneagramTest .results");
    resultsDiv.innerHTML = `<canvas id="pieChartEnneagram"></canvas><p id='tritype'>Your Tritype Is: ${tritype[0]}${tritype[1]}${tritype[2]}</p>`;
    
    const ctx = document.getElementById('pieChartEnneagram').getContext('2d');
    new Chart(ctx, config);
    


    $("#enneagramTest .first-page").hide();
    $("#enneagramTest .last-page").show();
    

    $("#enneagramTest .backToQuestions").on("click", function(){
        $("#enneagramTest .first-page").show();
        $("#enneagramTest .last-page").hide();
    });
});



$(".first-page").show();
$(".last-page").hide();
$("#Epage1").show();
$("#page1").show();

var openness = {
    questions: [[
        "I am very creative.",
        "I am excited to try out new experiences.",
        "I am good at tackling new challenges.",
        "I enjoy contemplating abstract concepts."],[
        "I dislike change.",
        "I do not enjoy exploring multiple options.",
        "I am not very imaginative.",
        "I hate thinking about intangible things."]],
    highscore: 0,
    lowscore: 0,
    label: "o"
};

var conscient = {
    questions: [[
        "I put much effort into planning.",
        "I finish important tasks right away.",
        "I prefer having a schedule.",
        "I pay attention to detail."],[
        "I am clumsy.",
        "I am bad at organizing things.",
        "I often procrastinate.",
        "I often forget assigned tasks or due dates."]],
    highscore: 0,
    lowscore: 0,
    label: "c"
};

var extraversion = {
    questions: [[
        "I enjoy being the center of attention.",
        "I am good at starting conversations.",
        "I have a wide social circle.",
        "I say things without really thinking about them."],[
        "I prefer solitude.",
        "I get exhausted easily when socializing.",
        "I find it challenging to maintain small talk.",
        "I am often awkward."]],
    highscore: 0,
    lowscore: 0,
    label: "e"
};

var agreeable = {
    questions: [[
        "I care about people around me.",
        "I am very empathetic.",
        "I find it fulfilling to help others.",
        "I am a people pleaser."],[
        "I have little interest in others.",
        "I disregard other's emotions.",
        "I have no problem with confrontation.",
        "I have no problem belittling others."]],
    highscore: 0,
    lowscore: 0,
    label: "a"
};

var neurotic = {
    questions: [[
        "I am often stressed.",
        "I am often overwhelmed by many things.",
        "I am sensitive.",
        "I struggle to bounce back after stressfule events."],[
        "I am emotionally healthy.",
        "I rarely feel sad/depressed.",
        "I am often relaxed",
        "I have healthy coping mechanisms."]],
    highscore: 0,
    lowscore: 0,
    label: "n"
};

var pageNumBig5 = 1;

function createQuestionsBig5(object) {
    var page = $("<div></div>"); // Create a new div element
    page.attr("id", "Bpage" + pageNumBig5); // Set the ID using jQuery attr method
    $("#big5Test .pages").append(page); // Append the new page to the container
    pageNumBig5++;
    page.addClass("page");
    var rand = randNumsArray(object.questions[0].length);
    for (var i = 0; i < 2; i++) {
        if(i == 0){
            var scorename = "high";

        }else{
            var scorename = "low";
        }
        for(var j = 0; j < 4; j++){
            var questionbig5 = $("<div></div>"); // Create a new div for the question container
            questionbig5.addClass("question-container"); // Add class using jQuery addClass method
            questionbig5.addClass(object.label + "page"); // Add additional class
            page.append(questionbig5); // Append the question container to the page

            var question = $("<h4></h4>"); // Create a new h3 element
            // Get an array of random indices
            question.text(object.questions[i][rand[j]]); // Set the text of the question using jQuery text method
            question.addClass("question");
            questionbig5.append(question); // Append the question to the question container
            var inputDiv = $(`<div class = 'inputDiv'><h5>Not At All Relatable</h5><input class = '${scorename + object.label}' type = 'range' min = '0' max = '100' value='50'><h5>Very Relatable</h5></div>`);
            questionbig5.append(inputDiv);
        }
    }
}

createQuestionsBig5(openness);
createQuestionsBig5(conscient);
createQuestionsBig5(extraversion);
createQuestionsBig5(agreeable);
createQuestionsBig5(neurotic);
var pageNumberBig5 = 1;
$(".page").hide();
$("#Bpage1").show();

$("#big5Test .numbers").text(pageNumberBig5 + "/5");

$("#big5Test .next").on("click", function(){
    if(pageNumberBig5 == 5){
        $(".end").removeClass("hidden-warning");
        $(".closewarning").one("click", function(){
            $(".end").addClass("hidden-warning");
        });
    }else{
        pageNumberBig5++;
        $("#big5Test .page").hide();
        $("#Bpage" +pageNumberBig5).show();
        if(pageNumberBig5 == 5){
            $(".submit").show();
        }
    }
    $("#big5Test .numbers").text(pageNumberBig5 + "/5");
});

$("#big5Test .previous").on("click", function(){
    if(pageNumberBig5 == 1){
        $(".start").removeClass("hidden-warning");
        $(".closewarning").one("click", function(){
            $(".start").addClass("hidden-warning");
        });
    }else{
        pageNumberBig5--;
        $(".page").hide();
        $("#Bpage"  +pageNumberBig5).show();
    }
    $("#big5Test .numbers").text(pageNumberBig5 + "/9");
});

$("#big5Test .submit").on("click", function(){
    openness.highscore = calculateScore("higho");
    neurotic.highscore = calculateScore("highn");
    conscient.highscore = calculateScore("highc");
    extraversion.highscore = calculateScore("highe");
    agreeable.highscore = calculateScore("higha");
    openness.lowscore = calculateScore("lowo");
    neurotic.lowscore = calculateScore("lown");
    conscient.lowscore = calculateScore("lowc");
    extraversion.lowscore = calculateScore("lowe");
    agreeable.lowscore = calculateScore("lowa");
    oScore = (openness.highscore - openness.lowscore + 400)/8;
    cScore = (conscient.highscore - conscient.lowscore + 400)/8;
    eScore = (extraversion.highscore - extraversion.lowscore + 400)/8;
    aScore = (agreeable.highscore - agreeable.lowscore + 400 )/8;
    nScore = (neurotic.highscore - neurotic.lowscore + 400)/8;
    const labels = ["Oppenness", "conscientiossness", "Extraversion", "Agreeableness", "Neuroticism"];
    const data = {
        labels: labels,
        datasets: [{
            data: [oScore, cScore, eScore, aScore, nScore],
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
            ],
            borderWidth: 1,
            label: false
        }]
    };
    const config = {
        type: 'bar',
        data: data,
        options: {
            plugins: {
                label: "",
                title: {
                    display: true,
                    text: 'Your Big 5 (OCEAN) Scores',
                    font: {
                        size: 18,
                        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                        weight: 'bold',
                    },
                    padding: {
                        top: 20,
                        bottom: 20
                    }
                },
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += context.parsed.y + '%'; // Add percentage symbol
                            }
                            return label;
                        }
                    }
                }
            },
            animations: {
              tension: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
              }
            },
            scales: {
              y: { // defining min and max so hiding the dataset does not change scale range
                min: 0,
                max: 100,
                beginAtZero: true,
                grid: {
                    offset: true
                }
              }
            },
            maintainAspectRatio: false
        }
    };
    
    // Render the chart
    var resultsDiv = document.querySelector("#big5Test .results");
    resultsDiv.innerHTML = `<canvas id="barChartBig5"></canvas>`;
    
    const ctx = document.getElementById('barChartBig5').getContext('2d');
    new Chart(ctx, config);

    $("#big5Test .first-page").hide();
    $("#big5Test .last-page").show();

    $("#big5Test .backToQuestions").on("click", function(){
        $("#big5Test .first-page").show();
        $("#big5Test .last-page").hide();
    });
});
$("#Epage1").show();
$("#page1").show();