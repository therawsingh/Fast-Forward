window.addEventListener("load", () => {

  let toggleSkipP, toggleSkipIntroP, toggleNextEpisodeP, toggleSkipRecapP;

  chrome.storage.sync.get(["toggleSkipP", "toggleSkipIntroP", "toggleNextEpisodeP", "toggleSkipRecapP"], (data) => {
    toggleSkipP = data.toggleSkipP;
    toggleSkipIntroP = data.toggleSkipIntroP;
    toggleNextEpisodeP = data.toggleNextEpisodeP;
    toggleSkipRecapP = data.toggleSkipRecapP;
  });

  const clickSkipButton = () => {
    const skipButton = document.querySelector(
      "#dv-web-player > div > div:nth-child(1) > div > div > div.webPlayerSDKUiContainer > div > div > div > div > div.atvwebplayersdk-overlays-container.fpqiyer.f1sp4gm7 > div.fkhz08q.f8hspre > div.atvwebplayersdk-bottompanel-container.f1ha12bn.f1icw8u.f1hy0e6n.f1atwpsw.f1hz0yp6.f1v8xbwx > div.fmugii2.atvwebplayersdk-infobar-container > div > div.fz90x71 > div.fu4rd6c.f1cw2swo"
    );

    if (skipButton && toggleSkipP) {
      skipButton.click();
    }
  };

  const clickNextEpisodeButton = () => {
    const nextEpisodeButton = document.querySelector(
      "#dv-web-player > div > div:nth-child(1) > div > div > div.webPlayerSDKUiContainer > div > div > div > div > div.atvwebplayersdk-overlays-container.fpqiyer.f1sp4gm7 > div.fkhz08q.f8hspre > div.f18oq18q.f6suwnu.fhxjtbc.f1ngx5al > div.atvwebplayersdk-nextupcard-wrapper.fpumr5b > div > div > div.atvwebplayersdk-nextupcard-button.fixbm5z.f1nog967.fobx3y5 > div.fmy9x71.f1kyngch.f1c55z14 > img"
    );

    if (nextEpisodeButton && toggleNextEpisodeP) {
      nextEpisodeButton.click();
    }
  };

  const clickSkipIntro = () => {
    const skipIntroButton = Array.from(
      document.querySelectorAll("button")
    ).find((button) => {
      return button.textContent === "Skip Intro";
    });

    if (skipIntroButton && toggleSkipIntroP) {
      skipIntroButton.click();
    }
  };

  const clickSkipRecap = () => {
    const skipRecapButton = Array.from(
      document.querySelectorAll("button")
    ).find((button) => {
      return button.textContent === "Skip Recap";
    });

    if (skipRecapButton && toggleSkipRecapP) {
      skipRecapButton.click();
    }
  };

  const observer = new MutationObserver(() => {
    clickSkipButton();
    clickSkipIntro();
    clickSkipRecap();
    clickNextEpisodeButton();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  clickSkipButton();
  clickSkipIntro();
  clickSkipRecap();
  clickNextEpisodeButton();
});
