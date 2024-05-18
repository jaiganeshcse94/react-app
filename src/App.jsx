import React from 'react'
import Cards from './card';
function App() {
  let data=[
    {
      subcription:'Free',
      month:0,
      service:["Single User","50GB Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support","Free Subdomain","Monthly Status Report"]
    },
    {
      subcription:'Plus',
      month:9,
      service:["Single User","50GB Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support","Free Subdomain","Monthly Status Report"]
  },
  {
    subcription:'Pro',
    month:49,
    service:["Single User","50GB Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support","Free Subdomain","Monthly Status Report"]
  }
  ];
  return <>
  {
    <section className="pricing py-5">  
    <div className="container">
      <div className="row">
        {/* <!-- Free Tier --> */}
        {
        data.map((e,index)=>{
          return <Cards data={e} data1={index} key={index}/>
        })
        }
      </div>
    </div>
  </section>
  }
 
  </>
}

export default App

// function Cards(props){
//   return <div className="col-lg-4" >
//       <div className="card mb-5 mb-lg-0">
//         <div className="card-body">
//           <h5 className="card-title text-muted text-uppercase text-center" >{props.data.subcription}</h5>
//           <h6 className="card-price text-center">${props.data.month}/month</h6>
//           <hr/>
//           <ul className="fa-ul">
//             {
//               props.data.service.map((e,i)=>{
//                 let length=props.data.service.length;
//                 if(props.data1==0){
//                   if(i<(length-4)){
//                     return <li key={props.data1}><span className="fa-li"><i className="fas fa-check"></i></span>{e}</li>
//                   }
//                   else
//                   {
//                     return <li key={props.data1} className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{e}</li>
//                   }
//                 }
//                 if(props.data1==1){
//                   if(i<(length-1)){
//                     return <li key={props.data1}><span className="fa-li"><i className="fas fa-check"></i></span>{e}</li>
//                 }
//                   else
//                   {
//                     return <li key={props.data1} className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{e}</li>
//                   }
//                 }
//                 if(props.data1==2){
//                   if(i<=(length-1)){return <li key={props.data1}><span className="fa-li"><i className="fas fa-check"></i></span>{e}</li>
//                 }
//                 }
//               })
//             }
//           </ul>
//           <div className="d-grid">
//             <a href="#" className="btn btn-primary text-uppercase">Button</a>
//           </div>
//         </div>
//       </div>
//     </div>
// }