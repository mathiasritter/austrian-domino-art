import React, { PropsWithChildren } from "react";
import { Typography } from "@mui/material";

const ProjectTitle: React.FC<PropsWithChildren> = ({ children }) => (
    <Typography
        variant="h2"
        component="h1"
        sx={{
            color: "typography.h1.color",
            fontWeight: "bold",
        }}
    >
        {children}
    </Typography>
);

export { ProjectTitle };
