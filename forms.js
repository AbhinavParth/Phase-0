let seconds = 40;
let minutes = 10;
myinterval = setInterval(timer, 1000);
function timer() {
    if (minutes == 0 && seconds == 0) {
        clearInterval(myinterval);
        return;
    }
    if (seconds == 0)
        seconds = 60;
    if (seconds == 60)
        minutes = minutes - 1;
    seconds = seconds - 1;
    document.getElementById("sw").innerHTML = minutes + ":" + seconds
}
todaysdate = setInterval(datetime, 1000)
function datetime() {
    const d = new Date();
    document.getElementById("dt").innerHTML = d;
}
function display() {
    let fn = document.getElementById("fname").value;
    let ln = document.getElementById("lname").value;
    let db = document.getElementById("DOB").value;
    let ea = document.getElementById("EA").value;
    let st = document.getElementById("State").value;
    let pn = document.getElementById("Pin").value;
    let ei = document.getElementById("EmpId").value;
    let dj = document.getElementById("DOJ").value;
    let mn = document.getElementById("Mob").value;
    let em = document.getElementById("EM").value;
    // let ir = document.getElementById("ins").value
    // let dp = document.getElementById("DEP").value;
    var dpmt;
    if (document.getElementById("hrd").checked) {
        dpmt = document.getElementById("hrd").value
    }
    else if (document.getElementById("sl").checked) {
        dpmt = document.getElementById("sl").value
    }
    else if (document.getElementById("tg").checked) {
        dpmt = document.getElementById("tg").value
    }
    else{
        dpmt = "Not Selected"
    }
    if (document.getElementById("Policy1").checked) {
        var insr = document.getElementById("Policy1").value;
        // document.write("Insurance is :" +insr + "<br>")
    }
    else{
        insr = "Not Taken"
    }
    if (document.getElementById("Policy2").checked) {
        var insrn = document.getElementById("Policy2").value;
        // document.write("Insurance is :" +insrn + "<br>")
    }
    else
    {
        insrn = "Not Taken"
    }
    document.write("<b>First Name is :</b>" + fn + "<br><br>");
    document.write("<b>last Name is :</b>" + ln + "<br><br>");
    document.write("<b>Date of Birth is :</b>" + db + "<br><br>");
    document.write("<b>Address is :</b>" + ea + "<br><br>")
    document.write("<b>State is  :</b>" + st + "<br><br>")
    document.write("<b>PIN :</b>" + pn + "<br><br>")
    document.write("<b>Employee Id is :</b>" + ei + "<br><br>");
    document.write("<b>Date of Joining is :</b>" + dj + "<br><br>");
    document.write("<b>Mobile Number is :</b>" + mn + "<br><br>");
    document.write("<b>Email id is :</b>" + em + "<br><br>");
    document.write("<b>Department is :</b>" + dpmt + "<br><br>")
    document.write("<b>Health Insurance :</b>" + insr + "<br><br>")
    document.write("<b>Vehicle Insurance :</b>" + insrn + "<br><br>")
}