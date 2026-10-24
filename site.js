document.querySelectorAll('.close-project').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();const row=link.closest('details');row.open=false;row.querySelector('summary').focus();row.scrollIntoView({block:'start'});}));
function openLinkedProject(){const id=decodeURIComponent(location.hash.slice(1));const row=document.getElementById(id);if(row?.classList.contains('project-row'))row.open=true;}
openLinkedProject();window.addEventListener('hashchange',openLinkedProject);
document.addEventListener('keydown',event=>{if(event.key==='Escape'){const row=document.activeElement.closest('.project-row');if(row){row.open=false;row.querySelector('summary').focus();}}});
