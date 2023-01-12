import { ReactComponent as SuccessSvg } from "../../svgs/success.svg";
import { ReactComponent as ErrorSvg } from "../../svgs/error.svg";
import styled from 'styled-components';

const BaseSvgButton = styled.button.attrs((props) => ({
    type: 'button',
    disabled: props.disabled
}))`
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    user-drag: none;
    -webkit-touch-callout: none;
    background-color: transparent;
    border: 0;
`;

const BasaeSuccessSvg = styled(SuccessSvg)`
    fill: #1b5e20;
    width: 50px;
    height: 50px;
    margin: 25px 5px 5px 5px;
`;

const BasaeErrorSvg = styled(ErrorSvg)`
    fill: #dd2c00;
    width: 50px;
    height: 50px;
    margin: 25px 5px 5px 5px;
`;

interface svgType {
    svgName: string;
    isgames?: string;
    isbigs?: number;
    isDisabled?: boolean;
    ladders?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function SvgButton(props: svgType) {
    return (
        <BaseSvgButton onClick={props.onClick} disabled={props.isDisabled || false}>
            {props.svgName === "SuccessSvg" ? <BasaeSuccessSvg /> : null}
            {props.svgName === "ErrorSvg" ? <BasaeErrorSvg /> : null}
        </BaseSvgButton>
    );
}