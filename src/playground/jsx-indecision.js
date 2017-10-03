console.log("app.js is running!");

// JSX - JavaScript XML



const app = {
    title: 'Indecision App',
    subtitle: 'Get to work',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault(); //prevent full page refresh event

    const option = e.target.elements.option.value; //e.target, event target, in this case the form

    if (option) {
        app.options.push(option); // add user input to array
        e.target.elements.option.value = ''; // clear text input
        render();
    }
};

const removeAll = () => {
        app.options.length = 0;
        render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length); // Random value based on options array length
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

//const numbers = [55, 101, 1000];
// converting an array to JSX and adding an unique key to each <p> tag
/*numbers.map((number) => {
    return <p key={number}>Number: {number}</p>
})*/ 

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options: ' + app.options : 'No options exist!'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All Options </button>
            <ol>
                { 
                    app.options.map((text) => {
                    return <li key={text}>{text}</li>;
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();














