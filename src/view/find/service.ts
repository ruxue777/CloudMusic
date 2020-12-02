import {get} from '/@/util/http'

enum Api {
  GetBanner = 'http://localhost:3000/banner',
}


/**
 * @description: Banner列表接口
 */
export function getBanner(params: object) :any{
    return get(Api.GetBanner,params)
}