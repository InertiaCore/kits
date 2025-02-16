import { Layout } from "@/Components/Layout";
import { Page } from "@inertiajs/core";

export default function Index() {
    return (
        <div className="p-4 gap-y-4 flex flex-col">
            <h1 className="text-2xl font-bold">Hello, world!</h1>
            <p className="text-lg">Welcome to your new single-page application, built with:</p>
            <ul className="list-disc list-inside">
                <li><a className="text-blue-500" target="_blank" href='https://get.asp.net/'>ASP.NET Core</a> and <a className="text-blue-500" target="_blank" href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
                <li><a className="text-blue-500" target="_blank" href='https://react.dev'>React</a> and <a className="text-blue-500" target="_blank" href='https://inertiajs.com'>InertiaJS</a> for client-side code</li>
                <li><a className="text-blue-500" target="_blank" href='https://tailwindcss.com/'>TailwindCSS</a> for layout and styling</li>
            </ul>
            <p className="text-lg">To help you get started, we have also set up:</p>
            <ul className="list-disc list-inside">
                <li><strong>Server-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
                <li><strong>Development server integration</strong>. In development mode, the development server from <code>Vite</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
                <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
            </ul>
            <p className="text-lg">The <code>ClientApp</code> subdirectory is a standard React application based on the <code>Vite</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
        </div>
    );
}

Index.layout = (page: Page<{ title: string }>) => <Layout title={page.props.title} children={page as unknown as React.ReactNode} />;
