import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useNavigate } from "react-router-dom";

export const Top = () => {
  const navigate = useNavigate();
  const onClickAdmin = () => navigate("/users", { state: { isAdmin: true } });
  const onClickGeneral = () =>
    navigate("/users", { state: { isAdmin: false } });
  return (
    <SContainer>
      <h2>Top Page</h2>
      <SecondaryButton onClick={onClickAdmin}>admin user</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>user</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
