import styled from "styled-components";

interface Props {
    opaque: boolean;
}

export const ListItemContainer = styled.div<Props>`
    background: ${p => p.theme.lightBlack};
    opacity: ${p => p.opaque ? 0.3 : 1}
`;
