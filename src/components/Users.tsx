interface UserProps {
  name: string;
}

function User({ name }: UserProps) {
  return <li>User: {name}</li>;
}

export default function Users() {
  const listUsers = [{ name: "Henry" }, { name: "John" }, { name: "Marry" }];

  return (
    <>
      <ul>
        {listUsers.map((item, index) => (
          <User name={item.name} key={index} />
        ))}
      </ul>
    </>
  );
}
