import "./loadingSpinner.css";

export const LoadingSpinner: React.FC = () => {
    return (
        <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};
