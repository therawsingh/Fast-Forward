window.addEventListener("load", () => {
  const clickNextButton = () => {
    const nextButton = Array.from(document.querySelectorAll("button")).find(
      (button) => {
        return button.textContent === "Next Episode";
      }
    );

    if (nextButton) {
      nextButton.click();
    }
  };

  const clickSkipIntro = () => {
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
    clickNextButton();
    clickSkipIntro();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  clickNextButton();
  clickSkipIntro();
});
