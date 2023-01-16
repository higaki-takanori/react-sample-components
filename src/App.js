import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

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

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>button</PrimaryButton>
      <SecondaryButton>second</SecondaryButton>
      <SearchInput></SearchInput>
      <UserCard user={user} />
    </div>
  );
}
