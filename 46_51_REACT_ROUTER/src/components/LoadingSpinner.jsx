const LoadingSpinner = () => {
  return (
    <div className="text-center ">
      <div
        className="spinner-border"
        role="status"
        style={{
          width: "20rem",
          height: "20rem",
          borderRightColor: "#00BCD4",
          borderWidth: "1.25em",
        }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
export default LoadingSpinner;
