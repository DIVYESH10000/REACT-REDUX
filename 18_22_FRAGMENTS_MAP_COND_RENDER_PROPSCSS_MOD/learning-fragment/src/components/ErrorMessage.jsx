const ErrorMessage = ({ anyNameButSameShouldCatchInComp }) => {
  return (
    <>
      {anyNameButSameShouldCatchInComp.length === 0 && (
        <h3>I am still hungry.</h3>
      )}
    </>
  );
};
export default ErrorMessage;
