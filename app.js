function selectAll(selectAll)  {
    const checkboxes = document.querySelectorAll('#agree input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
});
}
function alert() {
    
}
