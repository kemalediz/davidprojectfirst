// Firebase Authentication gate for Marvelpedia.
// Shows a sign-in / sign-up screen and, once a user is authenticated, reveals
// the wiki and loads characters from Firestore (see app.js → initWiki).

import { auth, isConfigured } from "./firebase-config.js";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { initWiki } from "./app.js";

const views = {
  auth: document.getElementById("auth-view"),
  loading: document.getElementById("loading-view"),
  app: document.getElementById("app-view"),
};

const tabs = {
  signin: document.getElementById("tab-signin"),
  signup: document.getElementById("tab-signup"),
};
const forms = {
  signin: document.getElementById("signin-form"),
  signup: document.getElementById("signup-form"),
};
const messageEl = document.getElementById("auth-message");
const userEmailEl = document.getElementById("user-email");
const signoutBtn = document.getElementById("signout-btn");

let wikiLoaded = false;

// ---- View switching --------------------------------------------------------

function show(view) {
  Object.entries(views).forEach(([key, el]) => {
    el.hidden = key !== view;
  });
}

// ---- Friendly Firebase error messages --------------------------------------

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
      "Email/password sign-in is disabled. Enable it in the Firebase console → Authentication → Sign-in method.",
  };
  return map[code] || (err && err.message) || "Something went wrong.";
}

function setMessage(text, kind) {
  messageEl.textContent = text;
  messageEl.className = "message" + (kind ? " " + kind : "");
}

// ---- Tab handling ----------------------------------------------------------

function setActiveTab(form) {
  Object.entries(forms).forEach(([key, el]) => el.classList.toggle("active", key === form));
  Object.entries(tabs).forEach(([key, el]) => el.classList.toggle("active", key === form));
  setMessage("", "");
}

tabs.signin.addEventListener("click", () => setActiveTab("signin"));
tabs.signup.addEventListener("click", () => setActiveTab("signup"));

// ---- Form submission -------------------------------------------------------

function credentials(form) {
  const data = new FormData(form);
  return { email: String(data.get("email")).trim(), password: String(data.get("password")) };
}

async function handleAuth(action, form, pendingText) {
  setMessage(pendingText, "");
  const { email, password } = credentials(form);
  try {
    await action(auth, email, password);
    // onAuthStateChanged takes over from here.
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

signoutBtn.addEventListener("click", () => signOut(auth));

// ---- Auth state → which view to show ---------------------------------------

if (!isConfigured) {
  show("auth");
  setActiveTab("signin");
  setMessage(
    "Firebase isn't configured yet. Add your project config in public/firebase-config.js (see README).",
    "error"
  );
  // Disable the forms until configured.
  [forms.signin, forms.signup].forEach((f) =>
    f.querySelectorAll("input, button").forEach((el) => (el.disabled = true))
  );
} else {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      userEmailEl.textContent = user.email || "Signed in";
      show("app");
      setMessage("", "");
      forms.signin.reset();
      forms.signup.reset();
      if (!wikiLoaded) {
        wikiLoaded = true;
        await initWiki();
      }
    } else {
      wikiLoaded = false;
      show("auth");
      setActiveTab("signin");
    }
  });
}
