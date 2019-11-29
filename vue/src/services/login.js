import HTTP from '../utils/http'
const _http = new HTTP()
class Product {
    login(data) {
        console.log(data);
        return _http.request({
            type: 'post',
            url: 'http://www.wyunfei.com:8002/apis/user/pc/api/user/login/password',
            data: {
                clientId: data.clientId,
                ip: data.ip,
                mobile: data.user,
                password: data.pass
            }
        })
    }
}
export default Product