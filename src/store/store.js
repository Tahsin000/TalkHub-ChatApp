import axios from 'axios';
import { createStore } from 'vuex';

const store = createStore({
    state:{
        count:0,
        colorCode: 'blue'
    },
    mutations:{
        decreaseCounter (state, randomNumber){
            state.count -= randomNumber;
        },
        increaseCounter (state, randomNumber){
            state.count += randomNumber
            // console.log('randomNumber', randomNumber);
        },
        setColorCode(state, newValue){
            state.colorCode = newValue
        }
    },
    actions:{
        increaseCounter({ commit }){
            console.log('increaseCounter (action)');
            axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
            .then(res => {
                commit('increaseCounter', res.data)
            });
        },
        decreaseCounter({ commit }){
            console.log('decreaseCounter (action)');
            axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
            .then(res => commit('decreaseCounter', res.data));
        },
        setColorCode({ commit }, newValue){
            commit('setColorCode', newValue)
        }
    },
    getters:{
        counterSqre(state){
            return state.count * state.count
        }
    },
    modules:{

    }

});

export default store;
