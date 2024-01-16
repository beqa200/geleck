import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate("/blog");
        }}
      >
        hello
      </button>
    </>
  );
}

export default Home;
