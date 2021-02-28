import React, { useState } from 'react';
import PropTypes from 'prop-types';

FormAdd.propTypes = {
    handleAddTodo: PropTypes.func
};
FormAdd.defaultProps = {
    handleAddTodo : null
}

function FormAdd(props) {
    const [todo, setTodo] = useState('');
    const { handleAddTodo } = props;
    function handleFormToDoOnChange(e){
        setTodo(e.target.value);
    }
    function handleFormOnSubmit(e){
        e.preventDefault();
        if(!handleAddTodo) return ;
        const forms = {
            title : todo
        }
        handleAddTodo(forms);
        setTodo('');
    }
    return (
        <div>
            <form onSubmit={handleFormOnSubmit}>
                <input 
                        className="form-control"
                        value={todo}
                        onChange={handleFormToDoOnChange} 
                        type="text"
                        placeholder="Add..." />
            </form>
        </div>
    );
}

export default FormAdd;