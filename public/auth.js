// Optional sign-in for Marvelpedia.
// Browsing the wiki is public — sign-in is only needed to save favourites.
// On auth changes this notifies app.js via setUser() so it can load/clear the
// user's favourites.

import { auth, isConfigured } from "./firebase-config.js";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { setUser } from "./app.js";

const loginModal = document.getElementById("login-modal");
const signinOpen = document.getElementById("signin-open");
const userBox = document.getElementById("user-box");
const userEmailEl = document.getElementById("user-email");
const signoutBtn = document.getElementById("signout-btn");
const googleBtn = document.getElementById("google-btn");

const tabs = {
  signin: document.getElementById("tab-signin"),
  signup: document.getElementById("tab-signup"),
};
const forms = {
  signin: document.getElementById("signin-form"),
  signup: document.getElementById("signup-form"),
};
const messageEl = document.getElementById("auth-message");

const googleProvider = new GoogleAuthProvider();

// ---- Login modal open/close ------------------------------------------------

function openLogin() {
  if (!isConfigured) {
    setMessage("Firebase isn't configured yet — add your config in public/firebase-config.js.", "error");
  }
  loginModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLogin() {
  loginModal.hidden = true;
  document.body.style.overflow = "";
  setMessage("", "");
}

signinOpen.addEventListener("click", openLogin);
loginModal.querySelectorAll("[data-login-close]").forEach((el) => el.addEventListener("click", closeLogin));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !loginModal.hidden) closeLogin();
});
// app.js asks us to open the login modal when a signed-out user taps a favourite.
document.addEventListener("request-login", openLogin);

// ---- Friendly error messages -----------------------------------------------

function describeError(err) {
  const code = (err && err.code) || "";
  const map = {
    "auth/invalid-email": "That email address looks invalid.",
    "auth/missing-password": "Please enter a password.",
    "auth/weak-password": "Password should be at least 6 characters.",
    "auth/email-already-in-use": "An account already exists for that email.",
    "auth/invalid-credential": "Invalid email or password.",
    "auth/wrong-password": "Invalid email or password.",
    "auth/user-not-found": "Invalid email or password.",
    "auth/too-many-requests": "Too many attempts. Please try again later.",
    "auth/network-request-failed": "Network error. Check your connection.",
    "auth/operation-not-allowed":
      "This sign-in method is disabled. Enable it in the Firebase console → Authentication → Sign-in method.",
    "auth/popup-closed-by-user": "Sign-in popup closed before completing.",
    "auth/cancelled-popup-request": "",
    "auth/popup-blocked": "Your browser blocked the sign-in popup. Allow popups and try again.",
    "auth/unauthorized-domain":
      "This domain isn't authorized for sign-in. Add it in the Firebase console → Authentication → Settings → Authorized domains.",
  };
  return map[code] != null ? map[code] : (err && err.message) || "Something went wrong.";
}

function setMessage(text, kind) {
  messageEl.textContent = text;
  messageEl.className = "message" + (kind ? " " + kind : "");
}

// ---- Tabs ------------------------------------------------------------------

function setActiveTab(form) {
  Object.entries(forms).forEach(([key, el]) => el.classList.toggle("active", key === form));
  Object.entries(tabs).forEach(([key, el]) => el.classList.toggle("active", key === form));
  setMessage("", "");
}

tabs.signin.addEventListener("click", () => setActiveTab("signin"));
tabs.signup.addEventListener("click", () => setActiveTab("signup"));

// ---- Submission ------------------------------------------------------------

function credentials(form) {
  const data = new FormData(form);
  return { email: String(data.get("email")).trim(), password: String(data.get("password")) };
}

async function handleAuth(action, form, pendingText) {
  setMessage(pendingText, "");
  const { email, password } = credentials(form);
  try {
    await action(auth, email, password);
    // onAuthStateChanged closes the modal and updates the UI.
  } catch (err) {
    setMessage(describeError(err), "error");
  }
}

forms.signin.addEventListener("submit", (e) => {
  e.preventDefault();
  handleAuth(signInWithEmailAndPassword, e.target, "Signing in…");
});

forms.signup.addEventListener("submit", (e) => {
  e.preventDefault();
  handleAuth(createUserWithEmailAndPassword, e.target, "Creating account…");
});

googleBtn.addEventListener("click", async () => {
  setMessage("Opening Google sign-in…", "");
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (err) {
    const text = describeError(err);
    setMessage(text, text ? "error" : "");
  }
});

signoutBtn.addEventListener("click", () => signOut(auth));

// ---- Auth state ------------------------------------------------------------

if (!isConfigured) {
  // Browsing still works; the login controls just won't function.
  [forms.signin, forms.signup].forEach((f) =>
    f.querySelectorAll("input, button").forEach((el) => (el.disabled = true))
  );
  googleBtn.disabled = true;
} else {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      userEmailEl.textContent = user.email || "Signed in";
      userBox.hidden = false;
      signinOpen.hidden = true;
      forms.signin.reset();
      forms.signup.reset();
      closeLogin();
    } else {
      userBox.hidden = true;
      signinOpen.hidden = false;
    }
    // Tell the wiki who's signed in so it can load/clear favourites.
    setUser(user || null);
  });
}
