import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const articlesSlice = createSlice({
	name: 'hiddenArticles',
	initialState,
	reducers: {
		addArticle: (state, action) => {
			state.value.push(action.payload);
            console.log('reducer')
		},
		removeAllArticles: (state) => {
			state.value = [];
		},
	},
});

export const { addArticle, removeAllArticles } = articlesSlice.actions;
export default articlesSlice.reducer;
