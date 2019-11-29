import HTTP from '../utils/http'
const _http = new HTTP()
class Product {
    menu() {
        return _http.request({
            type: 'post',
            url: 'http://www.wyunfei.com:8002/apis/system/pc/menu/user/list',
            data: {}
        })
    }
}
export default Product