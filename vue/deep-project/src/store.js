import { createStore} from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
    state() {
        return {
            cart: [{
                product_id: 1,
                product_name: "아이폰 거치대",
                category: "A",

            }],
            count: 0
        }
    },
    getters: {
        cartCount: (state) => {
            return state.cart.length;
        }
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        addProduct(state, info) {
            state.cart.push(info);
        }
    },
    actions: { //전체가넘어오는거라 getters등도 접근가능
        addProduct(context, info) {
            setTimeout(() => {
                context.commit('addProduct', info)
            }, 1000)
        }
    },
    //브라우저 f12 -> 애플리케이션 -> 로컬스토리지에서 저장된 상품목록을 확인할 수 있다..세션은x 브라우저가 꺼지면 사라짐
    plugins : [
        createPersistedState({
            paths : ['cart']
        })
     ]
    });


export default store;
