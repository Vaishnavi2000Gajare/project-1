import React from 'react';
import { Header } from '../Auth/Header';
import { BsPersonCircle } from "react-icons/bs";
import "../patient-detail.css";
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from "react-icons/ai";

export default function MedicalPartice() {
  return (
    <div>
         <Header/>
     
     <div class="col-lg-3">
       <p style={{color:'black',marginRight:'210px',marginTop:'20px',fontSize:'30px'}} id="patient"> Patient</p>
    
     <div>
     <ul id="vertical">
     <li id="1">
      
           <a href="#" id="sara"><Link to='/patient'><BsPersonCircle/>
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
           <a href="#" id="sara"><Link to='/Partice'>
           < BsPersonCircle/> Partice Page</Link>
           </a>
           <p>20-Aug-2021</p>
         </li>
       
     </ul>
     
      

     </div>
     
   </div>
   <div class="col-lg-9" id="detail">

   <h1>Patient Information</h1>
   <h6 style={{marginLeft:'-1000px',fontSize:'30px'}}>Partice Page</h6>
   <span className='image1'> 
   <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6PqK8uOtVYch0q9O1qC8ssMfXSv1-bVqTzA&usqp=CAU' />
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
     <td>particePage@gmail.com</td>
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
