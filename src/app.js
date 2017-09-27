console.log("app.js is running!");

// JSX - JavaScript XML



const app = {
    title: 'Indecision App',
    subtitle: 'Get to work',
    options: ['One', 'Two']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options: ' + app.options : 'No options exist!'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};

const minusOne = () => {
    count--;
    renderCounterApp();
};

const reset = () => {
    count = 0;
    renderCounterApp();
};


const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();

















// If options exist - function example
/*
function getOptions(options) {
    if (options) {
        return <p>Here are your options: {options}</p>;
    } else {
        return <p>No options exist!</p>;
    }
}
*/

/* Basics
const user = {
    name: 'seppo',
    age: 23,
    location: 'heö'
};
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}                  

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>{user.age}</p>}
        {getLocation(user.location)}
    </div>
);
*/