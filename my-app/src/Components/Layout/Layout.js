import SearchBar from "./SearchBar";
import Card from "../UI/Card";
import Order from "./Order";

const Layout = () => {
  const selectedYearHandler = (selected_year) => {
    console.log(selected_year);
  };
  return (
    <Card>
      <SearchBar onSelectedStatus={selectedYearHandler} />
      <Order />
    </Card>
  );
};

export default Layout;
