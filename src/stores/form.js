import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', {
    state: () => {
        return {
            name: '',
            email: '',
            password: '',
            address: '',
            postal: null
        }
    },
    getters: {
        getFromStore(state) {
            let data = JSON.parse(localStorage.getItem('form'));
            if (data) {
                state.name = data.name;
                state.email = data.email;
                state.password = data.password;
                state.address = data.address;
                state.postal = data.postalCode;
                return data;
            }
            return false;
        },
        getExtra(state) {
            return state.postal === '999';

        }
    },
    actions: {
        saveStore(data) {
            localStorage.setItem('form', JSON.stringify(data));
        }
    }
})
