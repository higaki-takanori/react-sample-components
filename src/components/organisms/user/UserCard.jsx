import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = (props) => {
  const { user, isAdmin } = props;
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} isAdmin={isAdmin} />
      <SDL>
        <dt>mail</dt>
        <dd>{user.email}</dd>
        <dt>tel</dt>
        <dd>{user.phone}</dd>
        <dt>company</dt>
        <dd>{user.company.name}</dd>
        <dt>web</dt>
        <dd>{user.website}</dd>
      </SDL>
    </Card>
  );
};

const SDL = styled.dl`
  test-align: left;
  margin-button: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-button: 8px;
    overflow-wrap: break-word;
  }
`;
