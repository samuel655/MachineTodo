import React from "react";

function useLocaleStorage(itemName, itemValue) {
  const [item, setItem] = React.useState(itemValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(() => { setTimeout(() => {
    try {
      let localStorageItems = localStorage.getItem(itemName);
      let parsedItem;

      if (!localStorageItems) {
        localStorage.setItem(itemName, JSON.stringify(itemValue));
        parsedItem = itemValue
      } else {
        parsedItem =JSON.parse(localStorageItems);
        setItem(parsedItem);
      };

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }, 2000);}, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {item, saveItem, loading, error};
}

export {useLocaleStorage};



// const defaultTodos = [
//   {text:'Cortar cebolla', completed:true},
//   {text:'Tomar el curso de intro a react', completed:false},
//   {text:'Llorar con la llorona', completed:false},
//   {text:'LALALALALA', completed:false},
//   {text:'usar estados derivados', completed:true},
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');