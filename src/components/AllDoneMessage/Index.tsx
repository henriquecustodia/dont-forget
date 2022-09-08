import { FC } from "react";
import { SunglassesIcon } from "../../shared/components/Icons";
import { BaseProps } from "../../shared/interfaces/BaseProps";
import { useActions } from "../../shared/store/Store";

export const AllDoneMessage: FC<BaseProps> = ({ className }) => {

    const { removeAllItems } = useActions();

    return (
        <div className={`alert alert-primary text-center ${className}`}>
            <h4 className="alert-heading">Congrats!</h4>

            <div>
                <span className="me-2">You haven't forgotten anything</span>
                <SunglassesIcon />
            </div>

            <button className="mt-3 btn btn-link text-white" onClick={removeAllItems}>
                Clean up the list and start other one
            </button>
        </div>
    );
}