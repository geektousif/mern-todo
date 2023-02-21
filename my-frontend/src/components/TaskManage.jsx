import axios from "axios";
import React, { useState } from "react";

const TaskManage = ({ handleModal, todo }) => {
  const [newTask, setNewTask] = useState("");

  const addTask = async (id) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/task/createTask/${id}`,
        { task: newTask }
      );
      console.log(response);
      setNewTask("");
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/task/deleteTask/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <p className="float-right cursor-pointer" onClick={handleModal}>
        &#10060;
      </p>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              {todo.title}
            </h1>
            <div className="w-1/2 flex mt-4 justify-center gap-10 items-center self-center">
              <input
                className="w-full px-4 py-3 border border-gray-600 rounded-lg"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <button
                onClick={() => addTask(todo._id)}
                className="whitespace-nowrap flex ml-auto text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded"
              >
                Add Task
              </button>
            </div>
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Tasks
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100"></th>
                </tr>
              </thead>
              <tbody>
                {/*  */}
                {todo.task.map((singleTask, i) => (
                  <tr key={i}>
                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                      {singleTask}
                    </td>
                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                      <button
                        onClick={() => deleteTask(todo._id)}
                        className="flex ml-auto text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}

                {/*  */}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskManage;
