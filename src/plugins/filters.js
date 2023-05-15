

let filters = {
    install(Vue, options) {
        Vue.filter("formatDate", (value) => {
            let date = new Date(value);
            let year = date.getFullYear();
            let month = (date.getMonth() + 1).toString().padStart(2, "0");
            return `${year}年${month}月`;
        })

        Vue.filter("formatSaleType", (value) => {
            var str = "";
            if (value == 0) {
                str = "腾发自营"
            } else if (value == 1) {
                str = "车主直售"
            } else if (value == 2) {
                str = "限时秒杀"
            } else if (value == 3) {
                str = "严选车源"
            } else {
                str = "未知"
            }
            return str;
        })

    }
}

export default filters