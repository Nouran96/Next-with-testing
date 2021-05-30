import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Card, CardContent, Switch } from "@material-ui/core";
import {
  fetchUserDetails,
  userDetailsRecieve,
} from "../../store/Users/actions";

export default function UserDetails() {
  const dispatch = useDispatch();
  const {
    users: { userDetails },
  } = useSelector((state) => state);

  const [active, setActive] = useState(true);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    dispatch(fetchUserDetails(id));

    return () => dispatch(userDetailsRecieve({}));
  }, []);

  return (
    <div>
      <Head>
        <title>User Details</title>
        <meta name="description" content="User details page" />
      </Head>

      {Object.keys(userDetails).length > 0 && (
        <Card raised>
          <CardContent>
            <div className="d-flex justify-content-between">
              <p>
                <b>ID:</b> {id}
              </p>
              <div>
                <span>{active ? "Active" : "Inactive"}</span>
                <Switch checked={active} onChange={() => setActive(!active)} />
              </div>
            </div>
            <p>
              <b>Name:</b> {userDetails.name}
            </p>
            <p>
              <b>Phone:</b> {userDetails.phone}
            </p>
            <p>
              <b>Email:</b> {userDetails.email}
            </p>
            <p>
              <b>Company:</b> {userDetails.company?.name}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
