
document.getElementById('download1').disabled = false;
document.getElementById('download1').style.cursor = "pointer";
document.getElementById('download2').disabled = true;
document.getElementById('download2').style.cursor = "no-drop";
document.getElementById('download3').disabled = true;
document.getElementById('download3').style.cursor = "no-drop";
document.getElementById('download4').disabled = true;
document.getElementById('download4').style.cursor = "no-drop";
document.getElementById('download5').disabled = true;
document.getElementById('download5').style.cursor = "no-drop";
document.getElementById('downloadf').style.cursor = "no-drop";



document.getElementById('download1').onclick = () =>
     {
   window.open('https://www.youtube.com/watch?v=rrZqkiN_LeI');


   document.getElementById('download2').disabled = false;
   document.getElementById('download2').style.cursor = "pointer";
     };


document.getElementById('download2').onclick = () => 
     {
   window.open('https://www.youtube.com/channel/UC87m1Fk0SsrQ8Esk9XnsIuA?sub_confirmation=1');
   document.getElementById('download3').disabled = false;
   document.getElementById('download3').style.cursor = "pointer";
     };     
  
  
document.getElementById('download3').onclick = () =>
     {
   window.open('https://twitter.com/reyasaltoyt');
   document.getElementById('download4').disabled = false;
   document.getElementById('download4').style.cursor = "pointer";
     };


document.getElementById('download4').onclick = () =>
     {
   window.open('https://www.instagram.com/rey_asalto_yt/');
   document.getElementById('download5').disabled = false;
   document.getElementById('download5').style.cursor = "pointer";
     };
     document.getElementById('download5').onclick = () =>
     {
   window.open('http://www.reyasaltoyt.blogspot.com/');
   document.getElementById('downloadf').disabled = false;
   document.getElementById('downloadf').style.cursor = "pointer";
     };

     document.getElementById('downloadf').onclick = ()=>
     {
        document.getElementById('hideMe').style.display = "block"
     }


     
  

