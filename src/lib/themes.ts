import { get, writable } from "svelte/store";

const LIGHT = "light";
const DARK = "dark";
const KEY = "theme";

export let isDark = writable(false);


export const initTheme = () => {
  const media = window.matchMedia("(prefers-color-scheme: dark)").matches;
  isDark.set(media);

  const local = localStorage.getItem("theme");
  if (local) {
    isDark.set(local === "dark")
  }

  updateTheme()
}

export const updateTheme = () => {
  if (get(isDark)) {
    localStorage.setItem(KEY, DARK);
    document.documentElement.classList.add("dark");
  } else {
    localStorage.setItem(KEY, LIGHT);
    document.documentElement.classList.remove("dark");
  }
}

export const toggle = () => {
  isDark.set(!get(isDark))
  updateTheme()
}
