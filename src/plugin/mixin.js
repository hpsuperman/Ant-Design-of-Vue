// import axios from 'axios';
// // import util from 'simba-awesome-js'
// export default options =>{
//     return {
//         data(){
//             return {
//                 // util
//                 methods:''
//             }
//         },
//         created(){
// // 处于loading结束后，还做一些初始化，实现函数自执行（data数据已经初始化，但是DOM结构渲染完成，组件没有加载
//         },
//         mounted() {
// //处于发起后端请求，获取数据，配合路由钩子执行操作（DOM渲染完成，组件挂载完成 ）
//         },
//         methods: {
//             $get(url,params){
//                 options.log && console.log(`GET请求了${url}`)
//                 return axios.get(url,{
//                     params
//                 })
//             },
//             $post(url,params){
//                 options.log && console.log(`POST请求了${url}`)
//                 return axios.get(url,params)
            
//             },
//             $ms(content,duration=2,onClose){
//                 return this.$message.success(content,duration,onClose)
//             },
//             $me(content,duration=2,onClose){
//                 return this.$message.error(content,duration,onClose)
//             },
//             $mw(content,duration=2,onClose){
//                 return this.$message.warning(content,duration,onClose)
//             }
            
            
//         },
//     }
// }
