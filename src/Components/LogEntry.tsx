import LanguageIcon from '@mui/icons-material/Language';
import '../styles/LogEntry.css';
import { useTheme } from "@mui/material";

const LogEntry = (props: LogEntry) => {
    const theme = useTheme();
    const styles = {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.secondary,
        border: `1px solid ${theme.palette.secondary.main}`,
        padding: '10px',
    };

    return (
        <div style={styles} className="log-entry">
            <LanguageIcon 
                sx={{color: theme.palette.text.primary }} 
                className="language-icon"
            />
            <div className="entry-details">
                <span style={{ fontWeight: 900, fontSize: '1em', color: theme.palette.text.primary }}>
                    {props.transactionType}
                </span>
                <span className="timing">1.5 sec</span>n
                <span id="logMessage">{props.message}</span>
            </div>
            <div className="transaction-time">
                {props.transactionTime}
            </div>
        </div>
    );
};

export default LogEntry;
