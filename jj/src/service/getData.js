import fetch from '../config/fetch'

export const savewarehouse = warehouse =>  fetch('/user/save', {
	warehouse: warehouse
},"post");
export const warehouselimit = (pagesize,currentPage) =>  fetch('/user/limit', {
	pageSize: pagesize,
	currentPage:currentPage
},"post");
export const gyslimit = (pagesize,currentPage) =>  fetch('/gys/limit', {
	pageSize: pagesize,
	currentPage:currentPage
},"post");
export const warelimit = (pagesize,currentPage) =>  fetch('/ware/limit', {
	pageSize: pagesize,
	currentPage:currentPage
},"post");
export const warehousecount = (pagesize,currentPage) =>  fetch('/user/count', {
},"post");
export const getindexmenu = () =>  fetch('/init/getindexmenu', {
},"post");
export const addgys = (gys) =>  fetch('/gys/add', {
	gys:gys
},"post");
export const updategys = (gys) =>  fetch('/gys/updateone', {
	gys:gys
},"post");
export const deletegysbyid = (id) =>  fetch('/gys/deletebyid', {
	id:id
},"post");
export const addcustom = (custom) =>  fetch('/custeom/add', {
	custom:custom
},"post");
export const updatecustom = (custom) =>  fetch('/custom/updateone', {
	custom:custom
},"post");
export const deletecustombyid = (id) =>  fetch('/custom/deletebyid', {
	id:id
},"post");
export const addware = (custom) =>  fetch('/ware/add', {
	ware:custom
},"post");
export const updateware = (cestom) =>  fetch('/ware/updateone', {
	ware:custom
},"post");
export const deletewarebyid = (id) =>  fetch('/ware/deletebyid', {
	id:id
},"post");
export const customlimit = (pagesize,currentPage) =>  fetch('/custom/limit', {
	pageSize: pagesize,
	currentPage:currentPage
},"post");
export const token = (admin) =>  fetch('/init/token', {
	custom:admin
},"post");
export const register = (admin) =>  fetch('/admin/register', {
	custom:admin
},"post");
export const login = (admin) =>  fetch('/admin/login', {
	custom:admin
},"post");
export const getdict = (dictname,code,childcode) =>  fetch('/dict/getdict', {
	dictname:dictname,
	dictcode:code,
	childcode:childcode
},"post");