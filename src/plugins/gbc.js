

let gbc = {
    install(Vue, options) {
        const requireComponent = require.context(
            '../components/common',
            false,
            /TF-[A-Z]\w+\.(vue)$/
        );

        requireComponent.keys().forEach(fileName => {
            const componentConfig = requireComponent(fileName)
            const componentName = fileName.split('/')[1].split('.')[0]
            Vue.component(
                componentName,
                componentConfig.default || componentConfig
            )
        });
    }
}

export default gbc;