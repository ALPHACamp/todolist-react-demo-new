import styled from 'styled-components';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const StyledAddTodoContainer = styled.div`
  min-height: 52px;
  display: flex;
  align-items: center;
  position: relative;
  word-wrap: break-word;
  word-break: break-word;
  padding: 0 12px;
  box-shadow: 0 17px 0 -16px #e5e5e5;
  flex-wrap: wrap;

  &.active {
    box-shadow: 0 17px 0 -16px var(--major);
  }
`;

const StyledLabelIcon = styled.label`
  display: inline-flex;
  font-size: 30px;
  transition: color 0.2s ease-out;
  font-weight: 300;

  &:after {
    content: '+';
  }
`;

const StyledInputContainer = styled.div`
  min-height: 52px;
  display: flex;
  align-items: center;
  flex: 1;
  user-select: none;

  input {
    flex: 1;
    padding: 8px 12px;
    border: 0;
    outline: 0;
    font-size: 1rem;

    &::placeholder {
      color: var(--major);
      font-size: 13px;
    }
  }
  &:active {
    input::placeholder {
      color: var(--gray);
    }
  }
`;

const StyledAddTodoActionContainer = styled.div`
  button {
    position: absolute;
    font-size: 13px;
    color: var(--major);
    top: 22px;
    right: 16px;
    display: none;
  }

  &:focus-within {
    button {
      display: inline-block;
    }
  }
`;

const TodoInput = ({ inputValue, onChange, onKeyDown, onAddTodo }) => {
  return (
    <StyledAddTodoContainer className={clsx('', { active: inputValue.length > 0 })}>
      <StyledLabelIcon className="icon" htmlFor="add-todo-input" />
      <StyledAddTodoActionContainer className={clsx('', { active: inputValue.length > 0 })}>
        <StyledInputContainer>
          <input
            id="add-todo-input"
            type="text"
            placeholder="新增工作"
            value={inputValue}
            onChange={(event) => {
              onChange?.(event.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                onKeyDown?.();
              }
            }}
          />
        </StyledInputContainer>
        <button className="btn-reset" onClick={() => onAddTodo?.()}>
          新增
        </button>
      </StyledAddTodoActionContainer>
    </StyledAddTodoContainer>
  );
};

TodoInput.propTypes = {
  inputValue: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onAddTodo: PropTypes.func
};

export default TodoInput;
