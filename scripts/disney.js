window.addEventListener("load", () => {
  let toggleSkipRecapD, toggleSkipIntroD, toggleNextEpisodeD;

  // Retrieve toggle settings from Chrome storage
  chrome.storage.sync.get(
    ["toggleSkipRecapD", "toggleSkipIntroD", "toggleNextEpisodeD"],
    (data) => {
      toggleSkipRecapD = data.toggleSkipRecapD;
      toggleSkipIntroD = data.toggleSkipIntroD;
      toggleNextEpisodeD = data.toggleNextEpisodeD;
    }
  );

  const clickSkipIntroButton = () => {
    const skipIntroButton = Array.from(
      document.querySelectorAll("button")
    ).find((button) => button.textContent === "Skip Intro");

    if (skipIntroButton && toggleSkipIntroD) {
      skipIntroButton.click();
    }
  };

  const clickSkipRecapButton = () => {
    const skipRecapButton = document.querySelector(
      "#page-container > div > div:nth-child(1) > div:nth-child(1) > div._2SCTjm_Vu5PRTQlmfSP68c > div > div:nth-child(1) > div._1yXUbimyCTMGF9cUlMJN0k > div._17OcmvacBhtBIc8UlFWr44.hWMwKvUSl80u9L3r6hj7Z > div > button > span > span"
    );

    if (skipRecapButton && toggleSkipRecapD) {
      skipRecapButton.click();
    }
  };

  const clickNextEpisodeButton = () => {
    const nextButton = Array.from(document.querySelectorAll("span")).find(
      (button) => button.textContent === "Next Episode"
    );

    if (nextButton && toggleNextEpisodeD) {
      nextButton.click();
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

  // Run checks every 500ms
  const intervalId = setInterval(() => {
    try {
      clickSkipIntroButton();
      clickNextEpisodeButton();
      clickNextEpisodeButton2();
      clickSkipRecapButton();
    } catch (error) {
      console.error("Error during interval check:", error);
      clearInterval(intervalId); // Stop the interval if something goes wrong
    }
  }, 5000); // Check every 500ms
});
