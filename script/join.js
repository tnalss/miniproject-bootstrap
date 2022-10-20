$(document).ready(function(){
    let check1,check2=0;

    $("#nextBtn").click(function(){    
        if($("#agree-policy").is(":checked") == false){
            alert("모든 약관에 동의 하셔야 회원가입이 가능합니다.");
            return;
        }else if($("#agree-ipolicy").is(":checked") == false){
            alert("모든 약관에 동의 하셔야 회원가입이 가능합니다..");
            return;
        }else{
            alert("가입 기능 구현중입니다.");
        }
    }); 

    $("#agree-policy").click(function(){
        check1= !check1;
        if(check1 ==1 && check2==1){
            $("#nextBtn").removeClass("btn-secondary");
            $("#nextBtn").addClass("btn-primary");
        } else{
            $("#nextBtn").removeClass("btn-primary");
            $("#nextBtn").addClass("btn-secondary");
        }
    })
    $("#agree-ipolicy").click(function(){
        check2= !check2;
        if(check1 ==1 && check2==1){
            $("#nextBtn").removeClass("btn-secondary");
            $("#nextBtn").addClass("btn-primary");
        }else{
            $("#nextBtn").removeClass("btn-primary");
            $("#nextBtn").addClass("btn-secondary");
        }
    })

    // function move_page(){
    //     location.href="join2.html"
    //     }




});