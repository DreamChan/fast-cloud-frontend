import request from '@/utils/request'

// 查询登录日志列表
export function list(query) {
  return request({
    url: '/monitor/loginLog/pageList',
    method: 'get',
    params: query
  })
}

// 删除登录日志
export function delLoginlog(id) {
  return request({
    url: '/monitor/loginLog/' + id,
    method: 'delete'
  })
}

// 导出登录日志
export function exportLoginlog(query) {
  return request({
    url: '/monitor/loginLog/exportXls',
    method: 'get',
    params: query,
    responseType: 'blob'
  })
}