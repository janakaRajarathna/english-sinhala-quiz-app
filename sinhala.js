const originalArray = [{"en":"ability","si":"හැකියාව"},{"en":"able","si":"පුළුවන්"},{"en":"about","si":"ගැන"},{"en":"above","si":"ඉහත"},{"en":"accept","si":"පිළිගන්නවා"},{"en":"according","si":"අනුව"},{"en":"account","si":"ගිණුම"},{"en":"across","si":"හරහා"},{"en":"act","si":"පනත"},{"en":"action","si":"කටයුතු"},{"en":"activity","si":"ක්රියාකාරිත්වය"},{"en":"actually","si":"ඇත්තටම"},{"en":"add","si":"එකතු කරන්න"},{"en":"address","si":"ලිපිනය"},{"en":"administration","si":"පරිපාලනය"},{"en":"admit","si":"පිළිගන්නවා"},{"en":"adult","si":"වැඩිහිටි"},{"en":"affect","si":"බලපාන"},{"en":"after","si":"අනතුරුව"},{"en":"again","si":"නැවතත්"},{"en":"against","si":"එරෙහි"},{"en":"age","si":"වයස"},{"en":"agency","si":"නියෝජිතායතනය"},{"en":"agent","si":"නියෝජිතයා"},{"en":"ago","si":"පෙර"},{"en":"agree","si":"එකඟයි"},{"en":"agreement","si":"ගිවිසුම"},{"en":"ahead","si":"ඉදිරියෙන්"},{"en":"air","si":"ගුවන්"},{"en":"all","si":"සෑම"},{"en":"allow","si":"ඉඩ දෙන්න"},{"en":"almost","si":"පාහේ"},{"en":"alone","si":"තනියම"},{"en":"along","si":"දිගේ"},{"en":"already","si":"දැනටමත්"},{"en":"also","si":"තවද"},{"en":"although","si":"කෙසේ වෙතත්"},{"en":"always","si":"සැමවිටම"},{"en":"American","si":"ඇමෙරිකානු"},{"en":"among","si":"අතර"},{"en":"amount","si":"ප්රමාණය"},{"en":"analysis","si":"විශ්ලේෂණය"},{"en":"and","si":"සහ"},{"en":"animal","si":"සත්ව"},{"en":"another","si":"තවත්"},{"en":"answer","si":"පිළිතුර"},{"en":"any","si":"ඕනෑම"},{"en":"anyone","si":"ඕනෑම කෙනෙක්"},{"en":"anything","si":"කිසිවක්"},{"en":"appear","si":"පෙනී යයි"},{"en":"apply","si":"අයදුම් කරන්න"},{"en":"approach","si":"ප්රවේශය"},{"en":"area","si":"ප්රදේශය"},{"en":"argue","si":"වාද කරනවා"},{"en":"arm","si":"හස්තය"},{"en":"around","si":"අවට"},{"en":"arrive","si":"පැමිණේ"},{"en":"art","si":"කලාව"},{"en":"article","si":"ලිපිය"},{"en":"artist","si":"කලාකරු"},{"en":"as","si":"පරිදි"},{"en":"ask","si":"අහන්න"},{"en":"assume","si":"උපකල්පනය කරයි"},{"en":"at","si":"හිදී"},{"en":"attack","si":"පහර දෙනවා"},{"en":"attention","si":"අවධානය"},{"en":"attorney","si":"නීතිඥ"},{"en":"audience","si":"ප්රේක්ෂක"},{"en":"author","si":"කර්තෘ"},{"en":"authority","si":"අධිකාරිය"},{"en":"available","si":"ඇත"},{"en":"avoid","si":"වළකින්න"},{"en":"away","si":"දුරින්"},{"en":"baby","si":"ළදරු"},{"en":"back","si":"ආපසු"},{"en":"bad","si":"නරක"},{"en":"bag","si":"බෑගය"},{"en":"ball","si":"පන්දුව"},{"en":"bank","si":"බැංකුව"},{"en":"bar","si":"බාර්"},{"en":"base","si":"පදනම"},{"en":"be","si":"විය"},{"en":"beat","si":"පහර දෙනවා"},{"en":"beautiful","si":"ලස්සනයි"},{"en":"because","si":"නිසා"},{"en":"become","si":"බවට පත් වේ"},{"en":"bed","si":"ඇඳ"},{"en":"before","si":"කලින්"},{"en":"begin","si":"ආරම්භය"},{"en":"behavior","si":"හැසිරීම"},{"en":"behind","si":"පිටුපස"},{"en":"believe","si":"විශ්වාස කරනවා"},{"en":"benefit","si":"ප්රතිලාභය"},{"en":"best","si":"හොඳ"},{"en":"better","si":"වඩා හොඳ"},{"en":"between","si":"අතර"},{"en":"beyond","si":"ඔබ්බට"},{"en":"big","si":"මහා"},{"en":"bill","si":"බිල්පත"},
	{"en":"bit","si":"ටිකක්"},{"en":"black","si":"කලු"},{"en":"blood","si":"ලේ"},{"en":"blue","si":"නිල්"},{"en":"board","si":"මණ්ඩලය"},{"en":"body","si":"සිරුර"},{"en":"book","si":"පොත"},{"en":"born","si":"උපන්නා"},{"en":"both","si":"දෙකම"},{"en":"box","si":"පෙට්ටිය"},{"en":"boy","si":"කොල්ලා"},{"en":"break","si":"බිඳීම"},{"en":"bring","si":"ගේනවා"},{"en":"brother","si":"සහෝදරයා"},{"en":"budget","si":"අයවැය"},{"en":"build","si":"ගොඩනඟනවා"},{"en":"building","si":"ගොඩනැගිල්ල"},{"en":"business","si":"ව්යාපාරික"},{"en":"but","si":"එහෙත්"},{"en":"buy","si":"මිලදී ගන්න"},{"en":"by","si":"විසින්"},{"en":"call","si":"අමතන්න"},{"en":"camera","si":"කැමරා"},{"en":"campaign","si":"උද්ඝෝෂණය"},{"en":"can","si":"පුළුවන්"},{"en":"cancer","si":"පිළිකාවක්"},{"en":"candidate","si":"අපේක්ෂකයා"},{"en":"capital","si":"ප්රාග්ධනය"},{"en":"car","si":"මෝටර් රථ"},{"en":"card","si":"කාඩ්පත"},{"en":"care","si":"රැකවරණය"},{"en":"career","si":"වෘත්තීය"},{"en":"carry","si":"රැගෙන යන්න"},{"en":"case","si":"නඩුව"},{"en":"catch","si":"අල්ලා"},{"en":"cause","si":"හේතුව"},{"en":"cell","si":"සෛලය"},{"en":"center","si":"කේන්ද්රය"},{"en":"central","si":"මධ්යම"},{"en":"century","si":"සියවස"},{"en":"certain","si":"සමහර"},{"en":"certainly","si":"නිසැකවම"},{"en":"chair","si":"පුටුව"},{"en":"challenge","si":"අභියෝගය"},{"en":"chance","si":"අවස්ථාවක්"},{"en":"change","si":"වෙනස් කිරීම"},{"en":"character","si":"ස්වභාවය"},{"en":"charge","si":"අයකිරීම"},{"en":"check","si":"චෙක් පත"},{"en":"child","si":"ළමා"},{"en":"choice","si":"තේරීම"},{"en":"choose","si":"තෝරා"},{"en":"church","si":"පල්ලිය"},{"en":"citizen","si":"පුරවැසියා"},{"en":"city","si":"නගරය"},{"en":"civil","si":"සිවිල්"},{"en":"claim","si":"හිමිකම"},{"en":"class","si":"පන්තිය"},{"en":"clear","si":"පැහැදිලිව"},{"en":"clearly","si":"පැහැදිලිව"},{"en":"close","si":"සමීපයි"},{"en":"coach","si":"පුහුණුකරුවා"},{"en":"cold","si":"සීතලයි"},{"en":"collection","si":"එකතු"},{"en":"college","si":"විදුහල"},{"en":"color","si":"වර්ණ"},{"en":"come","si":"එන්න"},{"en":"commercial","si":"වාණිජ"},{"en":"common","si":"පොදු"},{"en":"community","si":"ප්රජාව"},{"en":"company","si":"සමාගම"},{"en":"compare","si":"සංසන්දනය කරන්න"},{"en":"computer","si":"පරිගණක"},{"en":"concern","si":"සැලකිලිමත් වීම"},{"en":"condition","si":"තත්ත්වය"},{"en":"conference","si":"සම්මන්ත්රණය"},{"en":"Congress","si":"කොංග්රසය"},{"en":"consider","si":"සලකා බලන්න"},{"en":"consumer","si":"පාරිභෝගික"},{"en":"contain","si":"අඩංගු"},{"en":"continue","si":"දිගටම"},{"en":"control","si":"පාලනය"},{"en":"cost","si":"පිරිවැය"},{"en":"could","si":"හැකි"},{"en":"country","si":"රට"},{"en":"couple","si":"යුවළක්"},{"en":"course","si":"පාඨමාලාව"},{"en":"court","si":"අධිකරණය"},{"en":"cover","si":"ආවරණය"},{"en":"create","si":"නිර්මාණය කරනවා"},{"en":"crime","si":"අපරාධය"},{"en":"cultural","si":"සංස්කෘතික"},{"en":"culture","si":"සංස්කෘතිය"},{"en":"cup","si":"කුසලාන"},{"en":"current","si":"දැනට"},{"en":"customer","si":"පාරිභෝගික"},{"en":"cut","si":"කපා"},{"en":"dark","si":"අඳුරු"},{"en":"data","si":"දත්ත"},
	{"en":"day","si":"දවස"},{"en":"dead","si":"මිය ගියා"},{"en":"deal","si":"ගනුදෙනුව"},{"en":"death","si":"මරණ"},{"en":"debate","si":"විවාදය"},{"en":"decade","si":"දශකය"},{"en":"decide","si":"තීරණය කරන්න"},{"en":"decision","si":"තීරණ"},{"en":"deep","si":"ගැඹුරු"},{"en":"defense","si":"ආරක්ෂක"},{"en":"degree","si":"උපාධිය"},{"en":"Democrat","si":"ඩිමොක්‍රටික්"},{"en":"democratic","si":"ප්රජාතන්ත්රවාදී"},{"en":"describe","si":"විස්තර කරන්න"},{"en":"design","si":"නිර්මාණ"},{"en":"despite","si":"තිබියදීත්"},{"en":"detail","si":"විස්තර"},{"en":"determine","si":"තීරණය කරන්න"},{"en":"develop","si":"දියුණු කරනවා"},{"en":"development","si":"වර්ධනය"},{"en":"die","si":"මැරෙනවා"},{"en":"difference","si":"වෙනස"},{"en":"different","si":"විවිධ"},{"en":"difficult","si":"දුෂ්කර"},{"en":"dinner","si":"රාත්රී ආහාරය"},{"en":"direction","si":"දිශාව"},{"en":"director","si":"අධ්යක්ෂ"},{"en":"discover","si":"සොයාගන්න"},{"en":"discuss","si":"සාකච්ඡා කරනවා"},{"en":"discussion","si":"සාකච්ඡා"},{"en":"disease","si":"රෝගය"},{"en":"do","si":"කරන්න"},{"en":"doctor","si":"වෛද්යවරයා"},{"en":"dog","si":"බල්ලා"},{"en":"door","si":"දොර"},{"en":"down","si":"පහළ"},{"en":"draw","si":"අදින්න"},{"en":"dream","si":"සිහින"},{"en":"drive","si":"පදවන්න"},{"en":"drop","si":"පහත වැටීම"},{"en":"drug","si":"මත්ද්රව්ය"},{"en":"during","si":"තුළ"},{"en":"each","si":"සෑම"},{"en":"early","si":"මුල්"},{"en":"east","si":"නැගෙනහිර"},{"en":"easy","si":"පහසු"},{"en":"eat","si":"කන්න"},{"en":"economic","si":"ආර්ථීක"},{"en":"economy","si":"ආර්ථිකය"},{"en":"edge","si":"දාරය"},{"en":"education","si":"අධ්යාපන"},{"en":"effect","si":"බලපෑම"},{"en":"effort","si":"උත්සාහය"},{"en":"eight","si":"අට"},{"en":"either","si":"එක්කෝ"},{"en":"election","si":"මැතිවරණ"},{"en":"else","si":"වෙනත්"},{"en":"employee","si":"සේවකයා"},{"en":"end","si":"අවසානය"},{"en":"energy","si":"බලශක්ති"},{"en":"enjoy","si":"භුක්ති විඳින්න"},{"en":"enough","si":"ඇති"},{"en":"enter","si":"ඇතුල් කරන්න"},{"en":"entire","si":"සමස්ත"},{"en":"environment","si":"පරිසරය"},{"en":"environmental","si":"පරිසර"},{"en":"especially","si":"විශේෂයෙන්ම"},{"en":"establish","si":"පිහිටුවීම"},{"en":"even","si":"පවා"},{"en":"evening","si":"සවස"},{"en":"event","si":"සිදුවීම"},{"en":"ever","si":"කවදා හෝ"},{"en":"every","si":"සෑම"},{"en":"everybody","si":"හැමෝම"},{"en":"everyone","si":"හැමෝම"},{"en":"everything","si":"සියල්ල"},{"en":"evidence","si":"සාක්ෂි"},{"en":"exactly","si":"හරියටම"},{"en":"example","si":"උදාහරණයක්"},{"en":"executive","si":"විධායක"},{"en":"exist","si":"පවතිනවා"},{"en":"expect","si":"බලාපොරොත්තු වෙනවා"},{"en":"experience","si":"අත්දැකීමක්"},{"en":"expert","si":"විශේෂඥ"},{"en":"explain","si":"පැහැදිලි කරන්න"},{"en":"eye","si":"ඇස"},{"en":"face","si":"මුහුණ"},{"en":"fact","si":"ඇත්ත"},{"en":"factor","si":"සාධකය"},{"en":"fail","si":"අසාර්ථකයි"},{"en":"fall","si":"වැටෙනවා"},{"en":"family","si":"පවුලක්"},{"en":"far","si":"දුරින්"},{"en":"fast","si":"ඉක්මනින්"},{"en":"father","si":"පියා"},{"en":"fear","si":"බිය"},{"en":"federal","si":"ෆෙඩරල්"},{"en":"feel","si":"දැනෙනවා"},{"en":"feeling","si":"හැඟීම"},
	{"en":"field","si":"ක්ෂේත්රය"},{"en":"fight","si":"සටන් කරනවා"},{"en":"figure","si":"රූපය"},{"en":"fill","si":"පුරවන්න"},{"en":"film","si":"චිත්රපටය"},{"en":"final","si":"අවසාන"},{"en":"finally","si":"අවසාන"},{"en":"financial","si":"මූල්ය"},{"en":"find","si":"සොයාගන්න"},{"en":"fine","si":"හොඳයි"},{"en":"finger","si":"ඇඟිල්ල"},{"en":"finish","si":"අවසන් කරන්න"},{"en":"fire","si":"ගිනි"},{"en":"firm","si":"ස්ථිරයි"},{"en":"first","si":"පලමු"},{"en":"fish","si":"මාළු"},{"en":"five","si":"පහ"},{"en":"floor","si":"මහල"},{"en":"fly","si":"පියාසර කරනවා"},{"en":"focus","si":"අවධානය යොමු කරන්න"},{"en":"follow","si":"අනුගමනය කරන්න"},{"en":"food","si":"ආහාර"},{"en":"foot","si":"පාදය"},{"en":"for","si":"සදහා"},{"en":"force","si":"බලය"},{"en":"foreign","si":"විදේශ"},{"en":"forget","si":"අමතක කරනවා"},{"en":"form","si":"ආකෘතිය"},{"en":"former","si":"හිටපු"},{"en":"forward","si":"ඉදිරියට"},{"en":"four","si":"සිව්"},{"en":"free","si":"නිදහස්"},{"en":"friend","si":"මිතුරා"},{"en":"from","si":"සිට"},{"en":"front","si":"ඉදිරිපස"},{"en":"full","si":"පූර්ණ"},{"en":"fund","si":"අරමුදල"},{"en":"future","si":"අනාගතය"},{"en":"game","si":"ක්රීඩාව"},{"en":"garden","si":"වත්ත"},{"en":"gas","si":"ගෑස්"},{"en":"general","si":"ජනරාල්"},{"en":"generation","si":"පරම්පරාව"},{"en":"get","si":"ලැබෙනවා"},{"en":"girl","si":"ගැහැණු ළමයා"},{"en":"give","si":"දෙනවා"},{"en":"glass","si":"වීදුරු"},{"en":"go","si":"යන්න"},{"en":"goal","si":"ඉලක්කය"},{"en":"good","si":"යහපත"},{"en":"government","si":"ආණ්ඩුව"},{"en":"great","si":"මහා"},{"en":"green","si":"කොළ"},{"en":"ground","si":"බිම"},{"en":"group","si":"සමූහය"},{"en":"grow","si":"වර්ධනය වේ"},{"en":"growth","si":"වර්ධනය"},{"en":"guess","si":"අනුමාන"},{"en":"gun","si":"තුවක්කුව"},{"en":"guy","si":"මිනිහා"},{"en":"hair","si":"හිසකෙස්"},{"en":"half","si":"අඩක්"},{"en":"hand","si":"අත"},{"en":"hang","si":"එල්ලෙනවා"},{"en":"happen","si":"සිදුවේ"},{"en":"happy","si":"සතුටු"},{"en":"hard","si":"අමාරුයි"},{"en":"have","si":"ඇති"},{"en":"he","si":"ඔහු"},{"en":"head","si":"හිස"},{"en":"health","si":"සෞඛ්යය"},{"en":"hear","si":"අහන්න"},{"en":"heart","si":"හදවත"},{"en":"heat","si":"තාපය"},{"en":"heavy","si":"බර"},{"en":"help","si":"උදව්"},{"en":"her","si":"ඇගේ"},{"en":"here","si":"මෙතන"},{"en":"herself","si":"තමා"},{"en":"high","si":"අධි"},{"en":"him","si":"ඔහුව"},{"en":"himself","si":"තමා"},{"en":"his","si":"ඔහුගේ"},{"en":"history","si":"ඉතිහාසය"},{"en":"hit","si":"ගැහුවා"},{"en":"hold","si":"අල්ලාගෙන සිටින්න"},{"en":"home","si":"ගෙදර"},{"en":"hope","si":"බලාපොරොත්තුව"},{"en":"hospital","si":"රෝහල"},{"en":"hot","si":"උණුසුම්"},{"en":"hotel","si":"හෝටල්"},{"en":"hour","si":"පැය"},{"en":"house","si":"නිවස"},{"en":"how","si":"කෙසේද"},{"en":"however","si":"කෙසේ වුවද"},{"en":"huge","si":"විශාල"},{"en":"human","si":"මානව"},{"en":"hundred","si":"සියයක්"},{"en":"husband","si":"ස්වාමිපුරුෂයා"}]

    const countOfQuestions=document.querySelectorAll('.numof-question')
    const questionContainer=document.querySelector('.quiz-container')
    const mode=document.querySelector('.mode')
    let NUMBER_OF_QUESTIONS =5
    let score = 0;
    const quizContainer = document.getElementById('question-container');   
    const nextButton = document.getElementById('next-btn');
    const submitButton = document.getElementById('submit-btn');
    const resultContainer = document.getElementById('result');
    let quizQuestions = [];
    let currentQuestionIndexIndex = 0;
    const backButton = document.getElementById('back');
    const dropdown =document.querySelector('.drop')
    const okButton =document.querySelector('.ok')
    let USERNAME_LIST = JSON.parse(localStorage.getItem('USERNAME_LIST')) || [];
    let DATA = JSON.parse(localStorage.getItem('DATA')) || [];
    const userDropDown = document.querySelector('#palyer')
    let player=''


  



