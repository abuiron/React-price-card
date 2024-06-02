import React from 'react'

function App() {
  
  let data = [
    {
      title : "Free",
      price : "$0",
      duration : "/month",
      users : "Single Users",
      storage : "5GB Storage",
      public_projects : [true,"Unlimited Public Projects"],
      access : [true,"Community Access"],
      private_projects : [false,"Unlimited Private Projects"],
      support : [false,"Dedicated Phone Support"],
      subdomain : [false,"Free Subdomain"],
      reports : [false,"Monthly Status Reports"],
    },
    {
      title : "Plus",
      price : "$9",
      duration : "/month",
      users : "5 Users",
      storage : "50GB Storage",
      public_projects : [true,"Unlimited Public Projects"],
      access : [true,"Community Access"],
      private_projects : [true,"Unlimited Private Projects"],
      support : [true,"Dedicated Phone Support"],
      subdomain : [true,"Free Subdomain"],
      reports : [false,"Monthly Status Reports"],
    },
    {
      title : "PRO",
      price : "$49",
      duration : "/month",
      users : "Unlimited Users",
      storage : "150GB Storage",
      public_projects : [true,"Unlimited Public Projects"],
      access : [true,"Community Access"],
      private_projects : [true,"Unlimited Private Projects"],
      support : [true,"Dedicated Phone Support"],
      subdomain : [true,"Unlimited Free Subdomain"],
      reports : [true,"Monthly Status Reports"],
    },
    {
      title : "PRO PLUS",
      price : "$70",
      duration : "/month",
      users : "Unlimited Users",
      storage : "Unlimited Storage",
      public_projects : [true,"Unlimited Public Projects"],
      access : [true,"Community Access"],
      private_projects : [true,"Unlimited Private Projects"],
      support : [true,"Dedicated Phone Support"],
      subdomain : [true,"Unlimited Free Subdomain"],
      reports : [true,"Monthly Status Reports"],
    }
  ]
  
  
  
  return <>

  {/*<!-- This snippet uses Font Awesome 5 Free as a dependency. You can download it at fontawesome.io! --> */}

<section className="pricing py-5">
  <div className="container">
    <div className="row">
      
      {/* mapping the data for multiple cards */}
      {

        //e for data i for unique key
        data.map((e,i)=>{

          {/* <!-- All Tier cards --> */}
      return <div className="col-lg-4" key={i}>
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">{e.title}</h5>
          <h6 className="card-price text-center">{e.price}<span className="period">{e.duration}</span></h6>
          <hr />
          <ul className="fa-ul">
            <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>{e.users}</strong></li>
            <li><span className="fa-li"><i className="fas fa-check"></i></span>{e.storage}</li>
            <li className={e.public_projects[0]?"text-bold":"text-muted"}><span className="fa-li"><i className={e.public_projects[0]?"fas fa-check":"fas fa-times"}></i></span>{e.public_projects}</li>
            <li className={e.access[0]?"text-bold":"text-muted"}><span className="fa-li"><i className={e.access[0]?"fas fa-check":"fas fa-times"}></i></span>{e.access}</li>
            <li className={e.private_projects[0]?"text-bold":"text-muted"}><span className="fa-li"><i className={e.private_projects[0]?"fas fa-check":"fas fa-times"}></i></span>{e.private_projects}</li>
            <li className={e.support[0]?"text-bold":"text-muted"}><span className="fa-li"><i className={e.support[0]?"fas fa-check":"fas fa-times"}></i></span>{e.support}</li>
            <li className={e.subdomain[0]?"text-bold":"text-muted"}><span className="fa-li"><i className={e.subdomain[0]?"fas fa-check":"fas fa-times"}></i></span>{e.subdomain}
            </li>
            <li className={e.reports[0]?"text-bold":"text-muted"}><span className="fa-li"><i className={e.reports[0]?"fas fa-check":"fas fa-times"}></i></span>{e.reports}</li>
          </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">Button</a>
          </div>
        </div>
      </div>
    </div>
        })
      }
    </div>
  </div>
</section>

  </>
}

export default App