window.addEventListener("load", () => {

  let toggleNextEpisodeN, toggleSkipIntroN, toggleContinuieWatchingN, toggleSkipRecapN;
  const currentURL = window.location.href;

  chrome.storage.sync.get(["toggleNextEpisodeN", "toggleSkipIntroN", "toggleContinuieWatchingN", "toggleSkipRecapN"], (data) => {
    toggleNextEpisodeN = data.toggleNextEpisodeN;
    toggleSkipIntroN = data.toggleSkipIntroN;
    toggleContinuieWatchingN = data.toggleContinuieWatchingN;
    toggleSkipRecapN = data.toggleSkipRecapN;
  });
  
    //Click Functions

    const clickNextButton = () => {

      const nextButton = Array.from(document.querySelectorAll("button")).find(
        (button) => {
          return button.textContent === "Next Episode";
        });

      if (nextButton && toggleNextEpisodeN && currentURL.includes("watch")) {
        nextButton.click();
      }
    };

    const clickSkipIntro = () => {

      const skipIntroButton = Array.from(
        document.querySelectorAll("button")).find(
          (button) => {
            return button.textContent === "Skip Intro";
          });

      if (skipIntroButton && toggleSkipIntroN) {
        skipIntroButton.click();
      }
    };

    const clickContinueWatching = () => {

      const continueWatchingButton = Array.from(
        document.querySelectorAll("button")
      ).find((button) => {
        return button.textContent === "Continue watching";
      });


      if (continueWatchingButton && toggleContinuieWatchingN) {
        continueWatchingButton.click();
      }
    };

    const clickSkipRecap = () => {

      const skipRecapButton = Array.from(
        document.querySelectorAll("button")
      ).find((button) => {
        return button.textContent === "Skip Recap";
      });

      if (skipRecapButton && toggleSkipRecapN) {
        skipRecapButton.click();
      }
    };

    //Observer

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

    //Initial function calls

    clickNextButton();
    clickSkipIntro();
    clickContinueWatching();
    clickSkipRecap();

  });
