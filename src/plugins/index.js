
import Public from "./public"

const install = function(Vue, opts = {}) {
    if (install.installed) return;

    if (!Vue.prototype.$isServer) {
        // UI components
        Vue.prototype.$public = Public;
    }

};

/* istanbul ignore if */
if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}

export {
    install
};

export default {
    install
};
