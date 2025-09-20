import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from '@inertiacore/vite-plugin/inertia-helpers';
import { createApp, DefineComponent, h } from 'vue';
import './App.css';

createInertiaApp({
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob<DefineComponent>('./Pages/**/*.vue'),
        ),
    setup({ el, App, props, plugin }) {
        const app = createApp({
            render: () => h(App, props),
        });
        app.config.globalProperties.window = window;
        app.use(plugin).mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
