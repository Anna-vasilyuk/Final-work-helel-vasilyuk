// Ініціалізація та збереження вибору мови
document.addEventListener("DOMContentLoaded", () => {
  const langButtons = document.querySelectorAll(".lang-switcher__btn");
  const activeClass = "lang-switcher__btn--active";

  // 1. Зчитування збереженої мови з пам'яті браузера
  const savedLanguage = localStorage.getItem("selectedLanguage");

  if (savedLanguage) {
    langButtons.forEach((btn) => btn.classList.remove(activeClass));

    langButtons.forEach((btn) => {
      if (btn.textContent.trim() === savedLanguage) {
        btn.classList.add(activeClass);
      }
    });
  }

  // 2. Обробка кліку та запис у localStorage
  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      langButtons.forEach((btn) => btn.classList.remove(activeClass));
      button.classList.add(activeClass);

      const currentLang = button.textContent.trim();
      localStorage.setItem("selectedLanguage", currentLang);
    });
  });
});
