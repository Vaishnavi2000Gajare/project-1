import React from 'react'
import { Header } from '../Auth/Header'
import { BsPersonCircle } from "react-icons/bs";
import "../patient-detail.css";
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from "react-icons/ai";


export default function ListOfMedicalJohnson() {
  return (
    <div>
         <Header/>
     
     <div class="col-lg-3">
       <p style={{color:'black',marginRight:'210px',marginTop:'20px',fontSize:'30px'}} id="patient"> Patient</p>
    
     <div>
     <ul id="vertical">
     <li id="1">
      
           <a href="#" id="sara"><Link to="/patient"><BsPersonCircle/>
            Sara Smith</Link>
           </a>
           <p>15-Aug-2021</p>
         </li>
         <li id="1">
           <a href="#" id="sara"><Link to="/Johnson">
            < BsPersonCircle/> James Johnson</Link>
           </a>
           <p>15-Aug-2021</p>
         </li>
         <li id="1">
           <a href="#" id="sara"><Link to='/partice'>
           < BsPersonCircle/> Partice Page</Link>
           </a>
           <p>20-Aug-2021</p>
         </li>
       
     </ul>
     
      

     </div>
     
   </div>
   <div class="col-lg-9" id="detail">

   <h1>Patient Information</h1>
   <h6 style={{marginLeft:'-1000px',fontSize:'30px'}}>James Johnson</h6>
   <span className='image1'> 
   <img src='data:image/jpeg;base64,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' />
   </span>
  
 </div>
 <div>
   <table>
   {/* <tr>
     <th>Name</th>
     <th>Age</th>
     <th>Gender</th>
   </tr> */}
   <tr>
     <td>phone</td>
     <td>8987876767</td>
     <td>sergery type</td>
     <td>Roaster Cuff repair</td>
     <td>Anesthesiologist</td>
     <td>Dr Cristina Hardey</td>
     
   </tr>
   <tr>
     <td>email</td>
     <td>james@gmail.com</td>
     <td>Sergery Date</td>
     <td>15-Aug-2021</td>
     <td>Anesthesiologist phone</td>
     <td>192-222-222</td>
     
   </tr>
   <tr>
   <td>Gender</td>
     <td>male</td>
     <td>Height</td>
     <td>172</td>
     <td>Anesthesiologist email</td>
     <td>hardey@gmail.com</td>
  
   </tr>
   <tr>
   <td>Age</td>
     <td>23</td>
     <td>weight</td>
     <td>49</td>
    
  
   </tr>
   <tr>
   <td>BMI</td>
     <td>19</td>
    
    
  
   </tr>
 </table>


   </div>
   <div class="12"> 
   <table>
 <tr>
     <td>List of prior Sergeries</td>
     <td><Link to="/ListOfMedicalJohnson">List of Medical Diagnosis</Link></td>
     <td>List of Medication</td>
     <td>Airway Evaluation</td>
     <td>Anesthisiya clearance and Recomandation</td>
     <td>Dr Cristina Hardey</td>
     
   </tr>
 </table>
   </div>
   <div class="13">
     <p id='14'> First Time Surgery</p>
     <p id="15">No</p>
     <p id='16'>family history of surgical complications</p>
     <p id='15'>Yes</p>
     <p id='17'>If yes please provide more detail</p>
     <p className="paragraph">
          Unexplained or abnormal bleeding from anybody opening should be
          quickly investigated by a physician. Coughing up or vomiting blood,
          passing blood in the urine and rectal bleeding are common symptoms of
          cancer. In women the first sign of cancer of the uterus is often a
          bloody discharge occurring between menstrual periods or after
          menopause. Persistent hoarseness or cough of abnormal duration
          deserves a careful examination by your doctor. Cancer of the larynx
          (voice box) or respiratory passages or lung may be the cause.
        </p>
      
      </div>
      <h5 id="previous">Previous Surgery</h5>
      <div id="help">
      
       <table>
           <tr id="table1">
               <th>Id</th>
               <th>Surgery Type</th>
               <th>Date</th>
               <th>Anesthesiologist</th>
               <th>Surgery clearance</th>
               <th>Desease</th>
           </tr>
           <tr>
               <td>1</td>
               <td>Normal</td>
               <td>12/05/2022</td>
               <td>Dr Cristina</td>
               <td>Yes</td>
               <td>Fewer</td>
           </tr>
           <tr>
               <td>1</td>
               <td>Normal</td>
               <td>12/05/2022</td>
               <td>Dr Cristina</td>
               <td>Yes</td>
               <td>Fewer</td>
           </tr>
       </table>
       <button type="button" class="btn btn-primary"><AiOutlinePlus/>ADD SURGERY</button>
     </div>
     
    </div>
  )
}
