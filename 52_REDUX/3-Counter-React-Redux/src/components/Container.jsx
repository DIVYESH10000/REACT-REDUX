const Container = ({ children }) => {
  return (
    <center className="card" style={{ width: "90%" }}>
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="card-body">{children}</div>
    </center>
  );
};
export default Container;
