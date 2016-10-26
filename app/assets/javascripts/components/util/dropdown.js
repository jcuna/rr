/**
 * Created by Jon on 10/25/16.
 */
'use strict';

var boundEvents = [];
const resetOpen = function() {
    let parentToggles = document.getElementsByClassName("dropdown");

    for (let i = 0; i < parentToggles.length; i++) {
        let className = parentToggles[i].className;
        if (className.indexOf(" open") !== -1) {
            parentToggles[i].className = className.replace(" open", '');
        }
    }
};

const collapse = function(e) {
    e.stopPropagation();
    if (e.target.className.indexOf("dropdown") === -1) {
        resetOpen();
        document.removeEventListener('click', collapse);
    }
};

const expand = function(e) {
    e.preventDefault();
    resetOpen();
    e.target.parentNode.className += ' open';

    document.addEventListener('click', collapse);
};

export function bindDropDowns() {
    let dropdowns = document.getElementsByClassName("dropdown-toggle");

    for (let i = 0; i < dropdowns.length; i++) {
        boundEvents.push(dropdowns[i]);
        dropdowns[i].addEventListener('click', expand);
    }
}