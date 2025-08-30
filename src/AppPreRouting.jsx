import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";
import Counter from "./components/Counter.jsx";
import React, { useState, useEffect } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  function onTodoDelete() {
    setShowModal(true);
    // console.log("onTodoDelete()");
  }
  function cancelModal() {
    setShowModal(false);
    // console.log("cancelModal");
  }
  function confirmModal() {
    setShowModal(false);
    // console.log("confirmModal");
  }

useEffect(() => {
  console.log('ONLY on mount')
}, [])

useEffect(() => {
  console.log('on mount AND on ${showModal} change')
}, [showModal])

useEffect(() => {
  console.log('EVERY render')
})

return (
    <div>
      <Title />
      <div>
        <Counter />
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified" />
        <Todo onTodoDelete={onTodoDelete} title="Finish Interview Section" />
        <Todo onTodoDelete={onTodoDelete} title="Land a $100K Job" />
      </div>
      {showModal && (
        <Modal
          cancelModal={cancelModal}
          confirmModal={confirmModal}
          title="Confirm Delete?"
        />
      )}
    </div>
  );
}

export default App;
