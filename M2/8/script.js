let num;
function numberToText(num){
    while(true){
        num = Number(prompt("1-dən 99-da daxil olmaqla ədəd daxil edin"));
        if ((num>0)&&(num<100)){
            break;
        }
    }
    if(num < 10){
        switch (num) {
            case 1:
                console.log("Bir");
                break;
            case 2:
                console.log("İki");
                break;
            case 3:
                console.log("Üç");
                break;
            case 4:
                console.log("Dörd");
                break;
            case 5:
                console.log("Beş");
                break;
            case 6:
                console.log("Altı");
                break;
            case 7:
                console.log("Yeddi");
                break;
            case 8:
                console.log("Səkkiz");
                break;
            case 9:
                console.log("Doqquz");
                break;
            
            default:
                break;
        }
    }
    else if((num >= 10)&&(num%10 != 0)){
        let numStringArray = String(num).split("");
        let numString0 = "";
        let numString1 = "";
        switch (numStringArray[0]) {
            case "1":
                numString0 = "On";
                break;
            case "2":
                numString0 = "İyirmi";
                break;
            case "3":
                numString0 = "Otuz";
                break;
            case "4":
                numString0 = "Qırx";
                break;
            case "5":
                numString0 = "Əlli";
                break;
            case "6":
                numString0 = "Altmış";
                break;
            case "7":
                numString0 = "Yetmiş";
                break;
            case "8":
                numString0 = "Səksən";
                break;
            case "9":
                numString0 = "Doxsan";
                break;
            default:
                break;
        }
        switch (numStringArray[1]) {
            case "1":
                numString1 = "bir";
                break;
            case "2":
                numString1 = "bki";
                break;
            case "3":
                numString1 = "üç";
                break;
            case "4":
                numString1 = "dörd";
                break;
            case "5":
                numString1 = "beş";
                break;
            case "6":
                numString1 = "altı";
                break;
            case "7":
                numString1 = "yeddi";
                break;
            case "8":
                numString1 = "səkkiz";
                break;
            case "9":
                numString1 = "doqquz";
                break;
            
            default:
                break;
        }
        console.log(numString0 + ' ' + numString1);
    }
    else{
        switch (num) {
            case 10:
                console.log("On");
                break;
            case 20:
                console.log("iyirmi");
                break;
            case 30:
                console.log("Otuz");
                break;
            case 40:
                console.log("Qırx");
                break;
            case 50:
                console.log("Əlli");
                break;
            case 60:
                console.log("Altmış");
                break;
            case 70:
                console.log("Yetmiş");
                break;
            case 80:
                console.log("Səksən");
                break;
            case 90:
                console.log("Doxsan");
                break;
            default:
                break;
        }
    }
}
numberToText();