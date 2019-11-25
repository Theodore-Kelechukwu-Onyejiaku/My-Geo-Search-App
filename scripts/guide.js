$(document).ready(()=>{
    const collapseBtn = $(".collapse-button");
    const divToCollapse = $("#nav-two");

collapseBtn.click(()=>{
    divToCollapse.slideToggle(500); 
    })
})
