import React, { useEffect, useState,useRef } from 'react';
import PropTypes from 'prop-types';
import todoApi from '../../api/todoApi';
import Pagination from './pagination'
import SearchForm from './SearchForm';
import FormAdd from './FormAdd'
import queryString from 'query-string'
import { Button } from 'reactstrap';
 
ListTodo.propTypes = {
    
};

function ListTodo(props) {
    const [todos,setTodos] = useState([]);
    const [pagination,setPagination] = useState({});
    const [filter,setFilter] = useState(()=> {
        return {
            limit: 3,
            page : 1,
            title: ''
        }
    })
    useEffect(()=>{
        const fetchTask = async () =>{
            const response = await todoApi.getAll(filter);
            const {data,pagination}  = response;
            setTodos(data);
            setPagination(pagination);
        }
        fetchTask();
    },[filter])
    function handlePagination(numbersPage){
         setFilter({...filter,page:numbersPage})
    }
    function handleFilterSearchName(forms){
        const {value} =  forms
        console.log(value);
        setFilter({...filter,page:1,title : value})
    }
    function handleAddTodo(forms){
        //const { title } = forms;
        todoApi.addUser(forms)
        setFilter({...filter, page: 1 });
    }
    function handleOnClickDelete(id){
        if(window.confirm(`Delete the item Id ${id} ?`)){
            todoApi.deleteUser(id);
        }
        setFilter({...filter});
        console.log("deleted")
    }
    return (
        <div>
            <h1>List Todos</h1>
            
            <div className="container">
                <FormAdd handleAddTodo={handleAddTodo}   />
                <SearchForm handleFilterSearchName={handleFilterSearchName} />
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Create Date</th>
                            <th> +  </th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                todos.map( (item,index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.title}</td>
                                            <td>{item.description}</td>
                                            <td>{item.createDate}</td>
                                            <td > 
                                                <Button color="danger"
                                                 onClick={() => handleOnClickDelete(item.id)}
                                                >Delete</Button>    
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                </table>
                <Pagination pagination={pagination} 
                            handlePagination={handlePagination}/> 
            </div>
        </div>
    );
}

export default ListTodo;