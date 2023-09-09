window.addEventListener("load", () => {

  let toggleSkipAdY;

  chrome.storage.sync.get(["toggleSkipAdY"], (data) => {
    toggleSkipAdY = data.toggleSkipAdY;
  });

  const clickSkipAdsButton = () => {
    const skipAdsButton = Array.from(document.querySelectorAll("button")).find(
      (button) => {
        return button.textContent === "Skip Ads";
      }
    );

    if (skipAdsButton && toggleSkipAdY) {
      skipAdsButton.click();
    }
  };

  const clickSkipAdButton = () => {
    const skipAdButton = Array.from(document.querySelectorAll("button")).find(
      (button) => {
        return button.textContent === "Skip Ad";
      }
    );

    if (skipAdButton && toggleSkipAdY) {
      skipAdButton.click();
    }
  };

  const observer = new MutationObserver(() => {
    clickSkipAdsButton();
    clickSkipAdButton();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  clickSkipAdsButton();
  clickSkipAdButton();
});
