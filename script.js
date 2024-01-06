

function education()
{
    let h=document.getElementById("education")
    h.innerHTML=`
    <div style='height: fit-content; width: 1200px; background-color: whitesmoke;border-radius:30px ;border: solid;border-color: rgb(116, 13, 44);'>
    <style>
    table, th, td {
      border: 1px solid black;
    }
    
    </style>
        <table style="width:100%">
        
    
    <h1>Education</h1><br>
    I have done my  Btech and Mtech in computer science and engineering.Following table shows my educational background<br>
   <br>
   
  
  <tr>
    <th>Degree</th>
    <th>college</th>
    <th>pointer</th>
    <th>completion year</th>
  </tr>
  <tr>
    <td>B.E in computer scienece and engineering</td>
    <td>Ram meghe institute of technology and reasearch Badnera,Amravati</td>
    <td>8.65</td>
    <td>2019</td>
  </tr>
  <tr>
    <td>Mtech in computer scienece and engineering</td>
    <td>Indian institute of technology,Madras (IITM)</td>
    <td>8.69</td>
    <td>2023</td>
  </tr>
</table>
<br>
  <center>  <button onclick="reset('education')">Clear</button></center>
  </div>
    `
    
    
    

}
function reset(temp)
{
  let h=document.getElementById(temp)
  h.innerHTML=``

}

function pl()
{
    let h=document.getElementById("pl")
    h.innerHTML=`
    <div style='height: fit-content; width: 1200px; background-color: whitesmoke;border-radius:30px ;border: solid;border-color: rgb(116, 13, 44);'>
    <h1>Programming laguages</h1>
    <p>Following programming language, I have been used for developing different projects.<p>
    <br>
    <img src='images/c.jpg' height=100px width=125px border=2px>
    <img src='images/download.jpg' height=100px width=125px border=2px>
    <img src='images/java.jpg' height=100px width=125px border=2px>
    <img src='images/python.jpg' height=100px width=125px border=2px>
    <img src='images/js.jpg' height=100px width=125px border=2px>
    <br>
  <center>  <button onclick="reset('pl')">Clear</button></center>
  </div>
    `
}
function database()
{
    let h=document.getElementById("db")
    h.innerHTML=`
    <div style='height: fit-content; width: 1200px; background-color: whitesmoke;border-radius:30px ;border: solid;border-color: rgb(116, 13, 44);'>
    <h1>Database</h1>
    <p>
    I have good knowledge of SQL and NOSQL. I have been developing a project using a MySQL database and Nosql. Also, I am currently working on NOSQL databases in my current organization, such as documentDB, key-value, and graph. I have been working on MongoDB and Neo4j.<p>
    <h4>Databases:mysql,mongoDB,Neo4j</h4>
    <br>
  <center>  <button onclick="reset('db')">Clear</button></center>
  </div>
    `
}
function we()
{
    let h=document.getElementById("we")
    h.innerHTML=`
    <div style='height: fit-content; width: 1200px; background-color: whitesmoke;border-radius:30px ;border: solid;border-color: rgb(116, 13, 44);'>
    <h1>Work Experience</h1>
    <h3>Total expirience=13 month</h3>
    <style>
table, th, td {
  border: 1px solid black;
}
</style>
    <table style="width:100%">
    
  <tr>
    <th>Company Name</th>
    <th>Role</th>
    <th>expirience</th>
    <th>Work on projects</th>
  </tr>
  <tr>
    <td>Tata consultansy servises</td>
    <td>A.S.E Trainee</td>
    <td>work from OCT-2020 to April-2021 (7 month)</td>
    <td>Worked as backend java developer </td>
  </tr>
  <tr>
    <td>Zl technology</td>
    <td>Member of Technical staff-1 (software engineer)</td>
    
    <td>Joinning date july=2023 (currently working here)</td>
    <td><li>Working as backend developer in research and developement team of zl
    </li>
    <li>Worked on micrsoft graph api project with email protocol SMTP,POP3,MIME with java</li>
    <li>Worked on Personal storage table of outlook with aspose API</li>
    <li>Working on NOSQL databases such as mongoDB, Neo4j.
    
    </td>
  </tr>
</table>
    
<br>
<center>  <button onclick="reset('we')">Clear</button></center>
</div>
    `
}

