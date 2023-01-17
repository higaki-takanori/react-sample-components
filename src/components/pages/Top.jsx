import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

export const Top = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useContext(UserContext);
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    navigate("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    navigate("/users");
  };
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
