import React from 'react';
import Modal from '../../components/ui/modal/modal';
import { Component } from 'react';

export const errorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        };
        componentWillMount() {
            this.requestInterceptors = axios.interceptors.request.use(request => {
                this.setState({error: null});
                return request;
            });
            this.responseInterceptors = axios.interceptors.response.use(response => response, error => {
                this.setState({error: error});
                return error;
            });
        }
        componentWillUnmount() {
            axios.interceptors.request.eject(this.requestInterceptors);
            axios.interceptors.response.eject(this.responseInterceptors);
        }
        errorConfirmedHandler = () => {
            this.setState({error: null});
        }
        render() {
            return (
                <React.Fragment>
                    <Modal
                        closeModal={this.errorConfirmedHandler}
                        show={this.state.error}>
                        {this.state.error? this.state.error.message: null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </React.Fragment>
            );
        }
    }
};