function createQuiz(originalArray, clickButton) {
    const quiz = [];
    const selectedtems = new Set();

    while (selectedtems.size < clickButton) {
        const index = Math.floor(Math.random() * originalArray.length);
        selectedtems.add(index);
    }
    selectedtems.forEach(index => {
        const question = {
            englishWord: originalArray[index].en,
            correctAnswer: originalArray[index].si,
            options: []
        };
        question.options.push(originalArray[index].si);
          
        while (question.options.length < 4) {
            const randomIndex = Math.floor(Math.random() * originalArray.length);
            const randomWord = originalArray[randomIndex].si;
            
            
            if (!question.options.includes(randomWord)) {
                question.options.push(randomWord);
            }
        }
        
        
        question.options.sort(() => Math.random() - 0.5);
        
        quiz.push(question);
    });
    
    return quiz;
}

function displayQuestion(question) {
    quizContainer.innerHTML = ''; 
    resultContainer.innerHTML = '';

    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.innerHTML = `
        <p>${currentQuestionIndexIndex + 1}. What is the Sinhala meaning of "${question.englishWord}"?</p>
        <div class="options">
            ${question.options.map(option => `<button class="option">${option}</button>`).join('')}
        </div>
    `;
    quizContainer.appendChild(questionDiv);
}

