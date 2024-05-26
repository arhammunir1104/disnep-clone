import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    recommend : null,
    newDisney : null,
    original : null,
    trending:  null
};

let movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovies: (state, action)=>{
            console.log("action", action)
            state.recommend = action.payload.recommend;
            state.newDisney = action.payload.newDisney;
            state.original = action.payload.original;
            state.trending = action.payload.trending;
        }
    }
})

export let {setMovies} = movieSlice.actions;
export let selectRecommend =(state) => state.movie.recommend;
export let selectNewdisney =(state) => state.movie.newDisney;
export let selectOriginal =(state) => state.movie.original;
export let selectTrending =(state) => state.movie.trending;

export default movieSlice.reducer