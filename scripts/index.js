const sidebar_data= [
    {
        link:'#',
        icon:'"bi bi-grid-fill"',
        tab:'Dashboard',
    },
    {
        link:'#',
        icon:' "bi bi-person-fill" ',
        tab:'Customers',
    },
    {
        link:'#',
        icon:' "bi bi-receipt" ',
        tab:'Orders',
    },
    {
        link:'#',
        icon:' "bi bi-graph-up" ',
        tab:'Analytics',
    },
    {
        link:'#',
        icon:' "bi bi-chat-square-dots-fill" ',
        tab:'Messages',
    },
    {
        link:'#',
        icon:'"bi bi-bag-check"',
        tab:'Products',
    },
    {
        link:'#',
        icon:' "bi bi-info-circle"',
        tab:'Reports',
    },

    {
        link:'#',
        icon:' "bi bi-gear"',
        tab:'Settings',
    },

    {
        link:'#',
        icon:' "bi bi-plus"',
        tab:'Add products',
    },
    {
        link:'#',
        icon:'"bi bi-box-arrow-right"',
        tab:'Log out',
    },
]

const sidebar= document.getElementsByClassName("sidebar")[0]

sidebar.innerHTML= sidebar_data.map(item=>{
    
    let {link, icon, tab}= item;
    return`
    <a href= ${link}>
            <span class="icon"><i class=${icon}></i></span>
            <h3>${tab}</h3>
          </a>
    `
}).join("")

for(let i=0; i< sidebar_data.length;i++){
    if(sidebar_data[i].tab === "Messages"){
        
       
       //console.log (document.getElementsByTagName('h3')[i])
       const span = document.createElement("span")
       const text = document.createTextNode("26")

       span.appendChild(text)
       document.getElementsByTagName('a')[i].appendChild(span).classList.add('message-count') 
          

    }
}