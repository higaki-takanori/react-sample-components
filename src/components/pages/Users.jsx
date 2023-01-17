import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `aaa${val}`,
    image: "https://source.unsplash.com/T-0EW-SEbsE",
    email: "aaa@example.com",
    phone: "1234-1234-123",
    company: {
      name: "test company",
    },
    website: "https://google.com",
  };
});
const user = {
  name: "aaa",
  image: "https://source.unsplash.com/T-0EW-SEbsE",
  email: "aaa@example.com",
  phone: "1234-1234-123",
  company: {
    name: "test company",
  },
  website: "https://google.com",
};

export const Users = () => {
  const { state } = useLocation();
  const isAdmin = state ? state.isAdmin : false;

  return (
    <SContainer>
      <h2>Users Page</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} isAdmin={isAdmin} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-item: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
