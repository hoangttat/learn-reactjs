import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
  TodoList: PropTypes.array,
  
};
TodoList.defaultProps = {
  TodoList : [],
}

function TodoList({todoList}) {
  return (
    <div>
      
    </div>
  );
}

export default TodoList;