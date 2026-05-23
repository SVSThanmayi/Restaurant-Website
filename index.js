
window.onload = () => {
    filterMenu('combos','acombos');
}
function filterMenu(categoryId,aId){
    let sections=document.querySelectorAll('.menu-container');
    let menus=document.querySelectorAll('.items-locate a');
    sections.forEach(section => {
        section.style.display='none';
        if(section.id==categoryId)
        {
            section.style.display='flex';
        }
    });
    console.log(menus);
    menus.forEach(menu=>{
        menu.style.backgroundColor='transparent';
        menu.style.color='#551212'
        if(menu.id==aId)
        {
            menu.style.backgroundColor='#800000';
            menu.style.color='#f8d5d5'
        }
    });
}