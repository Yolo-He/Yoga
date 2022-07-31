import request from './request'

export const AddClassApi = (data: any) => request.post('/addClass', data);
export const GetMonClassApi = (data: any) => request.get('/getMonClass', data);
export const GetTodayClassApi = (data: any) => request.get('/getTodayClass', data);
export const GetSignupUsersApi = (data: any) => request.get('/getSignupUsers', data); 