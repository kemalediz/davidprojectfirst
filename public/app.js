const tabs = {
  signin: document.getElementById("tab-signin"),
  signup: document.getElementById("tab-signup"),
};
const forms = {
  signin: document.getElementById("signin-form"),
  signup: document.getElementById("signup-form"),
};
const messageEl = document.getElementById("message");

function setActive(form) {
  Object.entries(forms).forEach(([key, el]) => {
    el.classList.toggle("active", key === form);
  });
  Object.entries(tabs).forEach(([key, el]) => {
    el.classList.toggle("active", key === form);
  });
  clearMessage();
}

tabs.signin.addEventListener("click", () => setActive("signin"));
tabs.signup.addEventListener("click", () => setActive("signup"));

forms.signin.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = formDataToJSON(event.target);
  await submit("/api/signin", data, "Signed in!");
});

forms.signup.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = formDataToJSON(event.target);
  await submit("/api/signup", data, "Account created!");
});

function formDataToJSON(form) {
  const formData = new FormData(form);
  return Object.fromEntries(formData.entries());
}

function clearMessage() {
  messageEl.textContent = "";
  messageEl.className = "message";
}

async function submit(path, payload, successMessage) {
  clearMessage();
  try {
    const res = await fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || "Request failed");
    }
    messageEl.textContent = data.message || successMessage;
    messageEl.classList.add("success");
  } catch (err) {
    messageEl.textContent = err.message;
    messageEl.classList.add("error");
  }
}
