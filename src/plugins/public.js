/**
 * 调用移动端app组件
 * @author  guoyang
 * @time    2018-06-30
 */
import Vue from "vue";
const getRequest = (paramName) => {  
    let paramValue = "", isFound = !1; 
    if (location.search.indexOf("?") == 0 && location.search.indexOf("=") > 1) { 
        let arrSource = unescape(location.search).substring(1,location.search.length).split("&"), i = 0; 
        while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++ 
    } 
    return paramValue == "" && (paramValue = null), paramValue  
}
const callapp = (cfg,cb) => {
    //登录问题和分享问题
    if ( cfg.action == "login" ) {
        if (cfg.isNative) {
            let ifr = document.createElement("iframe")
            console.log(cfg.args.url)
            let args = typeof cfg.args == "object" ? JSON.stringify(cfg.args) : ""
            let argsN = args.replace(/\\/g, "")
            console.log(argsN)
            ifr.setAttribute("src",`bdapi://hybrid?info={"fr":"${cfg.fr || ""}","action":"${cfg.action || ""}","args":${argsN || ""},"callback":"${cfg.callback || ""}"}`)
            ifr.setAttribute("id","bdifr")
            ifr.setAttribute("style","display:none;") 
            document.body.appendChild(ifr)
        } else {
            typeof cb == "function" ? cb() : ""
        }
        
    } else {
        let ifr = document.createElement("iframe")
        console.log(cfg.args.url)
        let args = typeof cfg.args == "object" ? JSON.stringify(cfg.args) : ""
        let argsN = args.replace(/\\/g, "")
        console.log(argsN)
        ifr.setAttribute("src",`bdapi://hybrid?info={"fr":"${cfg.fr || ""}","action":"${cfg.action || ""}","args":${argsN || ""},"callback":"${cfg.callback || ""}"}`)
        ifr.setAttribute("id","bdifr")
        ifr.setAttribute("style","display:none;") 
        document.body.appendChild(ifr)
    }
}
export default {
    callapp,
    getRequest,
};