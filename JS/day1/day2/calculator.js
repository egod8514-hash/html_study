function start() {
    console.log("계산기 시작!");

    // 계산식 전체를 입력받기
    let expression = prompt(
        "계산식을 입력하세요.\n예: 2 + 3 * 4"
    );

    // 입력 도중 취소를 누르면 바로 종료
    if (expression === null) {
        return;
    }

    // 입력한 계산식을 실제로 계산
    let result = eval(expression);

    // 결과 출력
    console.log("계산식:", expression);
    console.log("결과:", result);

    // 다시 계산할지 확인
    let again = confirm("다시 계산하시겠습니까?");

    // 확인을 누르면 계산기 다시 실행
    if (again) {
        start();
    }
}