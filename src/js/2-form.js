document.addEventListener('DOMContentLoaded', function() {
    const formData = {
      email: "",
      message: ""
    };
  
    const form = document.querySelector('.feedback-form');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');
    const localStorageKey ="feedback-form-state"
  
    function updateData() {
      formData.email = emailInput.value.trim();
      formData.message = messageInput.value.trim();
      localStorage.setItem(localStorageKey, JSON.stringify(formData));
    }
  
    const savedData = JSON.parse(localStorage.getItem(localStorageKey));
    if (savedData) {
      formData.email = savedData.email;
      formData.message = savedData.message;
      emailInput.value = formData.email;
      messageInput.value = formData.message;
    }
  
    form.addEventListener('input', function(evt) {
      if (evt.target === emailInput || evt.target === messageInput) {
        updateData();
      }
    });

    form.addEventListener('submit', function(evt) {
        evt.preventDefault();
    
        if (!formData.email || !formData.message) {
            alert("Fill please all fields");
            return;
        }

        console.log(formData);
        localStorage.removeItem("feedback-form-state");
        formData.email = "";
        formData.message = "";
        form.reset();
    });
});


