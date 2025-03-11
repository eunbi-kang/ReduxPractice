/* createSlice와 createAsyncThunk를 이용한 API 데이터 페칭 */
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

// ⭐ API 데이터를 가져오는 비동기 액션 생성
export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async(_, {rejectWithValue})=> {
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            return response.data; // 성공시 payload로 사용될 값
        } catch(error) {
            return rejectWithValue(error.response?.data||'데이터를 가져오는 중 오류 발생');
        }
    }
);

// 🔥 사용자 Slice 생성
const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    reducers: {},

    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state)=> {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchUsers.fulfilled, (state, action)=> {
            state.loading = false;
            state.users = action.payload;            
        })
        .addCase(fetchUsers.rejected, (state, action)=> {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export default usersSlice.reducer;