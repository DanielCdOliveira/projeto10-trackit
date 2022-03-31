import styled from "styled-components";
import { BsTrash } from "react-icons/bs";

function ShowMyHabits({ item }) {
  const week = ["D", "S", "T", "Q", "Q", "S", "S"];

  return (
    <Habit>
      <h4>{item.name}</h4>
      <ul>
        {week.map((day, index) => {
          let css = item.days.indexOf(index) > -1 ? "day selected" : "day";
          return <li key={index+565} className={css}>{day}</li>;
        })}
      </ul>
      <BsTrash/>

    </Habit>
  );
}

const Habit = styled.li`
    background-color: #fff;
    margin-bottom:10px ;
    padding: 15px 30px 15px 15px;
    justify-content: center;
    position: relative;
    word-break: break-all;
  .day {
    width: 30px;
    height: 30px;
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #cfcfcf;
    margin-right: 4px;
  }
  h4{
      color: var(--text);
    margin-bottom: 8px;
  }
  .selected {
    background-color: #cfcfcf;
    color: #fff;
  }
  ul{
      display: flex;
  }
  svg{
      position: absolute;
      font-size: 15px;
      right: 10px;
      top: 11px;
      color: var(--text);
  }
`;

export default ShowMyHabits;
