document.getElementById("bugForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get bug title and description values
    var bugTitle = document.getElementById("bugTitle").value;
    var bugDescription = document.getElementById("bugDescription").value;

    // Create a new bug element
    var bugElement = document.createElement("div");
    bugElement.classList.add("bug");
    
    // Create title element
    var titleElement = document.createElement("h2");
    titleElement.textContent = bugTitle;
    bugElement.appendChild(titleElement);

    // Create description element
    var descriptionElement = document.createElement("p");
    descriptionElement.textContent = bugDescription;
    bugElement.appendChild(descriptionElement);

    // Append bug element to bug list
    var bugList = document.getElementById("bugList");
    bugList.appendChild(bugElement);

    // Reset form values
    document.getElementById("bugTitle").value = "";
    document.getElementById("bugDescription").value = "";
});