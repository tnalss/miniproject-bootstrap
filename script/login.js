$(function () {
    $("#searchBtn").click(function(){
        alert("아직 이용하실 수 없는 기능입니다.");
    })
    $('.loginBtn').click(function(e){
        e.preventDefault();
        alert("ID와 PW를 확인하세요");
    })

    $('.naverLoginBtn').click(function(e){
        e.preventDefault();
        alert("정말 될거라 생각하시고 누르셨나요?");
    })
})