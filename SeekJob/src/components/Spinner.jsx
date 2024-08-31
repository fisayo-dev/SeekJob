import Cliploader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "50px auto",
};

const Spinner = ({ loading }) => {
  return (
    <Cliploader
      bgColor="#e21604"
      loading={loading}
      cssOveride={override}
      size={100}
    />
  );
};

export default Spinner;
