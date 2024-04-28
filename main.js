// ________FAKE_DATA_______________
let questions = [
  {
    quiz_id: 1,
    question: "Dịch vụ Fax công cộng",
    answers: [
      "Mở tại các cơ sở bưu điện",
      "Mở các tổ chức cá nhân",
      "Mở tại nhà riêng",
      "Mở các cột điện thoại công cộng",
    ],
  },
  {
    quiz_id: 2,
    question: "Dịch vụ Fax thuê bao cung cấp cho đôi tượng?",
    answers: [
      "Các cơ sở bưu điện",
      "Các tổ chức cá nhân hoặc nhà riêng",
      "Các đô thị mới",
      "Các cột điện thoại công cộng",
    ],
  },
  {
    quiz_id: 3,
    question:
      "Thiết bị Fax thuê bao được đấu nối với tổng đài điện thoại công cộng bằng:",
    answers: [
      "Đường cáp riêng",
      "Đường cáp chung",
      "Đừng cáp quang",
      "Đường cáp riêng hoặc đường cáp chung",
    ],
  },
  {
    quiz_id: 4,
    question: "Cụm từ nào chỉ dịch vụ VoIP ?",
    answers: [
      "Voice of Internet Protocol",
      "Vone over Internet Protocol",
      "Voice over Internet Protocol",
      "Voice of Intel Protocol",
    ],
  },
  {
    quiz_id: 5,
    question: "Độ rộng của băng (bandwidth)",
    answers: [
      "Là khái niệm về khối lượng dữ liệu truyền qua cáp hay kênh truyền thông",
      "Là mức độ cho phép dữ liệu đi qua đường truyền",
      "Là kích thước đường truyền",
      "Là thời gian truyền thông trong một khoảng thời gian",
    ],
  },
  {
    quiz_id: 6,
    question:
      "Sản phẩm đa phương tiện đặc biệt chú trọng vào đối tượng người khuyết tật nào?",
    answers: [
      "Trẻ em không nơi nương tựa",
      "Học sinh tiểu học",
      "Khiếm thị,Khiếm thính",
      "Những người chân tay hoạt động không bình thường",
    ],
  },
  {
    quiz_id: 7,
    question: "Công nghệ VoIP...?",
    answers: [
      "Cho phép tạo cuộc gọi dùng kết nội bàng thông rộng",
      "Cho phép tạo cuộc gọi dùng kết nội bàng thông hẹp",
      "Cho phép tạo cuộc gọi dùng đường dây điện thoại hương tự",
      "Cho phép tạo cuộc gọi như giữa hai thai điện thoại thông thường",
    ],
  },
  {
    quiz_id: 8,
    question: "Công nghệ VoIP được thực hiện theo tiến trình",
    answers: [
      "Chuyển đổi tín hiệu thoại thành tín hiệu điện, chuyên đổi tín hiệu điện thành tín hiệu thoại, truyên qua Internet.",
      "Chuyên đôi tin hiệu điện thành tín hiệu thoại, truyền qua Internet, chuyên đòi tín hiệu thoại thành tín hiệu điện.",
      "Chuyên đôi tín hiệu thoại thành tín hiệu điện, truyên qua Internet, chuyên đổi tín hiệu điện thành tín hiệu thoại",
      "Chuyên đôi tín hiệu điện thành tín hiệu thoại, chuyên đôi tin hiệu thoại thành tín hiệu điện, truyên qua Internet.",
    ],
  },
  {
    quiz_id: 9,
    question: "Công nghệ VoIP có tính năng?",
    answers: [
      "Tạo cuộc gọi đường dài qua mạng dữ liệu IP có sẵn",
      "Truyền cuộc gọi qua mạng PSTN (public switched telephone network)",
      "Truyền cuộc gọi qua mạng cục bộ",
      "Tạo cuộc gọi đường dài qua mạng đô thị",
    ],
  },
  {
    quiz_id: 10,
    question: "Mục đích sử dụng dịch vụ VoIP của nhiều cơ quan, doanh nghiệp?",
    answers: [
      "Đây là công nghệ mới",
      "Giảm thiểu chi phí cho những cuộc gọi đường dài giữa nhiều chi nhánh xa nhau",
      "Do nhiều cơ quan đã sử dụng",
      "Giảm thời gian cho những cuộc gọi đường dài",
    ],
  },
  {
    quiz_id: 11,
    question: "Công nghệ VoIP có tính năng?",
    answers: [
      "Chỉ cho phép truyền dữ liệu thoại",
      "Chỉ cho phép truyền dữ liệu thoại và văn bản",
      "Chỉ cho phép truyên văn bản và hình ảnh",
      "Truyền dữ liệu thoại và các kiểu dữ liệu multimedia khác",
    ],
  },
  {
    quiz_id: 12,
    question: "Dịch vụ VPN (Virtual Private Network) là gì?",
    answers: [
      "Là dịch vụ mạng đô thị",
      "Là dịch vụ mạng diện rộng",
      "Là dịch vụ mạng theo yêu cầu",
      "Là dịch vụ mạng riêng ảo",
    ],
  },
  {
    quiz_id: 13,
    question: "Yêu tô không phải của chât lượng dịch vụ QoS?",
    answers: [
      "Chất lượng về hỗ trợ dịch vụ",
      "Chất lượng về khai thác dịch vụ",
      "Chất lượng về thiết bị của mạng lưới",
      "Chất lượng về dịch vụ thuê bao của mạng",
    ],
  },
  {
    quiz_id: 14,
    question: "NP (Năng lực mạng) là viết tắt của cụm từ nào sau đây:",
    answers: [
      "Network Ping",
      "Network Provider",
      "Network Performance",
      "Network Protocol",
    ],
  },
  {
    quiz_id: 15,
    question: "Các ý kiên sau đây, ý kiên nào là đúng?",
    answers: [
      "Nếu mạng có NP tốt thì có QoS thấp",
      "Hiệu năng mạng NP không ảnh hưởng tới QoS",
      "Trong một số trường hợp hiệu năng mạng NP chính là QoS",
      "QoS không liên quan tới NP",
    ],
  },
  {
    quiz_id: 16,
    question:
      "Tham số nào sau đây không sử dụng để đánh giá hiệu năng mạng NP?",
    answers: ["Độ trễ", "Độ khả dụng", "Độ suy hao", "Thông lượng"],
  },
  {
    quiz_id: 17,
    question:
      "Dịch vụ Telex là dịch vụ cho phép các thuê bao trao đôi thông tin với nhau",
    answers: [
      "Dưới dạng chữ bằng cách gõ vào từ bàn phím",
      "Dưới dạng ảnh chụp văn bản",
      "Dưới dạng tín hiệu thoại",
      "Dưới dạng tín hiệu vô tuyến",
    ],
  },
  {
    quiz_id: 18,
    question: "Dịch vụ Telex cho phép nhận thông tin",
    answers: [
      "Dưới dạng nhận thư điện tử",
      "Trên màn hình hoặc in ra bằng giấy",
      "Dưới dạng nhận tin nhăn",
      "Trên website cá nhân của người nhận",
    ],
  },
  {
    quiz_id: 19,
    question: "Dịch vụ Telex sử dụng đường truyền nào?",
    answers: [
      "Tốc độ cao",
      "Tốc độ thấp",
      "Tốc độ trung bình",
      "Dưới dạng tín hiệu vô tuyến",
    ],
  },
  {
    quiz_id: 20,
    question: "Dịch vụ Telex dựa trên loại mạng nào?",
    answers: [
      "Mạng toàn câu Internet",
      "Mạng đô thị MAN",
      "Mạng diện rộng GAN",
      "Mạng kết nối riêng",
    ],
  },
  {
    quiz_id: 21,
    question: "Cách đánh số thuê bao của dịch vụ Telex?",
    answers: [
      "Giống thuê bao điện thoại di động",
      "Giống thuê bao điện thoại cố định",
      "Khác thuê bao điện thoại thông thường",
      "Giống thuê bao điện thoại thông thường",
    ],
  },
  {
    quiz_id: 22,
    question: "",
    answers: ["", "", "", ""],
  },
  {
    quiz_id: 23,
    question: "",
    answers: ["", "", "", ""],
  },
  {
    quiz_id: 24,
    question: "",
    answers: ["", "", "", ""],
  },
];
const results = [
  {
    quiz_id: 1,
    answer: "Mở tại các cơ sở bưu điện",
  },
  {
    quiz_id: 3,
    answer: "Đường cáp riêng hoặc đường cáp chung",
  },
  {
    quiz_id: 2,
    answer: "Các tổ chức cá nhân hoặc nhà riêng",
  },
  {
    quiz_id: 4,
    answer: "Voice over Internet Protocol",
  },
  {
    quiz_id: 5,
    answer:
      "Là khái niệm về khối lượng dữ liệu truyền qua cáp hay kênh truyền thông.",
  },
  {
    quiz_id: 6,
    answer: "Khiếm thị,Khiếm thính",
  },
  {
    quiz_id: 7,
    answer: "Cho phép tạo cuộc gọi dùng kết nội bàng thông rộng",
  },
  {
    quiz_id: 8,
    answer:
      "Chuyên đôi tín hiệu thoại thành tín hiệu điện, truyên qua Internet, chuyên đổi tín hiệu điện thành tín hiệu thoại",
  },
  {
    quiz_id: 9,
    answer: "Tạo cuộc gọi đường dài qua mạng dữ liệu IP có sẵn",
  },
  {
    quiz_id: 10,
    answer:
      "Giảm thiểu chi phí cho những cuộc gọi đường dài giữa nhiều chi nhánh xa nhau",
  },
  {
    quiz_id: 11,
    answer: "Truyền dữ liệu thoại và các kiểu dữ liệu multimedia khác",
  },
  {
    quiz_id: 12,
    answer: "Là dịch vụ mạng riêng ảo",
  },
  {
    quiz_id: 13,
    answer: "Chất lượng về thiết bị của mạng lưới",
  },
  {
    quiz_id: 14,
    answer: "Network Performance",
  },
  {
    quiz_id: 15,
    answer: "Trong một số trường hợp hiệu năng mạng NP chính là QoS",
  },
  {
    quiz_id: 16,
    answer: "Độ khả dụng",
  },
  {
    quiz_id: 17,
    answer: "Dưới dạng chữ bằng cách gõ vào từ bàn phím",
  },
  {
    quiz_id: 18,
    answer: "Trên màn hình hoặc in ra bằng giấy",
  },
  {
    quiz_id: 19,
    answer: "Tốc độ thấp",
  },
  {
    quiz_id: 20,
    answer: "Mạng kết nối riêng",
  },
  {
    quiz_id: 21,
    answer: "Khác thuê bao điện thoại thông thường",
  },
  {
    quiz_id: 22,
    answer: "dialect",
  },
  {
    quiz_id: 23,
    answer: "dialect",
  },
  {
    quiz_id: 24,
    answer: "dialect",
  },
  {
    quiz_id: 25,
    answer: "dialect",
  },
  {
    quiz_id: 26,
    answer: "dialect",
  },
  {
    quiz_id: 27,
    answer: "dialect",
  },
];
// ________QUIZ_APP________________
const quizTimer = document.querySelector("#timer");
const quizProgress = document.querySelector("#progress");
const quizProgressText = document.querySelector("#progress_text");
const quizSubmit = document.querySelector("#quiz_submit");
const quizPrev = document.querySelector("#quiz_prev");
const quizNext = document.querySelector("#quiz_next");
const quizCount = document.querySelector(".quiz_question h5");
const quizAnswers = document.querySelectorAll(".quiz_question ul li");
let quizQuestions = document.querySelectorAll(".quiz_numbers ul li");
const quizQuestionList = document.querySelector(".quiz_numbers ul");
const quizAnswersItem = document.querySelectorAll(".quiz_answer_item");
const quizTitle = document.querySelector("#quiz_title");
let currentIndex = null;
let listSubmit = []; // Lưu index đáp án đã chọn
let listResults = []; // Lưu index kết quả đúng, theo mảng đã random
let isSubmit = false;
function randomArray(array) {
  return (array = array.sort(() => Math.random() - Math.random()));
}
const quiz = {
  randomQuestions: function () {
    questions = randomArray(questions);
    questions.forEach((q) => {
      q.answers = randomArray(q.answers);
    });
    console.log(questions);
  },
  renderQuestionList: function () {
    let render = "";
    questions.forEach((question, index) => {
      render += `<li>${index + 1}</li>`;
    });
    quizQuestionList.innerHTML = render;
    quizQuestions = document.querySelectorAll(".quiz_numbers ul li");
  },
  renderCurrentQuestion: function () {
    quizCount.innerText = `Question ${currentIndex + 1} of ${questions.length}`;
    quizTitle.innerText = questions[currentIndex].question;
    quizAnswersItem.forEach((answer, index) => {
      answer.innerText = questions[currentIndex].answers[index];
    });
  },
  renderProgress: function () {
    quizProgress.style = `stroke-dasharray: 0 9999;`;
    quizProgressText.innerText = `0/${questions.length}`;
  },
  renderTimer: function () {
    var timer = 1800;
    let _this = this;
    // Lấy thẻ p có id là "timer"
    var countdownElement = document.getElementById("timer");

    // Hàm cập nhật thời gian
    function updateTimer() {
      var minutes = Math.floor(timer / 60);
      var seconds = timer % 60;

      // Định dạng thời gian thành chuỗi HH:MM:SS
      var timerString =
        (minutes < 10 ? "0" : "") +
        minutes +
        ":" +
        (seconds < 10 ? "0" : "") +
        seconds;

      // Gán thời gian đã định dạng vào thẻ p
      countdownElement.innerHTML = timerString;

      // Giảm thời gian mỗi giây
      timer--;
      // Kiểm tra nếu hết thời gian
      if (timer < 0) {
        countdownElement.innerHTML = "Hết thời gian!";
        _this.handleCheckResults();
      }
      if (isSubmit) {
        clearInterval(intervalId);
      }
    }

    // Gọi hàm updateTimer mỗi giây
    var intervalId = setInterval(updateTimer, 1000);
  },
  renderResults: function () {
    if (listResults[currentIndex] === listSubmit[currentIndex]) {
      quizAnswers.forEach((item) => {
        item.classList.remove("incorrect");
      });
      quizAnswers[listResults[currentIndex]].classList.add("active");
    } else {
      quizAnswers.forEach((item) => {
        item.classList.remove("active");
        item.classList.remove("incorrect");
      });
      quizAnswers[listResults[currentIndex]].classList.add("active");
      quizAnswers[listSubmit[currentIndex]].classList.add("incorrect");
    }
  },
  handleProgress: function (correct) {
    const r = quizProgress.getAttribute("r");
    if (!isSubmit) {
      const progressLen = listSubmit.filter((item) => item >= 0);
      quizProgress.style = `stroke-dasharray: ${
        (2 * Math.PI * r * progressLen.length) / questions.length
      } 9999;`;
      quizProgressText.innerText = `${progressLen.length}/${questions.length}`;
    } else {
      quizProgress.style = `stroke-dasharray: ${
        (2 * Math.PI * r * correct) / questions.length
      } 9999;`;
      quizProgressText.innerText = `${correct}/${questions.length}`;
    }
  },
  handleQuestionList: function () {
    quizQuestions.forEach((item, index) => {
      item.addEventListener("click", () => {
        item.scrollIntoView({
          behavior: "smooth",
          inline: "center",
        });
        quizQuestions.forEach((item) => item.classList.remove("active"));
        item.classList.add("active");
        currentIndex = index;
        this.renderCurrentQuestion();
        quizAnswers.forEach((item) => item.classList.remove("active"));
        const selected = listSubmit[currentIndex];
        selected >= 0 && quizAnswers[selected].click();
        if (isSubmit) {
          this.renderResults();
        }
      });
    });
    quizQuestions[0].click();
  },
  handleAnswer: function () {
    quizAnswers.forEach((answer, index) => {
      answer.addEventListener("click", () => {
        if (!isSubmit) {
          quizAnswers.forEach((item) => item.classList.remove("active"));
          answer.classList.add("active");
          quizQuestions[currentIndex].classList.add("selected");
          listSubmit[currentIndex] = index;
          console.log(listSubmit);
          this.handleProgress();
        } else {
          return;
        }
      });
    });
  },
  handleNext: function () {
    quizNext.addEventListener("click", () => {
      ++currentIndex;
      if (currentIndex > questions.length - 1) {
        currentIndex = 0;
      }
      quizQuestions[currentIndex].click();
    });
  },
  handlePrev: function () {
    quizPrev.addEventListener("click", () => {
      --currentIndex;
      if (currentIndex < 0) {
        currentIndex = questions.length - 1;
      }
      quizQuestions[currentIndex].click();
    });
  },
  handleSubmit: function () {
    quizSubmit.addEventListener("click", () => {
      const progressLen = listSubmit.filter((item) => item >= 0);
      if (progressLen.length === questions.length) {
        this.handleCheckResults();
      } else {
        alert("Bạn chưa chọn hết đáp án");
      }
    });
  },
  handleCheckResults: function () {
    let correct = 0;
    questions.forEach((item, index) => {
      const result = results.find((r) => r.quiz_id === item.quiz_id);
      if (item.answers[listSubmit[index]] === result.answer) {
        listResults[index] = listSubmit[index];
        correct++;
      } else {
        quizQuestions[index].classList.add("incorrect");
        listResults[index] = item.answers.indexOf(result.answer);
      }
    });
    isSubmit = true;
    this.handleProgress(correct);
  },
  handleKeyDown: function () {
    document.addEventListener("keydown", (e) => {
      console.log(e.key);
      switch (e.key) {
        case "ArrowRight":
          return quizNext.click();
        case "ArrowLeft":
          return quizPrev.click();
        default:
          return false;
      }
    });
  },
  render: function () {
    this.renderQuestionList();
    this.renderProgress();
    this.renderTimer();
  },
  handle: function () {
    this.handleQuestionList();
    this.handleAnswer();
    this.handleNext();
    this.handlePrev();
    this.handleKeyDown();
    this.handleSubmit();
  },
  start: function () {
    this.randomQuestions();
    this.render();
    this.handle();
  },
};
quiz.start();
