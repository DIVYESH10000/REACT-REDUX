import LoadingSpinner from "./LoadingSpinner";

const WelcomeMeasage = () => {
  return (
    <center className="welcomeMessage">
      <LoadingSpinner />
      <h1>There are no posts</h1>
    </center>
  );
};
export default WelcomeMeasage;
