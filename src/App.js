import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>button</PrimaryButton>
      <SecondaryButton>second</SecondaryButton>
      <SearchInput></SearchInput>
    </div>
  );
}
