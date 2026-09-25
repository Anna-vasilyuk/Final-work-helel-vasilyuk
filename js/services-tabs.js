// Логіка перемикання інтерактивних табів послуг
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".services-tabs__tab");
  const contents = document.querySelectorAll(".services-tabs__item");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabName = tab.dataset.tab;

      // Прибираємо активний клас з усіх кнопок
      tabs.forEach((item) => {
        item.classList.remove("services-tabs__tab--active");
      });

      // Ховаємо весь текст
      contents.forEach((item) => {
        item.classList.remove("services-tabs__item--active");
      });

      // Додаємо active-клас натиснутій кнопці
      tab.classList.add("services-tabs__tab--active");

      // Знаходимо контент, який відповідає кнопці
      const activeContent = document.querySelector(
        `[data-content="${tabName}"]`,
      );

      // Показуємо потрібний текст
      if (activeContent) {
        activeContent.classList.add("services-tabs__item--active");
      }
    });
  });
});
