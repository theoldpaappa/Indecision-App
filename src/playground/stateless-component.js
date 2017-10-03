// stateless components - simple components
// if no state is needed use this - otherwise class based is the way
// faster than class based components
// straight equivalent of render - just paste return stuff
// no longer access to .this

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

/*  class based component
 class Action extends React.Component {
    render () {
        return (
            <div>
                <button 
                onClick={this.props.handlePick}       //disable button if no options exist
                disabled={!this.props.hasOptions}
                >
                What should I do?   
                </button>
            </div>
        );
    }
}
*/