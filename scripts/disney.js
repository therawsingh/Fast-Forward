window.addEventListener("load", () => {

  let toggleSkipRecapD, toggleSkipIntroD, toggleNextEpisodeD;

  chrome.storage.sync.get(["toggleSkipRecapD", "toggleSkipIntroD", "toggleNextEpisodeD"], (data) => {
    toggleSkipRecapD = data.toggleSkipRecapD;
    toggleSkipIntroD = data.toggleSkipIntroD;
    toggleNextEpisodeD = data.toggleNextEpisodeD;
  });

  const clickSkipIntroButton = () => {
    const skipIntroButton = Array.from(
      document.querySelectorAll("button")
    ).find((button) => {
      return button.textContent === "Skip Intro";
    });

    if (skipIntroButton && toggleSkipIntroD) {
      skipIntroButton.click();
    }
  };

  const clickSkipRecapButton = () => {
    const skipRecapButton = document.querySelector("#page-container > div > div:nth-child(1) > div:nth-child(1) > div._2SCTjm_Vu5PRTQlmfSP68c > div > div:nth-child(1) > div._1yXUbimyCTMGF9cUlMJN0k > div._17OcmvacBhtBIc8UlFWr44.hWMwKvUSl80u9L3r6hj7Z > div > button > span > span")

    if (skipRecapButton && toggleSkipRecapD) {
      skipRecapButton.click();
    }
  };

  const clickNextEpisodeButton = () => {
    const nextEpisodeButton = document.querySelector(
      "#page-container > div > div:nth-child(1) > div:nth-child(1) > div > div > div:nth-child(1) > div._1yXUbimyCTMGF9cUlMJN0k > div._17OcmvacBhtBIc8UlFWr44._3hNFbJ9QCbXukmzzLDk3dl > div:nth-child(2) > div > button > span.flex.items-center > span"
    );

    if (nextEpisodeButton && toggleNextEpisodeD) {
      nextEpisodeButton.click();
    }
  };

  const clickNextEpisodeButton2 = () => {
    const nextEpisodeButton2 = document.querySelector(
      "#page-container > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div > div > div > div.qaO7HELxWiQoA0fHXJIqP > article > div._1pihWFM9H9JVRZN8Hkf4_X > div > div:nth-child(1) > div.sdn11PQTMwIKGrZxc00mj > div > div > a"
    );

    if (nextEpisodeButton2 && toggleNextEpisodeD) {
      nextEpisodeButton2.click();
    }
  };

  const observer = new MutationObserver(() => {
    clickSkipIntroButton();
    clickNextEpisodeButton();
    clickNextEpisodeButton2();
    clickSkipRecapButton();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  clickSkipIntroButton();
  clickNextEpisodeButton();
  clickNextEpisodeButton2();
  clickSkipRecapButton();
});
