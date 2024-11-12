function redirectTo(userType) {
    if (userType === 'laborer') {
        window.location.href = 'laborer_dashboard.html';
    } else if (userType === 'company') {
        window.location.href = 'company_dashboard.html';
    }
}
