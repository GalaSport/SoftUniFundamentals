function sortingArray2Criteria(input){
    let sorted = input.sort((a,b) => a.length - b.length || a.localeCompare(b));
    console.log(sorted.join("\n"));
}
sortingArray2Criteria(['gamma','alpha','beta']);