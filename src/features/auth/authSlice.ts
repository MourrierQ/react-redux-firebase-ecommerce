import { GoogleAuthProvider } from 'firebase/auth';
import { RootState } from './../../app/store';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import User from "../../models/User"
import { signInWithThirdParty } from './authAPI';


export interface AuthState {
    user?: User,
}

const initialState: AuthState = {
    user: undefined
}

export const login = createAsyncThunk(
    'auth/login',
    async (providerName: string) => {
        try {
            const result = await signInWithThirdParty(providerName);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            if(token){
                localStorage.setItem("accessToken", token);
                localStorage.setItem("user", JSON.stringify(result.user))
            }
            return {email: result.user.email, photoURL: result.user.photoURL, displayName: result.user.displayName}
        } catch (error) {
            console.log(error);
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signout: (state) => {
            localStorage.setItem("accessToken", "");
            state.user = undefined;
        },
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload
        })
    }
})

export const selectUser = (state: RootState) => state.auth.user

export const { signout, setUser } = authSlice.actions

export default authSlice.reducer;