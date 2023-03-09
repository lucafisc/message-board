window.onload = () => {
  const chatbox = document.querySelector(".chatbox");
  chatbox.scrollTop = chatbox.scrollHeight;
}

document.addEventListener("DOMContentLoaded", function() {
	const form = document.getElementById("form");
	const usernameInput = form.elements.messageUser;
	const savedUsername = localStorage.getItem("username");

	if (savedUsername) {
	  usernameInput.value = savedUsername;
	}
  
	form.addEventListener("submit", (event) => {
	  const username = usernameInput.value;
	  localStorage.setItem("username", username);
	});
  });