import axios from 'axios'

const http = axios.create({
  baseURL:process.env.VUE_APP_API_URL || '/admin/api',
	// baseURL:'http://localhost:3000/admin/api/'
})
http.interceptors.request.use(function (config) {
  //请求拦截处理
  if (localStorage.token) {
    config.headers.Authorization = 'Bearer '+(localStorage.token || '');
  }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

http.interceptors.response.use(res =>{
	return res;
},err =>{
  //响应拦截错误处理
	return Promise.reject(err);
})
export default http