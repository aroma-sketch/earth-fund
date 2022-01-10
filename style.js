fetch('https://catfact.ninja/fact')
.then(data =>data.json())
.then(faData =>{
    const fafact =faData.fact;
    const i=document.getElementById('i');

    i.innerHTML=fafact;
})