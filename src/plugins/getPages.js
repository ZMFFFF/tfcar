

var getPages = {

    install(Vue, options) {
        Vue.mixin({
            methods: {
                globalGetPages(totalPages, currentPage) {
                    if (totalPages > 10) {
                        if (currentPage <= 4) {
                            return [1, 2, 3, 4, 5, '...', totalPages]
                        }
                        else if (currentPage > totalPages - 4) {
                            var arr = [1, '...'];
                            for (let i = totalPages - 4; i <= totalPages; i++) {
                                arr.push(i)
                            }
                            return arr;
                        }
                        else {
                            var arr = [1, '...']
                            for (let i = currentPage - 2; i <= currentPage + 2; i++) {
                                arr.push(i)
                            }
                            arr.push('...')
                            arr.push(totalPages)
                            return arr;
                        }
                    } else {
                        var arr = []
                        for (let i = 1; i <= totalPages; i++) {
                            arr.push(i)
                        }
                        return arr;
                    }
                }
            }
        })
    }
}

export default getPages;