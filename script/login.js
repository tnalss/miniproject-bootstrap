$(function () {
    $("#searchBtn").click(function () {
        alert("아직 이용하실 수 없는 기능입니다.");
    })
    $('.loginBtn').click(function (e) {
        e.preventDefault();


        let id = $("#id").val();
        let pwd = $("#pwd").val();

        if ((id == "admin") && (pwd == "admin")) {
            alert("로그인 성공");
            move_page();
        } else {
            alert("ID와 PW를 확인하세요");
        }


    })

    $('.naverLoginBtn').click(function (e) {
        e.preventDefault();
        alert("미구현 기능입니다.");
    })

    function move_page(){
        location.href="index.html"
        }
})