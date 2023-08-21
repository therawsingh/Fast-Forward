window.addEventListener("load", () => {
  const clickSkipIntroButton = () => {
    const skipIntroButton = Array.from(
      document.querySelectorAll("button")
    ).find((button) => {
      return button.textContent === "Skip Intro";
    });

    if (skipIntroButton) {
      skipIntroButton.click();
    }
  };

  const observer = new MutationObserver(() => {
    clickSkipIntroButton();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  clickSkipIntroButton();
});
