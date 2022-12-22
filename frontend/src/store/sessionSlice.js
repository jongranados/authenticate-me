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
        }

        const response = await csrfFetch(url, options); 
        const data = await response.json(); 
        thunkAPI.dispatch(setUser(data.user)); 
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