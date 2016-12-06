/**
 * Created by Jon on 10/25/16.
 */

export default class Dropdown {

    static bindDropDown() {
        let toggleMenu = document.querySelector(".navbar-toggle");
        toggleMenu.addEventListener('click', this.setupNavToggle);

        let dropdowns = document.getElementsByClassName("dropdown-toggle");
        for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].addEventListener('click', this.expand);
        }
    };

    static collapse(e) {
        if (e.target.className.indexOf("dropdown") === -1) {
            Dropdown.resetOpen();
            document.removeEventListener('click', Dropdown.collapse);
        }
    };

    static expand(e) {
        e.preventDefault();
        if (e.target.parentNode.className.indexOf("open") === -1) {
            Dropdown.resetOpen();
            e.target.parentNode.className += ' open';
            document.addEventListener('click', Dropdown.collapse);
        } else {
            Dropdown.resetOpen();
        }
    };

    static resetOpen() {
        let parentToggles = document.getElementsByClassName("dropdown");

        for (let i = 0; i < parentToggles.length; i++) {
            let className = parentToggles[i].className;
            if (className.indexOf(" open") !== -1) {
                parentToggles[i].className = className.replace("open", '').trim();
            }
        }
    };

    static setupNavToggle(e) {
        e.preventDefault();
        Dropdown.updateParentNav(e);
        Dropdown.toggleNav();
    };

    static updateParentNav(e) {
        let className = e.target.className;
        if (className.indexOf('collapsed') !== -1) {
            e.target.className = className.replace('collapsed', '').trim();
            e.target.setAttribute('aria-expanded', "true");
        } else {
            e.target.className += " collapsed";
            e.target.setAttribute('aria-expanded', "false");
        }
    };

    static toggleNav() {
        let navbar = document.querySelector(".navbar-collapse");
        let className = navbar.className;
        if (className.indexOf('in') === -1) {
            navbar.className += ' in';
        } else {
            navbar.className = className.replace('in', '').trim();
        }
    }
}
