function closebar(id) {
    document.getElementById(id).style.width = 0;
    document.getElementsByClassName(id).style.display="none";
   
    document.getElementsById("main").style.marginLeft=0;

  }
  function closeright(id) {
    document.getElementById(id).style.width = 0;
    
    document.getElementsById("main").style.marginRight=0;
  }

  function openbar(id) {
    document.getElementById(id).style.width = "auto";
    document.getElementsById("main")="auto";
  }