let down=false;
let x=document.getElementById(`down`).addEventListener(`click`,function(){
    let nav=document.getElementById(`nav`);
    if(!down)
    {
    nav.style.height="25rem";
    down=true;
    }
    else
    {
    nav.style.height="0";
    down=false;
    }
});
