// ==UserScript==
// @name        Auto Enable Word Count in Google Docs
// @namespace   Violentmonkey Scripts
// @match       https://docs.google.com/document/*
// @grant       none
// @version     1.0
// @author      Sylvie Nzoumba-Ampion
// @description Automatically enables "Display word count while typing" option
// @created 2/15/2025, 8:50:12 PM
// ==/UserScript==


(function() {
    'use strict';
    console.log("Script started");


    // Function to check and enable the word count
    function checkAndEnableWordCount() {
        const observer = new MutationObserver(() => {
            const checkbox = document.querySelector('div[role="dialog"] input[type="checkbox"]');
            if (checkbox) {
                checkbox.click(); // Enable "Display word count"
            }

            const okButton = document.querySelector('[data-mdc-dialog-action="ok"]');
            console.log(okButton);
            if (okButton) {
                okButton.click(); // Click OK button
                console.log("Clicked button");
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }


    setTimeout(() => {
        checkAndEnableWordCount();
    }, 2000); // Delay to ensure Google Docs loads fully

})();
