document.addEventListener("DOMContentLoaded", function () {
    const jobListings = [
        { title: "Construction Helper", location: "Mumbai", pay: "₹500/day" },
        { title: "Electrician Assistant", location: "Delhi", pay: "₹700/day" },
        { title: "Warehouse Worker", location: "Bangalore", pay: "₹600/day" },
        { title: "Painter", location: "Chennai", pay: "₹450/day" },
        { title: "Plumber's Assistant", location: "Hyderabad", pay: "₹550/day" },
        { title: "Forklift Operator", location: "Pune", pay: "₹750/day" },
        { title: "Welder", location: "Kolkata", pay: "₹800/day" },
        { title: "Machine Operator", location: "Ahmedabad", pay: "₹700/day" },
        { title: "Carpenter Assistant", location: "Lucknow", pay: "₹480/day" },
        { title: "Bricklayer", location: "Jaipur", pay: "₹550/day" },
        { title: "Scaffolder", location: "Surat", pay: "₹600/day" },
        { title: "Gardener", location: "Nashik", pay: "₹400/day" },
        { title: "Painter Assistant", location: "Kanpur", pay: "₹500/day" },
        { title: "Road Worker", location: "Patna", pay: "₹650/day" },
        { title: "Security Guard", location: "Indore", pay: "₹450/day" },
        { title: "Cleaner", location: "Vadodara", pay: "₹300/day" },
        { title: "Heavy Machinery Operator", location: "Nagpur", pay: "₹900/day" },
        { title: "Landscaper", location: "Bhopal", pay: "₹500/day" },
        { title: "Window Installer", location: "Agra", pay: "₹550/day" },
        { title: "Tile Setter", location: "Visakhapatnam", pay: "₹650/day" }
    ];

    const jobContainer = document.getElementById("job-listings");

    jobListings.forEach(job => {
        const jobCard = document.createElement("div");
        jobCard.className = "job-card";
        
        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p class="job-location"><i class="fas fa-map-marker-alt"></i> ${job.location}</p>
            <p class="job-pay"><i class="fas fa-money-bill-wave"></i> ${job.pay}</p>
            <button onclick="applyForJob('${job.title}')">Apply Now</button>
        `;
        
        jobContainer.appendChild(jobCard);
    });
});

function applyForJob(jobTitle) {
    alert(`You have applied for the ${jobTitle} position!`);
}
