

const ErrorUi = () => {

    const reloadPage = () => {
        window.location.reload();
    }

    return (
    <div>
        <h3>Something went wrong</h3>
        <button onClick={reloadPage}>Reload Page</button>
    </div>
    
    )
}

export default ErrorUi;