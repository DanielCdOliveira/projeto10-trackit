import { Link } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Footer() {
  return (
    <FooteR>
      <Link to={"/habitos"}>
        <p>Hábitos</p>
      </Link>
      <Link to={"/hoje"}>
        <div className="progress-bar">
          <CircularProgressbar
            value={66}
            text={"Hoje"}
            styles={buildStyles({
              pathTransitionDuration: 0.5,
              pathColor: `#fff`,
              trailColor: "var(--highlight-color)",
              textColor: '#fff'
            })}
          />
         
        </div>
      </Link>
      <Link to={"/historico"}>
        <p>Histórico</p>
      </Link>
    </FooteR>
  );
}

const FooteR = styled.footer`
  height: 70px;
  position: fixed;
  background-color: #fff;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  font-size: 18px;
  a {
    text-decoration: none;
  }
  p {
    color: var(--highlight-color);
  }
  .progress-bar {  font-size: 18px;
    position: fixed;
    bottom: 20px;
    left: calc(50% - 45px);
    width: 90px;
    height: 90px;
    background-color: var(--highlight-color);
    border-radius: 50%;
    padding: 6px;
  }
`;
export default Footer;
