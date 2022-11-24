import axios from "axios";

export default {
    methods: {
        reqBack() {
            axios.get('http://localhost:8080/api/test').then(res => {
                console.log('res', res);
            });
        }
    }
}
