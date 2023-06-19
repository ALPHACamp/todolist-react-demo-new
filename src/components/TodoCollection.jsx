import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

const TodoCollection = ({
  todos,
  onSave,
  onDelete,
  onToggleDone,
  onChangeMode,
}) => {
  return (
    <div>
      TodoCollection
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleDone={(id) => onToggleDone?.(id)}
            onChangeMode={({ id, isEdit }) => {
              onChangeMode?.({ id, isEdit });
            }}
            onSave={({ id, title }) => onSave?.({ id, title })}
          />
        );
      })}
    </div>
  );
};

TodoCollection.propTypes = {
  todos: PropTypes.array,
  onSave: PropTypes.func,
  onDelete: PropTypes.func,
  onToggleDone: PropTypes.func,
  onChangeMode: PropTypes.func
};

export default TodoCollection;
