import React from 'react';

class Expand extends React.Component {
    state = {
        isShow: false,
    };

    handleClick = () => {
        this.setState({ isShow: !this.state.isShow });
    };

    render() {
        const { title, children } = this.props;
        return (
            <div className="expand border">
                <div className="expand__header">
                    <span className="expand__title">{title}</span>
                    <button className="expand__toggle-btn" onClick={this.handleClick}>
                        {this.state.isShow ? (
                            <i className="fas fa-chevron-up"></i>
                        ) : (
                            <i className="fas fa-chevron-down"></i>
                        )}
                    </button>
                </div>
                {this.state.isShow ? (
                    <div className="expand__content">{children}</div>
                ) : null}
            </div>
        );
    }
}

export default Expand;