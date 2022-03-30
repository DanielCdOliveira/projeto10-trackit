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
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #126BA5;;
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
