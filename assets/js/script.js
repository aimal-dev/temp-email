function toggleQR() {
    const qr = document.getElementById("qrPopup");
    const isOpen = qr.style.display === "block";
    qr.style.display = isOpen ? "none" : "block";

    if (!isOpen) {
        // Add event listener to close popup when clicking outside
        document.addEventListener("mousedown", handleOutsideClick);
    } else {
        document.removeEventListener("mousedown", handleOutsideClick);
    }

    function handleOutsideClick(event) {
        if (!qr.contains(event.target)) {
            qr.style.display = "none";
            document.removeEventListener("mousedown", handleOutsideClick);
        }
    }
}

  function copyEmail() {
    const email = document.getElementById("emailText").value;
    navigator.clipboard.writeText(email).then(() => {
      alert("Email copied to clipboard!");
    });
  }
  function handleRefresh(){
   window.location.reload()
  }
  function handleChange() {
    // Generate a random string for the email username
    const randomString = Math.random().toString(36).substring(2, 10);
    // Set a fixed domain or randomize if you want
    const newEmail = `${randomString}@gotemv.com`;
    // Update the input field with the new email
    document.getElementById("emailText").value = newEmail;
     
    
}
  function handleDelete() {
    const newEmail = 'rapagex206@gotemv.com';
    // Update the input field with the new email
    document.getElementById("emailText").value = newEmail;
}