document.addEventListener("DOMContentLoaded", function() {
  
    userDropDown.innerHTML= USERNAME_LIST.map(u=>{
        return ` <option value="${u}">${u}</option>`
       }).join('')
    countOfQuestions.forEach(button=>{
        button.addEventListener('click',function () {
            const clickButton =parseInt(button.value)
            NUMBER_OF_QUESTIONS=clickButton
           

            const quiz = createQuiz(originalArray, clickButton);
            quizQuestions = quiz;
            displayQuestion(quizQuestions[currentQuestionIndexIndex]);
            questionContainer.style.display="block"
            quizContainer.style.display="block"
            //  nextButton.style.display ="block"
            mode.style.display="none"

            const buttonContainer = document.querySelector("#question-container");

            buttonContainer.addEventListener('click', function calculateScore(event) {
                if (!event.target.classList.contains("option")) {
                    return true
                }
                const selectedOption = event.target
                let answerButtons =[... document.querySelectorAll("#question-container button")]
                answerButtons.map(button=>{
                    const buttonText =button.innerText

                    if (button.innerText==selectedOption.innerText) {
                        if (selectedOption.innerText === quizQuestions[currentQuestionIndexIndex].correctAnswer) {
                            score++; 
                            event.target.classList.add("correct-answer");
                        }else{
                            event.target.classList.add("wrong-answer");
                        }
                    
                    }else if(buttonText==quizQuestions[currentQuestionIndexIndex].correctAnswer){
                    button.classList.add("correct-answer");
                    }
                })
          
            })
        })                                   
    });  


 function showNextQuestion() {
    currentQuestionIndexIndex++;
    displayQuestion(quizQuestions[currentQuestionIndexIndex]);
    if (currentQuestionIndexIndex < quizQuestions.length-1) { 
        
        nextButton.style.display = 'block';
        submitButton.style.display = 'none';
    } else {
        nextButton.style.display = 'none';
        submitButton.style.display = 'block';
    }
}


nextButton.addEventListener('click', showNextQuestion);
submitButton.addEventListener('click',submitButtonHandler)
backButton.addEventListener('click',backButtonHandler)
okButton.addEventListener('click',okButtonHandler)


function submitButtonHandler(event) {
   quizContainer.style.display='none'
   resultContainer.style.display = 'block';
   backButton.style.display = 'block';
   resultContainer.innerHTML="<h1>your score is " +score+ "</h1>";
   submitButton.style.display = 'none';

   const gameData={
    gameMode:NUMBER_OF_QUESTIONS,
    gameScore:score,
    date:new Date(),
    gamePlayer:player

}
DATA.push(gameData);
localStorage.setItem('DATA', JSON.stringify(DATA));

}

function backButtonHandler(event) {
    
    // resultContainer.style.display = 'none';
    // mode.style.display = 'block';
    // backButton.style.display="none"
    // questionContainer.style.display="none"
    window.location.reload()
 }
function okButtonHandler(event) {
    dropdown.style.display='none'
    mode.style.display='block'
    player=userDropDown.value

}

});


