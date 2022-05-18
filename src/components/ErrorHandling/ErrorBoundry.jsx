import React from "react";

class ErrorBoundry extends React.Component
{
    constructor(props){
        super(props);
        this.state = {hasError: false, message: ''}
    }

    static getDerivedStateFromError(error){
        return {hasError: true, message: error}
    }

    componentDidCatch(error , errorInfo){
        console.log(error);
    }

    render(){
        if (this.state.hasError){
            if (this.props.errorUI){
                return this.props.errorUI;
            } else{
                return <h3>{this.state.message}</h3>
            }
        } else{
            return this.props.children;
        }
    }
}

export default ErrorBoundry;