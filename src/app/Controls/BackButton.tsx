import { Button } from '@fluentui/react-components';
import { ArrowLeft24Regular } from '@fluentui/react-icons';
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
    to?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onClick?: () => void;
}

const BackButton = ({ to = '/', style, children = 'Back to Home', onClick }: BackButtonProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else {
            navigate(to);
        }
    };

    return (
        <Button appearance="subtle" icon={<ArrowLeft24Regular />} onClick={handleClick} style={{ marginBottom: '20px', ...style }}>
            {children}
        </Button>
    );
};

export default BackButton;
