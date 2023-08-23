import { createStore } from 'vuex';

const store = createStore({
    state:{
        count:0
    },
    mutations:{
        decreaseCounter (state){
            state.count--
        },
        increaseCounter (state){
            state.count++
        }
    },
    actions:{

    },
    getters:{

    },
    modules:{

    }

});

export default store;
