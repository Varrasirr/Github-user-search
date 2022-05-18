import React, { useRef } from "react";

import UserCard from "./Components/Usercard";
import SearchForm from "./Components/Searchform";

import axios from "axios";

export default function App() {
  const [user, setUser] = React.useState([]);

  const [isDisabled, setDisabled] = React.useState(false);

  const inputRef = useRef();

  const getUser = async (inputValue) => {
    window.history.back();

    setDisabled(true);

    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${inputValue}`
      );
      setUser(data);
    } catch (err) {
      if (err.response.status === 404) {
        alert("Пользователь не найден");
      } else {
        alert("Opps...pls try again later");
      }
      console.error(err);
    }
    setDisabled(false);

    // setResult(true);
    window.history.pushState(
      "object or string",
      "ShareUser",
      `?login=${inputValue}`
    );
  };

  function getValue() {
    const inputValue = inputRef.current.value;
    if (!inputValue) {
      alert("Некого искать :(");
    } else {
      sendRequest(inputValue);
    }
  }

  function debounce(func, timeout = 500) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  const sendRequest = debounce((inputValue) => getUser(inputValue));

  return (
    <div id="app">
      {user.type === "User" ? (
        <div className="app-container">
          <SearchForm
            ref={inputRef}
            getValue={getValue}
            isDisabled={isDisabled}
          />
          <UserCard user={user} />
        </div>
      ) : (
        <div className="app-container">
          <SearchForm
            ref={inputRef}
            getValue={getValue}
            isDisabled={isDisabled}
          />
        </div>
      )}
    </div>
  );
}
