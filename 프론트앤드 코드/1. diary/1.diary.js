    //-----------1. 오늘의 날짜를 "YYYY년 MM월 DD일" 형식으로 표시---------//
    function displayCurrentDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1 필요
        const day = String(today.getDate()).padStart(2, '0');
        const formattedDate = `${year}년 ${month}월 ${day}일`;
        
        // 날짜 표시 영역에 출력
        document.getElementById('date-display').textContent = `날짜 : ${formattedDate}`;
    }

    // 페이지가 로드될 때 날짜 표시 함수 호출
    window.onload = displayCurrentDate;

    //---------------2. 감정 선택시 효과 추가------------------//
    document.addEventListener("DOMContentLoaded", function () {
        const emotions = document.querySelectorAll(".emotion");
    
        emotions.forEach(emotion => {
            emotion.addEventListener("click", function () {
                this.classList.toggle("selected");
            });
        });
    });
    
