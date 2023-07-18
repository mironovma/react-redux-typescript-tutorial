import { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypeSelector";
// т.к. в useDispatch v8 нельзя диспатчить все, что угодно, в отличии от v7
import type {} from "redux-thunk/extend-redux";
import { useAction } from "../hooks/useAction";

const UserList: React.FunctionComponent = () => {
  const { error, loading, users } = useTypedSelector((state) => state.user);
  const { fetchUsers } = useAction();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.name}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;
