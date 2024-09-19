const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".openModal");
const closeModalBtn = document.querySelector(".close-btn");

// 모달 열기
openModalBtn.addEventListener("click", function () {
  modal.style.display = "flex"; // 모달을 화면에 표시
});

// 모달 닫기
closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none"; // 모달을 숨김
});
