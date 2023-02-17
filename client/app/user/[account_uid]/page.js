"use client";
import { db } from "@/firebaseConfig";
import {
  collection,
  doc,
  setDoc,
  query,
  getDocs,
  where,
} from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import UserBox from "./UserBox";

export default function UserPage({ params }) {
  const [userDetails, changeUserDetails] = useState(null);
  const auth = getAuth();
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  if (!loading && !user) router.push("/");
  useEffect(() => {
    const Query = query(
      collection(db, "users"),
      where("user_id", "==", params.account_uid)
    );
    getDocs(Query).then((docs) => {
      docs.forEach((doc) => {
        changeUserDetails(doc.data());
      });
    });
  }, []);
  return (
    <>{userDetails === null ? null : <UserBox userDetails={userDetails} />}</>
  );
}
