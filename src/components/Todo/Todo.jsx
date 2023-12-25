import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./Todo.module.css";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };
  const handleDeleted = () => onDelete(todo);
  return (
    <li className={styles.todo}>
      <input
        type='checkbox'
        id={todo.id}
        className={styles.checkbox}
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label htmlFor={todo.id} className={styles.text}>
        {text}
      </label>
      <span className={styles.icon}>
        <button type='button' className={styles.button} onClick={handleDeleted}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
