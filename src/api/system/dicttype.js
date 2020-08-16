import request from '@/utils/request'

// 查询字典类型列表
export function listType(query) {
  return request({
    url: '/system/dictType/pageList',
    method: 'get',
    params: query
  })
}

// 查询字典类型列表
export function listAllType(query) {
  return request({
    url: '/system/dictType/allList',
    method: 'get',
    params: query
  })
}

// 查询字典类型详细
export function getType(dictId) {
  return request({
    url: '/system/dictType/' + dictId,
    method: 'get'
  })
}

// 新增字典类型
export function addType(data) {
  return request({
    url: '/system/dictType',
    method: 'post',
    data: data
  })
}

// 修改字典类型
export function updateType(data) {
  return request({
    url: '/system/dictType',
    method: 'put',
    data: data
  })
}

// 删除字典类型
export function delType(dictId) {
  return request({
    url: '/system/dictType/' + dictId,
    method: 'delete'
  })
}

// 清理参数缓存
export function clearCache() {
  return request({
    url: '/system/dictType/clearCache',
    method: 'delete'
  })
}


// 获取字典选择框列表
export function optionselect() {
  return request({
    url: '/system/dictType/optionselect',
    method: 'get'
  })
}