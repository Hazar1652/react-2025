import {useEffect, useState} from "react";
import {getAllJson} from "./services/users.api.service.ts";
import type {IJsPlaceHolderUsers} from "../models/Js Place Holder/IJsPlaceHolderUsers.ts";

export const UsersComponent = () => {
    const [users, setUsers]=useState<IJsPlaceHolderUsers[]>([])
    useEffect(() => {
        getAllJson<IJsPlaceHolderUsers >('/users')
            .then(value => setUsers(value.users))
    }, []);

    return (
        <></>
    );
};