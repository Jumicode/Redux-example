import { configureStore } from "@reduxjs/toolkit";

import users from './Slices/Users'


export default configureStore({
    reducer:{

        users
    }
})