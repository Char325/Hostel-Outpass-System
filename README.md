# Hostel Outpass System
# Description
 A responsive outpass system made using React JS, Node with Express, and REST API calls to the MySQL database.
 This is a comprehensive outpass management system for seamless outpass generation. It deals with the warden side workflow of the project which includes approval or denial (w/ reason) of outpasses and viewing of student information along with their previous history of outpasses.
# Built with
The system uses the following major frameworks/ libraries:
<ul dir="auto">
 <li><a href="https://reactjs.org/" rel="nofollow"><img src="https://camo.githubusercontent.com/268ac512e333b69600eb9773a8f80b7a251f4d6149642a50a551d4798183d621/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163742d3230323332413f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d363144414642" alt="React" data-canonical-src="https://img.shields.io/badge/React-20232A?style=for-the-badge&amp;logo=react&amp;logoColor=61DAFB" style="max-width: 100%;"></a></li>
  <li>
  <a href="https://getbootstrap.com" rel="nofollow"><img src="https://camo.githubusercontent.com/b13ed67c809178963ce9d538175b02649800772be1ce0cb02da5879e5614e236/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f426f6f7473747261702d3536334437433f7374796c653d666f722d7468652d6261646765266c6f676f3d626f6f747374726170266c6f676f436f6c6f723d7768697465" alt="Bootstrap" data-canonical-src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&amp;logo=bootstrap&amp;logoColor=white" style="max-width: 100%;"></a>
 </li>
  <li>
   <a href="https://nodejs.org/en" rel="nofollow">
    <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="NodeJS">
   </a>
  </li>
 <li>
  <a href="https://expressjs.com/" rel="nofollow">
   <img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express JS">
  </a>
 </li>
 <li>
  <a href="https://www.mysql.com/" rel="nofollow">
   <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL">
  </a>
 </li>
 </ul>
 
 # Getting Started
 To get a local copy up and running, follow these steps
 ## Prerequisites
 <ul>
  <li> npm
   
   ` npm install `
  </li>
  
  Then, clone the repo. After cloning navigate to the client side (outpass folder) and install the dependencies as mentioned in the `package.json` file and do the same for the server side (server folder). 
  Navigate to the server side and execute the following command:
  
  `npm start`

  
  You now have a local copy of the website running!
  </li>
  
 </ul>

 # Usage
 ## Dashboard
 The dashboard displays the number of approved, denied, and pending outpasses with a user-friendly UI and seamless backend connectivity.
 ### Deskstop Ver.
 <img width="400" alt="Screenshot 2023-08-13 122000" src="https://github.com/Char325/Hostel-Outpass-System/assets/111283967/7da4794f-f5f3-40ca-b90d-387d7f22ee62">
 <img width="400" alt="Screenshot 2023-08-13 122019" src="https://github.com/Char325/Hostel-Outpass-System/assets/111283967/992d9b33-22f1-4045-8b17-09f67483eda9">

 ### Mobile Ver.
 <img width="216" alt="Screenshot 2023-08-13 122053" src="https://github.com/Char325/Hostel-Outpass-System/assets/111283967/6b51ff1c-f5f0-4313-b0f0-afaea76c03af">

 ### States of an Out-pass

 There are 6 states to an out-pass:
 
 1. Pending: Once an out-pass is created by a student, it is in "Pending" state and appears in the warden-side dashboard.
    In this state, it can be viewed but it cannot be cancelled/ extended by the student.
 2. Approved: Once the out-pass is approved by the warden it is in "Approved" state. In this state, it cannot be extended 
    but can only be viewed/ cancelled by the student.
 3. In-use: When the current date >= leaving date & current date <= return date mentioned by the student, it's in use. In 
    this state, all operations can be performed by the student.
 4. Cancelled: An out-pass can be cancelled at any time by the student. The status changes to "Cancelled".
 5. Denied: When the warden denies the out-pass (with reason), its status changes to "Denied".
 6. Expired: When the out-pass is out of use, that is, current date > return date mentioned by the student, its status 
    becomes "Expired".

 ## View, Approved and Denied
 View functionality show all outpasses (approved, denied and pending) that are one week old. The approved and denied functionalities similar to view displays the outpasses that were approved and denied respectively, for easy lookup for the warden. They come with a view button which allows the warden to view the student's information. Student deyails are displayed using Bootstrap Modals. A Search feature is also enabled for easy navigation. Emergency passes are displayed with special tags and are treated as first-prority and are dispayed at the top.

 ### Desktop Ver.
 <img width="400" alt="Screenshot 2023-08-13 124811" src="https://github.com/Char325/Hostel-Outpass-System/assets/111283967/0f7c3b64-06b4-473e-8222-6ea4d175b6b7">
 <img width="400" alt="Screenshot 2023-08-13 124832" src="https://github.com/Char325/Hostel-Outpass-System/assets/111283967/aa493bc2-0151-4bd4-857a-d47dfbf3a1e5">

 ## Mobile Ver.
 <img width="212" alt="Screenshot 2023-08-13 124906" src="https://github.com/Char325/Hostel-Outpass-System/assets/111283967/ca9f92da-b29e-4f73-a0f3-4c8f8f8b383f">
 <img width="214" alt="Screenshot 2023-08-13 124924" src="https://github.com/Char325/Hostel-Outpass-System/assets/111283967/76ed726f-59fe-449c-a09a-772b08a07866">

## Pending

The pending functionality displays the outpasses that needs to be approved or denied. There is an approve all feature, which on clicking changes the status of all the outpasses that are pending to "Approved". On clicking Denial button, the warden is prompted to input the reason for denial, after which changes are made in the database. After approving or denying a toastify alert is displayed accordingly.

### Desktop Ver.
<img width="400" alt="Screenshot 2023-08-13 125942" src="https://github.com/Char325/Hostel-Outpass-System/assets/111283967/391ea70a-0efb-44d3-bf83-c0424e7d332a">
<img width="400" alt="Screenshot 2023-08-13 130045" src="https://github.com/Char325/Hostel-Outpass-System/assets/111283967/7a8fd2a7-5995-410c-a776-683990c7385d">

### Mobile Ver.
<img width="213" alt="Screenshot 2023-08-13 130012" src="https://github.com/Char325/Hostel-Outpass-System/assets/111283967/e98bd758-6edc-4999-8bf6-9beaea008618">
<img width="216" alt="Screenshot 2023-08-13 130027" src="https://github.com/Char325/Hostel-Outpass-System/assets/111283967/76ea94eb-0613-4c1b-a841-58619825d1f7">

# Intergrated Version
 ## Desktop Ver.
https://github.com/Char325/Hostel-Outpass-System/assets/111283967/91723861-08ae-4245-9b86-4e0fb2301e81
## Mobile Ver.
https://github.com/Char325/Hostel-Outpass-System/assets/111283967/4396251e-3cc7-4bc7-83e9-cc7120dbaaf4









 



