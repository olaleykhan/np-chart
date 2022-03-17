import React from "react";
import styled from "styled-components";

const colors = {
  shopping: "red",
  management: "blue",
  fishing: "green",
  community: "purple",
  potato: "yellow",
  birthday: "cyan",
  sport: "orange",
  security: "black",
  celebrity: "white",
  wedding: "brown",
};

const colorKeys = Object.keys(colors);

const Legend = () => {
  return (
    <LegendWrap>
      <div className="flex">
        {colorKeys.map((el) => (
          <div className="content">
            <ColorBox color={colors[el]} />
            <p>{el} </p>
          </div>
        ))}
      </div>
    </LegendWrap>
  );
};

export default Legend;

const ColorBox = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${({ color }) => color};
  margin-right: 10px;
`;
const LegendWrap = styled.div`
  display: flex;
  align-items: center;
  .flex {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin-left: auto;
  }

  @media only screen and (min-width: 768px) {
    .flex {
      flex-direction: column;
      max-height: 500px;

      > .content {
        display: flex;
      }
    }
  }
`;
