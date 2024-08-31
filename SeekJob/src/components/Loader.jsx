import BarLoader from "react-spinners/BarLoader";

const override = {
  display: "block",
  width: "100%",
  margin: "50px auto",
};

const Spinner = ({ loading }) => {
  return <BarLoader color="#e21604" loading={loading} cssOveride={override} />;
};

export default Spinner;
