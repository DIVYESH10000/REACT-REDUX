function Hello() {

  const myName = 'SpaceGhost';

  let fullName = () => {
    return 'Inter Galactic President Mc Awesomeville';
  }

  return <h3>
      Hello, I am from future.
      I am your master {myName}.
        <br /> Also, {fullName()}.

    </h3>
}

export default Hello;

// Using {}, we can embed any JS expression directly within JSX. This includes variables, function calls, and more.