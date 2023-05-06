import React from "react";
import DataTable from "react-data-table-component";
import { useEffect, useState } from 'react';
import axios from "axios";
import "./Table.css";






function TableData() {


    

    // User State
    const [userData, setUserData] = useState([]);
    
    // Search State
    const [search, setSearch] = useState("");
    
    // Filter state (Using this state because we don't want empty row's from start )
    const [filterData, setFilterData] = useState([]);

    const [toggleCleared, setToggleCleared] = useState(false);

    


    // Data fetch using axios
    const getUserData = async ()=>{
      try{
  
        const res = await axios.get(`http://localhost:8080/getUser`)
        console.table(res.data);
        setUserData(res.data);
        setFilterData(res.data);
      }catch(err){
        console.log(err);
      }
  
    };

    

     

     
    
  

     // Making array of object about data 
    const columns = [
      {
        name: 'Name',
        selector : (row) => row.Fname,
        sortable : true,
      },
      {
        name: 'Age',
        selector : (row) => row.dobOrAge,
        sortable : true,
      },
      {
        name: 'Email',
        selector : (row) => row.email,
        sortable : true,
      },
      {
        name: 'Sex',
        selector : (row) => row.sex,
        sortable : true,
      },
      {
        name: 'Mobile No.',
        selector : (row) => row.mobile,
        sortable : true,
      },
      {
        name: 'Emergency Contact No.',
        selector : (row) => row.emergencyContact,
        sortable : true,
      },
      {
        name: 'GOVT ID Type',
        selector : (row) => row.idType,
        sortable : true,
      },
      {
        name: 'GOVT ID',
        selector : (row) => row.id,
        sortable : true,
      },
      {
        name: 'Guardian Name',
        selector : (row) => row.guardianName,
        sortable : true,
      },
      {
        name: 'Address',
        selector : (row) => row.address,
        sortable : true,
      },
      {
        name:'Country',
        selector : (row) => row.country,
        sortable : true,

      },
      {
        name:'State',
        selector : (row) => row.state,
        sortable : true,

      },
      {
        name:'Pincode',
        selector : (row) => row.pincode,
        sortable : true,

      },
      {
        name:'City',
        selector : (row) => row.city,
        sortable : true,

      },
      {
        name:'Occupation',
        selector : (row) => row.occupation,
        sortable : true,

      },
      {
        name:'Religion',
        selector : (row) => row.religion,
        sortable : true,

      },
      {
        name:'Marital Status',
        selector : (row) => row.maritalStatus,
        sortable : true,

      },
      {
        name:'Blood Group',
        selector : (row) => row.bloodGroup,
        sortable : true,

      },
      {
        name:'Nationality',
        selector : (row) => row.nationality,
        sortable : true,

      },
    ]

    // user Data fetch
    useEffect(()=>{
      getUserData()
  
    },[])

    //search fuction
    useEffect(()=>{

        const result = userData.filter((userDataTable) => {
            return userDataTable.Fname.toLowerCase().match(search.toLowerCase())
            
        })
        setFilterData(result)
        
    
      },[search])

  return (
    <div className="table">

      <DataTable  
      title="User Data Table" 
      columns={columns}
      pagination 
      data={filterData}

    
      fixedHeader
      fixedHeaderScrollHeight="500px"
   
      selectableRowsHighlight
      highlightOnHover
      subHeader
    
      clearSelectedRows={toggleCleared}
      subHeaderComponent={
        <input placeholder="Search by name"
         type="text" 
         className="search" 
         value={search}
         onChange={(e)=>setSearch(e.target.value)}
         
         />
      }
        // pagination
      />
    </div>
  );
}

export default TableData;