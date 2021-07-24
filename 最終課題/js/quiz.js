function quiz(){
    answer=prompt("創価大学出身の有名なお笑い芸人といえば？");
    if(answer=="ナイツ"){
        alert("おめでとう！正解です！")
    }elese 
    {alert("もう一度やろう！")} 
    }


function Check2(){
    answer11=document.myform2.setumon1[0].checked;
    answer12=document.myform2.setumon1[1].checked;
    answer13=document.myform2.setumon1[2].checked;
    if(answer11==false && answer12==false && answer13==false){
    alert("問題１が選択されてません");
    matigai1=1
    }
    else{
    matigai1=0
    }
    if(answer11==true){tokuten1=0};
    if(answer12==true){tokuten1=50};
    if(answer13==true){tokuten1=0};
    answer21=document.myform2.setumon2[0].checked;
    answer22=document.myform2.setumon2[1].checked;
    answer23=document.myform2.setumon2[2].checked;
    if(answer21==false && answer22==false && answer23==false){
    alert("問題２が選択されてません");
    matigai2=1
    }
    else{
    matigai2=0
    }
    if(answer21==true){tokuten2=50};
    if(answer22==true){tokuten2=0};
    if(answer23==true){tokuten2=0};
    matigai=matigai1+matigai2
    if(matigai==0){
    tokuten=tokuten1+tokuten2;
    alert(tokuten);
    }
    else{
    alert("ラジオボタンを選んで、やり直してください")
    }
    }
    