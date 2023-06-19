import Footer from '../components/Footer';
import Header from '../components/Header';
import TodoCollection from '../components/TodoCollection';
import TodoInput from '../components/TodoInput';

const dummyTodos = [
  {
    title: 'Learn react-router',
    isDone: true,
    id: 1,
  },
  {
    title: 'Learn to create custom hooks',
    isDone: false,
    id: 2,
  },
  {
    title: 'Learn to use context',
    isDone: true,
    id: 3,
  },
  {
    title: 'Learn to implement auth',
    isDone: false,
    id: 4,
  },
];

const TodoPage = () => {
  return (
    <div>
      TodoPage
      <Header username={'User'} />
      <TodoInput />
      <TodoCollection todos={dummyTodos} />
      <Footer />
    </div>
  );
};

export default TodoPage;
