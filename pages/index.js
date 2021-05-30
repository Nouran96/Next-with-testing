import Head from "next/head";
import { useEffect } from "react";
import { fetchUsers } from "../store/Users/actions";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent } from "@material-ui/core";

export default function Home() {
  const dispatch = useDispatch();
  const {
    users: { usersList },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Login for next with testing" />
      </Head>

      <div className="row">
        {usersList.map((user) => (
          <div className="col-lg-4 col-sm-6 mb-3">
            <Card raised>
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
