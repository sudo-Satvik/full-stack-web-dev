const Profile = (props) => {
  return (
    <>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>{props.description}</p>
      <div>{props.greetings}</div>
      <div>{props.children}</div>
    </>
  );
};

export default Profile;
