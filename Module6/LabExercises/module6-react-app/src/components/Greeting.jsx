function Greeting({ name, children }) {
  return (
    <h2>
      Hello {name ? name : "World"}
      {children && <> - {children}</>}
    </h2>
  );
}

export default Greeting;
