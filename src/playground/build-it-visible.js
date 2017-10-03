class VisibilityToggle extends React.Component {
    constructor (props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility () {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render () {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility &&
                    <p>random text</p>
                }
            </div>
        );
    }
}

const appRoot = document.getElementById('app');
ReactDOM.render(<VisibilityToggle />, appRoot);













/*const appRoot = document.getElementById('app');

let visibility = false;

const showDetails = () => {
    visibility = !visibility; // change visibility = false OR visibility = true
    render();
};



const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={showDetails}>
                {visibility ? 'Hide Details' : 'Show Details'}
            </button>
            {visibility && 
                <p>This is some random text.</p>
            }
        </div>
    );
    

    ReactDOM.render(template, appRoot);
};

render();
*/