import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    handlePagination: PropTypes.func
};
Pagination.defaultProps = {
    handlePagination: null
}

function Pagination(props) {
    const {pagination,handlePagination } = props;
    const {page, totalRows,limit} = pagination;
    const totalPages = Math.ceil(totalRows / limit);
    function handleOnclickPagination(page){
        if(!handlePagination) return;
        handlePagination(page);
    }
    return (
        <div>
            <button onClick={() => handleOnclickPagination(page - 1)} disabled={page === 1} >Prev</button>
            <button onClick={() => handleOnclickPagination(page + 1)} disabled={page === totalPages}>Next</button>
        </div>
    );
}

export default Pagination;