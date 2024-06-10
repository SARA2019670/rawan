fetch('data.json')
.then(res=>res.json())
.then(data=>{

    handeldata(data);
})

function handeldata(flats)
{
const flat=document.getElementById("flats");
flats.forEach(weflat => {
    let flat1=creatrow(weflat);
    let flat2=addDetal(weflat);
flat.appendChild(flat1);
flat.appendChild(flat2);

});



}
let messgedetals = [];


function creatrow(weflat)
{
const row = document.createElement("tr");

for (let i =0; i < 5; i++){
const all=document.createElement("td");
row.appendChild(all)

}

row.children[0].textContent=` ${weflat.city}`;


row.children[1].textContent=` ${weflat.area}`;


row.children[2].textContent=` ${weflat.price}`;


const chek=document.createElement("input");
chek.setAttribute("type","checkbox");
chek.onclick=function(){
chek.parentElement.parentElement.nextElementSibling.classList.toggle("ooo");
}
row.children[3].appendChild(chek);


const radio=document.createElement("input");
radio.setAttribute("type","radio");
    radio.setAttribute("name", "radio");

    radio.onchange = function (e) {
            nextbtn.disabled = false;
            for (let index = 0,index1=0; index <5; index++,index1++) {
                messgedetals[index1]=(this.parentElement.parentElement.children[index].innerText);
    
            }
        }
row.children[4].appendChild(radio);


return row;
}

//-------------------------
function addDetal(weflat){
    const row = document.createElement("tr");
    row.classList.add("ooo")
    row.innerHTML=`
   
    <td colspan="5">
      <div class="info">
     <ul class="Text">
      <li> المنطقة : ${weflat.areaa}  </li>
      <li>  الكراج : ${weflat.gar}</li>
      <li>الطابق : ${weflat.floor} </li>
      <li>الملكية : ${weflat.have} </li>
      <li>بلكون  : ${weflat.balcon} </li>
      <li>مفروشة : ${weflat.furhished}</li>
  
     </ul>
     <div class="imge">
  <img src="${weflat.img1}" alt="" width="250" height="200">
  <img src="${weflat.img2} " alt="" width="250" height="200">
  <img src="${weflat.img3}" alt="" width="" height="200">
   
     </div>
     </div>
    </td>
     `
  return row;
}

// --
let nextbtn = document.getElementById("btnsub");
nextbtn.disabled = true;

let myform = document.querySelector(".form");

nextbtn.onclick = function () {
    myform.style.display = 'flex'
    Captcha();
};
let cancel = document.getElementById("cancelbtn");
cancel.onclick = function () {
    myform.style.display = "none"
}
// Define the characters that can be used in the captcha code

function Captcha() {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // Generate a random string of 6 characters
    let captchaCode = "";
    for (let i = 0; i < 6; i++) {
        captchaCode += chars[Math.floor(Math.random() * chars.length)];
    }
    let refr = document.getElementById("refrlpl");
    refr.innerText = captchaCode;
}
//----------

let supbtn = document.getElementById("done");
supbtn.onclick = function () {
    var username = document.getElementById("name");
    var ID = document.getElementById("IDC");
    var date = document.getElementById("date");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    var captcha = document.getElementById("txtCaptcha");
    var refrlpl = document.getElementById("refrlpl").innerText;

    username.classList.remove("worong")
    ID.classList.remove("worong")
    phone.classList.remove("worong")
    email.classList.remove("worong")
    captcha.classList.remove("worong")


    if (username.value == "") {
        username.classList.add("worong")

        alert("يرجى ملء جميع الحقول الإلزامية");
        return false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value) && email.value != "") {
        email.classList.add("worong")

        alert("يرجى إدخال عنوان بريد إلكتروني صالح");
        return false;
    }

    var numberPattern = /^(0[1-9]|1[0-5])[0-9]{9}$/;
    if (!numberPattern.test(ID.value)) {
        ID.classList.add("worong")
        alert("يرجى إدخال رقم وطني صالح بين 01 و 15");
        return false;
    }


    var phonePattern = /((0)(93|94|95|96|98|99)([0-9]{7}))|((0)(92|95|96|97)([0-9]{7}))/;
    if (!phonePattern.test(phone.value) && phone.value != "") {
        phone.classList.add("worong")
        alert("يرجى إدخال رقم هاتف صالح مع رمز البلد (مثال: 0931234567)");
        return false;
    }

    if (captcha.value == "") {
        captcha.classList.add("worong")
        alert("يرجى إدخال رمز التحقق من الكابتشا");
        return false;
    }

    if (captcha.value != refrlpl) {
        alert("رمز التحقق من الكابتشا غير صحيح");
        captcha.classList.add("worong")
        return false;
    }
    alert(" لقد تم حجز شقة بنجاح \n"
        + " مدينة" + messgedetals[0] +"\n"
        + " " + messgedetals[1] + "\n"
        + "بسعر " + messgedetals[2] + "\n"


) 
}
