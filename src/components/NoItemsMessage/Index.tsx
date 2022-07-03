import { FC } from "react";
import { Box } from "../../shared/components/Box";
import { LaughIcon } from "../../shared/components/Icons";
import { BaseProps } from "../../shared/interfaces/BaseProps";

export const NoItemsMessage: FC<BaseProps> = (props) => (
    <Box {...props}>
        <div className='text-white fw-bold'>
            Come on, don't be afraid!
        </div>

        <div className='text-white'>
            <span className="me-2">Add something you cannot forget</span>
            <LaughIcon />
        </div>
    </Box>
)