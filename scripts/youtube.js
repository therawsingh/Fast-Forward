window.addEventListener("load", () => {
  const clickSkipAdButton = () => {
    const skipAdButton = Array.from(document.querySelectorAll("button")).find(
      (button) => {
        return button.textContent === "Skip Ad";
      }
    );

    if (skipAdButton) {
      skipAdButton.click();
    }
  };

  const observer = new MutationObserver(() => {
    clickSkipAdButton();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  clickSkipAdButton();
});
