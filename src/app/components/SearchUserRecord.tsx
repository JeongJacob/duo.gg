"use client";
import { delUserList } from "@/redux/features/userListSlice";
import { RootState } from "@/redux/store";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { SetStateAction, useEffect, useRef } from "react";
import userRecord from "@/app/styles/SearchUserRecord.module.css";

export default function SearchUserRecord({
  setSearchUser,
  setOnUserModal,
}: {
  setSearchUser: React.Dispatch<SetStateAction<string>>;
  setOnUserModal: React.Dispatch<SetStateAction<boolean>>;
}) {
  const userList = useSelector((state: RootState) => state.userList.userList);
  const dispatch = useDispatch();
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleDocumentClick = () => {
    setOnUserModal(false);
  };

  return (
    <div className={userRecord.wrapper} ref={modalRef}>
      <ul className={userRecord.user__container}>
        {userList.map((user, idx) => (
          <li key={idx}>
            <span onClick={() => setSearchUser(user)}>{user}</span>
            <IoCloseOutline
              cursor="pointer"
              onClick={() => dispatch(delUserList(userList[idx]))}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
