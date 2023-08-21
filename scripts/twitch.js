window.addEventListener("load", () => {
  const clickBonusButton = () => {
    const bonusButton = Array.from(document.querySelectorAll("button")).find(
      (button) => {
        return button.ariaLabel === "Claim Bonus";
      }
    );

    if (bonusButton) {
      bonusButton.click();
    }
  };

  const observer = new MutationObserver(() => {
    clickBonusButton();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  clickBonusButton();
});
