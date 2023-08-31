window.addEventListener("load", () => {
  const clickBonusButton = () => {
    const bonusButton = document.querySelector(
      "#live-page-chat > div > div > div.Layout-sc-1xcs6mc-0.wZVfj.chat-shell.chat-shell__expanded > div > div > section > div > div.Layout-sc-1xcs6mc-0.bGyiZe.chat-input > div:nth-child(2) > div.Layout-sc-1xcs6mc-0.XTygj.chat-input__buttons-container > div.Layout-sc-1xcs6mc-0.hROlnu > div > div > div > div.Layout-sc-1xcs6mc-0.CDgpA > div > div > div > button"
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
