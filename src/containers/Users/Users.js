import { Card } from "./Card";
import { useMatch } from "../../router";
import { Header } from "../../components/Header/Header";

export default function Users(props) {
  const match = useMatch();
  const usersToLoad = props.users ? props.users : match.data.users;

  return (
    <>
      <Header>Users</Header>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {usersToLoad.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </ul>
    </>
  );
}
