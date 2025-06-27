import { Button } from '@fluentui/react-components';
import { ArrowLeft24Regular } from '@fluentui/react-icons';
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
    to?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

const BackButton = ({ to = '/', style, children = 'Back to Home' }: BackButtonProps) => {
    const navigate = useNavigate();

    return (
        <Button appearance="subtle" icon={<ArrowLeft24Regular />} onClick={() => navigate(to)} style={{ marginBottom: '20px', ...style }}>
            {children}
        </Button>
    );
};

export default BackButton;
