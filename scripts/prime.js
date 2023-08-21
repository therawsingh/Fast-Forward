window.addEventListener("load", () => {
  const clickSkipButton = () => {
    const skipButton = Array.from(document.querySelectorAll("button")).find(
      (button) => {
        return button.textContent === "Skip";
      }
    );

    if (skipButton) {
      skipButton.click();
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

  const clickSkipRecap = () => {
    const skipRecapButton = Array.from(
      document.querySelectorAll("button")
    ).find((button) => {
      return button.textContent === "Skip Intro";
    });

    if (skipRecapButton) {
      skipRecapButton.click();
    }
  };

  const observer = new MutationObserver(() => {
    clickSkipButton();
    clickSkipIntro();
    clickSkipRecap();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  clickSkipButton();
  clickSkipIntro();
  clickSkipRecap();
});
