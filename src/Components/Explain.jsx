import React from "react";

const Explain = ()=>{
    return <div className="container">
    <h1>React App</h1>
    <h2>Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.</h2>
    <p><strong>node_modules(Folder): </strong>Contains all the dependencies that are needed for an initial working react app</p>
    <p><strong>.gitignore(file): </strong>This file specifies intentionally untracked files that Git should ignore</p>
    <p><strong>package.json(file): </strong>This file contains various metadata that is relevant to our project. It specifies the dependencies being used in the project which helps npm setup same environment on different machine for our project.</p>
    <p><strong>README.md(file): </strong>This file can be used to define usage, build instructions, summary of project, etc. It uses markdown markup language to create content.</p>
    <p><strong>yarn.lock(file): </strong>This file has same purpose as package-lock.json, it ensures that your package is consistent across various machines by storing the versions of which dependencies are installed with your package.</p>
    <p><strong>Public folder and it’s files:</strong></p>
    <p><strong>public(folder):</strong>Root folder that gets served up as our react app.</p>
    <p><strong>favicon.ico(file):</strong>It’s an icon file that is used in index.html as favicon.</p>
    <p><strong>index.html(file): </strong>It is the template file which is served up when we run start script to launch our app. It is considered best practice not to create multiple html file in public folder instead use this file and inject react components in this file’s root div container. Other css libraries, etc can be defined in this files.</p>
    <p><strong>logo192.png & logo512.png(files): </strong>These are react logo which is of dimension 192*192 px and 512*512 px and is used in the template file (index.html) by default. [can be removed once you are using your own component]</p>
    <p><strong>manifest.json(file): </strong>It’s used to define our app, mostly contains metadata. Used by mobile phones to add web app to the home-screen of a device. Part of PWA.</p>
    <p><strong>robots.txt(file): </strong>Defines rules for spiders, crawlers and scrapers for accessing your app.</p>
    <p><strong>Src folder and its files: </strong></p>
    <p><strong>src(folder): </strong>In simplest form it’s our react app folder i.e. containing components, tests, css files etc. It’s the mind of our app.</p>
    <p><strong>App.css(file): </strong>Contains styles of our react component(App.js)</p>
    <p><strong>App.js(file): </strong>This file has very basic react component defined which can be replaced by our own root component.</p>
    <p><strong>App.test.js(file): </strong>A very basic test(for the default app) is defined in this file which can be replace by our own tests. [make use of Jest]</p>
    <p><strong>index.css(file): </strong>Contains styles for general setup of our app.</p>
    <p><strong>index.js(file): </strong>This files renders our component and registers service workers(unregistered by default)</p>
    <p><strong>logo.svg(file): </strong>Svg file of react logo, being used in component(App.js) by default.</p>
    <p><strong>serviceWorker.js(file):</strong>Service worker for pre-caching the scripts files of our react app thereby improving performance.</p>
    <p><strong>setupTests.js(file): </strong>As the name suggest this files setups tests and runs them. This file in directly invoked when we run tests from cli(npm run test).[make use of Jest]</p>
    </div>
}

export default Explain;