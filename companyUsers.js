function companyUsers(array) {
    let companyEmployees = {};
    for (let companyEmployee of array) {
        let [company, emloyeeId] = companyEmployee.split(" -> ");
        if (company in companyEmployees) {
            if (!companyEmployees[company].includes(emloyeeId)) {
                companyEmployees[company].push(emloyeeId);
            }
        } else {
            companyEmployees[company] = [emloyeeId];
        }
    }
    let entries = Object.entries(companyEmployees).sort((a, b) => a[0].localeCompare(b[0]));
    for(let [name, emloyeeIds] of entries){
        console.log(name);
        emloyeeIds.forEach(id => console.log(`-- ${id}`));
    }
}
companyUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345',
    'Microsoft -> CC12345', 'HP -> BB12345']);