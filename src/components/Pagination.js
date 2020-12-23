import React, { Component } from 'react';

class Pagination extends Component {
    render() {
        return (
            <div>
                <ul className="pagination justify-content-center">
                    {Array(this.props.pages)
                        .fill()
                        .map((el, index) => {
                            const valueForFilter = (index + 1) * 10;
                            return (
                                <li key={index} className="page-item">
                                    <a className="page-link" href="#" onClick={() => this.props.filter(valueForFilter)}>
                                        {index + 1}
                                    </a>
                                </li>
                            );
                        })}
                </ul>
            </div>
        );
    }
}

export default Pagination;