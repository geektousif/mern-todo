import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import TodoItem from "./TodoItem";

const ListTodos = () => {
  const baseUrl = "http://localhost:5000/";

  const [todos, setTodos] = useState(null);

  const [searchBox, setSearchBox] = useState("");
  const [searchRes, setSearchRes] = useState(null);

  async function getTodos() {
    try {
      const response = await axios.get(`${baseUrl}todo/getTodos/`);
      setTodos(response.data.todos);

      // console.log(response.data.todos);
      console.log(todos);
    } catch (error) {
      console.error(error);
    }
  }

  async function searchTodo(keyword) {
    try {
      if (keyword !== null || keyword !== "") {
        const searchResult = await axios.get(
          `${baseUrl}search/searchTodo?key=${keyword}`
        );
        setSearchRes(searchResult.data.todos);
        console.log(searchResult.data.todos);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTodos();
    searchTodo(searchBox);
  }, [todos, searchBox]);

  if (!searchRes) return null;
  if (!todos) return null;

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex justify-evenly text-center w-full mb-10">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              All Todos List
            </h1>
            <input
              type="text"
              placeholder="Search Todo"
              value={searchBox}
              onChange={(e) => setSearchBox(e.target.value)}
              className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
            />
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Todo Name
                  </th>

                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100"></th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100"></th>
                </tr>
              </thead>
              <tbody>
                {searchRes
                  ? searchRes
                      .sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))
                      .map((todo, i) => <TodoItem key={i} todo={todo} />)
                  : todos
                      .sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))
                      .map((todo, i) => <TodoItem key={i} todo={todo} />)}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListTodos;
