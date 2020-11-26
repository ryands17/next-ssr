import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Users as UsersType } from 'types'

export const getServerSideProps: GetServerSideProps<{
  users: UsersType
}> = async (context) => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await data.json()

  return {
    props: { users },
  }
}

const Users: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} → {user.email}
          <br />
          <strong>{user.website}</strong>
        </li>
      ))}
    </ul>
  )
}

export default Users
