import styled from "styled-components";

const InteractBtnStyled = styled.button<{ width: string }>`
  background-color: #25ae25;
  width: ${(props) => props.width};
  height: 38px;
  border-radius: 5px;
  box-shadow: 0 3px 3px rgba(0, 255, 34, 0.1);
  color: white;

  &:hover {
    background-color: #186c18;
  }
`;

export default function InteractBtn({
  width,
  text,
  onClick,
  type,
}: {
  width: string;
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <InteractBtnStyled width={width} onClick={onClick}>
      {text}
    </InteractBtnStyled>
  );
}
