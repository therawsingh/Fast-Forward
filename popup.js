document.addEventListener("DOMContentLoaded", function () {

    const applyChangesButton = document.getElementById("applyChanges");

    /** @type {HTMLInputElement} */
    let toggleNextEpisodeN = document.getElementById("toggleNextEpisodeN");
    /** @type {HTMLInputElement} */
    let toggleSkipIntroN = document.getElementById("toggleSkipIntroN");
    /** @type {HTMLInputElement} */
    let toggleContinuieWatchingN = document.getElementById("toggleContinuieWatchingN");
    /** @type {HTMLInputElement} */
    let toggleSkipRecapN = document.getElementById("toggleSkipRecapN");

    /** @type {HTMLInputElement} */
    let toggleSkipP = document.getElementById("toggleSkipP");
    /** @type {HTMLInputElement} */
    let toggleSkipIntroP = document.getElementById("toggleSkipIntroP");
    /** @type {HTMLInputElement} */
    let toggleNextEpisodeP = document.getElementById("toggleNextEpisodeP");
    /** @type {HTMLInputElement} */
    let toggleSkipRecapP = document.getElementById("toggleSkipRecapP");

    /** @type {HTMLInputElement} */
    let toggleSkipRecapD = document.getElementById("toggleSkipRecapD");
    /** @type {HTMLInputElement} */
    let toggleSkipIntroD = document.getElementById("toggleSkipIntroD");
    /** @type {HTMLInputElement} */
    let toggleNextEpisodeD = document.getElementById("toggleNextEpisodeD");

    /** @type {HTMLInputElement} */
    let toggleSkipAdY = document.getElementById("toggleSkipAdY");

    chrome.storage.sync.get(["toggleNextEpisodeN", "toggleSkipIntroN", "toggleContinuieWatchingN", "toggleSkipRecapN", "toggleSkipP",
        "toggleSkipIntroP", "toggleNextEpisodeP", "toggleSkipRecapP",
        "toggleSkipRecapD", "toggleSkipIntroD", "toggleNextEpisodeD", "toggleSkipAdY"], (data) => {

            toggleNextEpisodeN.checked = data.toggleNextEpisodeN;
            toggleSkipIntroN.checked = data.toggleSkipIntroN;
            toggleContinuieWatchingN.checked = data.toggleContinuieWatchingN;
            toggleSkipRecapN.checked = data.toggleSkipRecapN;

            toggleSkipP.checked = data.toggleSkipP;
            toggleSkipIntroP.checked = data.toggleSkipIntroP;
            toggleNextEpisodeP.checked = data.toggleNextEpisodeP;
            toggleSkipRecapP.checked = data.toggleSkipRecapP;

            toggleSkipRecapD.checked = data.toggleSkipRecapD;
            toggleSkipIntroD.checked = data.toggleSkipIntroD;
            toggleNextEpisodeD.checked = data.toggleNextEpisodeD;

            toggleSkipAdY.checked = data.toggleSkipAdY;
        });

    applyChangesButton.addEventListener("click", () => {

        chrome.storage.sync.set({

            toggleNextEpisodeN: toggleNextEpisodeN.checked,
            toggleSkipIntroN: toggleSkipIntroN.checked,
            toggleContinuieWatchingN: toggleContinuieWatchingN.checked,
            toggleSkipRecapN: toggleSkipRecapN.checked,

            toggleSkipP: toggleSkipP.checked,
            toggleSkipIntroP: toggleSkipIntroP.checked,
            toggleNextEpisodeP: toggleNextEpisodeP.checked,
            toggleSkipRecapP: toggleSkipRecapP.checked,

            toggleSkipRecapD: toggleSkipRecapD.checked,
            toggleSkipIntroD: toggleSkipIntroD.checked,
            toggleNextEpisodeD: toggleNextEpisodeD.checked,

            toggleSkipAdY: toggleSkipAdY.checked,

        });

        window.close();

    });
});