function cf()
{
    let h=document.getElementById("cf")
    h.innerHTML=`
    <div style='height: fit-content; width: 1200px; background-color: whitesmoke;border-radius:30px ;border: solid;border-color: rgb(116, 13, 44);'>
    <h1>Computer Fundamentals</h1>
    <h3>Course Work</h3>
    <li><b>Theory </b>: Advanced Data Structures and Algorithms.</li>
    <li><b>Programming</b>: Advanced Programming Laboratory</li>
    <li><b>Networks</b>: Network Security, wireless communication</li>
    <li><b>Mathematics </b>: Linear Algebra and Random Processes</li>
    <li><b>others </b>: Theory of ontology, parallel programming</li>

    <h3>Undergraduate Course Work</h3>
 <li>   <b>Systems</b>:Operating Systems, Computer Organization.</li>
   <li> <b>Networks </b>: Computer Networks</li>
   <li> <b>Database </b>:Database management system.</li>
   <li> <b>Programming </b>: Computer Programming, Data structures, OOPS through Java</li>
   <br>
  <center>  <button onclick="reset('cf')">Clear</button></center>
  </div>
    `
}

function project()
{
    let h=document.getElementById("project")
    h.innerHTML=`
    <div style='height: fit-content; width: 1200px; background-color: whitesmoke;border-radius:30px ;border: solid;border-color: rgb(116, 13, 44);'>
    <h1>Projects</h1>
    For detail description of projects please visit <a href='projects.html'>projects</button> </a>
    <h3>Master project </h3>
    <li>Implementation of read-only duplication in GPU.</li>
    <h3>Network security.</h3>
    <li>:Implemented the internet protocol security(IPsec) to provide security at network layer</li>
    <li>Public key based Key establishment:Implemented the public private key certificate base key exchange mechanism</li>
    <li>Symmetric encryption:Perform encryption of files using AES and DES. Perform brute force attack to decrypt the file</li>
    <li>TLS:Implemented the transport layer security protocol to provide security at transport layer.</li>

    <h3>Parallel Programming</h3>
 <li>   Point to Analysis:Implemented the algorithm to perform point to analysis of parallel program using java soot</li>
   <li> MHP analysis:Implemented the algorithm to perform may happen parallel analysis to detect parallel running part of
   program</li>
   <li> Loop parallelization study the importance of parallelism specific to loops</li>
   <br>
  <center>  <button onclick="reset('project')">Clear</button></center>
  </div>
  
    `
}

function TA()
{
    let h=document.getElementById("TA")
    h.innerHTML=`
    <div style='height: fit-content; width: 1200px; background-color: whitesmoke;border-radius:30px ;border: solid;border-color: rgb(116, 13, 44);'>
    <h1>Teaching assistant</h1>
    <h3>Course Work</h3>
    <li><b>Introduction to programming</b>:   IIT Madras, 2022 MAY-JUNE
    <p>Role was to conduct lab in c and c++ and also setup assignmet for students.</p></li>
    <li><b> Computer Architecture,</b>: IIT Madras, 2022 Sept-Dec
    <p>Role was to setup assignment based on page replacement algorithm  and evaluate this assignment. In this subjec we used chamsim simulator for assignmet for student</p></li>
    <br>
  <center>  <button onclick="reset('TA')">Clear</button></center>
  </div>
    `
}

function website()
{
    let h=document.getElementById("website")
    h.innerHTML=`
    <div style='height: fit-content; width: 1200px; background-color: whitesmoke;border-radius:30px ;border: solid;border-color: rgb(116, 13, 44);'>
    <h1>visit</h1>
    LeetCode:  <img src='images/leetcode.jpg' style='height:15px;width:15px;'><a href='https://leetcode.com/arbaj459/'> arbaj459</a> </p>
        Github:  <img src='images/git.jpg' style='height:15px;width:20px;'><a href='https://leetcode.com/arbaj459/'> Github</a> </p>
    <br>
  <center>  <button onclick="reset('website')">Clear</button></center>
  </div>
    `
}
