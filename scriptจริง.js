const questions = [
    {
        text: "คุณชอบขนมที่มีเนื้อสัมผัสแบบไหนมากที่สุด?",
        options: {
            A: "กรอบ สนุกกับการเคี้ยวเพลินๆ",
            B: "หนึบหนับ เคี้ยวแล้วรู้สึกสนุก",
            C: "เหนียวหนึบ ยืดหยุ่น เคี้ยวได้นาน",
            D: "ละลายในปาก ไม่ต้องเคี้ยวเยอะ"
        }
    },
    {
        text: "ถ้าให้เลือกขนมจากรสชาติ คุณชอบแบบไหนที่สุด?",
        options: {
            A: "หวาน นุ่มละมุน",
            B: "เปรี้ยวจี๊ดสะใจ",
            C: "เค็มๆ มันๆ รสชาติเข้มข้น",
            D: "ซ่า สดชื่น"
        }
    },
    {
        text: "เวลากินขนม คุณชอบให้มัน…",
        options: {
            A: "มีไส้ข้างใน หรือเคลือบอะไรสักอย่าง",
            B: "เป็นเยลลี่ หรือเจลาตินเคี้ยวหนุบหนับ",
            C: "เป็นลูกอมเล็กๆ ค่อยๆ ละลาย",
            D: "เป็นหมากฝรั่ง เคี้ยวได้เรื่อยๆ"
        }
    },
    {
        text: "ถ้าให้คุณเลือกขนมสำหรับดูหนังหรือเล่นเกม คุณจะเลือกแบบไหน?",
        options: {
            A: "ขนมกรุบกรอบ เคี้ยวเพลิน",
            B: "หมากฝรั่ง เคี้ยวได้นาน",
            C: "ลูกอม อมไปเรื่อย ไม่ต้องเคี้ยวเยอะ",
            D: "เยลลี่ เคี้ยวสนุก เล่นไปกินไป"
        }
    },
    {
        text: "เวลากินขนม คุณให้ความสำคัญกับอะไรมากที่สุด?",
        options: {
            A: "รสชาติที่โดดเด่น",
            B: "เนื้อสัมผัสแปลกใหม่",
            C: "ความสนุกของการกิน เช่น มีเสียงเป๊าะแป๊ะ",
            D: "กินแล้วรู้สึกสดชื่น"
        }
    },
    {
        text: "คุณชอบขนมที่มีลูกเล่นพิเศษหรือเปล่า?",
        options: {
            A: "ใช่! ชอบขนมที่มีอะไรให้ตื่นเต้น เช่น เปลี่ยนสี",
            B: "ไม่ต้องมีลูกเล่นก็ได้ แค่อร่อยก็พอ",
            C: "ขอให้เคี้ยวหนุบๆ สนุกๆ ก็พอ",
            D: "ขอเป็นหมากฝรั่ง เคี้ยวไปเรื่อยๆ"
        }
    },
    {
        text: "ถ้าต้องแนะนำขนมให้เพื่อน คุณอยากให้เพื่อนลองขนมแบบไหน?",
        options: {
            A: "ขนมที่ทุกคนคุ้นเคย กินง่าย ไม่แปลกใหม่เกินไป",
            B: "ขนมที่มีรสชาติแปลกใหม่ ไม่เหมือนใคร",
            C: "ขนมที่กินแล้วสนุก เช่น มีของเล่นหรือเคี้ยวมัน",
            D: "ขนมที่สดชื่น กินแล้วรู้สึกเฟรช"
        }
    },
];

const results = {
    A: "ขนมกรุบกรอบ / เคลือบไส้: เหมาะกับขนมอย่าง ปูไทย, ขนมปังจิ้มช็อกโกแลต",
    B: "ขนมหนุบหนับ / เคี้ยวสนุก: เหมาะกับขนมอย่าง กัมมี่ฟรุตตี้, จอลลี่สติ๊ก",
    C: "ขนมอมเล่นได้นาน / มีลูกเล่นพิเศษ: เหมาะกับขนมอย่าง ลูกอมเป๊าะแป๊ะ, แหวนอมยิ้ม",
    D: "ขนมสดชื่น / หมากฝรั่งเคี้ยวได้นาน: เหมาะกับขนมอย่าง โคล่าอัดเม็ด, ลูกอมบ๊วย"
};

let currentQuestion = 0;
let answers = { A: 1, B: 2, C: 3, D: 4 };

function startQuiz() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("quiz-screen").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    const questionData = questions[currentQuestion];
    document.getElementById("question-text").innerText = questionData.text;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    Object.keys(questionData.options).forEach(letter => {
        const option = document.createElement("div");
        option.className = "option";
        option.innerText = questionData.options[letter];
        option.onclick = () => selectAnswer(letter, option);
        optionsContainer.appendChild(option);
    });

    document.getElementById("next-button").disabled = true;
}

function selectAnswer(letter, optionElement) {
    document.querySelectorAll(".option").forEach(opt => opt.classList.remove("selected"));
    optionElement.classList.add("selected");
    answers[letter]++;
    document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "block";

    let resultType = Object.keys(answers).reduce((a, b) => answers[a] > answers[b] ? a : b);
    document.getElementById("result-text").innerText = results[resultType];
}

function restartQuiz() {
    currentQuestion = 0;
    answers = { A: 1, B: 2, C: 3, D: 4 };
    document.getElementById("result-screen").style.display = "none";
    document.getElementById("start-screen").style.display = "block";
}