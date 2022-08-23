import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from '../hof/RequireAuth';
import Login from '../pages/Login'
import Register from '../pages/Register'
import TaskHome from '../pages/TaskHome';
const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<RequireAuth><TaskHome/></RequireAuth>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
        </Routes>
    );
};

export default AllRoutes;