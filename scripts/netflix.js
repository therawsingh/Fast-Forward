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

  const clickContinueWatching = () => {
    const continueWatchingButton = Array.from(
      document.querySelectorAll("button")
    ).find((button) => {
      return button.textContent === "Continue Watching";
    });

    if (continueWatchingButton) {
      continueWatchingButton.click();
    }
  };

    const clickSkipRecap = () => {
      const skipRecapButton = Array.from(
        document.querySelectorAll("button")
      ).find((button) => {
        return button.textContent === "Skip Recap";
      });

      if (skipRecapButton) {
        skipRecapButton.click();
      }
    };

  const observer = new MutationObserver(() => {
    clickNextButton();
    clickSkipIntro();
    clickContinueWatching();
    clickSkipRecap();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  clickNextButton();
  clickSkipIntro();
  clickContinueWatching();
  clickSkipRecap();
});
