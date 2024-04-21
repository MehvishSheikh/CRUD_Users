import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom';
import AllUsers from './components/Users/AllUsers';
import AdminProfile from './components/AdminProfile/AdminProfile';
import PostForm from './components/Crud/PostForm';
import Customerlist from './components/Crud/Customerlist';
import EditUser from './components/Crud/EditUser';
import CreateUser from './components/Users/CreateUser';
import CrudUserTable from './components/Users/CrudUserTable';



const Wrapper = (props) => {
      const params = useParams();
      return <EditUser {...{...props, match: {params}} } />
    }
const router = createBrowserRouter([
  {
   path: "/",
   element: <App />

 },
 {
  path: "/AllUsers",
  element: <AllUsers/>
 },
 {
  path: "/AdminProfile",
  element: <AdminProfile/>

},
{
  path: "/PostForm",
  element: <PostForm/>

},
{
  path: "/customers",
  element: <Customerlist/>

},
{
  path: "/edit-customer/:id",
  element: <Wrapper/>

},
{
  path: "/create-new-user",
  element: <CreateUser/>

},
{
  path: "/crud-user-table",
  element: <CrudUserTable/>

},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 

 <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
