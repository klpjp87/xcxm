import fetch from '../config/fetch'

export const savewarehouse = warehouse =>  fetch('/user/save', {
	warehouse: warehouse
},"post");
export const warehouselimit = (pagesize,currentPage) =>  fetch('/user/limit', {
	pageSize: pagesize,
	currentPage:currentPage
},"post");
export const warehousecount = (pagesize,currentPage) =>  fetch('/user/count', {
},"post");