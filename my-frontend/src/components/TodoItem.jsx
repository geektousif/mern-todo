import axios from "axios";
import React, { useState } from "react";
import ReactModal from "react-modal";
import TaskManage from "./TaskManage";

const TodoItem = ({ todo }) => {
  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const editModeOn = () => {
    setEditMode(true);
  };

  const handleEdit = async (id) => {
    try {
      await axios.put(`http://localhost:5000/todo/editTodo/${id}`, {
        title: newTitle,
      });
      setEditMode(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      if (window.confirm("Are you sure to delete ?")) {
        await axios.delete(`http://localhost:5000/todo/deleteTodo/${id}`, {
          title: newTitle,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <tr>
        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
          <button onClick={handleModal}>
            {editMode ? (
              <input
                className="px-4 py-3 border border-gray-600 rounded-lg"
                autoFocus
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            ) : (
              <span className="px-4 py-3 border border-transparent">
                {todo.title}
              </span>
            )}
          </button>
          <ReactModal isOpen={modal}>
            <TaskManage handleModal={handleModal} todo={todo} />
          </ReactModal>
        </td>
        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
          {editMode ? (
            <button
              onClick={() => handleEdit(todo._id)}
              className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
            >
              Save
            </button>
          ) : (
            <button
              onClick={editModeOn}
              className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
            >
              Edit
            </button>
          )}
        </td>
        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
          <button
            className="flex ml-auto text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 rounded"
            onClick={() => handleDelete(todo._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default TodoItem;
