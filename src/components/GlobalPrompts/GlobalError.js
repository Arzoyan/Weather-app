import * as React from "react";
import selector from "../../app/services/selector";
import {connect} from "react-redux";
import {removeError} from "../../app/modules/errors/Actions";
import "./globalError.css"

class GlobalError extends React.Component {
    handleClose = () => {
        this.props.dispatch(removeError());
    }

    render() {
        const { errors } = this.props;

        return (
            <div className="global-wrapper">
                <div className={`global-notification error ${errors && errors.length ? "opened" : ""}`}>
                    <i className="fa fa-times closer" onClick={this.handleClose}/>
                    <ul>
                        {errors && errors.length ? errors.map(err => (
                            <li key={err}>{err}</li>
                        )) : <li>{errors}</li>}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => selector(state, ["errors"]);

export default connect(mapStateToProps)(GlobalError);
