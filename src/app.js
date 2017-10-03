const appRoot = document.getElementById('app');

class IndecisionApp extends React.Component {
    constructor (props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: props.options
        };
    }
    handleDeleteOptions() {
        this.setState(() => ({options: []}));
    }

    handlePick () {
        const randomNum = Math.floor(Math.random() * this.state.options.length); // Random value based on options array length
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item.';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists.';
        }
 
        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    }

    render () {
        const title = 'Indecision';
        const subtitle = 'Gamble your life.';

        return (
            <div>
             <Header subtitle={subtitle} />
             <Action 
                hasOptions={this.state.options.length > 0} 
                handlePick={this.handlePick}
             />
             <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions} 
                />
             <AddOption 
                handleAddOption={this.handleAddOption}
             />
            </div>
        );
    }
}

//set default options 
IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>} 
        </div>
    );
};

// set default title 
Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => {
    return (
        <div>
            <button 
            onClick={props.handlePick}       //disable button if no options exist
            disabled={!props.hasOptions}
            >
            What should I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map((text) => <Option key={text} optionText={text} />
            )}
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {props.optionText}
        </div>
    ); 
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

     handleAddOption (e) {
        e.preventDefault(); //prevent full page refresh event
    
        const option = e.target.elements.option.value.trim(); //trim removes extra whitespace
        const error = this.props.handleAddOption(option);
        e.target.elements.option.value = ''; // clear text input
        
        this.setState(() => ({error: error}));
    }
        
    
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


/*
const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age} </p>
        </div>
    );
};
*/

ReactDOM.render(<IndecisionApp />, appRoot);