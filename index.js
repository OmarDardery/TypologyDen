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


const openness = {
    high: [
        "I am very creative.",
        "I am excited to try out new experiences.",
        "I am good at tackling new challenges.",
        "I enjoy contemplating abstract concepts."],
    low: [
        "I dislike change.",
        "I do not enjoy exploring multiple options.",
        "I am not very imaginative.",
        "I hate thinking about intangible things."],
    highscore: 0,
    lowscore: 0
};

const conscient = {
    high: [
        "I put much effort into planning.",
        "I finish important tasks right away.",
        "I prefer having a schedule.",
        "I pay attention to detail."],
    low: [
        "I am clumsy.",
        "I am bad at organizing things.",
        "I often procrastinate.",
        "I often forget assigned tasks or due dates."],
    highscore: 0,
    lowscore: 0
};

const extraversion = {
    high: [
        "I enjoy being the center of attention.",
        "I am good at starting conversations.",
        "I have a wide social circle.",
        "I say things without really thinking about them."],
    low: [
        "I prefer solitude.",
        "I get exhausted easily when socializing.",
        "I find it challenging to maintain small talk.",
        "I am often awkward."],
    highscore: 0,
    lowscore: 0
};

const agreeable = {
    high: [
        "I care about people around me.",
        "I am very empathetic.",
        "I find it fulfilling to help others.",
        "I am a people pleaser."],
    low: [
        "I have little interest in others.",
        "I disregard other's emotions.",
        "I have no problem with confrontation.",
        "I have no problem belittling others."],
    highscore: 0,
    lowscore: 0
};

const neurotic = {
    high: [
        "I am often stressed.",
        "I am often overwhelmed by many things.",
        "I am sensitive.",
        "I struggle to bounce back after stressfule events."],
    low: [
        "I am emotionally healthy.",
        "I rarely feel sad/depressed.",
        "I am often relaxed",
        "I have healthy coping mechanisms."],
    highscore: 0,
    lowscore: 0
};

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
$("#page1").show();
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
            $(".submit").show();
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

    $(".first-page").hide();
    $(".last-page").show();
});

$(".backToQuestions").on("click", function(){
    $(".first-page").show();
    $(".last-page").hide();
});

$("input").attr("draggable", "false");

$(".toppp").on("click", function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
});




