import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next'
import type { Users as UsersType } from 'types'

export const getServerSideProps: GetServerSideProps<{
  users: UsersType | null
}> = async ({ res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=600, stale-while-revalidate=1200'
  )
  try {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await data.json()

    return {
      props: { users },
    }
  } catch (error) {
    return {
      props: { users: null },
    }
  }
}

const Users: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> =
  ({ users }) => {
    return (
      <div className="m-4">
        <ul>
          {users?.map((user) => (
            <li key={user.id} className="pb-2">
              {user.name} =&gt; {user.email}
              <br />
              <strong>{user.website}</strong>
            </li>
          ))}
        </ul>
      </div>
    )
  }

export default Users
