import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'; 
import { csrfFetch } from './csrf';

const initialState = {
    user: null
}; 

export const login = createAsyncThunk(
    'session/login', 
    async (user, thunkAPI) => { 
        const { credential, password } = user; 
        const url = '/api/session'; 
        const options = { 
            method: 'POST', 
            body: JSON.stringify({
                credential, 
                password,
            }),
        };

        const response = await csrfFetch(url, options); 
        const data = await response.json(); 
        console.log(data.user)
        thunkAPI.dispatch(setUser(data.user)); 
        return data; 
    }, 
)

export const restoreUser = createAsyncThunk(
    'session/restore', 
    async (_, thunkAPI) => {
        const url = '/api/session'; 
        const options = { 
            method: 'GET', 
        };

        const response = await csrfFetch(url, options); 
        const data = await response.json(); 
        if (data.user) thunkAPI.dispatch(setUser(data.user)); 
        return data; 
    },
)

export const signup = createAsyncThunk(
    'session/signup', 
    async (newUser, thunkAPI) => { 
        const { username, email, password } = newUser; 
        const url = '/api/users'; 
        const options = { 
            method: 'POST', 
            body: JSON.stringify({ 
                username, 
                email,
                password,
            }),
        };

        const response = await csrfFetch(url, options); 
        const data = await response.json(); 
        thunkAPI.dispatch(setUser(data.user)); 
        return data;
    },
)

export const logout = createAsyncThunk(
    'session/logout', 
    async (_, thunkAPI) => { 
        const url = '/api/session'; 
        const options = { 
            method: 'DELETE', 
        }

        const response = await csrfFetch(url, options); 
        const data = await response.json(); 
        thunkAPI.dispatch(removeUser()); 
        return data; 
    }, 
)

const sessionSlice = createSlice({ 
    name: 'session', 
    initialState, 
    reducers: { 
        setUser(state, action) {
            state.user = action.payload; 
        }, 
        removeUser(state, action) {
            state.user = null; 
        },
    }
}); 

// export session action creators
export const { setUser, removeUser } = sessionSlice.actions; 

// export session reducer
export default sessionSlice.reducer; 
