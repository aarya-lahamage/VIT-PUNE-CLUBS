window.onload = function() {

    var form = document.getElementById("techForm") ||
               document.getElementById("sportsForm") ||
               document.getElementById("culturalForm") ||
               document.getElementById("cocurricularForm");

    if (form == null) {
        return;
    }

    var modal = document.getElementById("successModal");
    var closeBtn = document.getElementById("modalCloseBtn");

    modal.style.display = "none";

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    form.onsubmit = function(e) {
        e.preventDefault();
        var valid = true;

        var name = document.getElementById("fullName");
        document.getElementById("nameError").style.display = "none";
        if (name.value.trim() == "") {
            document.getElementById("nameError").style.display = "block";
            valid = false;
        }

        var email = document.getElementById("email");
        document.getElementById("emailError").style.display = "none";
        if (email.value.trim() == "" || email.value.indexOf("@") == -1) {
            document.getElementById("emailError").style.display = "block";
            valid = false;
        }

        var phone = document.getElementById("phone");
        document.getElementById("phoneError").style.display = "none";
        if (phone.value.trim() == "" || phone.value.length != 10) {
            document.getElementById("phoneError").style.display = "block";
            valid = false;
        }

        var year = document.getElementById("year");
        document.getElementById("yearError").style.display = "none";
        if (year.value == "default") {
            document.getElementById("yearError").style.display = "block";
            valid = false;
        }

        if (valid == true) {
            modal.style.cssText = "display:flex; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); justify-content:center; align-items:center; z-index:9999;";
        }

    }

}