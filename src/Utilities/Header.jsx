import styled from "styled-components";

function Header({image}) {
  return (
    <HeadeR>
      <h1>TrackIt</h1>
      <img src={image} alt="" />
    </HeadeR>
  );
}

const HeadeR = styled.header`
  width: 375px;
  height: 70px;
  position: fixed;
  background: var(--highlight-color);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  h1 {
    font-family: "Playball";
    font-size: 39px;
    line-height: 49px;
    color: #ffffff;
  }
  img{
      width: 51px;
      height: 51px;
      border-radius: 50%;
  }
`;

export default Header
