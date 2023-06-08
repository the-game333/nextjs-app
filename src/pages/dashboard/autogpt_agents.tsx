import React, { useEffect, useState } from 'react';
import HelpDialog from 'components/dashboard/AutoGPT/dialog/HelpDialog';
import { ToolsDialog } from 'components/dashboard/AutoGPT/dialog/ToolsDialog';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Divider, Grid, IconButton, InputBase, Paper } from '@mui/material';

// ==============================|| Default DASHBOARD ||============================== //

const AutoGPT_Agents = () => {
    
    const [showHelpDialog, setShowHelpDialog] = React.useState(false);
    const [showToolsDialog, setShowToolsDialog] = React.useState(false);

    useEffect(() => {
        const key = "agentgpt-modal-opened-v0.2";
        const savedModalData = localStorage.getItem(key);

        setTimeout(() => {
        if (savedModalData == null) {
            setShowHelpDialog(true);
        }
        }, 1800);

        localStorage.setItem(key, JSON.stringify(true));
    }, []);

    return (
        <div>
            <HelpDialog show={showHelpDialog} close={() => setShowHelpDialog(false)} />
            <ToolsDialog show={showToolsDialog} close={() => setShowToolsDialog(false)} />
        </div>
    );
};
AutoGPT_Agents.Layout = 'authGuard';
export default AutoGPT_Agents;