import React, { useState } from "react";
import LanguageIcon from '@mui/icons-material/Language';
import '../styles/LogEntry.css'
import { useTheme } from "@mui/material";
const LogEntry = () => {
    const theme = useTheme();
    const styles = {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.secondary,
        border: `1px solid ${theme.palette.secondary.main}`,
        padding: '10px'
    }
    return(
        <div style={styles} className="log-entry">
            <LanguageIcon sx={{margin: '20px 10px 0px 0px', color: theme.palette.text.primary}} />
            <div className="entry-details">
                <span style={{fontWeight: 900, fontSize: '1em', color: theme.palette.text.primary}}>Transaction 123</span>
                <span>1.5 sec</span>
                <span>June 30, 2024 13:00:00 UTC GET /api/v/Transaction123/HTTP/1.1 200 OK Response Size: 2.5KB</span>
            </div>
            <div className="transaction-time">
                June 30, 2024 13:00:00 UTC
            </div>
        </div>
    )
}

export default LogEntry;