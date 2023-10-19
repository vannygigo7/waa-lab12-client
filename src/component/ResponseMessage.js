
export default function ResponseMessage({status}){
    const renderMessage = (status) =>{
        switch (status) {
            case true:
                return <div className="alert alert-success" role="alert">Success</div>;
            case false:
                return <div className="alert alert-danger" role="alert">Failed</div>;
            default:
                return <></>;
        }
    };

    return (
        <>
            {renderMessage(status)}
        </>
    );
}