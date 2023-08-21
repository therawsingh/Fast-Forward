window.addEventListener("load", () => {
  const clickBonusButton = () => {
    const bonusButton = document.querySelector('[aria-label="Claim Bonus"]');

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
