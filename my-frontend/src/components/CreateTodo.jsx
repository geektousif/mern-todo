import axios from "axios";
import React, { useState } from "react";

const CreateTodo = () => {
  const [todo, setTodo] = useState("");
  const [task, setTask] = useState("");

  const baseUrl = "http://localhost:5000/";

  const createTodo = async (e) => {
    try {
      const response = await axios.post(`${baseUrl}todo/createTodo/`, {
        title: todo,
        task: task,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {" "}
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center max-w-7xl ">
          <h1 className="text-3xl md:text-[50px] text-gray-700 font-bold mt-5 ">
            Full Stack Todo Application
          </h1>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center items-center md:flex-row shadow rounded-xl max-w-7xl w-[90%] m-2">
          <div className="h-[90%] w-full md:w-3/4">
            <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0">
              <h1 className="font-semibold text-gray-600">Create Todo</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center mt-10 md:mt-14 md:space-x-8 md:space-y-0 space-y-8">
              <div className="">
                <input
                  type="text"
                  placeholder="Todo"
                  value={todo}
                  onChange={(e) => setTodo(e.target.value)}
                  className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                />
              </div>
              <div className="">
                <input
                  type="text"
                  placeholder="Task"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                />
              </div>
            </div>
            <div className="text-center mt-7">
              <button
                className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600  font-medium"
                onClick={createTodo}
              >
                Add Todo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTodo;
