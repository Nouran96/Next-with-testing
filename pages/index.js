import Head from "next/head";
import { useEffect } from "react";
import { fetchUsers } from "../store/Users/actions";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent } from "@material-ui/core";
import { Router, useRouter } from "next/router";

export default function Home() {
  const dispatch = useDispatch();
  const {
    users: { usersList },
  } = useSelector((state) => state);
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <div className="row">
        {usersList.map((user) => (
          <div className="col-lg-4 col-sm-6 mb-3" key={user.id}>
            <Card
              raised
              role="button"
              onClick={() => router.push(`/users/${user.id}`)}
            >
              <CardContent>
                <p>
                  <b>Name:</b> {user.name}
                </p>
                <p>
                  <b>Phone:</b> {user.phone}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
