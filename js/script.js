
/* This is the Fitness Hub mobile navigation script.
   It makes the hamburger button open and close the menu.
   This helps phone users reach all five website pages. */

// This finds the hamburger button and navigation menu.
// JavaScript uses these elements to control the mobile menu.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

// This checks that both elements exist before using them.
// It prevents errors if a page is missing either element.
if (menuButton && navigation) {

    // This listens for clicks on the hamburger button.
    // Each click opens or closes the navigation menu.
    // The open class connects JavaScript to the CSS rules.
    menuButton.addEventListener("click", function () {
        const isOpen = navigation.classList.toggle("open");

        // This updates the button's accessibility information.
        // Screen readers can tell whether the menu is open.
        menuButton.setAttribute("aria-expanded", String(isOpen));

        // This updates the button's label.
        // It tells visitors what clicking the button will do.
        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    // This closes the mobile menu after a visitor selects a link.
    // It keeps the menu from staying open unnecessarily.
    navigation.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navigation.classList.remove("open");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation menu");
        });
    });
}
