
import axios from 'axios';
//import {path, RoleFuncion} from '../../api/api';

export default {
	clone: function (obj) {
        let o = '', i = '', j = '';
	    if (typeof(obj) != 'object' || obj === null) return obj;
	    if (obj instanceof (Array)) {
	        o = [];
	        i = 0;
	        j = obj.length;
	        for (; i < j; i++) {
	            if (typeof(obj[i]) == 'object' && obj[i] != null) {
	                o[i] = arguments.callee(obj[i]);
	            }
	            else {
	                o[i] = obj[i];
	            }
	        }
	    }
	    else {
	        o = {};
	        for (i in obj) {
	            if (typeof(obj[i]) == 'object' && obj[i] != null) {
	                    o[i] = arguments.callee(obj[i]);
	                }
	                else {
	                    o[i] = obj[i];
	                }
	            }
	        }
	
	        return o;
   },
    getLength: function (obj) {
        var count = 0;
        for (var key in obj) {
            console.log('' + key);
            count++;
        }
        return count;
    },
    //日期转换,Long转字符串
	dateformat: function (longtime) {
        if (longtime == "" || longtime == null) {
            return ""
        }
        var nTime = new Date(longtime);
        var month = nTime.getMonth() + 1;
        var day = nTime.getDate();
        var hour = nTime.getHours();
        var minute = nTime.getMinutes();
        var second = nTime.getSeconds();
        return nTime.getFullYear() + "-" + (month < 10 ? ("0" + month) : month) + "-" + (day < 10 ? ("0" + day) : day) + " " + (hour < 10 ? ("0" + hour) : hour) + ":" + (minute < 10 ? ("0" + minute) : minute) + ":" + (second < 10 ? ("0" + second) : second)
   },
   commonPost:function(url,sform,token,fn){
   	
   	 return axios.post(url,sform,{
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': "Bearer " + token
            }
        }).then(function (response) {
			console.log('====================================================================')
			console.log(response.data)
			fn(response.data)
		
        }).catch(function (error) {
        	console.log("请求出错")
           return {};
        })
   	   	
   },
}