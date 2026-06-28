// Local, offline authentication fallback for Marvelpedia.
//
// Used automatically when Firebase isn't configured (public/firebase-config.js
// still has placeholder values). It lets sign-up / sign-in and per-user
// favourites work out of the box with zero setup, backed entirely by the
// browser's localStorage.
//
// NOTE: this is a convenience for local/offline use and demos only. Accounts
// live in this browser, and passwords are NOT securely hashed — do not treat
// it as real security. Configure Firebase (see README) for real authentication.

const ACCOUNTS_KEY = "mp_accounts";
const SESSION_KEY = "mp_session";
const FAV_PREFIX = "mp_favorites_";

function read(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}
function write(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Tiny non-cryptographic obfuscation so passwords aren't sitting in plain text.
// (Not secure — see note above.)
function scramble(s) {
  return btoa(unescape(encodeURIComponent("mp:" + s)));
}

function makeUid(email) {
  return "local:" + email.toLowerCase();
}

class LocalAuth {
  constructor() {
    this.listeners = [];
  }

  get currentUser() {
    return read(SESSION_KEY, null);
  }

  onChange(cb) {
    this.listeners.push(cb);
    // Fire immediately with the current state, mirroring onAuthStateChanged.
    cb(this.currentUser);
  }

  _emit() {
    const user = this.currentUser;
    this.listeners.forEach((cb) => cb(user));
  }

  _setSession(user) {
    if (user) write(SESSION_KEY, user);
    else localStorage.removeItem(SESSION_KEY);
    this._emit();
  }

  async signUp(email, password) {
    email = email.trim().toLowerCase();
    if (!email) throw { code: "auth/invalid-email" };
    if (!password || password.length < 6) throw { code: "auth/weak-password" };
    const accounts = read(ACCOUNTS_KEY, {});
    if (accounts[email]) throw { code: "auth/email-already-in-use" };
    accounts[email] = { password: scramble(password), uid: makeUid(email) };
    write(ACCOUNTS_KEY, accounts);
    this._setSession({ uid: accounts[email].uid, email, provider: "password" });
  }

  async signIn(email, password) {
    email = email.trim().toLowerCase();
    const accounts = read(ACCOUNTS_KEY, {});
    const acct = accounts[email];
    if (!acct || acct.password !== scramble(password)) {
      throw { code: "auth/invalid-credential" };
    }
    this._setSession({ uid: acct.uid, email, provider: "password" });
  }

  // No real OAuth offline — sign in as a local guest "Google" account so the
  // button does something useful instead of erroring.
  async signInGoogle() {
    const email = "guest@google.local";
    this._setSession({ uid: makeUid(email), email: "Google guest", provider: "google" });
  }

  async signOut() {
    this._setSession(null);
  }

  getFavorites(uid) {
    return read(FAV_PREFIX + uid, []);
  }
  setFavorites(uid, ids) {
    write(FAV_PREFIX + uid, ids);
  }
}

export const localAuth = new LocalAuth();
