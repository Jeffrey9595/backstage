import Axios from 'axios';
import Qs from 'qs';
class HTTP {
    request(params) {
        return new Promise(resolve => {
            Axios({
                method: params.type || 'get',
                url: params.url,
                data: (params.data),
                headers: {
                    token: JSON.parse(localStorage.getItem('token'))
                }
            }).then(res => {
                resolve(res)
            })
        })
    }
}
export default HTTP