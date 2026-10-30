function showProfile(id) {

    const details = document.getElementById(id);

    if (id === "ali") {
        details.textContent =
            "Ali enjoys building attractive websites.";
    }
    else if (id === "sam") {
        details.textContent =
            "Sam enjoys developing Java applications.";
    }
    else if (id === "taylor") {
        details.textContent =
            "Taylor enjoys solving problems with Python.";
    }
}
