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

/*=======================insights======================*/

const insights_data= [
    {
        icon:'"bi bi-graph-up"',
        insight_name:'Total sales',
        value:'797,508',
        percent:'81%',
        progress:'',
        last_seen:'24 Hours'
    },
    {
        icon:'"bi bi-bar-chart"',
        insight_name:'Expenses',
        value:'$56,797',
        percent:'86%',
        progress:'',
        last_seen:'6 Hours'
    },
    {
        icon:'"bi bi-activity"',
        insight_name:'Income',
        value:'$45,797,508',
        percent:'81%',
        progress:'',
        last_seen:'10 Hours'
    },
]

const insights_container= document.getElementsByClassName('insights')[0]

insights_container.innerHTML= insights_data.map(data=>{
    let {icon, insight_name, value, percent,progress, last_seen}= data
    return`
    <div class="sales">
    <span class="icons"><i class=${icon}></i></span>
    <div class="middle">
      <div class="left">
        <h3>${insight_name}</h3>
        <h1>${value}</h1>
      </div>
      <div class="progress">
        <svg>
          <circle cx="38" cy="38" r="36"></circle>
        </svg>
        <div class="number"><p>${percent}</p></div>
      </div>
    </div>
    <small class="text-muted">${last_seen}</small>
  </div>
    `
}).join("")


/*Recent updates */
const recent_updates_data = [
    {
        content:'Sale analytics',
        icon:"bi bi-cart-plus-fill",
        title:'ONLINE ORDERS',
        last_seen:'Last 6 Hours',
        sucess:'65%',
        value:'87642'

    },
    {
        content:'Online orders',
        icon:"bi bi-cart-plus-fill",
        title:'ONLINE ORDERS',
        last_seen:'Last 6 Hours',
        sucess:'65%',
        value:'87642'

    },
    {
        content:'Sale analytics',
        icon:"bi bi-cart-plus-fill",
        title:'ONLINE ORDERS',
        last_seen:'Last 6 Hours',
        sucess:'65%',
        value:'87642'

    },
]

const orders=[
    {
        productName:'Ruko Tv',
        productNumber:'6590',
        paymentStatus:'Due',
        shipping:'Pedding',
    },
    {
        productName:'Drone with Camera',
        productNumber:'656',
        paymentStatus:'Paid',
        shipping:'Delivered',
    },
]