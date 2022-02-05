window.addEventListener('load', function(params) {
    let faceMenuListItems = document.querySelectorAll('.facemenu-list-item > a');
    faceMenuListItems.forEach(faceMenuListItem => {
        faceMenuListItem.addEventListener('click', function (params) {        
            let subfacemenu = faceMenuListItem.nextElementSibling;           
                if (subfacemenu.style.display != 'block')
                subfacemenu.style.display = 'block';
            else
                subfacemenu.style.display = 'none';               
        });
    });
});