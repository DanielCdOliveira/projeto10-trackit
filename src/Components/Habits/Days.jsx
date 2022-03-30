import { useState } from "react";
import styled from "styled-components";

function Days({ week, days, setDays }) {
  console.log(week);

  function select(id, selected, setSelected) {
    if (selected) {
        setDays(
            days.filter((item) => {
              return item != id;
            })
          );
      setSelected(false);
    } else {
      setDays([...days, id]);
      setSelected(true);
    }
  
  }
  console.log(days);
  return (
    <Week>
      {week.map((item, id) => (
        <CreateDay key={item+id}item={item} id={id} select={select} />
      ))}
    </Week>
  );
}

function CreateDay({ item, id, select }) {
  const [selected, setSelected] = useState(false);
  return (
    <Day
      selected={selected}
      onClick={() => {
        select(id, selected, setSelected);
      }}
    >
      <span>{item}</span>
    </Day>
  );
}

const Week = styled.ul`
  width: 88%;
  height: 30px;
  margin-bottom: 30px;
  background-color: #8ea705;
  display: flex;
  justify-content: flex-start;
`;
const Day = styled.li`
  width: 30px;
  height: 30px;
  background: ${(props) => (props.selected ? "#CFCFCF" : "#FFFFFF")};
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.selected ? "#FFFFFF" : "#CFCFCF")};
  margin-right: 4px;
`;

export default Days;
