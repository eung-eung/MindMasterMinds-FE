import { DefaultSession } from "next-auth"
export default function UserCard({ user }: { user: DefaultSession["user"] }) {

    return (
        <div>
            <p>Current logged user</p>
            <h5>User name: {user?.name}</h5>
            <h5>User email: {user?.email}</h5>
        </div>
    )
}
