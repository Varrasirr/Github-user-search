import React from "react";

const SearchForm = React.forwardRef(({ getValue, isDisabled}, ref) => {

  function handleSubmit(event) {
    event.preventDefault();
    getValue();
  }

  return (
    <form className="app-form" onSubmit={handleSubmit}>
      <input
        typeName="text"
        required
        className="app-input"
        placeholder="Укажите GitHub-аккаунт"
        ref={ref}
      />
      <button className="app-form_btn" 
       disabled={isDisabled}
        >
        {isDisabled ?" Загрузка..." : "Найти"} 
        </button>
    </form>
  );
});

export default SearchForm;
