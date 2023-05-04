import React from 'react';
import { Route, Routes } from "react-router-dom";
import  FormData  from '../Pages/FormData';
import { Table } from '../Pages/Table';

export const AllRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<FormData/>} />
        <Route path="/table" element={<Table />} />
  
       
      </Routes>
    );
  };