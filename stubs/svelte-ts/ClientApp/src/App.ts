import { createInertiaApp } from '@inertiajs/svelte';
import { mount } from 'svelte';
import './App.css';

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob('./Pages/**/*.svelte', { eager: true });
        return pages[`./Pages/${name}.svelte`] as any;
    },
    setup({ el, App, props }) {
        if (!el) return;
        mount(App, { target: el, props });
    },
});
