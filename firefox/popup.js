"use strict";

const api = typeof browser !== "undefined" ? browser : chrome;

const toggle = document.getElementById("toggle");
const status = document.getElementById("status");

function render(enabled) {
  toggle.checked = enabled;
  status.textContent = enabled ? "On" : "Off";
}

// Load the saved state (default on).
Promise.resolve(api.storage.local.get("enabled"))
  .then((res) => render(res && res.enabled === false ? false : true))
  .catch(() => render(true));

// Persist on change; the content script reacts via storage.onChanged.
toggle.addEventListener("change", () => {
  const enabled = toggle.checked;
  render(enabled);
  api.storage.local.set({ enabled });
});
