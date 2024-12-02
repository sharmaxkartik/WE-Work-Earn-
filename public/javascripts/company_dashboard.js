document.addEventListener("DOMContentLoaded", function () {
    const jobPostings = [
        { title: "Construction Manager", location: "Mumbai", applications: 12, status: "Open" },
        { title: "Site Supervisor", location: "Delhi", applications: 8, status: "Closed" },
        { title: "Electrician", location: "Bangalore", applications: 5, status: "Open" },
        { title: "Warehouse Supervisor", location: "Hyderabad", applications: 7, status: "Open" },
        { title: "Forklift Operator", location: "Chennai", applications: 10, status: "Closed" }
    ];

    const jobContainer = document.getElementById("job-postings");
    const totalJobs = document.getElementById("total-jobs");
    const totalApplications = document.getElementById("total-applications");
    const openPositions = document.getElementById("open-positions");

    // Populate job cards
    let totalApplicationsCount = 0;
    let openPositionsCount = 0;

    jobPostings.forEach(job => {
        const jobCard = document.createElement("div");
        jobCard.className = "job-card";

        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p><i class="fas fa-map-marker-alt"></i> ${job.location}</p>
            <p class="job-status">${job.status}</p>
            <p>Applications: ${job.applications}</p>
            <button class="view-applications-btn" onclick="viewApplications('${job.title}')">View Applications</button>
        `;

        jobContainer.appendChild(jobCard);

        totalApplicationsCount += job.applications;
        if (job.status === "Open") openPositionsCount++;
    });

    totalJobs.textContent = jobPostings.length;
    totalApplications.textContent = totalApplicationsCount;
    openPositions.textContent = openPositionsCount;
});

function viewApplications(jobTitle) {
    alert(`Viewing applications for the ${jobTitle} position!`);
}

function addNewJob() {
    alert("Functionality to add a new job coming soon!");
}

function filterJobs(query) {
    const jobCards = document.querySelectorAll(".job-card");
    jobCards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        card.style.display = title.includes(query.toLowerCase()) ? "block" : "none";
    });
}
